import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import Footer from "../../components/Footer";

const RecordAttendance = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [attendance, setAttendance] = useState([]);
    const [data, setData] = useState({
        attendance_date: '',
        corper_id: '',
        corper_name: '',
        corper_statecode: '',
        corper_batch:'',
        corper_attendance: '',
        corper_comment: ''
        
    })
    const [date, setDate] = useState([]);
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
    if (loading) return 'Loading';
    if (error) return 'error';

    
      const getDetails = (e) => {
        setAttendance({
          ...attendance,
          [e.target.name]: e.target.value
        })
        setDate({
          ...attendance,
          [e.target.name]: e.target.value
        })
      }
      
    //   const getValues = (e) => {
    //     e.preventDefault();
    //       setData({
    //           attendance_date: e.target.date.value,
    //           corper_id: e.target.id.value,
    //           corper_name: e.target.name.value,
    //           corper_batch: e.target.batch.value,
    //           corper_statecode: e.target.statecode.value,
    //           corper_attendance: attendance[0],
    //           corper_comment: e.target.comment.value
    //       })
    //       console.log(`Values: ${data}`);
          
    //   }
      var rr = [];
      const recordAttendance = (e) => {
        e.preventDefault();
        console.log("New Attendance Recorded.");
        // rr.push(date);
        console.log(attendance);
        const s = document.getElementsByTagName('input');
        let n = ["date","id", "name", "statecode", "batch", "attendance", "comment"];
        for(var i = 0;i < s.length;i++){
            let a = {};
            if(i % 9 === 0){
                let l = 0;
                for(var k = i;k <= i + 8 && k !== s.length;k++){
                    let f = document.getElementsByTagName('input')[k];
                    if(l === 4 || i === 6){
                        if(i === 4) {
                            a[n[l]] = attendance[f.getAttribute('name')];
                        } else {
                            a[n[l]] = date[f.getAttribute('name')];
                        }
                        
                    }else if(f.getAttribute('type') !== 'radio'){
                        if(f.getAttribute('name') === "comment"){
                            a['comment'] = f.value;
                        }else{
                            a[n[l]] = f.value;
                        }
                    }
                    l++;
                }
                // a[0] = `date: ${date.date}`;
                rr.push(a);
            }
        }
        console.log(rr);
        try{
            Axios.post("http://localhost:3001/recordattendance", {
                id: rr.id,
                name: rr.name,
                statecode: rr.statecode,
                attendance: rr.attendance,
                batch: rr.batch,
                comment: rr.comment,
                date: rr.date
            }).then( () => {
                console.log("Attendance Recorded.");
            })
        } catch(e) {
            console.log(e);
        }
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        const date = document.getElementById("date").value;
        console.log(`date: ${date}`);
        const id = do
        const attendance = document.getElementById(`attendance_${id}`).value;
      }
      
    return(
        <>
            <Navbar />
            <Spacer />
            <div className="w-full md:w-5/6 md:mx-auto">
                <form onSubmit={handleSubmit} class="er">
                    <div className="container text-gray-800">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row h-full items-center">
                                <Link to={"/dashboard/secretarygeneral/"}>
                                    <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                                        <i className="fas fa-angle-left"></i></span>
                                </Link>
                                <h1 className="font-semibold text-3xl ml-5 ">Record Attendance</h1>
                                <div>
                                    <label className="mr-2" for={"date"}>Date: </label>
                                    <input
                                    type={"date"}
                                    id={"date"}
                                    name={"date"} 
                                    value={date.date}
                                    className="border-1 rounded py-2 px-3 focus:outline-none"
                                    onChange={getDetails}
                                    />  
                                </div>
                            </div>
                            <div className="flex">
                            <button  type="submit" className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                                <span><i className="fas fa-save"></i></span><span className="hidden md: ml-1 md:inline-block">Save</span>
                            </button>
                            </div>
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
                                        <th scope="col" className="text-left hidden md:table-cell">Batch</th>
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
                                        <th scope="col" className="text-left">Comment</th>
                                    </tr>
                                </thead>
                                <tbody className="font-light">
                                {list.map(val => {
                                return (
                                    <tr className='text-xs hover:bg-gray-50 hover:text-green-500' key={val.id}>
                                        <td className="text-left ">
                                            <input 
                                                type={"text"} 
                                                name={"id"}
                                                id={"id"}
                                                value={val.id}
                                                className="text-xs bg-transparent md:text-sm border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-8"
                                                                                                readOnly 
                                                />
                                        </td>
                                        <td className="hidden md:table-cell">
                                            <input 
                                                type="text" 
                                                name="name"
                                                id="name"
                                                value={val.name}
                                                className="text-xs bg-transparent md:text-sm border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-full"
                                                readOnly 
                                                />
                                        </td>
                                        <td className="bg-red-500">
                                            <input 
                                                type="text" 
                                                name="statecode"
                                                id="statecode"
                                                value={val.state_code}
                                                className="text-xs bg-transparent md:text-sm border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-28"
                                                readOnly 
                                                />
                                        </td>
                                        <td className="hidden md:table-cell">
                                            <input 
                                                type="text" 
                                                name="batch"
                                                id="batch"
                                                value={val.batch}
                                                className="text-xs bg-transparent md:text-sm border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-20"
                                                readOnly 
                                                />
                                        </td>
                                        <td className="text-center ">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="present"
                                                value={"present"} 
                                                className="mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-green-400"
                                                onChange={getDetails} />
                                        </td>
                                        <td className="text-center">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="late"
                                                value={"late"} 
                                                className="mt-2 hover:text-yellow-400 focus:text-yellow-400 focus:no-outline checked:text-yellow-400 checked:border-0 checked:border-yellow-400"
                                                onChange={getDetails} />
                                        </td>
                                        <td className="text-center">
                                            <input 
                                                type="radio"
                                                name={`attendance_${val.id}`}
                                                id="absent"
                                                value={"absent"} 
                                                className="mt-2 hover:text-red-400 focus:text-red-400 focus:no-outline checked:text-red-400 checked:border-0 checked:border-red-400"
                                                onChange={getDetails} />
                                        </td>
                                        <td className="inline-block flex flex-row items-center justify-center text-sm">
                                            <input 
                                            type="text" 
                                            name="comment"
                                            id="comment"
                                            className="text-xs md:text-sm border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-full p-2"
                                            onChange={getDetails} />
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

export default RecordAttendance;