import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    let results = [];
    useEffect( () => {
        try{
            Axios.get("http://localhost/members")
            .then(Response => results = Response.data)
            .catch(err => {
                console.log(err)
            }).finally( () => ret)
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