import {useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
      
  )
              
}

export default New;
