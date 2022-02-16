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
               <Container>
                <div className="flex bg-blue-400 flex-row items-center">
                    <div className="w-2/6 lg:w-2/6">
                            <img 
                            className="rounded-full" 
                            src={ProfilePic} 
                            alt={"Deborah Egonu"} />
                    </div>
                    <div className="ml-5">
                        <h1 className="text-xl">Welcome back, Deborah!</h1>
                        <div className="flex flex-col">
                            <span>Statecode: EN/21A/0324</span>
                            <span>CDS Group: I.C.T</span>
                            <span>{(new Date()).toLocaleDateString('en-US',{
                                weekday: 
                            })}</span>
                        </div>
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