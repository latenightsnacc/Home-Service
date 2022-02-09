import {Link}  from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NewCollection = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();

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
    setNewCollection({
      ...newCollection,
      [e.target.name]: e.target.value
    })
  }
  const createCollection = (e) => {
    e.preventDefault();
    try {
      Axios.post("http://localhost:3001/new", {
        type: newCollection.type,
        date: newCollection.date,
        start: newCollection.start,
        end: newCollection.end,
        venue: newCollection.venue,
        topic: newCollection.topic,
        minutes: newCollection.minutes
      }).then( (Response) => {
        console.log(Response);
      })
    } catch(e) {
      console.log(e);
    }
  }
    return(
        <>
        <Navbar />
        <Spacer />
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row h-full items-center">
                    <Link to={"/dashboard/secretarygeneral/notes"}>
                        <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                            <i className="fas fa-angle-left"></i></span>
                    </Link> 
                    <h1 className="font-semibold text-3xl ml-5">New Collection</h1>
                </div>
                <Spacer />                
            </div>
            <Spacer /> 
            <div className="m-auto md:w-4/6 w-full">
    <form onSubmit={createCollection} className="text-sm text-gray-700" >
    <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                    <thead>
                            <tr class="h-8">
                                <th scope="col" class="text-left w-auto">No.</th>
                                <th scope="col" class="text-left w-auto">Profile</th>
                                <th scope="col" class="text-left hidden md:table-cell">Name</th>
                                <th scope="col" class="text-left">Statecode</th>
                                <th scope="col" class="text-left">Batch</th>
                                <th scope="col" class="text-left  hidden md:table-cell">Role</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> L.G.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> P.P.A</th>
                                <th scope="col" class="text-left  hidden md:table-cell"> Contact</th>
                                
                            </tr>
                    </thead>
                    <tbody>
                        {list.map(val => {
                            return (
                                <tr className='hover:bg-white hover:text-green-500' key={val.id}>
                                    <td>{val.id}</td>
                                    <td>
                                        <img src={val.profile_pic} alt={val.name} /> 
                                    </td>
                                    <td>{val.name}</td>
                                    <td>{val.state_code}</td>
                                    <td>{val.batch}</td>
                                    <td>Member</td>
                                    <td>{val.lga}</td>
                                    <td>{val.ppa}</td>
                                    <td>{val.phone}</td>
                                </tr>
                            )
                            
                        })}
                    
                    </tbody>
                </table>

        <button type="submit" className="border-1 text-gray-400 text-center rounded w-full py-2 px-3 my-2 focus:outline-none hover:bg-green-500 hover:text-white hover:shadow-xl">Save</button>
        

    </form>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default NewCollection;