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
import ButtonLg from "../../components/ButtonLg";


const NewProjectDues = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [attendance, setAttendance] = useState([]);
    const [comments, setComments] = useState([]);
    const [attedanceFor, setAttendanceFor] = useState('');
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
const getAttendanceFor = (e) => {
    setAttendanceFor(e.target.value);
}
    const getAttendance = (e) => {
        setAttendance({
        ...attendance,
        [e.target.name]: e.target.value
        })
    }
    const getDate =(e) => {
        let a = e.target.value;
        setDate({
            date_recorded:new Date(a).toLocaleDateString(),
            month: months[new Date(a).getMonth()],
            year: new Date(a).getFullYear()
        })
        
    }
    const getBatch = (e) => {
        setProjectBatch(e.target.value);
    }
    

    const getComment =(e) => {
        setComments({
            ...comments,
            [e.target.name]: e.target.value
        })
        
    };
    const rr = [];
    const trySending = (e) => {
        e.preventDefault();
        const attendanceRecorded = attendance;
        const commentRecorded = comments;
        const attendanceKeys =Object.keys(attendanceRecorded);
        let d; let p;
        attendanceKeys.forEach(function (f) {
            list.map(function(c) {
                let l = c.id;
                d = `dues_${l}`;
                p = `amount_${l}`;
                if(f.endsWith(l)){
                    rr.push({
                        collection: 'Project Dues',
                        project_batch: projectBatch, 
                        newCollection_dues:attendanceRecorded[d],
                        amt_paid:commentRecorded[p] === undefined ? "0": commentRecorded[p],
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
            Axios.post("http://localhost:3001/newAttendance", {
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
                excoPageLabel={"Project Fee Collection List"}
                displayLevel3={'inline-block'}
                excoFinalPage={"newprojectdues"}
                excoFinalPageLabel={"New Project Collection"}
                activeTextColor1={''}
                activeTextColor2={'text-green-500'} 
                />  
            <Spacer />
            <PageTitle title={"New Project Collection"} />
            <form onSubmit={trySending} className="">
                <Container>
                    <div className="w-full flex flex-row items-center my-3 justify-between">
                    <div className="flex border-1 border-success py-2 px-3 rounded flex-row items-center text-xs">
                            <div className="flex flex-row items-center">
                                <input
                                    type={"radio"}
                                    id="meeting"
                                    name="type" 
                                    value={"Meeting"}
                                    className="border-1 rounded focus:outline-0"
                                    onChange={getAttendanceFor}
                                />  
                                <label className="ml-2" for={"meeting"}>Meeting </label>
                            </div>
                            <div className="flex flex-row items-center ml-2">
                                <input
                                    type={"radio"}
                                    id="event"
                                    name="type" 
                                    value={"Event"}
                                    className="border-1 rounded focus:outline-0"
                                    onChange={getAttendanceFor}
                                /> 
                                <label className="ml-2" for={"event"}>Event</label>
                            </div>            
                        </div>
                        <input
                            type={"date"}
                            id={"date"}
                            name={"date"} 
                            className="form-input h-8 w-full md:w-auto text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3 focus:outline-none"
                            onChange={getDate}
                            />                  
                    </div>
                    <table className="table table-sm table-bordered border-success text-xs md:text-sm bg-white rounded">
                        <thead>
                            <tr>
                                <th scope="col" className="text-left">No.</th>
                                <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                <th scope="col" className="text-left"> Statecode</th>
                                <th scope="col" className="text-left ">Batch</th>
                                <th scope="col" className="text-left">
                                            <div className="flex flex-row justify-center items-center text-right">
                                                <span className="block w-3 h-3 rounded-full bg-green-400"></span><span className="ml-2 capitalize hidden md:inline">present</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="text-left">
                                            <div className="flex flex-row justify-center items-center text-right">
                                                <span className="block w-3 h-3 rounded-full bg-yellow-300"></span><span className="ml-2 capitalize hidden md:inline">late</span>
                                            </div>
                                        </th>
                                        <th scope="col" className="text-left">
                                            <div className="flex flex-row justify-center items-center">
                                                <span className="block w-3 h-3 rounded-full bg-red-300"></span><span className="ml-2 capitalize hidden md:inline">absent</span>
                                            </div></th>
                                <th scope="col" className="text-left w-auto">Comment</th>
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
                                    
                                    <td className="text-center ">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="present"
                                                value={"present"} 
                                                className="mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-green-400"
                                                onChange={getAttendance} />
                                        </td>
                                        <td className="text-center">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="late"
                                                value={"late"} 
                                                className="mt-2 hover:text-yellow-400 focus:text-yellow-400 focus:no-outline checked:text-yellow-400 checked:border-0 checked:border-yellow-400"
                                                onChange={getAttendance} />
                                        </td>
                                        <td className="text-center">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="absent"
                                                value={"absent"} 
                                                className="mt-2 hover:text-red-400 focus:text-red-400 focus:no-outline checked:text-red-400 checked:border-0 checked:border-red-400"
                                                onChange={getAttendance} />
                                        </td>
                                    <td className="text-left">
                                        <input 
                                            type="text"
                                            name={`comment_${val.id}`}
                                            id={`comment_${val.id}`} 
                                            className="form-input w-auto h-7 p-2 font-medium rounded border-0 focus:border-0 focus:ring-0 focus:outline-0 "
                                            onChange={getComment}
                                            />
                                    </td>
                                    
                                </tr>
                            )
                            
                        })}                               
                        </tbody>
                    </table>
                    <div className="flex w-full  md:justify-end">
                        <div className="w-full md:w-28">
                        <ButtonLg label={"Save"} icon={"fas fa-save"} />
                        </div>
                        
                    </div>
                </Container>
            </form>
            
        </Layout>
        <Spacer />
        <Footer />
    </>
    )
    
}

export default NewProjectDues;