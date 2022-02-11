import Axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
    const [results, setResults] =useState([])
    
    const fetchData = () => {
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                setResults(Response)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
     
    console.log(results.list[0].name);
    return(
        <div>
            {/* {results.list.map(record => {
                return <p key={record.id}>{record.name}</p>
            })} */}
        </div>
    )
}
export default Project;