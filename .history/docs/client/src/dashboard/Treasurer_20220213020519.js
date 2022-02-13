import {useState, useEffect} from "react";
import Axios from "axios";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';
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
    }, [])
    console.log(monthlyDues);
    let paid = 0;
    let unpaid = 0;
    let total = 0;
    let fees = [];
    let mDuesTotal = 0;
    let pDuesTotal = 0;
    let eDuesTotal = 0;
    let duesTotal = 0
    for(const row of monthlyDues){
        if(row.payment_status ==="paid") {
            paid++;
        } else {
            unpaid++;
        }
    }
    return(
        <div>
            <Navbar />
            <Banner position={"Treasurer"} />
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
                    totalFigure1={`₦${duesTotal}.00`} totalTitle1={"Total"} 
                    totalFigure2={`₦${mDuesTotal}.00`} totalTitle2={"Total Monthly Dues"} 
                    totalFigure3={`₦${pDuesTotal}.00`} totalTitle3={"Total Project Dues"} 
                    totalFigure4={`₦${mDuesTotal}.00`} totalTitle4={"Total Events "}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Treasurer;