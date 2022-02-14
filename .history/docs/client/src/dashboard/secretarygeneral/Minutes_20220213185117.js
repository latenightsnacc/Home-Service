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
    const {minuteId} = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3001/notes/${minuteId}`)
        .then( result => {
            console.log(re)
            setResults(result.data)
        }).catch(e => {
            console.log(e)
        })
    }, [minuteId]);
    
    return( 
        <>
            <Navbar />
            <Spacer />
            
            <Layout>
                <BreadCrumbs
                    memberDashboard={'member'}
                    dashboardLabel={'Member Dashboard'}
                    displayLevel1={'inline-block'}
                    excoDashboard={'secretarygeneral'}
                    excoDashboardLabel={'Secretary General Dashboard'} 
                    displayLevel2={'inline-block'}
                    excoPage={"notes"}
                    excoPageLabel={"Notes"}
                    displayLevel3={'inline-block'}
                    excoFinalPage={"minutes"}
                    excoFinalPageLabel={"Minutes"}
                    activeTextColor1={''}
                    activeTextColor2={'text-green-500'} 
                    /> 
                <Spacer />
                <Container>
                    <PageTitle title={`Minutes: ${results.type}`} />
                </Container>
                <Spacer />
                {/* <form>
                <Container>
                    <div className="w-full flex flex-col md:flex-row md:items-center  md:justify-between">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="flex w-full  border-1 border-success py-2  px-3 rounded flex-row items-center text-xs">
                            <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.type}</span>            
                        </div>
                        <div className="my-2 md:my-0 md:ml-3">
                            <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.date}</span>
                        </div> 
                      </div>
                    <div className="flex border-1 border-success rounded flex-row items-center text-xs mb-2 md:mb-0">
                            <div className="flex flex-row items-center">
                                <label className="ml-2" for={"start"}>Start:</label>
                                    <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.start_time}</span>    
                                </div>
                            <div className="flex flex-row items-center ml-2">
                                <label className="ml-2" for={"end"}>End</label>
                                    <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.end_time}</span>     
                                </div>            
                            </div>               
                    </div>
                    <div className="text-xs font-medium md-text-sm py-2 px-3">
                        <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.venue}</span>
                    </div>
                    <div className="text-xs font-medium md-text-sm py-2 px-3">
                        <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.topic}</span>
                    </div>
                    <div className="mt-2 text-xs md:text-sm font-normal">
                        <p className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{results.minutes}</p>
                    </div>    
                   
                    
                </Container>
                </form> */}
                
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  Minutes;