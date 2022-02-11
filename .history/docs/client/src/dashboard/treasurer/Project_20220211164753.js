import Axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
    const [results, setResults] =useState({
        loading: null,
        list:[]
    })
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                setResults({
                    loading:false,
                    list: Response.data
                })
            }).catch(err => {
                console.log(err)
            }).finally( () => {
                setResults({
                    loading:false   
                })
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
     
    return(
        <div>
            {results.list.map}
        </div>
    )
}
export default Project;