import { useNavigate } from "react-router-dom";

const MemberMenu = (props) => {
    const navigate = useNavigate();
    return(
        <div className="flex mx-auto w-full text-xs md:text-sm  justify-around flex-row items-center md:w-4/6 lg:w-5/6 border-y border-y-green-400  md:pl-5">
            <div className={`${props.itemColor1} no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}
                onClick={( () => { navigate("/dashboard/member")})}>
                <span><i className="fas fa-th-list"></i></span> 
                <span className="ml-1 md:inline-block">Dashboard</span>
            </div>
            <div className={`${props.itemColor2} text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}
                onClick={( () => { navigate("/dashboard/member/attendance")})}>
                <span><i className="far fa-clipboard"></i></span> 
                <span className="ml-1 md:inline-block">Attendance</span>
            </div>
            <div className={`${props.itemColor3} text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}
                onClick={( () => { navigate("/dashboard/member/dues")})}>
                <span><i className="far fa-calendar-alt"></i></span> 
                <span className="ml-1 md:inline-block">Dues</span>
            </div>
            <div className={`${props.itemColor4} text-semibold no-underline hover:cursor-pointer hover:no-underline p-2 hover:text-green-500 lg:mr-5`}
                onClick={( () => { navigate("/dashboard/member/profile")})}>
                <span><i class="fa-solid fa-gear"></i></span> 
                <span className="hidden ml-1 md:inline-block">Profile</span>
            </div>
        </div> 
    )
}

export default MemberMenu;