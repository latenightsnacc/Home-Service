import Axios from "axios";
import { useEffect, useState } from "react";


const Account = () => {
    const [results, setResults] =useState({
        loading: false,
        list:[]
    })

    const fetchData = () => {
        Axios.get("http://localhost:3001/dues")
            .then(Response => {
                console.log(Response.data);
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect( () => {
        try{
            
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