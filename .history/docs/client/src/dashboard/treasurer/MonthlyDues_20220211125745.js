import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Summary from "../../components/Summary";
import Footer from "../../components/Footer";
import Axios from "axios";
import {useState, useEffect} from "react";
import res from "express/lib/response";

const MonthlyDues = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState([]);

    useEffect(() => {
        Axios.get("http:/localhost:3000/dues")
        .then( Response => {
            setList(Response.data);
            console.log(Response.data);
        })
        .catch(err) => {
            console.log(err);
            setError(err);
        }).finally( () => setLoading(false));
    
    })
    console.log(...list);
    if(loading) return "Loading";
    if(error) return `Error: `;
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
                {/* {list.map( s => {
                    return <Summary date={s.date} tag={s.type} text={s.minutes} />
                })} */}
                
                {/* <Summary />
                <Summary />
                <Spacer /> */}
            </div>
            <Footer />
        </div>

    )
}

export default MonthlyDues;