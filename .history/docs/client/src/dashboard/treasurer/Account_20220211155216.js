import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
   let results = [];
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
                results = Response.data;
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
            >
        </div>
    )
}
export default Account;