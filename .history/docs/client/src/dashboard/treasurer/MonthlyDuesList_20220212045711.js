import { Link } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
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
            <BreadCrumbs />
            <Footer />
        </>
    )
}

export default MonthlyDuesList;