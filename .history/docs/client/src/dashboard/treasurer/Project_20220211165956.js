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
            {results.map(record => {
                return (
                    <div>

                    </div>
                );
            })}
        </div>
    )
}
export default Project;