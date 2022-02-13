import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
   
    return(
        <div className="container mx-auto">
            <ul className="flex flex-row text-xs font-500 text-gray-300">
                <Link to={`/dashboard/${props.memberDashboard}`}>
                
                    <li className={"mr-2 hover:text-green-400"}>
                        <span><i className={props.dashboardIcon}></i></span>
                        <span className="hidden md:ml-1 md:inline-block">{props.dashboardLabel}</span>
                    </li>
                </Link>
                <span className={`mx-1 ${props.displayLevel1}`}>{'>'}</span>
                <Link to={`/dashboard/${props.excoDashboard}`}>
                    <li className={"mr-2 hover:text-green-400"}>
                        <span><i className={props.excoDashboardIcon}></i></span>
                        <span className="hidden md:ml-1 md:inline-block">{props.excoDashboardLabel}</span>
                    </li>

                </Link>
                <span className={`mx-1 ${props.displayLevel2}`}>{'>'}</span>
                <Link to={`/dashboard/${props.excoDashboard}/${props.excoPage}`}>
                    <li className={`mr-2 hover:text-green-400 ${props.activeTextColor1}`}>{props.excoPageLabel}</li>
                </Link>
                <span className={`mx-1 ${props.displayLevel3}`}>{'>'}</span>
                <Link to={`/dashboard/${props.excoDashboard}/${props.excoFinalPage}`}>
                    <li className={`mr-2 hover:text-green-400 ${props.activeTextColor2}`}>{props.excoFinalPageLabel}</li>
                </Link>
                
            </ul>
        </div>
    )
}
BreadCrumbs.defaultProps ={
    dashboardIcon: "fa-solid fa-house-user",
    excoDashboardIcon: "fa-solid fa-house",
    excoPage: null,
    excoPageLabel:null,
    excoFinalPage: null,
    excoFinalPageLabel:null,
    activeTextColor1: 'text-gray-300',
    activeTextColor2: 'text-green-300'
}
export default BreadCrumbs;