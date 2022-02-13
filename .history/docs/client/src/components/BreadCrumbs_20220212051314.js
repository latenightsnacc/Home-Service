import {Link } from "react";

const BreadCrumbs = () => {
    return(
        <div className="container mx-auto bg-red-500">
            <ul className="flex felex-row text-xs">
                <Link to=
                <li className="mr-2">Dashboard</li>
                <li className="mr-2">{'> Exco Dashboard'}</li>
                <li>{'> Exco Page'}</li>
                <li>{'> Final Page'}</li>
            </ul>
        </div>
    )
}
export default BreadCrumbs;