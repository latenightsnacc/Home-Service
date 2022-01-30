import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = () => {

    return (
        <header className="shadow-sm bg-white sticky top-0 z-50 py-2">
            <div className="container">
                <nav className="flex flex-row justify-between items-center">
                    <Link to={'/dashboard/member'}>
                        <span className="block w-4/6 md:w-4/6">
                            <img src={Logo}  alt="" className="w-80 md:w-96" />
                        </span>
                    </Link>
                    
                    <a  href="../index.html" 
                    className="text-sm font-light py-2 px-3 shadow-sm flex items-center no-underline rounded bg-gray-100 bg-opacity-50 hover:bg-opacity-100 hover:bg-green-500 text-sm text-black hover:text-white flex items-center">
                        <span><i className="fas fa-sign-out-alt"></i></span>
                        <span className="pr-2 hidden md:inline ml-1">Log Out</span> 
                </a>
                </nav>
            </div>
    </header>
    )
}

export default Navbar;