import Axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventSummary from "../../components/EventSummary";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Events = () => {
    const navigate = useNavigate();
    const [results, setResults] =useState([]);
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/notes")
            .then(Response => {
                setResults(Response.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    const tagColor = {
        green: 'bg-green-100',
        yellow: 'bg-yellow-100'
    };
    console.log(results);
    return(
        <>
            <Navbar />
            <Spacer />
            <Layout>
                <Container>
                <BreadCrumbs
                memberDashboard={'member'}
                dashboardLabel={'Member Dashboard'}
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'hidden'}
                excoFinalPage={"events"}
                excoFinalPageLabel={"Events"}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Events"} />
                    <Link to={"/dashboard/secretarygeneral/new"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                    
                </Container>
                {results.map(function (record, key) {
                    if(record.type === 'event') {
                        return (
                            <div key={key}
                                className={"hover:cursor-pointer"} 
                                onClick={() => {navigate(`../dashboard/secretarygeneral/notes/${record.id}`)}}>
                                <EventSummary 
                                    tag={record.type}
                                    tagColor={record.type === "meeting" ? tagColor.green : tagColor.yellow}
                                    date={record.date}
                                    topic={record.topic}
                                    venue={record.venue}
                                    text={(record.minutes).length > 300 ? (record.minutes).substring(0, 300) + '...' : record.minutes}
                                />
                            </div>
                            
                        );
                    } else {
                        return null;
                    }
                
                })}
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Events;