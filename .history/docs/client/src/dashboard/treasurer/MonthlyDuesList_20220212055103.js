import { Link } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinancialSummary from "../../components/FinancialSummary";
import BreadCrumbs from "../../components/BreadCrumbs";

const MonthlyDuesList = () => {
    return(
        <>
            <Navbar />
            <Spacer />
            <BreadCrumbs
            memberDashboard={'member'}
            dashboardLabel={'Member Dashboard'}
            excoDashboard={'treasurer'}
            excoDashboardLabel={'> Treasurer Dashboard'} 
            excoPage={"monthlydues"}
            excoPageLabel={"> Monthly Dues"}
            excoFinalPage={"monthlydueslist"}
            excoFinalPageLabel={"> Monthly Dues List"}
            activeTextColor1={''}
            activeTextColor2={'text-green-500'} 
            />
            <div className="container">
                <h1 className="text-gray-800 my-3">Monthly Dues List</h1>
            </div>
            <Footer />
        </>
    )
}

export default MonthlyDuesList;