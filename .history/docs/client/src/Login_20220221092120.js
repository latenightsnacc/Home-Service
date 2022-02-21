import {useState, useEffect} from "react";
import Axios from "axios";

import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";


const Login = () => {
   
    return(
        <>
           <Layout>
               
               <Container>
                    <div className="flex h-screen flex-col items-center justify-center">
                            <form className="w-full md:w-3/6 mx-auto">
                            <div className="mb-4 text-center">
                            <h2 className="font-bold md:text-xl mb-2">Login</h2>
                                <h1 className="font-bold md:text-2xl text-green-500">CDS E-ATTENDANCE</h1>
                                
                            </div>
                            
                        
                            <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                                <div className="absolute -top-3">
                                    <label className="text-xs px-2 bg-white text-green-500">Email</label>
                                </div>
                                <input 
                                type={'email'}
                                placeholder={'Email'}
                                value={'egonubuchi97@gmail.com'}
                                className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                                required 
                                />
                            </div>
                            <div className="relative border-1 py-2 mb-4 border-gray-300 rounded text-sm w-full">
                                <div className="absolute -top-3">
                                    <label className="text-xs px-2 bg-white text-green-500">password</label>
                                </div>
                                <input 
                                type={'password'}
                                className={'border-0 text-xs md:text-sm px-2 w-full focus:ring-0 focus:outline-0'}
                                required 
                                />
                            </div>
                            
                            <button className="w-full bg-green-300 text-white p-2 hover:bg-green-500 hover:shadow-lg">Create Profile</button>
                            
                            </form>
                    </div>
               </Container>
            </Layout>
            <Footer />
        </>
    )
}

export default Login;