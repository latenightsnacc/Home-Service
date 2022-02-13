import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
   
    return(
        <div className="container mx-auto">
            <ul className="flex felex-row text-xs font-500 text-gray-300">
                <Link to={'/'}>
                    <li className={"mr-2 hover:text-green-400"}>Dashboard</li>
                </Link>
                
                <li className={"mr-2 hover:text-green-400"}>{'> Exco Dashboard'}</li>
                <li className={"mr-2 hover:text-green-400"}>{'> Exco Page'}</li>
                <li className={`mr-2 hover:text-green-400 ${props.activeTextColor}`}>{'> Final Page'}</li>
            </ul>
        </div>
    )
}
BreadCrumbs.defaultProps ={
    activeTextColor: 'text-green-500'
}
export default BreadCrumbs;