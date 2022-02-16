import Axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import AttendanceSummary from "../../components/AttendanceSummary";
const MonthlyAttendance = () => {
    const {month,year} = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3001/attendance/${year}/${month}`)
        .then( result => {
            console.log(result.data);
            setResults(result.data);
        }).catch(e => {
            console.log(e)
        })
    }, [month,year]);
    let tagColor = '';
    let display = 'hidden';
    let week = {
        type: '',
        date:'',
        mon:'',
        yr: ''
    };
    let dates = [];
    if(results.length > 0 ){
        week = {
            type: results[0].type,
            date: results[0].attendance_date,
            mon: results[0].attendance_month,
            yr: results[0].attendance_year

        };
        if(week.type === 'meeting' || (week.type === 'Meeting')) {
            tagColor = 'bg-green-100';
            display = "hidden";
        } else if(week.type === "event"){
            tagColor = "bg-yellow-100";
            display = "block";
        }
        const sets = new Set(results);
        dates = Array.from(sets);
    }
    for()
    console.log(dates);

    // console.log(results);
    return( 
        <>
            <Navbar />
            <Spacer />
            
            <Layout>
                
                <Container>
                <BreadCrumbs
                    memberDashboard={'member'}
                    dashboardLabel={'Member Dashboard'}
                    displayLevel1={'inline-block'}
                    excoDashboard={'secretarygeneral'}
                    excoDashboardLabel={'Secretary General Dashboard'} 
                    displayLevel2={'inline-block'}
                    excoPage={"attendance"}
                    excoPageLabel={"Attendance"}
                    displayLevel3={'inline-block'}
                    excoFinalPage={"monthlyattendance"}
                    excoFinalPageLabel={"Monthly Attendance"}
                    activeTextColor1={''}
                    activeTextColor2={'text-green-500'} 
                    /> 
                <Spacer />
                    <PageTitle title={`Attendance for ${week.mon} ${week.yr}`} />
                </Container>
                <AttendanceSummary 
                            tag={''}
                            date={''}
                            attendeesTotal={'attendeesTotal'}
                            lateAttendeesTotal={''}
                            absenteesTotal={''}
                            lateFee={0} />
                
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  MonthlyAttendance;