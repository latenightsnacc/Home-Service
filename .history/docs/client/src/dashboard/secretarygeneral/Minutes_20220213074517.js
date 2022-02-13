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
const Minutes = () => {
    const {minuteId, minuteType} = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3001/dues/${minuteId}/${minuteType}`)
        .then( result => {
            setResults(result.data)
        }).catch(e => {
            console.log(e)
        })
    }, [minuteId,minuteType]);
    
    return( 
        <>
            <Navbar />
            <Spacer />
            
            <Layout>
                <BreadCrumbs
                    memberDashboard={'member'}
                    dashboardLabel={'Member Dashboard'}
                    displayLevel1={'inline-block'}
                    excoDashboard={'treasurer'}
                    excoDashboardLabel={'Treasurer Dashboard'} 
                    displayLevel2={'inline-block'}
                    excoPage={"monthlydueslist"}
                    excoPageLabel={"Monthly Dues List"}
                    displayLevel3={'inline-block'}
                    excoFinalPage={"dues"}
                    excoFinalPageLabel={"Dues"}
                    activeTextColor1={''}
                    activeTextColor2={'text-green-500'} 
                    /> 
                <Spacer />
                <Container>
                    <PageTitle title={`${results[0].id}: ${results[0].type}`} />
                </Container>
                <Spacer />
                <Container>
                    <form>
                        <table className="table table-sm table-auto table-bordered border-success table-hover text-xs md:text-sm bg-white rounded">
                                    <thead>
                                        <tr className="h-8">
                                            <th scope="col" className="text-left w-auto">No.</th>
                                            <th scope="col" className="text-left hidden md:table-cell">Name</th>
                                            <th scope="col" className="text-left"> Statecode</th>
                                            <th scope="col" className="text-left ">Batch</th>
                                            <th scope="col" className="text-left ">Paid</th>
                                            <th scope="col" className="text-left ">Unpaid</th>
                                            <th scope="col" className="text-left ">Amount Paid (₦)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-light">
                                                                 
                                    </tbody>
                        </table> 
                    </form>
                </Container>
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  Minutes;