import {useState, useEffect} from "react";
import Axios from "axios";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';
import Container from "../components/Container";
import Layout from "../components/Layout";
const Treasurer = () => {
    const [monthlyDues, setMonthlyDues] = useState([]);
    const [projectDues, setProjectDues] = useState([]);
    const [eventDues, setEventDues] = useState([]);

    useEffect( () => {
        Axios.get("http://localhost:3001/mDues")
        .then( response => {
            setMonthlyDues(response.data);
        }).catch( error => {
            console.log(error)
        })

        Axios.get("http://localhost:3001/pDues")
        .then( response => {
            setProjectDues(response.data);
        }).catch( error => {
            console.log(error)
        })

        Axios.get("http://localhost:3001/eDues")
        .then( response => {
            setEventDues(response.data);
        }).catch( error => {
            console.log(error)
        })
    }, [])
    console.log(monthlyDues);
    let fees = [];
    let mDuesTotal = 0;
    let pDuesTotal = 0;
    let eDuesTotal = 0;
    let duesTotal = 0;

    for(const row of monthlyDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        mDuesTotal = fees.reduce((a,b) => {return a + b});
        
    }
    for(const row of projectDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        pDuesTotal = fees.reduce((a,b) => {return a + b});
        
    }
    for(const row of eventDues){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        eDuesTotal = fees.reduce((a,b) => {return a + b});   
    }
    duesTotal = mDuesTotal + pDuesTotal + eDuesTotal;
    return(
        <div>
            <Navbar />
            <Layout>
            <Container>
                <Banner position={"Treasurer"} />
            </Container>
            </Layout>
            
            
            <Menu 
                textClr1={"text-green-500"}
                textClr2={"text-gray-300"}
                textClr3={"text-gray-300"}
                textClr4={"text-gray-300"}
                textClr5={"text-gray-300"}
                link1={"../dashboard/treasurer"}
                link2={"../dashboard/treasurer/monthlydueslist"}
                link3={"../dashboard/treasurer/project"}
                link4={"../dashboard/treasurer/events"}
                link5={"../dashboard/treasurer/account"}
                navitem1={"Dashboard"}
                navitem2={"Monthly Dues"}
                navitem3={"Project"}
                navitem4={"Events"}
                navitem5={"Account"}
            />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats  
                    totalFigure1={`₦${duesTotal}`} totalTitle1={"Total"} 
                    totalFigure2={`₦${mDuesTotal}`} totalTitle2={"Total Monthly Dues"} 
                    totalFigure3={`₦${pDuesTotal}`} totalTitle3={"Total Project Dues"} 
                    totalFigure4={`₦${eDuesTotal}`} totalTitle4={"Total Events "}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Secretary;