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
                <span className={`m${props.displayLevel1}`}>{'>'}</span>
                <Link to={`/dashboard/${props.excoDashboard}`}>
                    <li className={"mr-2 hover:text-green-400"}>
                        <span><i className={props.excoDashboardIcon}></i></span>
                        <span className="hidden md:ml-1 md:inline-block">{props.excoDashboardLabel}</span>
                    </li>

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
    dashboardIcon: "fa-solid fa-house-user",
    excoDashboardIcon: "fa-solid fa-house",
    activeTextColor1: 'text-gray-300',
    activeTextColor2: 'text-green-300'
}
export default BreadCrumbs;