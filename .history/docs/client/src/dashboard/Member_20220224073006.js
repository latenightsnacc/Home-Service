import {useState, useEffect} from "react";
import Axios from "axios";
import MemberMenu from "../components/MemberMenu";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Container from "../components/Container";
import Layout from "../components/Layout";
import ProfilePic from "../assets/Debs.png"
import MiniLayout from "../components/MiniLayout";


const Member = () => {
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
                        <div className="flex flex-col text-xs text-gray-700 md:text-sm lg:text-base">
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
               <MemberMenu 
                   itemColor2={"text-gray-300"}
                   itemColor1={"text-green-400"}
                   itemColor3={"text-gray-300"}
                   itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               
               <Container>
                   <MiniLayout>
                   <div className="w-full  py-2 px-2  rounded h-20 flex flex-col  justify-center md:flex-row md:justify-start md:items-center shadow-sm my-3">
                       
                        <span className="text-xs md:mr-1 py-1 px-2  w-auto rounded md:bg-green-100 ">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        <span className="text-xs  md:text-sm py-1 px-2"> Attendance ['<span className="text-green-400"> Present </span> '] for CDS Meeting recorded.</span>
                    </div>
                   <div className=" w-full py-2 px-2  rounded h-20 flex flex-col  justify-center md:flex-row md:justify-start md:items-center shadow-sm my-3">
                       
                        <span className="text-xs md:mr-1 py-1 px-2  w-auto rounded md:bg-green-100 ">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}</span>
                        <span className="text-xs  md:text-sm py-1 px-2"> Attendance ['<span className="text-green-400"> Present </span> '] for CDS Event recorded.</span>
                    </div>
                   </MiniLayout>
                    
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default Member;