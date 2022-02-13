import {Link}  from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Spacer from "../../components/Spacer";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

const NewMonthlyDues = () => {
    const [loading, setLoading] = useState(null);
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [dues, setDues] = useState([]);
    const [fee, setFee] = useState([]);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [date, setDate] = useState({
        date_recorded:new Date(),
        month: months[new Date().getMonth()],
        year: new Date().getFullYear()
    });
    const [newCollection, setNewCollection] = useState('');

    const paidDues = (e) => {
        setDues({
            ...dues,
            [e.target.name]: e.target.value
        })
    };
    useEffect(() => {
        
            Axios.get("http://localhost:3001/members")
            .then(Response => {
                setList(Response.data)
            })
            .catch (error => {
                console.error("Error fetching data:", error);
                setError(error);
            })
            .finally( () => setLoading(false));
        
    }, [])
    
    const getDate =() => {
        setDate({
            date_recorded:new Date().toLocaleDateString(),
            month: months[new Date().getMonth()],
            year: new Date().getFullYear()
        })
        
    }
    const getCollection =(e) => {
        setNewCollection(e.target.value)
    };
    const getAmount =(e) => {
        setFee({
            ...fee,
            [e.target.name]: e.target.value
        })
        
    };
    const rr = [];
    const trySending = (e) => {
        e.preventDefault();
        const duesCollected = dues;
        const amountCollected = fee;
        const duesKeys =Object.keys(duesCollected);
        let d; let p;
        duesKeys.forEach(function (f) {
            list.map(function(c) {
                let l = c.id;
                d = `dues_${l}`;
                p = `amount_${l}`;
                if(f.endsWith(l)){
                    rr.push({
                        collection_date: date.date_recorded,
                        dues_for: date.month,
                        year:date.year,
                        collection: newCollection, 
                        newCollection_dues:duesCollected[d],
                        amt_paid:amountCollected[p] === undefined ? "0": amountCollected[p],
                        id:c.id,
                        name:c.name,
                        statecode:c.state_code,
                        batch: c.batch,
                        lga:c.lga,
                        cds_group:c.cds_group
                    }); 
                   
                } else {
                return 'end';  
                }
                return rr;  
            });
        })
        console.log(rr);
        try{
            Axios.post("http://localhost:3001/try", {
                ...rr
            }).then( r => {
                return r;
            })
        }catch(e){
            console.log(e);
        } 
    }
    if (loading) return 'Loading';
    if (error) return 'error';
    return(
        <>
        <Navbar />
        <Spacer />
        <Layout>
            <Container
        </Layout>
        <div className="w-full md:w-5/6 md:mx-auto">
                
            </div>
            <Footer />
    </>
    )
    
}

export default NewMonthlyDues;