import Axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const Dues = () => {
    const collectionMonth = useParams()
    const collectionYear = use
    const collectionFor = useParams();
    const [results, setResults] = useState([]);

    useEffect( () => {
        Axios.get("http://localhost:3001/dues/:collectionMonth/:collectionYear/:collectionFor")
        .then( result => {
            setResults(result.data)
        }).catch(e => {
            console.log(e)
        })
    }, []);
    console.log(results);
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