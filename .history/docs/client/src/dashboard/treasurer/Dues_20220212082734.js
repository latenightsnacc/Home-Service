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
    }, [collectionMonth,collectionYear,collectionFor]);
    
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
                    excoPage={"monthlydueslist"}
                    excoPageLabel={"> Monthly Dues List"}
                    excoFinalPage={"dues"}
                    excoFinalPageLabel={"> Dues"}
                    activeTextColor1={''}
                    activeTextColor2={'text-green-500'} 
                    /> 
                <Spacer />
                <Container>
                    <PageTitle title={`${results[0].collection_for}: ${results[0].collection_month} ${results[0].collection_year}`} />
                </Container>
                <Spacer />
                <Container>

                </Container>
                
                <Spacer /> 
                
            </Layout>
            <Footer />
        </>
    )
}
export default  Dues;