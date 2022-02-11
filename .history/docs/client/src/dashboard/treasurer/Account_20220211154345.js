import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    let results = [];
    useEffect( () => {
        try{
            Axios.get("http://localhost/members").then(Response =)
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