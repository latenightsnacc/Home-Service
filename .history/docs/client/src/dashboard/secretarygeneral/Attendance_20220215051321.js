import Axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AttendanceSummary from "../../components/AttendanceSummary"
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Attendance = () => {
    const navigate = useNavigate();
    const [results, setResults] =useState([]);
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/attendance")
            .then(Response => {
                setResults(Response.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    let month = {
        jan: [],
        feb:[],
        mar:[],
        april:[],
        may:[],
        june:[],
        july:[],
        aug:[],
        sept:[],
        oct:[],
        nov:[],
        dec:[]
    };
    let a;
    for(const row of results){
        a = row;
        const m = a.attendance_month';
        console.log(m);
        
    
        
    }
    const mKeys = Object.keys(month);
   
    const mValues = Object.values(month);
    // console.log(mValues[1][1].attendance_month);
    // for(const row of results){
    //     let val = parseInt(row.amount_paid, 10);
    //     fees.push(val);
    //     total = fees.reduce((a,b) => {return a + b});
        
    // }
       
    return(
        <>
            <Navbar />
            <Spacer />
            <Layout>
                <Container>
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'hidden'}
                excoFinalPage={"attendance"}
                excoFinalPageLabel={"Attendance List"}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Attendance List"} />
                    <Link to={"/dashboard/secretarygeneral/recordattendance"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                    
                </Container>
                
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Attendance;