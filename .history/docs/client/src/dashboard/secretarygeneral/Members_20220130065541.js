import {Link}  from "react-router-dom";
import Spacer from "../../components/Spacer";
import SpacerSm from "../../components/SpacerSm";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const Members = () => {
    return(
        <>
            <Navbar />
            <SpacerSm />
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

                        {/* <div className="flex flex-row items-center">
                            <button className="h-12  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center" onClick={viewAll}>Card view</button>
                        </div> */}
                        
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