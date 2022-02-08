import {Link}  from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const New = () => {
  const [newCollection, setNewCollection] = useState({
    type: '',
    date: '',
    start: '',
    end: '',
    venue: '',
    topic: '',
    minutes: ''
  })
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
    <div className="m-auto  w-full flex flex-row items-center justify-between">
        <div className="flex border-1 py-2 px-3 rounded flex-row items-center text-sm">
            <div className="flex flex-row items-center">
                <input
                    type={"radio"}
                    id="m"
                    name="type" 
                    value={"m"}
                    className="border-1 rounded py-2 px-3 focus:outline-none"
                    onChange={getDetails}
                />  
                <label className="ml-2" for={"m"}>M </label>
            </div>
            <div className="flex flex-row items-center ml-2">
                <input
                    type={"radio"}
                    id="event"
                    name="type" 
                    value={"event"}
                    className="border-1 rounded py-2 px-3 focus:outline-none"
                    onChange={getDetails}
                /> 
                <label className="ml-2" for={"event"}>Event</label>
            </div>            
        </div>
            <div>
                <label className="mr-2" for={"date"}>Date: </label>
                <input
                type={"date"}
                id="date"
                name="date" 
                value={newCollection.date}
                className="border-1 rounded py-2 px-3 focus:outline-none"
                onChange={getDetails}
                />  
            </div>
         
    </div>
        <div className="flex flex-row items-center justify-between ">
            <div>
                <label className="mr-2" for={"startTime"}>Start: </label>
                <input 
                type="time"
                name="start"
                id="start" 
                value={newCollection.start}
                className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none"
                onChange={getDetails} />
            </div>
            <div>
                <label className="mr-2" for={"startTime"}>End: </label>
                <input 
                type="time"
                name="end"
                id="end" 
                value={newCollection.end}
                className={`border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none`}
                onChange={getDetails}
                 />
            </div>
            
            
        </div>
            <input 
            type="text"
            name="venue"
            id="venue"
            placeholder="Venue" 
            className="border-1 rounded w-full py-2 px-3 my-2 focus:outline-none"
            value={newCollection.venue}
            onChange={getDetails} />
        
            <input 
            type="text"
            name="topic"
            id="topic"
            placeholder="Topic" 
            className="border-1 rounded w-full py-2 px-3 my-2 focus:outline-none"
            value={newCollection.topic}
            onChange={getDetails} />

            <textarea 
            placeholder="Minutes..."
            name="minutes"
            id="minutes"
            type="text"
            className="border-1 rounded w-full h-96 p-3 focus:outline-none"
            value={newCollection.minutes}
            onChange={getDetails}></textarea>

        {/* <SpacerSm /> */}

        <button type="submit" className="border-1 text-gray-400 text-center rounded w-full py-2 px-3 my-2 focus:outline-none hover:bg-green-500 hover:text-white hover:shadow-xl">Save</button>
        

    </form>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default New;