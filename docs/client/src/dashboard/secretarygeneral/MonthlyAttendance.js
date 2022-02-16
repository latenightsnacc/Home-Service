import Axios from "axios";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    useEffect( () => {
        Axios.get(`http://localhost:3001/attendance/${year}/${month}`)
        .then( result => {
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
    let dates = {
        week_1: [],
        week_2:[],
        week_3:[],
        week_4:[]
    };
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
        // const sets = new Set(results);
        // dates = Array.from(sets);
    }
    // for(const row in results){
    //     console.log(results[row]);
    // }
    
    
    const mValues = Object.values(dates.date_2);
    console.log(mValues);
    // console.log(mValues[1][1].attendance_month);
    let attendeesTotal = 0;
    let attendees = [];
    let totalAttendees = [];
    let lateAttendeesTotal = 0;
    let lateAttendees = [];
    let absenteesTotal = 0;
    let absentees = [];
    // mValues.map(a => {
    //     if(a.length > 0){

    //         a.map(b => {
    //             console.log(b);
    //             if(b.attendance_status === "present"){
    //                 attendees.push(1)
    //             } else if (b.attendance_status === "late"){
    //                 lateAttendees.push(1)
    //             } else if (b.attendance_status === "absent") {
    //                 absentees.push(1)
    //             }
    //             return b;
    //         })
    //     }
    //     return a;
    // })
    // totalAttendees.push(...attendees,...lateAttendees);
    // console.log(totalAttendees);
    // totalAttendees.length > 0 ?  attendeesTotal = totalAttendees.reduce( (a,b) => {return a + b }): attendeesTotal = 0 ; 
    // lateAttendees.length > 0 ?  lateAttendeesTotal = lateAttendees.reduce( (a,b) => {return a + b }): lateAttendeesTotal = 0;                     
    // absentees.length > 0 ? absenteesTotal = absentees.reduce( (a,b) => {return a + b }) : absenteesTotal = 0;                     
    
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
                
                        {/* <div  
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/secretarygeneral/attendance/`)}}>
                            <AttendanceSummary 
                            tag={''}
                            date={''}
                            attendeesTotal={0}
                            lateAttendeesTotal={0}
                            absenteesTotal={0}
                            lateFee={0} />
                        </div> */}
                    )
                   
                
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  MonthlyAttendance;