import {Link}  from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NewMonthlyDues = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [dues, setDues] = useState([]);
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [date, setDate] = useState({
        date_recorded:new Date(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });
    const [newCollection, setNewCollection] = useState([]);

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
        
    })
    
    const getDate =() => {
        setDate({
            date_recorded:new Date().toLocaleDateString(),
            month: months[new Date().getMonth()],
            year: new Date().getFullYear()
        })
        
    }
    const getCollection =(e) => {
        setNewCollection({
            ...newCollection,
            [e.target.name]: e.target.value
        })
    };
    
    const createMonthlyDues = (e) => {
        e.preventDefault();
        console.log(date);
        const duesCollected = dues;
        const duesKeys =Object.keys(duesCollected);
        const duesValues = Object.values(duesCollected);
        const rr = [];
        
        const returnValue = (arr, i) => {
            return arr[i];
        }
        duesKeys.forEach(function (f) {
            let count = 0;
            list.map(function(c) {
                let l = c.id;
                if(f.endsWith(l)){
                    rr.push({dues_for: date.month, year:date.year,collection: newCollection, dues:returnValue(duesValues, count),id:c.id,name:c.name,statecode:c.state_code,batch: c.batch,lga:c.lga}); 
                } else {
                console.log('end');  
                }
                count++;
                return rr;  
            });
        })
        
        try {
            Axios.post("http://localhost:3001/newmonthlydues", {
                title: `${newCollection}_${date.month}_${date.year}`,
                ...rr
            }).then( (res) => {
                console.log(res);
            })
        }catch(e) {
            console.log(e);
        }
    };
    

    if (loading) return 'Loading';
    if (error) return 'error';
    return(
        <>
        <Navbar />
        <Spacer />
        <div className="w-full md:w-5/6 md:mx-auto">
                <form onSubmit={createMonthlyDues} class="er" id="form">
                    <div className="container text-gray-800">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row h-full items-center">
                                <Link to={"/dashboard/secretarygeneral/"}>
                                    <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                                        <i className="fas fa-angle-left"></i></span>
                                </Link>
                                <div className="font-semibold text-2xl ml-5 ">New Collection</div>
                                
                            </div>
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
                            
                        </div>
                        <Spacer />
                        <div className="flex flex-row items-center justify-between">
                            <div  className="flex flex-row items-center">
                                    <div className="flex flex-row items-center">
                                        <input
                                            type={"radio"}
                                            id="monthly_dues"
                                            name="collection" 
                                            value={"monthly_dues"}
                                            className="border-1 rounded focus:outline-none"
                                            onChange={getCollection}
                                        />  
                                        <label className="ml-2" for={"meeting"}>Monthly Dues</label>
                                    </div>
                                    <div className="flex flex-row items-center mx-3">
                                        <input
                                            type={"radio"}
                                            id="project_dues"
                                            name="collection" 
                                            value={"project_dues"}
                                            className="border-1 rounded focus:outline-none"
                                            onChange={getCollection}
                                        />  
                                        <label className="ml-2" for={"meeting"}>Project Dues</label>
                                    </div>
                                    <div className="flex flex-row items-center ml-2">
                                        <input
                                            type={"radio"}
                                            id="event"
                                            name="collection" 
                                            value={"event"}
                                            className="border-1 rounded focus:outline-none"
                                            onChange={getCollection}
                                        /> 
                                        <label className="ml-2" for={"event"}>Event</label>
                                    </div> 
                                </div>
                            <button  type="submit" className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                                <span><i className="fas fa-save"></i></span><span className="hidden md: ml-1 md:inline-block">Save</span>
                            </button>
                        </div>
                    </div>
                    <Spacer />
                    <div className="container">
                        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                                <thead>
                                    <tr className="h-8">
                                        <th scope="col" className="text-left w-auto">No.</th>
                                        <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                        <th scope="col" className="text-left"> Statecode</th>
                                        <th scope="col" className="text-left ">Batch</th>
                                        <th scope="col" className="text-left hidden md:table-cell">L.G.A</th>
                                        <th scope="col" className="text-left ">Paid</th>
                                        <th scope="col" className="text-left ">Unpaid</th>
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
                                        <td className="text-left hidden md:table-cell">
                                        {val.lga}
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
                                        
                                    </tr>
                                )
                                
                            })}                               
                                </tbody>
                            </table>  
                    </div>
                </form>
            </div>
            <Footer />
    </>
    )
    
}

export default NewMonthlyDues;