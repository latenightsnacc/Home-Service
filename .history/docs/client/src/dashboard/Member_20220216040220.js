import {useState, useEffect} from "react";
import Axios from "axios";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';
import Container from "../components/Container";
import Layout from "../components/Layout";
import ProfilePic from "../assets/Debs.png"

const Member = () => {
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <Container className>
                <div className="flex flex-col md:flex-row">
                    <div className="max-w-xs">
                            <img 
                            className="rounded" 
                            src={ProfilePic} 
                            alt={"Deborah Egonu"} />
                    </div>
                    <div>
                        <h1>Welcome back, Deborah!</h1>
                    </div>
                </div>
               </Container>
               
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default Member;