import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    const [results, setResults] =useState({
        loading: false,
        list:[]
    })
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                setResults({
                    loading:false,
                    count: 8,
                    list: Response.data
                })
            }).catch(err => {
                console.log(err)
            }).finally( () => {
                setResults({
                    loading:false,
                    count: 0,
                    list: Response.data
                })
            })
    }
    useEffect( () => {
        fetchData();
    }, []);
        
    

    return(
        <div>
            {/* {results.list.map( (val) => {
                return <div>{val.name}</div>
            })} */}
        </div>
    )
}
export default Account;