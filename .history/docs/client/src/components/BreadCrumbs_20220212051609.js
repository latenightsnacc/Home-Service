import { Link } from "react-router-dom";

const BreadCrumbs = () => {
    return(
        <div className="container mx-auto">
            <ul className="flex felex-row text-xs font-500 text-gray-300">
                <Link to={'/'}>
                    <li className={"mr-2 hover:text-green-400"}>Dashboard</li>
                </Link>
                
                <liclassName={"mr-2 hover:text-green-400"}>{'> Exco Dashboard'}</li>
                <li>{'> Exco Page'}</li>
                <li>{'> Final Page'}</li>
            </ul>
        </div>
    )
}
export default BreadCrumbs;