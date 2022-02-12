import { Link } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FinancialSummary from "../../components/FinancialSummary";


const MonthlyDues = () => {
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
    console.log(...results);
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
    for(const row of results){
        let val = parseInt(row.amount_paid, 10);
        fees.push(val);
        total = fees.reduce((a,b) => {})
        
    }
    console.log(paid);
    console.log(unpaid);
    console.log(fees);
    return(
        <div>
            <Navbar />
            <Banner position={"Treasurer"} />
            <Menu 
                textClr1={"text-gray-300"}
                textClr2={"text-green-500"}
                textClr3={"text-gray-300"}
                textClr4={"text-gray-300"}
                textClr5={"text-gray-300"}
                link1={"../dashboard/treasurer"}
                link2={"../dashboard/treasurer/monthlydues"}
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
                <div className="flex flex-row items-center justify-between">
                    <h2 className="ml-5 text-gray-800 text-xl">Recent Collections</h2>
                    <Link to={"/dashboard/treasurer/newcollection"}>
                        <button className=" h-10  mr-1 lg:mr-2 inline-block px-3 py-2 rounded  tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">New Collection</button>
                    </Link>
                    
                </div>
                {results.map((record, key) => {
                return (
                    <div key={key}>
                        <FinancialSummary
                        date={record.collection_month}
                        tag={record.collection_for}
                        totalFigure1={paid} totalTitle1={"Paid"} 
                        totalFigure2={unpaid} totalTitle2={"Unpaid"} 
                        totalFigure3={5} totalTitle3={"Total Events"} 
                        totalFigure4={"N18,000.00"} totalTitle4={"Total Fees Collected"}  />
                        {/* <Summary key={key} date={record.collection_month} tag={record.collection_for} text={record.cds_group} /> */}
                    </div>
                    
                );
            })}
            </div>
            <Footer />
        </div>

    )
}

export default MonthlyDues;