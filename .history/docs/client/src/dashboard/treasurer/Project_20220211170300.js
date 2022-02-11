import Axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
    
    return(
        <div>
            <h1>Projects</h1>
            {results.map(record => {
                return (
                    <div key={record.record_id}>
                        <p>{record.corper_name}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default Project;