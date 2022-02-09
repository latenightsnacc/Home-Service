import {Link} from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="w-full md:w-5/6 md:mx-auto">
                <div className="container ">
            <div className="shadow-sm">
                <ul className="flex justify-evenly text-center py-2">
                    <li className="mx-2">
                        <Link to={props.link1}>
                            <div className={`${props.textClr1} text-semibold no-underline hover:no-underline  p-2 hover:text-green-500`}>
                                <span><i className="fas fa-th-list"></i></span> 
                                <span className="hidden ml-1 md:inline-block">{props.navitem1}</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={props.link2}>
                            <div className={`${props.textClr2} text-semibold no-underline hover:no-underline  p-2 hover:text-green-500`}>
                                <span><i className="far fa-clipboard"></i></span> 
                                <span className="hidden ml-1 md:inline-block">{props.navitem2}</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={props.link3}>
                            <div className={`${props.textClr3} text-semibold no-underline hover:no-underline  p-2 hover:text-green-500`}>
                            <span><i className="far fa-edit"></i></span> 
                            <span className="hidden ml-1 md:inline-block">{props.navitem3}</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={props.link4}>
                            <div className={`${props.textClr4} text-semibold no-underline hover:no-underline  p-2 hover:text-green-500`}>
                                <span><i className="far fa-file-alt"></i></span> 
                                <span className="hidden ml-1 md:inline-block">{props.navitem4}</span>
                            </div>
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to={props.link5}>
                            <div className={`${props.textClr5} text-semibold no-underline hover:no-underline  p-2 hover:text-green-500`}>
                            <span><i className="far fa-calendar-alt"></i></span> 
                            <span className="hidden ml-1 md:inline-block">{props.navitem5}</span>
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