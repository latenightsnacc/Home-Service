import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import BreadCrumbs from "../../components/BreadCrumbs";
import ButtonLg from "../../components/ButtonLg";

const New = () => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [date, setDate] = useState({
      date_recorded: '',
      month: '',
      year: ''
  });
  const [newNote, setNewNote] = useState({
    type: '',
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
        date: date.date,
        month: date.month,
        year: date.year,
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
    const getDate =(e) => {
        let a = e.target.value;
        setDate({
            date_recorded:new Date(a).toLocaleDateString(),
            month: months[new Date(a).getMonth()],
            year: new Date(a).getFullYear()
        })
        
    }
    
    return(
        <>
        <Navbar />
        <Spacer />
        <Layout>
            <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                displayLevel1={'inline-block'}
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'inline-block'}
                excoPage={"notes"}
                excoPageLabel={"Notes"}
                displayLevel3={'inline-block'}
                excoFinalPage={"recordattendance"}
                excoFinalPageLabel={"New Note"}
                activeTextColor1={''}
                activeTextColor2={'text-green-500'} 
                />  
            <Spacer />
            <PageTitle title={"New Note"} />
            <form onSubmit={createNote}>
                <Container>
                    <div className="w-full flex flex-col-reverse md:flex-row md:items-center my-3 md:justify-between">
                      <div className="flex flex-col md:flex-row items-center">
                      <div className="flex border-1 border-success py-2 px-3 rounded flex-row items-center text-xs">
                            
                            <div className="flex flex-row items-center">
                                <input
                                    type={"radio"}
                                    id="meeting"
                                    name="type" 
                                    value={"Meeting"}
                                    className="border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                    onChange={getDetails}
                                />  
                                <label className="ml-2" for={"meeting"}>Meeting </label>
                            </div>
                            <div className="flex flex-row items-center ml-2">
                                <input
                                    type={"radio"}
                                    id="event"
                                    name="type" 
                                    value={"Event"}
                                    className="border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                    onChange={getDetails}
                                /> 
                                <label className="ml-2" for={"event"}>Event</label>
                            </div>            
                        </div>
                    <input
                        type={"date"}
                        id={"date"}
                        name={"date"} 
                        className="form-input my-2 md:my-0 h-8 w-full md:w-auto text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3 focus:outline-none"
                        onChange={getDate}
                        />  
                      </div>
                                        
                    </div>
                    <div className="w-full flex flex-col-reverse md:flex-row md:items-center my-3 md:justify-between">
                        <div className="flex border-1 border-success rounded flex-row items-center text-xs">
                                <div className="flex flex-row items-center">
                                <label className="ml-2" for={"start"}>Start:</label>
                                    <input
                                        type={"time"}
                                        id="start"
                                        name="start" 
                                        className="border-0 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                        onChange={getDetails}
                                    />  
                                    
                                </div>
                                <div className="flex flex-row items-center ml-2">
                                <label className="ml-2" for={"end"}>End</label>
                                    <input
                                        type={"time"}
                                        id="end"
                                        name="end" 
                                        className="border-0  ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                        onChange={getDetails}
                                    /> 
                                    
                                </div>            
                            </div>
                        <input
                            type={"text"}
                            id={"venue"}
                            name={"venue"}
                            placeholder={"Venue"} 
                            className="form-input my-2 md:my-0 rounded w-full md:w-1/2 text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3  focus:outline-none"
                            onChange={getDate}
                            />                  
                    </div>
                    <input
                      type={"text"}
                      id={"topic"}
                      name={"topic"}
                      placeholder={"Event Topic"} 
                      className="form-input my-2 md:my-0 rounded w-full text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3  focus:outline-none"
                      onChange={getDate}
                      />
                    
                    <textarea 
                    placeholder="Minutes..."
                    name="minutes"
                    id="minutes"
                    type="text"
                    className="border-1 rounded w-full h-96 p-3 focus:outline-none"
                    value={newNote.minutes}
                    onChange={getDetails}></textarea>
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

export default New;