import Axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinancialSummary from "../../components/FinancialSummary";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Events = () => {
    const navigate = useNavigate();
    const [results, setResults] =useState([]);
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                setResults(Response.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    let paid = 0;
    let unpaid = 0;
    let total = 0;
    let fees = [];
    for(const row of results){
        if(row.payment_status ==="paid") {
            paid++;
        } else {
            unpaid++;
        }
    }
    let month = [];
    for(const row of results){
        if(row.collection_month ==="February" && row.collection_for === "monthly_dues") {
            month.push(row);
        } 
    }
    for(const row of results){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        total = fees.reduce((a,b) => {return a + b});
        
    }
    console.log(...month);
    console.log(paid);
    console.log(unpaid);
    console.log(fees);
    console.log(total);
    return(
        <>
            <Navbar />
            <Spacer />
            <Layout>
                <Container>
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'treasurer'}
                excoDashboardLabel={'Treasurer Dashboard'} 
                displayLevel2={'hidden'}
                excoPage={''}
                excoPageLabel={''}
                excoFinalPage={"project"}
                excoFinalPageLabel={"Event Collection List"}
                activeTextColor1={''}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Project Fee Collection List"} />
                    <Link to={"/dashboard/treasurer/newprojectdues"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                    
                </Container>
                
                {results.map((record, key) => {
                return (
                    <div key={key}
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/treasurer/dues/${record.collection_month}/${record.collection_year}/${record.collection_for}`)}}>
                        <FinancialSummary
                        date={record.collection_month}
                        tag={'Event Fee'}
                        totalFigure1={paid} totalTitle1={"Paid"} 
                        totalFigure2={unpaid} totalTitle2={"Unpaid"}  
                        totalFigure3={`₦${total}.00`} totalTitle3={"Total Fees Collected"}  />
                    </div>
                    
                );
            })}
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Events;