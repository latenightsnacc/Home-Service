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
import {ProfilePic} from "../assets/debs.png"

const Member = () => {
    return(
        <>
           <Navbar />
           <Layout>
               <div className="">
                   <div>
                        <img src={ProfilePic} alt={""} />
                   </div>
                   <div></div>
               </div>
            </Layout> 
        </>
    )
}

export default Member;