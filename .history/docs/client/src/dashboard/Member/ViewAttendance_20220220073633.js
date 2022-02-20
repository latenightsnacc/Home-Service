import {useState, useEffect} from "react";
import Axios from "axios";
import MemberMenu from "../../components/MemberMenu";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import ProfilePic from "../../assets/Debs.png";
import MiniLayout from "../../components/MiniLayout";

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
                   itemColor1={"text-gray-300"}
                   itemColor2={"text-green-500"}
                   itemColor3={"text-gray-300"}
                   itemColor4={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <table className="table table-sm table-bordered border-success text-xs md:text-sm bg-white rounded">
                        <thead>
                            <tr>
                                <th scope="col" className="text-left">Month | Week</th>
                                <th scope="col" className="text-center ">1</th>
                                <th scope="col" className="text-center">2</th>
                                <th scope="col" className="text-center ">3</th>
                                <th scope="col" className="text-center ">4</th>
                                <th scope="col" className="text-center ">5</th>
                                <th scope="col" className="text-center ">%</th>
                            </tr>
                        </thead>
                        <tbody className="font-light">
                        <tr>
                            <th cl>January</th>
                            <td className="text-center text-green-400">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-yellow-300">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-green-400">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-yellow-300">
                                <i class="fa-solid fa-square-check"></i>
                            </td>
                            <td className="text-center text-red-400">
                            <i class="fa-solid fa-square-xmark"></i>
                            </td>
                            <td className="text-center">
                                100%
                            </td>
                            
                        </tr>    
                                                      
                        </tbody>
                    </table>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer/>
            <Footer /> 
        </>
    )
}

export default ViewAttendance;