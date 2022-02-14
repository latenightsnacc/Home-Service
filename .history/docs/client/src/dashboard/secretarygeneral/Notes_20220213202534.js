import Axios from "axios";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AttendanceSummary from "../../components/AttendanceSummary"
import MinuteSummary from "../../components/MinuteSummary";
import BreadCrumbs from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";
import Button from "../../components/Button";

const Notes = () => {
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
    
    for(const row of results){
        if(row.tag ==="meeting") {
            console.log('green');
        } else if (row.tag ==="event") {
            console.log('yellow');
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
                excoDashboard={'secretarygeneral'}
                excoDashboardLabel={'Secretary General Dashboard'} 
                displayLevel2={'hidden'}
                excoFinalPage={"notes"}
                excoFinalPageLabel={"Notes"}
                activeTextColor2={'text-green-500'} 
                />
                <Spacer />
                <div className="flex flex-row h-full items-center justify-between">
                    <PageTitle title={"Notes"} />
                    <Link to={"/dashboard/secretarygeneral/new"}>
                        <Button label="new" icon={`far fa-plus`} />
                    </Link>
                    
                </div>
                    
                </Container>
                {results.map((record, key) => {
                return (
                    <div key={key}
                        className={"hover:cursor-pointer"} 
                        onClick={() => {navigate(`../dashboard/secretarygeneral/notes/${record.id}`)}}>
                        <MinuteSummary 
                            tag={record.type}
                            date={record.date}
                            text={(record.minutes).length > 200 ? (record.minutes).substring(0, 200) + '...' : record,}
                        />
                    </div>
                    
                );
            })}
            </Layout>
            
           
            
            <Footer />
        </>
    )
}

export default Notes;