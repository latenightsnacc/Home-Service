import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    useEffect( () => {
        try{
            Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
            }).catch(err => {
                console.log(err)
            })
        }catch(e){
            console.log(e);
        }
    }, []);

    return(
        <div>
            {/* {results.list.map( (val) => {
                return <div>{val.name}</div>
            })} */}
        </div>
    )
}
export default Account;