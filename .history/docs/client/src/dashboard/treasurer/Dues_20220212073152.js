import Axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
const Dues = () => {
    const {collectionMonth, collectionYear, collectionFor} = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3001/dues/${collectionMonth}/${collectionYear}/${collectionFor}`)
        .then( result => {
            setResults(result.data)
        }).catch(e => {
            console.log(e)
        })
    }, []);
    console.log(results);
    return( 
        <>
            <Navbar />
            <Spacer />
            <BreadCrumbs
            memberDashboard={'member'}
            dashboardLabel={'Member Dashboard'}
            excoDashboard={'treasurer'}
            excoDashboardLabel={'> Treasurer Dashboard'} 
            excoPage={"monthlydues"}
            excoPageLabel={"> Monthly Dues List"}
            excoFinalPage={"dues"}
            excoFinalPageLabel={"> Monthly Dues"}
            activeTextColor1={''}
            activeTextColor2={'text-green-500'} 
            /> 
            <Spacer />
            <Layout>
                <PageTitle 
                <Spacer /> 
                
            </Layout>
            <Footer />
        </>
    )
}
export default  Dues;