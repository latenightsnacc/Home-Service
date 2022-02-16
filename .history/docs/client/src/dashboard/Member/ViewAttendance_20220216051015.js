import {useState, useEffect} from "react";
import Axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Container from "../components/Container";
import Layout from "../components/Layout";
import ProfilePic from "../assets/Debs.png"

const ViewAttendance = () => {
    let display = 'hidden';

    const toggleDisplay = (e) => {
        if(display === 'hidden'){
            display = 'block';
        } else {
            display = 'hidden';
        }
    }
    return(
        <>
           <Navbar />
           <Spacer />
           <Layout>
               <Container>
                <div className="flex flex-row items-center justify-center">
                    <div className="w-2/6 lg:w-1/6">
                            <img 
                            className="rounded-full" 
                            src={ProfilePic} 
                            alt={"Deborah Egonu"} />
                    </div>
                    <div className="ml-5 md:ml-10 ">
                        <h1 className="leading-7 font-medium  md:text-2xl mb-1">Welcome back, Deborah</h1>
                        <div className="flex flex-col text-sm text-gray-700 md:text-base">
                            <span className="font-medium">Statecode: EN/21A/0324</span>
                            <span className="my-1 font-medium text-green-500">CDS Group: I.C.T</span>
                            <span className="text-xs font-medium text-gray-400  md:text-sm">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        </div>
                    </div>
                </div>
               </Container>
               <div className="">
               <Spacer />
               </div>
               
               <Container>
                   <div className="flex mx-auto w-full text-xs md:text-sm lg:text-base justify-around flex-row items-center md:w-4/6 lg:w-5/6 border-y border-y-green-400  md:pl-5">
                        <div className={`text-green-400 no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`} onClick={toggleDisplay}>
                            <span><i className="fas fa-th-list"></i></span> 
                            <span className="ml-1 md:inline-block">Dashboard</span>
                        </div>
                        <div className={`text-gray-300 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                            <span><i className="far fa-clipboard"></i></span> 
                            <span className="ml-1 md:inline-block">Attendance</span>
                        </div>
                        <div className={`text-gray-300 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                            <span><i className="far fa-calendar-alt"></i></span> 
                            <span className="ml-1 md:inline-block">Dues</span>
                        </div>
                        <div className={`text-gray-300 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                            <span><i class="fa-solid fa-gear"></i></span> 
                            <span className="ml-1 md:inline-block">Profile</span>
                        </div>
                   </div>
                   
               </Container>
               
               <Container>
                    <div className={`${display}bg-red-400 mx-auto w-5/6 h-56`}></div>
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default ViewAttendance;