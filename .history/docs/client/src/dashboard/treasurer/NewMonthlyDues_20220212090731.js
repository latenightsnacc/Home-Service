import {Link}  from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";

const NewMonthlyDues = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [dues, setDues] = useState([]);
    const [fee, setFee] = useState([]);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [date, setDate] = useState({
        date_recorded:new Date(),
        month: months[new Date().getMonth()],
        year: new Date().getFullYear()
    });
    const [newCollection, setNewCollection] = useState('');

    const paidDues = (e) => {
        setDues({
            ...dues,
            [e.target.name]: e.target.value
        })
    };
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
    
    const getDate =() => {
        setDate({
            date_recorded:new Date().toLocaleDateString(),
            month: months[new Date().getMonth()],
            year: new Date().getFullYear()
        })
        
    }
    const getCollection =(e) => {
        setNewCollection(e.target.value)
    };
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
                        collection_date: date.date_recorded,
                        dues_for: date.month,
                        year:date.year,
                        collection: newCollection, 
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
            Axios.post("http://localhost:3001/try", {
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
            <PageTitle title={"New Monthly Dues"} />
            <Container>
            <form onSubmit={trySending}>
                
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <label className="mr-2" for={"date"}>Date: </label>
                        <input
                        type={"date"}
                        id={"date"}
                        name={"date"} 
                        className="form-input border-0 focus:border-white focus:border-0 py-2 px-3 focus:outline-none"
                        onChange={getDate}
                        />  
                    </div>
                    <button  type="submit" className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                        <span><i className="fas fa-save"></i></span><span className="hidden md: ml-1 md:inline-block">Save</span>
                    </button>
                </div>
                   
                    <Spacer />
                    <Container>
                        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                                <thead>
                                    <tr className="h-8">
                                        <th scope="col" className="text-left w-auto">No.</th>
                                        <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                        <th scope="col" className="text-left"> Statecode</th>
                                        <th scope="col" className="text-left ">Batch</th>
                                        <th scope="col" className="text-left ">Paid</th>
                                        <th scope="col" className="text-left ">Unpaid</th>
                                        <th scope="col" className="text-left ">Amount Paid (₦)</th>
                                    </tr>
                                </thead>
                                <tbody className="font-light">
                                {list.map(val => {
                                return (
                                    <tr className='text-xs hover:bg-gray-50 hover:text-green-500' id={val.id} key={val.id}>
                                        <td className="text-left" >
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
                                                className="form-checkbox mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-yellow-400 "
                                                onChange={paidDues}
                                                />
                                        </td>
                                        <td className="text-center">
                                            <input 
                                                type="radio"
                                                name={`dues_${val.id}`}
                                                id={"not-paid"}
                                                value={"not-paid"} 
                                                className="form-checkbox mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-yellow-400 "
                                                onChange={paidDues}
                                                />
                                        </td>
                                        <td className="text-left">
                                            <input 
                                                type="text"
                                                name={`amount_${val.id}`}
                                                id={`amount_${val.id}`} 
                                                className="form-input p-2 rounded border-0 focus:border-0 focus:ring-0 focus:no-outline "
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
            </Container>
        </Layout>
        <div className="w-full md:w-5/6 md:mx-auto">
                
            </div>
            <Footer />
    </>
    )
    
}

export default NewMonthlyDues;