import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    const [results, setResults] = useState([]);
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                setResults(Response.data);
            })
            .catch(err => {
                console.log(err)
            })
        }catch(e){
            console.log(e);
        }
    })
   console.log()
    return(
        <div>
            <h1>Account</h1>
        </div>
    )
}
export default Account;