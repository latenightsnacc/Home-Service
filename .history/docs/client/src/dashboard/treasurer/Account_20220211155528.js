import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
   let results = [];
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                results.push(Response.data);
            })
            .catch(err => {
                console.log(err)
            }).finally
        }catch(e){
            console.log(e);
        }
    })
   console.log(results);
    return(
        <div>
            {results.map( (val) => {
                return <div>{val[0].name}</div>
            })}
        </div>
    )
}
export default Account;