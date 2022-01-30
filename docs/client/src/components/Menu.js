import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container ">
            <div className="shadow-sm">
                <ul className="flex justify-evenly text-center py-2">
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="fas fa-th-list"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral/attendance"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="far fa-clipboard"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Attendance</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral/notes"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-edit"></i></span> 
                            <span className="hidden ml-1 md:inline-block">Notes</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral/reports"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                                <span><i className="far fa-file-alt"></i></span> 
                                <span className="hidden ml-1 md:inline-block">Reports</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={"../dashboard/secretarygeneral/events"}>
                            <div className="text-green-500 text-semibold no-underline hover: hover:no-underline  p-2 hover:text-green-500">
                            <span><i className="far fa-calendar-alt"></i></span> 
                            <span className="hidden ml-1 md:inline-block">Events</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}

export default Menu;