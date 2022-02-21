import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";

import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";

import MiniLayout from "./components/MiniLayout";
import Spacer from "./components/Spacer";

const Register = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([]);
    const [file, setFile] = useState({
        fileName: '',
        filePath: ''
    })
    const corperDetails = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }
    const profilePic = (e) => {
        setFile({
            ...file,
            fileName: e.target.name,
            filePath: e.target.value
        })
    }
    const createProfile = (e) => {
       e.preventDefault();
       
        // navigate('profilecreated')
    }
    console.log(...profile);
    console.log(...file);
    return(
        <>
           <Layout>
               
               <Container>
                    <MiniLayout>
                    <form className="w-full md:w-4/6 mx-auto">
                        <div className="mt-5 mb-4 text-center">
                        <h2 className="font-bold md:text-xl mb-2">Create Profile</h2>
                            <h1 className="font-bold md:text-2xl text-green-500">CDS E-ATTENDANCE</h1>
                            
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Full Name</label>
                            </div>
                            <input 
                            type={'text'}
                            name={'name'}
                            value={'profile.name'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0 text-capitalize'}
                            onChange={'corperDetails'}
                            required
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Statecode</label>
                            </div>
                            <input 
                            type={'text'}
                            name={'statecode'}
                            value={profile.statecode}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0 text-uppercase'}
                            onChange={corperDetails}
                            required />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Local Government Area</label>
                            </div>
                            <input 
                            type={'text'}
                            name={"lga"}
                            value={profile.lga}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={corperDetails}
                            required
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">C.D.S Group</label>
                            </div>
                            <select 
                            name="cds_group"
                            value={profile.cds_group}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={corperDetails} 
                            required>
                                <option disabled>Select CDS Group</option>
                                <option value={'Information Comunication Technology (I.C.T)'}>Information Comunication Technology (I.C.T)</option>
                                <option value={'Band'}>Band</option>
                            </select>
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Place of Primary Assignment</label>
                            </div>
                            <input 
                            type={'text'}
                            name={'ppa'}
                            value={profile.ppa}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={corperDetails}
                            required
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Phone (Whatsapp)</label>
                            </div>
                            <input 
                            type={"tel"}
                            name={"phone_no"}
                            value={profile.phone_no}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={corperDetails}
                            required
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Email</label>
                            </div>
                            <input 
                            type={'email'}
                            value={profile.email}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            onChange={corperDetails}
                            required 
                            />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full hover:border-green-400">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Profile Picture</label>
                            </div>
                            <input 
                            type="file"
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                            
                            required
                        />
                        </div>
                        <button
                        onClick={createProfile} 
                        className="w-full bg-green-300 text-white p-2 hover:bg-green-500 rounded hover:shadow-lg">Create Profile</button>
                        
                    </form>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer />
            <Footer />
        </>
    )
}

export default Register;