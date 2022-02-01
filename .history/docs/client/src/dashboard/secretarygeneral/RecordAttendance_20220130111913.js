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
                        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                            <thead>
                                <tr className="h-8">
                                    <th scope="col" className="text-left w-auto">No.</th>
                                    <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                    <th scope="col" className="text-left  hidden md:table-cell"> Statecode</th>
                                    <th scope="col" className="text-left hidden md:table-cell">Batch</th>
                                    <th scope="col" className="text-left">
                                        <div className="flex flex-row justify-center items-center text-right">
                                            <span className="block w-3 h-3 rounded-full bg-green-400"></span><span className="ml-2 capitalize hidden md:inline">present</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="text-left">
                                        <div className="flex flex-row justify-center items-center text-right">
                                            <span className="block w-3 h-3 rounded-full bg-yellow-300"></span><span className="ml-2 capitalize hidden md:inline">late</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="text-left">
                                        <div className="flex flex-row justify-center items-center">
                                            <span className="block w-3 h-3 rounded-full bg-red-300"></span><span className="ml-2 capitalize hidden md:inline">absent</span>
                                        </div></th>
                                    <th scope="col" className="text-left">Comment</th>
                                </tr>
                            </thead>
                            <tbody className="font-light">
                                <tr>
                                    <td>1</td>
                                    <td>Name</td>
                                    <td>Statecode</td>
                                    <td>Batch</td>
                                    <td className="text-center">
                                        <input 
                                            type="radio"
                                            name="attendance"
                                            id="present"
                                            value={"present"} 
                                            className="hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-green-400" />
                                    </td>
                                    <td className="text-center">
                                        <input 
                                            type="radio"
                                            name="attendance"
                                            id="late"
                                            value={"late"} 
                                            className="hover:text-yellow-400 focus:text-yellow-400 focus:no-outline checked:text-yellow-400 checked:border-0 checked:border-yellow-400" />
                                    </td>
                                    <td className="text-center">
                                        <input 
                                            type="radio"
                                            name="attendance"
                                            id="absent"
                                            value={"absent"} 
                                            className="hover:text-red-400 focus:text-red-400 focus:no-outline checked:text-red-400 checked:border-0 checked:border-red-400" />
                                    </td>
                                    <td className="inline-block flex flex-row items-center justify-center text-sm">
                                        <input type="text" className="border-0 rounded focus:border-1 focus:outline-none focus:border-green-500 w-full h-7 p-2" />
                                    </td>
                                </tr>                                
                            </tbody>
                        </table>
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