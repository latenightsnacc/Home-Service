import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    const [results, setResults] = use;
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }catch(e){
            console.log(e);
        }
    })
   
    return(
        <div>
            <h1>Account</h1>
        </div>
    )
}
export default Account;