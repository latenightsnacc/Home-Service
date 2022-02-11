import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
   let [results, setResults] = useState({
       loading: true,
       list: null
   });
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                setResults
            })
            .catch(err => {
                console.log(err)
            }).finally( () => { return results })
        }catch(e){
            console.log(e);
        }
    })
   console.log(results);
    return(
        <div>
            {results.map( (val) => {
                return <div>{val.name}</div>
            })}
        </div>
    )
}
export default Account;