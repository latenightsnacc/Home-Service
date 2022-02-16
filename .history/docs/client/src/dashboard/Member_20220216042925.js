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
import { YEAR } from "mysql/lib/protocol/constants/types";

const Member = () => {
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <Container>
                <div className="flex flex-row items-center">
                    <div className="w-2/6 lg:w-1/6">
                            <img 
                            className="rounded-full" 
                            src={ProfilePic} 
                            alt={"Deborah Egonu"} />
                    </div>
                    <div className="ml-5 ">
                        <h1 className="leading-7 font-medium  md:text-2xl mb-1">Welcome back, Deborah</h1>
                        <div className="flex flex-col text-sm text-gray-700 md:text-base">
                            <span className="font-medium">Statecode: EN/21A/0324</span>
                            <span className="my-1 font-medium text-green-500">CDS Group: I.C.T</span>
                            <span className="text-xs  md:text-sm">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        </div>
                    </div>
                </div>
               </Container>
               <Menu 
                textClr1={"text-green-500"}
                textClr2={"text-gray-300"}
                textClr3={"text-gray-300"}
                textClr4={"text-gray-300"}
                textClr5={"text-gray-300"}
                link1={"../dashboard/secretarygeneral/"}
                link2={"../dashboard/secretarygeneral/attendance"}
                link3={"../dashboard/secretarygeneral/notes"}
                link4={"../dashboard/secretarygeneral/events"}
                link5={"../dashboard/secretarygeneral/reports"}
                navitem1={"Dashboard"}
                navitem2={"Attendance"}
                navitem3={"Notes"}
                navitem4={"Events"}
                navitem5={"Reports"}
            />
               
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default Member;