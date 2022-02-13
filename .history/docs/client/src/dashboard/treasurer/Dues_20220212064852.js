import Axios from "axios";
import {useState, useEffect} from "react";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Dues = () => {
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get("http://localhost:3001/dues/:duesId")
        .then( result => {
            setResults(result.data)
        }).catch(e) {
            cons
        }
    }, []);
    return( 
        <>
            <Navbar />
            <Spacer />
            <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container text-gray-800">
                    <h1 className="font-semibold text-3xl ml-5">Dues</h1>
                    <Spacer />                
                </div>
                <Spacer /> 
                <Footer />
            </div>
        </>
    )
}
export default  Dues;