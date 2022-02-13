import { Link } from "react-router-dom";

const BreadCrumbs = () => {
    return(
        <div className="container mx-auto bg-red-500">
            <ul className="flex felex-row text-xs text-gray-300">
                <Link to={'/'}>
                    <li className={"mr-2"}>Dashboard</li>
                </Link>
                
                <li className={"mr-2"}>{'> Exco Dashboard'}</li>
                <li>{'> Exco Page'}</li>
                <li>{'> Final Page'}</li>
            </ul>
        </div>
    )
}
export default BreadCrumbs;