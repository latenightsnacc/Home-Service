import { useNavigate } from "react-router-dom";

const Banner = (props) => {
    const navigate = useNavigate();
    return (
        <div className="container bg-green-500">
            <div className="text-white rounded shadow-sm py-5 px-4">
                <div className="font-semibold text-3xl"><span className="font-light">Welcome back,</span> <br/>{props.position}</div>
                <div className="my-2">
                    <span className="text-xs mx-1">{(new Date()).toUTCString()}</span>
                </div> 
                <div className="hover:cursor-pointer" onClick={() => { navigate("../dashboard/member")}}>
                    <span className="text-sm  text-white no-underline ">&larr; Back to my profile</span> 
                </div>       
            </div>
    </div>
    )
}
export default Banner;