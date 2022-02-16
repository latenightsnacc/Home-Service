import { useNavigate } from "react-router-dom";

const MemberMenu = () => {
    const navigate = useNavigate()
    return(
        <div className="flex mx-auto w-full text-xs md:text-sm lg:text-base justify-around flex-row items-center md:w-4/6 lg:w-5/6 border-y border-y-green-400  md:pl-5">
            <div className={`text-gray-300 no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                <span><i className="fas fa-th-list"></i></span> 
                <span className="ml-1 md:inline-block">Dashboard</span>
            </div>
            <div className={`text-green-400 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                <span><i className="far fa-clipboard"></i></span> 
                <span className="ml-1 md:inline-block">Attendance</span>
            </div>
            <div className={`text-gray-300 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                <span><i className="far fa-calendar-alt"></i></span> 
                <span className="ml-1 md:inline-block">Dues</span>
            </div>
            <div className={`text-gray-300 text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}>
                <span><i class="fa-solid fa-gear"></i></span> 
                <span className="hidden ml-1 md:inline-block">Profile</span>
            </div>
        </div> 
    )
}

export default MemberMenu;