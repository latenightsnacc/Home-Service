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
               <MemberMenu 
                   itemColor2={"text-gray-300"}
                   itemColor1={"text-green-400"}
                   itemColor3={"text-gray-300"}
                   itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               
               <Container>
                   <MiniLayout>
                   <div className="max-w-sm py-2 px-3 rounded h-20 flex items-center shadow-sm">
                       <span><i class="fa-solid fa-square-check"></i></span>
                        <span className="text-sm">{(new Date()).toLocaleDateString('en-US',{
                                weekday: 'short',
                                day: 'numeric',
                                year: 'numeric',
                                month: 'short'
                            })}:</span>
                        <span className="text-xs"> Attendance['Present'] for CDS Meeting recorded.</span>
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