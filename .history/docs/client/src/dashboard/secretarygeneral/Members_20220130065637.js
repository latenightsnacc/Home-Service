import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";

import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Members = () => {
    return(
        <>
            <Navbar />
            <Spacer />
            <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container text-gray-800">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row h-full items-center">
                            <Link to={"/dashboard/secretarygeneral/"}>
                                <span className="text-xl text-gray-300 hover:cusor-pointer hover:text-green-500">
                                    <i className="fas fa-angle-left"></i></span>
                            </Link> 
                            <h1 className="font-semibold text-3xl ml-5 ">List of ICT Members</h1>
                        </div> 
                    </div>
                </div>
                <Spacer />
                <Table />  
            </div>
            <Footer />
        </>
    )
                
}

export default Members;