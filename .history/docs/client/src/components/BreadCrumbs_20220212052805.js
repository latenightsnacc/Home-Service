import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
    static defa
    return(
        <div className="container mx-auto">
            <ul className="flex felex-row text-xs font-500 text-gray-300">
                <Link to={'/'}>
                    <li className={"mr-2 hover:text-green-400"}>Dashboard</li>
                </Link>
                
                <li className={"mr-2 hover:text-green-400"}>{'> Exco Dashboard'}</li>
                <li className={"mr-2 hover:text-green-400"}>{'> Exco Page'}</li>
                <li className={`mr-2 hover:text-green-400 ${props.finalPageColor = 'text-gray-700'}`}>{'> Final Page'}</li>
            </ul>
        </div>
    )
}
export default BreadCrumbs;