import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import BreadCrumbs from "../../components/BreadCrumbs";


const NewProjectDues = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [dues, setDues] = useState([]);
    const [fee, setFee] = useState([]);
    const [projectBatch, setProjectBatch] = useState('');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [date, setDate] = useState({
        date_recorded: '',
        month: '',
        year: ''
    });
    useEffect(() => {
        
        Axios.get("http://localhost:3001/members")
        .then(Response => {
            setList(Response.data)
        })
        .catch (error => {
            console.error("Error fetching data:", error);
            setError(error);
        })
        .finally( () => setLoading(false));
    
}, [])
    const paidDues = (e) => {
        setDues({
            ...dues,
            [e.target.name]: e.target.value
        })
    };
    
    const getBatch = (e) => {
        setProjectBatch(e.target.value);
    }
    const getDate =(e) => {
        let a = e.target.value;
        setDate({
            date_recorded:new Date(a).toLocaleDateString(),
            month: months[new Date(a).getMonth()],
            year: new Date(a).getFullYear()
        })
        
    }

    const getAmount =(e) => {
        setFee({
            ...fee,
            [e.target.name]: e.target.value
        })
        
    };
    const rr = [];
    const trySending = (e) => {
        e.preventDefault();
        const duesCollected = dues;
        const amountCollected = fee;
        const duesKeys =Object.keys(duesCollected);
        let d; let p;
        duesKeys.forEach(function (f) {
            list.map(function(c) {
                let l = c.id;
                d = `dues_${l}`;
                p = `amount_${l}`;
                if(f.endsWith(l)){
                    rr.push({
                        collection: 'Project Dues',
                        project_batch: projectBatch, 
                        newCollection_dues:duesCollected[d],
                        amt_paid:amountCollected[p] === undefined ? "0": amountCollected[p],
                        id:c.id,
                        name:c.name,
                        statecode:c.state_code,
                        batch: c.batch,
                        lga:c.lga,
                        cds_group:c.cds_group
                    }); 
                   
                } else {
                return 'end';  
                }
                return rr;  
            });
        })
        console.log(rr);
        try{
            Axios.post("http://localhost:3001/monthlyDues", {
                ...rr
            }).then( r => {
                return r;
            })
        }catch(e){
            console.log(e);
        } 
    }
    if (loading) return 'Loading';
    if (error) return 'error';
    return(
        <>
        <Navbar />
        <Spacer />
        <Layout>
            <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                displayLevel1={'inline-block'}
                excoDashboard={'treasurer'}
                excoDashboardLabel={'Treasurer Dashboard'} 
                displayLevel2={'inline-block'}
                excoPage={"project"}
                excoPageLabel={"Project List"}
                displayLevel3={'inline-block'}
                excoFinalPage={"newprojectdues"}
                excoFinalPageLabel={"New Project Dues"}
                activeTextColor1={''}
                activeTextColor2={'text-green-500'} 
                />  
            <Spacer />
            <form onSubmit={trySending} className="">
                <Container>
                    <div className="w-full flex flex-row items-center justify-between">
                        <PageTitle title={"New Project Dues"} />
                        <input
                            type={"text"}
                            id={'project_batch'}
                            name={"project_batch"} 
                            placeholder={'Batch A 2021'}
                            className="form-input text-xs w-28 font-medium md:text-sm p-2 rounded border-success border-1 focus:border-1 focus:ring-0 focus:outline-0"
                            onChange={''}
                        />
                    </div>
                </Container>
                
                
                <Container>
                
                    <div className="w-full flex flex-row items-center my-3 justify-between">
                        <input
                            type={"date"}
                            id={"date"}
                            name={"date"} 
                            className="form-input h-8 text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3 focus:outline-0"
                            onChange={getDate}
                            />
                        
                         
                        <Button label={"Save"} icon={"fas fa-save"} />
                    </div>
                    <table className="table table-sm table-bordered border-success text-xs md:text-sm bg-white rounded">
                        <thead>
                            <tr>
                                <th scope="col" className="text-left w-auto">No.</th>
                                <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                <th scope="col" className="text-left"> Statecode</th>
                                <th scope="col" className="text-left ">Batch</th>
                                <th scope="col" className="text-center ">Paid</th>
                                <th scope="col" className="text-center">Unpaid</th>
                                <th scope="col" className="text-left ">Amount Paid (₦)</th>
                            </tr>
                        </thead>
                            <tbody className="font-light">
                            {list.map(val => {
                            return (
                                <tr className='text-xs md:text-sm font-medium hover:bg-white hover:text-green-500' id={val.id} key={val.id}>
                                    <td className="text-left " >
                                    {val.id}
                                    </td>
                                    <td className="hidden md:table-cell">
                                    {val.name}
                                    </td>
                                    <td className="">
                                    {val.state_code}
                                    </td>
                                    <td className="text-left">
                                    {val.batch}
                                    </td>
                                    
                                    <td className="text-center">
                                        <input 
                                            type="radio"
                                            name={`dues_${val.id}`}
                                            id={"paid"}
                                            value={"paid"} 
                                            className="form-checkbox hover:text-green-400 focus:text-green-400 outline-0 focus:outline-0 checked:text-green-400 focus:border-0"
                                            onChange={paidDues}
                                            />
                                    </td>
                                    <td className="text-center">
                                        <input 
                                            type="radio"
                                            name={`dues_${val.id}`}
                                            id={"not-paid"}
                                            value={"not-paid"} 
                                            className="form-checkbox hover:text-green-400 focus:text-green-400 outline-0 focus:outline-0 checked:text-green-400 checked:border-0"
                                            onChange={paidDues}
                                            />
                                    </td>
                                    <td className="text-left">
                                        <input 
                                            type="text"
                                            name={`amount_${val.id}`}
                                            id={`amount_${val.id}`} 
                                            className="form-input w-14 h-7 p-2 font-medium rounded border-0 focus:border-0 focus:ring-0 focus:outline-0 "
                                            onChange={getAmount}
                                            />
                                    </td>
                                    
                                </tr>
                            )
                            
                        })}                               
                        </tbody>
                    </table>
                    </Container>
                </form>
            
        </Layout>
        <Spacer />
        <Footer />
    </>
    )
    
}

export default NewProjectDues;