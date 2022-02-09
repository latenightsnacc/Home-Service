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
    const [dues, setDues] = useState({
        corper_id: '',
        corper_name:'',
        corper_batch:'',
        corper_lga:'',

    });
    
    const paidDues = (e) => {
        let car = cars.find(car => car.color === "red");
        for(let i = 1; i <= list.length; i++){
            document.getElementsByTagName("tr")[i].id === `dues_${i}` ? list.map((corper) => {
                setDues({
                    corper_id: corper[i].id,
                    corper_name: corper[i].name,
                    corper_batch: corper[i].batch,
                    corper_lga: corper[i].lga,
                    [e.target.name]: e.target.value
                })
            }) : list.map((corper) => {
                setDues({
                    corper_id: corper.id,
                    corper_name: corper.name,
                    corper_batch: corper.batch,
                    corper_lga: corper.lga,
                    [e.target.name]: e.target.value
                })
            });
        }
        
        
        for(let i = 1; i <= list.length; i++) {
            const tr = document.getElementById(i);
            if(tr === document.getElementsByTagName("tr")[i].id) {
                setDues({
                    ...dues,
                    [e.target.name] : [e.target.value]
                })
            }
        }
        
        
        console.log(dues);
    };
        // let t;
        // let tr;
        // for(let i = 0; i <= list.length; ++i) {
            
        //     if ([e.target.checked] === true) {
        //         tr = document.getElementsByTagName('tr')[i].id;
        //         t = document.getElementsByTagName('td')[i].innerText;
        //     }
           
        // } 
        // console.log(`id: ${tr}`);
        // console.log(t);
    const [newMonthlyDues, setNewMonthlyDues] = useState({
        type: 'monthly dues',
        month: '',
        id: '',
        name: '',
        statecode:'',
        batch: '',
        lga: '',
        dues: ''
      })
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


    

    
    const v = [];
  const getDetails = (e) => {
      
      const rows = list.length;
    console.log(`rows: ${rows}`)
    for(let i = 0; i <= list.length; ++i) {
        v.push(document.getElementsByTagName('tr')[i].innerText);
    } 
    //   document.getElementById('form').onclick = function() {
    //     alert(document.getElementsByTagName('tr')[4].id);
        
    // }
     
         
    // setNewMonthlyDues({
    //   ...newMonthlyDues,
    // type: 'monthly dues',
    // id: ''
    //   name: document.getElementById("name").value,
    //   statecode: document.getElementById("statecode").value,
    //   batch: document.getElementById("batch").value,
    //   lga: document.getElementById("lga").value
    // [e.target.name]: e.target.value
    // })
    
  }
  const createMonthlyDues = (e) => {
    e.preventDefault();
    console.log(dues)
    try {
    //   Axios.post("http://localhost:3001/new", {
    //     type: newMonthlyDues.type,
    //     date: newMonthlyDues.date,
    //     start: newMonthlyDues.start,
    //     end: newMonthlyDues.end,
    //     venue: newMonthlyDues.venue,
    //     topic: newMonthlyDues.topic,
    //     minutes: newMonthlyDues.minutes
    //   }).then( (Response) => {
    //     console.log(Response);
    //   })
    } catch(e) {
      console.log(e);
    }
  }

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
                                <h1 className="font-semibold text-3xl ml-5 ">Monthly Dues </h1>
                                
                                
                            </div>
                            <div>
                                    <label className="mr-2" for={"date"}>Month: </label>
                                    <input
                                    type={"month"}
                                    id={"month"}
                                    name={"month"} 
                                    className="form-input border-0 focus:border-white focus:border-0 py-2 px-3 focus:outline-none"
                                    onChange={getDetails}
                                    />  
                                </div>
                            
                        </div>
                        <Spacer />
                        <div className="flex flex-row items-center h-10">
                            <div className="flex">
                                <button  type="submit" className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                                    <span><i className="far fa-edit"></i></span><span className="hidden md: ml-1 md:inline-block">Edit</span>
                                </button>
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
                                            
                                            <input 
                                                type={"text"} 
                                                name={"id"}
                                                id={"id"}
                                                value={val.id}
                                                className="text-xs bg-transparent md:text-sm border-0 focus:outline-none  w-8"
                                                // onLoad={getDetails}
                                                readOnly 
                                                />
                                        </td>
                                        <td className="hidden md:table-cell">
                                        
                                            <input 
                                                type="text" 
                                                name="name"
                                                id="name"
                                                value={val.name}
                                                className="text-xs bg-transparent md:text-sm border-0 focus:outline-none  w-full"
                                                // onLoad={getDetails}
                                                readOnly 
                                                /> 
                                        </td>
                                        <td className="">
                                            <input 
                                                type="text" 
                                                name="statecode"
                                                id="statecode"
                                                value={val.state_code}
                                                className="text-xs bg-transparent md:text-sm border-0 focus:outline-none  w-28"
                                                // onLoad={getDetails}
                                                readOnly 
                                                />
                                        </td>
                                        <td className="text-left">
                                            <input 
                                                type="text" 
                                                name="batch"
                                                id="batch"
                                                value={val.batch}
                                                className="text-xs bg-transparent md:text-sm border-0 focus:outline-none w-20"
                                                // onLoad={getDetails}
                                                readOnly 
                                                />
                                        </td>
                                        <td className="text-left hidden md:table-cell">
                                            <input 
                                                type="text"
                                                name={"lga"}
                                                id="lga"
                                                value={val.lga} 
                                                className="form-input text-xs bg-transparent md:text-sm border-0 focus:outline-none w-full"
                                                // onLoad={getDetails} 
                                                />
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