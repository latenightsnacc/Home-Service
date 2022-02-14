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
            console.log(result.data);
            setResults(result.data);
        }).catch(e => {
            console.log(e)
        })
    }, [minuteId]);
    let tagColor = '';
    const min = results;
    if(min[0].type === 'meeting') {
        tagColor = 'bg-green-100';
    } else if(min[0].type === "event"){
        tagColor = "bg-yellow-100";
    }
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
                    <PageTitle title={`Minutes: ${''}`} />
                </Container>
                <form className="mt-2">
                    <Container>
                        <div className="w-full flex flex-col md:flex-row md:items-center  md:justify-between">
                        <div className="flex flex-row justify-between my-1 items-center">
                            <div className="flex w-full rounded flex-row items-center text-xs md:text-sm">
                                <p className={`rounded py-2 px-3 ${tagColor}`}>{min[0].type}</p>            
                            </div>
                            <div className="text-xs w-full font-medium md:text-sm my-2">
                            <p className="rounded  py-2">{min[0].date}</p>
                        </div>
                        </div>
                        <div className="flex  rounded flex-row justify-between px-3 items-center text-xs my-1 md:mb-0">
                                <div className="flex flex-row items-center">
                                    <label className="mr-1" for={"start"}>Start:</label>
                                        <span className="rounded py-1">{'results[0].start_time'}</span>    
                                    </div>
                                <div className="flex flex-row items-center ml-2">
                                    <label className="mr-1" for={"end"}>End</label>
                                        <span className="rounded py-1 ">{'results[0].end_time'}</span>     
                                    </div>            
                                </div>               
                        </div>
                        <div className="text-xs font-medium md:text-sm ">
                            <p className="rounded py-2 px-3 my-2">{'results[0].venue'}</p>
                        </div>
                        <div className="text-xs font-medium md:text-sm ">
                            <p className="rounded py-2 px-3 my-2">{'results[0].topic'}</p>
                        </div>
                        <div className="mt-2 text-xs md:text-sm font-normal">
                            <p className="rounded py-2 px-3 ">{'results[0].minutes'}</p>
                        </div>    
                    
                        
                    </Container>
                </form> 
                
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  Minutes;