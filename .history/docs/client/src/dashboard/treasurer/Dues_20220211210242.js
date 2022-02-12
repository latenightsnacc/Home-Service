import Axios from "axios";
import {useState, useEffect} from "react";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Dues = () => {
    return( 
        <div>
            <Navbar />
            <Spacer />
        <div className="w-full md:w-5/6 md:mx-auto">
            <div className="container text-gray-800">
                <div className="flex flex-row h-full items-center">
                    <Link to={"/dashboard/secretarygeneral/notes"}>
                        <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                            <i className="fas fa-angle-left"></i></span>
                    </Link> 
                    <h1 className="font-semibold text-3xl ml-5">Create New</h1>
                </div>
                <Spacer />                
            </div>
            <Spacer /> 
            <Footer />
        </div>
    )
}
export default  Dues;