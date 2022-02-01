import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import Footer from "../../components/Footer";

const RecordAttendance = () => {
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
                            <h1 className="font-semibold text-3xl ml-5 ">Record Attendance</h1>
                        </div>
                    </div>
                </div>
                <Spacer />
                <div className="container">
                    <form>

                    </form>
                    
                    <div className="flex">
                        <span  className="no-underline mx-2">
                            <span
                                className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i className="fas fa-save"></i></span><span className="hidden md: ml-1 md:inline-block">Save</span></span>
                        </span>
                        <span  className="no-underline mx-2">
                            <span
                                className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-yellow-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i className="far fa-edit"></i></span><span className="hidden md: ml-1 md:inline-block">Edit</span></span>
                        </span>
                        <span  className="no-underline mx-2">
                            <span
                                className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-red-300 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i className="far fa-trash-alt"></i></span><span className="hidden md: ml-1 md:inline-block">Delete</span></span>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RecordAttendance;