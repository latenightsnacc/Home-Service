import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
   let results, setResults] = useState([]);
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                
            })
            .catch(err => {
                console.log(err)
            })
        }catch(e){
            console.log(e);
        }
    })
   console.log(results);
    return(
        <div>
            <h1>Account</h1>
        </div>
    )
}
export default Account;