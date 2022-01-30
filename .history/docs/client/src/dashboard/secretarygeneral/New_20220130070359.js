import {useState} from "react";
import Axios from "axios";



const New = () => {
  const [newNote, setNewNote] = useState({
    type: '',
    date: '',
    start: '',
    end: '',
    venue: '',
    topic: '',
    minutes: ''
  })
  const getDetails = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value
    })
  }
  const createNote = (e) => {
    e.preventDefault();
    try {
      Axios.post("http://localhost:3001/new", {
        type: newNote.type,
        date: newNote.date,
        start: newNote.start,
        end: newNote.end,
        venue: newNote.venue,
        topic: newNote.topic,
        minutes: newNote.minutes
      }).then( (Response) => {
        console.log(Response);
      })
    } catch(e) {
      console.log(e);
    }
  }
  return (
    <>
        <Navbar />
        <SpacerSm />
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row h-full items-center">
                    <Link to={"/dashboard/secretarygeneral/notes"}>
                        <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                            <i className="fas fa-angle-left"></i></span>
                    </Link> 
                    <h1 className="font-semibold text-3xl ml-5">Create New</h1>
                </div>
                <Spacer />                
            </div>
            <Spacer /> 
            
    </>
    
  );
}

export default New;
