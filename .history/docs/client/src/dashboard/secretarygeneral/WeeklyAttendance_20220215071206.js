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
const WeeklyAttendance = () => {
    const {date} = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get(`http://localhost:3001/notes/${date}`)
        .then( result => {
            console.log(result.data);
            setResults(result.data);
        }).catch(e => {
            console.log(e)
        })
    }, [date]);
    let tagColor = '';
    let display = 'hidden';
    let min = {
        type: '',
        date:'',
        start: '',
        end: '',
        topic:'',
        venue:'',
        text:''
    };
    if(results.length > 0 ){
        min = {
            type: results[0].type,
            date: results[0].date,
            start: results[0].start_time,
            end: results[0].end_time,
            topic: results[0].topic,
            venue: results[0].venue,
            text: results[0].minutes
        };
        if(min.type === 'meeting' || (min.type === 'Meeting')) {
            tagColor = 'bg-green-100';
            display = "hidden";
        } else if(min.type === "event"){
            tagColor = "bg-yellow-100";
            display = "block";
        }
    }
    
    return( 
        <>
            <Navbar />
            <Spacer />
            
            <Layout>
                
                <Container>
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
                    <PageTitle title={`Minutes for ${min.type} on ${(new Date(min.date)).toLocaleDateString('en-US',{
                        weekday: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        month: 'short'
                    })}`} />
                </Container>
                <form className="mt-2">
                    <Container>
                        <div className="w-full flex flex-col md:flex-row md:items-center  md:justify-between">
                        <div className="flex flex-row w-full justify-between my-1 items-center">
                            <div className="flex w-full rounded flex-row items-center text-xs md:text-sm">
                                <p className={`rounded ml-2 py-2 px-3 capitalize ${tagColor}`}>{min.type}</p>            
                            </div>
                            
                            
                        </div>
                        <div className="flex  rounded flex-row justify-between  items-center text-xs md:text-sm my-1 md:mb-0">
                                <div className="flex flex-row px-3 items-center">
                                    <label className="mr-1" for={"start"}>Start:</label>
                                    <span className="rounded py-1">{min.start}</span>    
                                </div>
                                <div className="flex flex-row justify-end w-32 text-right items-center ml-2">
                                    <label className="mr-1" for={"end"}>End:</label>
                                        <span className="rounded py-1 ">{min.end}</span>     
                                    </div>            
                                </div>               
                        </div>
                        <div className="flex py-2 px-3 my-1 flex-row items-center text-xs font-medium md:text-sm">
                            <label className="mr-1" for={"venue"}>Venue:</label>
                            <span className="">{min.venue}</span>    
                        </div>
                        <div className={`${display} flex py-2  px-3 my-1 flex-row items-center text-xs font-medium md:text-sm`}>
                            <label className="mr-1" for={"topic"}>Topic:</label>
                            <span className="">{min.topic}</span>    
                        </div>
                        <div className="mt-1 text-xs md:text-sm font-normal">
                            <p className="rounded py-2 px-3 leading-loose ">{min.text}</p>
                        </div>    
                    
                        
                    </Container>
                </form> 
                
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  WeeklyAttendance;