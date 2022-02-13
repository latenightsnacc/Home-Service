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
                    {results.map(val => {
                        return (
                            <tr className='text-xs hover:bg-gray-50 hover:text-green-500' id={val.record_id} key={val.record_id}>
                                <td className="text-left" >
                                {val.record_id}
                                </td>
                                <td className="hidden md:table-cell">
                                {val.corper_name}
                                </td>
                                <td className="">
                                {val.corper_statecode}
                                </td>
                                <td className="text-left">
                                {val.corper_batch}
                                </td>
                                
                                <td className="text-center">
                                    <input 
                                        type="radio"
                                        name={`dues_${val.corper_id}`}
                                        id={"paid"}
                                        value={"paid"} 
                                        className="form-checkbox mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-yellow-400 "
                                        checked={val.amount_paid !== '0' ? true : false}
                                        />
                                </td>
                                <td className="text-center">
                                    <input 
                                        type="radio"
                                        name={`dues_${val.corper_id}`}
                                        id={"not-paid"}
                                        value={"not-paid"} 
                                        className="form-checkbox mt-2 hover:text-green-400 focus:text-green-400 focus:no-outline checked:text-green-400 checked:border-0 checked:border-yellow-400 "
                                        checked={val.amount_paid === '0' ? true : false}
                                        />
                                </td>
                                <td className="text-left">
                                    <input 
                                        type="text"
                                        name={`amount_${val.id}`}
                                        id={`amount_${val.id}`}
                                        value={val.amount_paid} 
                                        className="form-input p-2 rounded border-0 focus:border-0 focus:ring-0 focus:no-outline "
                                        
                                        />
                                </td>
                                
                            </tr>
                        )
                        
                    })}  
                    </form>
                </Container>
            </Layout>
            <Spacer /> 
            <Footer />
        </>
    )
}
export default  Minutes;