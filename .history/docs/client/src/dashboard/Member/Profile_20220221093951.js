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
    const [opacity, setOpacity] = useState('opacity-50');
    const [btnValue, setBtnValue] = useState('Edit');
    

    const editProfile = (e) => {
        e.preventDefault();
        if(e.target.value === 'Edit') {
            setBtnValue('Save');
           setOpacity('opacity-100');
        } else {
            setBtnValue('Edit');
           setOpacity('opacity-50');
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
                   itemColor4={"text-green-500"}
                   itemColor2={"text-gray-300"}
                   itemColor3={"text-gray-300"}
                   />
                   
               </Container>
               <Spacer />
               <Container>
                    <MiniLayout>
                    <form className={`w-full md:w-4/6 mx-auto ${opacity}`}>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Full Name</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'Deborah Onyebuchi Olisa Egonu'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Statecode</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'EN/21A/0324'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">L.G.A</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'Enugu Norrth'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">C.D.S Group</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'Information Comunication Technology (I.C.T)'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Place of Primary Assignment</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'P.P.A'}
                            value={'Digital Dreams Ltd'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Phone (Whatsapp)</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'08125018789'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Email</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Email'}
                            value={'egonubuchi97@gmail.com'}
                            className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                        />
                        </div>
                        
                        <input type="button" 
                        value={btnValue}
                        onClick={editProfile}
                        className="w-full bg-green-300 text-white p-2 hover:bg-green-500 focus:ring-0 focus:outline-0' hover:shadow-lg"
                        />

                    </form>
                    </MiniLayout>
               </Container>
            </Layout>
            <Spacer />
            <Footer /> 
        </>
    )
}

export default ViewAttendance;