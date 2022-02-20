import {useState, useEffect} from "react";
import Axios from "axios";

import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";

import MiniLayout from "./components/MiniLayout";
import Spacer from "./components/Spacer";

const Register = () => {
   
    return(
        <>
           <Layout>
               
               <Container>
                    <MiniLayout>
                    <form className="w-full md:w-4/6 mx-auto">
                        <div className="mb-5 text-center">
                            
                            <h1 className="font-bold md:text-2xl">CDS E-ATTENDANCE</h1>
                            <h1 className="font-bold md:text-2xl">Sign up</h1>
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Full Name</label>
                            </div>
                            <input 
                            type={'text'}
                            placeholder={'Full Name'}
                            value={'Deborah Onyebuchi Olisa Egonu'}
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
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
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
                        />
                        </div>
                        <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                            <div className="absolute -top-3">
                                <label className="text-xs px-2 bg-white text-green-500">Profile Picture</label>
                            </div>
                            <input 
                            type="file"
                            alt="Profile Picture"
                            className={'border-0 text-xs md:text-sm px-2 w-full'}
                        />
                        </div>
                        <button className="w-full bg-green-300 text-white p-2 hover:bg-green-500 hover:shadow-lg">Create Profile</button>
                        
                    </form>
                    </MiniLayout>
               </Container>
            </Layout>
            <Footer /> 
        </>
    )
}

export default Register;