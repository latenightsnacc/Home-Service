import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
   
    return(
        <div className="container mx-auto">
            <ul className="flex felex-row text-xs font-500 text-gray-300">
                <Link to={`/dashboard/${props.memberDashboard}`}>
                <button  type="submit" className="inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                
        </button>
                    <li className={"mr-2 hover:text-green-400"}>
                        <span><i className={props.dashcon}></i></span>
                        <span className="hidden md: ml-1 md:inline-block">{props.dashboardLabel}/span>
                        
                        </li>
                </Link>
                <Link to={`/dashboard/${props.excoDashboard}`}>
                    <li className={"mr-2 hover:text-green-400"}>{props.excoDashboardLabel}</li>

                </Link>
                <Link to={`/dashboard/${props.excoDashboard}/${props.excoPage}`}>
                    <li className={`mr-2 hover:text-green-400 ${props.activeTextColor1}`}>{props.excoPageLabel}</li>
                </Link>
                <Link to={`/dashboard/${props.excoDashboard}/${props.excoPage}/${props.excoFinalPage}`}>
                    <li className={`mr-2 hover:text-green-400 ${props.activeTextColor2}`}>{props.excoFinalPageLabel}</li>
                </Link>
                
            </ul>
        </div>
    )
}
BreadCrumbs.defaultProps ={
    activeTextColor1: 'text-gray-300',
    activeTextColor2: 'text-green-300'
}
export default BreadCrumbs;