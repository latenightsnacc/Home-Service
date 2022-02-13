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
                    <PageTitle title={`${results.id}: ${results[0.type}`} />
                </Container>
                <Spacer />
                <form>
                <Container>
                    <div className="w-full flex flex-col md:flex-row md:items-center  md:justify-between">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="flex w-full  border-1 border-success py-2  px-3 rounded flex-row items-center text-xs">
                              
                              <div className="flex flex-row items-center">
                                  <input
                                      type={"radio"}
                                      id="meeting"
                                      name="type" 
                                      value={"Meeting"}
                                      className="border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                      onChange={getDetails}
                                      onClick={addTopic}
                                  />  
                                  <label className="ml-2" for={"meeting"}>Meeting </label>
                              </div>
                              <div className="flex flex-row items-center ml-2">
                                  <input
                                      type={"radio"}
                                      id="event"
                                      name="type" 
                                      value={"Event"}
                                      className="border-1 rounded ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                      onChange={getDetails}
                                      onClick={addTopic}
                                  /> 
                                  <label className="ml-2" for={"event"}>Event</label>
                              </div>            
                          </div>
                    <input
                        type={"date"}
                        id={"date"}
                        name={"date"} 
                        className="form-input my-2 md:my-0 md:ml-3 w-full  text-xs font-normal rounded  border-1 border-success focus:border-0  px-3 focus:outline-none"
                        onChange={getDate}
                        />  
                      </div>
                      <div className="flex border-1 border-success rounded flex-row items-center text-xs mb-2 md:mb-0">
                                <div className="flex flex-row items-center">
                                <label className="ml-2" for={"start"}>Start:</label>
                                    <input
                                        type={"time"}
                                        id="start"
                                        name="start" 
                                        className="border-0 rounded ring-0 focus:outline-0 focus:ring-0  checked:text-green-400"
                                        onChange={getDetails}
                                    />  
                                    
                                </div>
                                <div className="flex flex-row items-center ml-2">
                                <label className="ml-2" for={"end"}>End</label>
                                    <input
                                        type={"time"}
                                        id="end"
                                        name="end" 
                                        className="border-0  ring-0 focus:outline-0 focus:ring-0 checked:text-green-400"
                                        onChange={getDetails} 
                                    /> 
                                    
                                </div>            
                            </div>               
                    </div>
                    <input
                            type={"text"}
                            id={"venue"}
                            name={"venue"}
                            placeholder={"Venue"}
                            value={newNote.venue} 
                            className="form-input  rounded w-full text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3  fring-0 focus:outline-0 focus:ring-0 "
                            onChange={getDetails}
                            />
                    <div>
                      <input
                        type={"text"}
                        id={"topic"}
                        name={"topic"}
                        placeholder={"Event Topic"}
                        value={newNote.topic}
                        className={`${topic.display} form-input my-2 md:my-0 rounded w-full text-xs font-medium md:text-sm border-1 border-success focus:border-0 py-2 px-3  ring-0 focus:outline-0 focus:ring-0 `}
                        onChange={getDetails}
                        />
                      </div> 
                    
                    
                    <textarea 
                    placeholder="Minutes..."
                    name="minutes"
                    id="minutes"
                    type="text"
                    className="border-1 text-xs md:text-sm rounded mt-2 w-full h-96 p-3 border-1 border-success ring-0 font-normal focus:outline-0 focus:ring-0"
                    value={newNote.minutes}
                    onChange={getDetails}></textarea>
                    <div className="flex w-full  md:justify-start">
                        <div className="w-full md:w-28">
                        <ButtonLg label={"Save"} icon={"fas fa-save"} />
                        </div>
                        
                    </div>
                </Container>
                </form>
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