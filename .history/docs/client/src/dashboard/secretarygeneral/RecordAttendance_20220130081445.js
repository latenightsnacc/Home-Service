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
                            <h1 className="font-semibold text-3xl ml-5 ">List of ICT Members</h1>
                        </div> 
                    </div>
                </div>
                <Spacer />
                <div class="container">
            <!--TABLE-->
            
            <table class="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm   bg-white rounded">
            
                <thead>
                    <tr class="h-8">
                    <th scope="col" class="text-left w-auto">No.</th>
                    <th scope="col" class="text-left hidden md:table-cell">Name</th>
                    <th scope="col" class="text-center  hidden md:table-cell"> Batch</th>
                    <th scope="col" class="text-left">Statecode</th>
                    <th scope="col" class="text-left"> 
                        <div class="flex flex-row justify-center items-center text-right">
                        <span class="block w-4 h-4 bg-green-300"></span><span class="ml-2 capitalize hidden md:inline">present</span>
                    </div></th>
                    
                    <th scope="col" class="text-left"> 
                        <div class="flex flex-row justify-center items-center">
                        <span class="block w-4 h-4 bg-red-300"></span><span class="ml-2 capitalize hidden md:inline">absent</span>
                    </div></th>
                    <th scope="col" class="text-left">Comment</th>
                    </tr>
                </thead>
                <tbody class="font-light">
                    <tr >
                    <div class="flex flex-row items-center">
                        
                        <th scope="row" class="text-left capitalize align-middle align-middle w-auto">1</th>
                        <td class="text-left align-middle align-middle w-auto hidden md:table-cell">
                            <a href="../member.html" class="no-underline text-gray-800 hover:text-green-500">Egonu Deborah Onyebuchi O.</a></td>
                        <td class="text-center align-middle align-middle w-auto  hidden md:table-cell">A</td>
                        <td class="text-left align-middle align-middle w-auto">
                            <a href="../member.html" class="no-underline text-gray-800 hover:text-green-500">EN/21A/0324</a></td>
                        
                        <td class="text-center">
                            <div class="flex flex-row h-8 items-center justify-center">
                            <input type="checkbox" class="checked:bg-green-700 checked:border-2 checked:border-green-700" />
                            </div>
                        </td>
                        
                        <td>
                            <div class="flex flex-row h-8 items-center justify-center">
                            <input type="checkbox" class="checked:bg-green-700 checked:border-2 checked:border-green-700" />
                            </div>
                        </td>
                        <td>
                            <div class="flex flex-row h-8 items-center justify-center">
                            <input type="text" class="w-full border-1 outline-none focus:outline-none focus:ring-1 focus:ring-green-500" />
                            </div>
                        </td>
                    </div>
                    </tr>
                    
                </tbody>
            </table>
            <div class="flex">
                <a href="#" class="no-underline mx-2">
                    <span 
                    class="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i class="fas fa-save"></i></span><span class="hidden md: ml-1 md:inline-block">Save</span></span>
                </a>
                <a href="#" class="no-underline mx-2">
                    <span 
                    class="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-yellow-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i class="far fa-edit"></i></i></span><span class="hidden md: ml-1 md:inline-block">Edit</span></span>
                </a>
                <a href="#" class="no-underline mx-2">
                    <span 
                    class="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-red-300 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center"><span><i class="far fa-trash-alt"></i></span><span class="hidden md: ml-1 md:inline-block">Delete</span></span>
                </a>
            </div>
        </div>  
            </div>
            <Footer />
        </>
    )
}

export default RecordAttendance;