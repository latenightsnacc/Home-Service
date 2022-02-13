import Axios from "axios";
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

const MonthlyDuesList = () => {
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
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'treasurer'}
                excoDashboardLabel={'> Treasurer Dashboard'} 
                excoPage={''}
                excoPageLabel={''}
                excoFinalPage={"monthlydueslist"}
                excoFinalPageLabel={"> Monthly Dues List"}
                activeTextColor1={''}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <Container>
                <div className="flex flex-row items-center justify-between">
                <PageTitle title={"Monthly Dues List"} />
                    <Link to={"/dashboard/treasurer/newcollection"}>
                        <button className=" h-10  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">New Collection</button>
                    </Link>
                    
                </div>
                    
                </Container>
                <Spacer />
                {results.map((record, key) => {
                return (
                    <div key={key}
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/treasurer/dues/${record.collection_month}/${record.collection_year}/${record.collection_for}`)}}>
                        <FinancialSummary
                        date={record.collection_month}
                        tag={record.collection_for}
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

export default MonthlyDuesList;