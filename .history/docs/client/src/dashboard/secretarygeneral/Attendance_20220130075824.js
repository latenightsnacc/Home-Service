import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import AttendanceSummary from "../../components/AttendanceSummary";

const Attendance = () => {
    return(
        <>
            <Navbar />
            <Banner />
            <Menu />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <div className="flex flex-row items-center justify-between">
                    <h2 className="ml-5 text-gray-800 text-xl">Recent</h2>
                    <Link to={"/dashboard/secretarygeneral/new"}>
                        <button className=" h-10  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">Record New</button>
                    </Link>
                    
                </div>
                <AttendanceSummary />
                <AttendanceSummary />
                <AttendanceSummary />
                <AttendanceSummary />
               
                <Spacer />
            </div>
            <Footer />
        </>
    )
}

export default Attendance;