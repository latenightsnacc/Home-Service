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
                        
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer />
            <Footer />
        </>
    )
}

export default Register;