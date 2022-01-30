import {useState} from "react";
import Axios from "axios";



function App() {
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
    console.log("Saved");
    console.log(newNote);
    try {

    } catch 
  }
  return (
    <div className="m-auto md:w-4/6 w-full">
                <form onSubmit={createNote} className="text-sm text-gray-700" >
                <div className="m-auto  w-full flex flex-row items-center justify-between">
                    <div className="flex border-1 py-2 px-3 rounded flex-row items-center text-sm">
                        {/* <div class="no-underline rounded py-2 px-3 bg-green-100 cursor-pointer hover:bg-green-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">M</span><span class="hidden md:inline">Meeting</span></div> */}
                        <div className="flex flex-row items-center">
                            
                            <input
                                type={"radio"}
                                id="meeting"
                                name="type" 
                                value={"meeting"}
                                className="border-1 rounded py-2 px-3 focus:outline-none"
                                onChange={getDetails}
                            />  
                            <label className="ml-2" for={"meeting"}>Meeting </label>
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
                        
                        {/* <div class="ml-2 no-underline rounded py-2 px-3 bg-gray-100 cursor-pointer hover:bg-yellow-100 text-gray-800 hover:text-gray-800"><span class="md:hidden">E</span><span class="hidden md:inline">Event</span></div> */}
                    </div>
                    <div>
                            <label className="mr-2" for={"date"}>Date: </label>
                            <input
                            type={"date"}
                            id="date"
                            name="date" 
                            value={newNote.date}
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
                            value={newNote.start}
                            className="border-1 rounded w-32 py-2 px-3 my-2 focus:outline-none"
                            onChange={getDetails} />
                        </div>
                        <div>
                            <label className="mr-2" for={"startTime"}>End: </label>
                            <input 
                            type="time"
                            name="end"
                            id="end" 
                            value={newNote.end}
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
                        value={newNote.venue}
                        onChange={getDetails} />
                    
                        <input 
                        type="text"
                        name="topic"
                        id="topic"
                        placeholder="Topic" 
                        className="border-1 rounded w-full py-2 px-3 my-2 focus:outline-none"
                        value={newNote.topic}
                        onChange={getDetails} />

                        <textarea 
                        placeholder="Minutes..."
                        name="minutes"
                        id="minutes"
                        type="text"
                        className="border-1 rounded w-full h-96 p-3 focus:outline-none"
                        value={newNote.minutes}
                        onChange={getDetails}></textarea>

                    {/* <SpacerSm /> */}

                    <button type="submit" className="border-1 text-gray-400 text-center rounded w-full py-2 px-3 my-2 focus:outline-none hover:bg-green-500 hover:text-white hover:shadow-xl">Save</button>
                    

                </form>
            </div>
  );
}

export default App;
