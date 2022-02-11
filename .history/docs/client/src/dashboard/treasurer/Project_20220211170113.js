import Axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
    const [results, setResults] =useState([]);
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                setResults(Response.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
     
    console.log(results);
    return(
        <div>
            <h1>Projects</h1>
            {results.map(record => {
                return (
                    <div key={record.record_id}>
                        <p>{record.name}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default Project;