const ButtonLg = (props) => {
    return(
        <>
            <button  type="submit" className="my-1 w-full block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-center md:text-sm capitalize shadow-sm flex flex-row justify-center items-center">
                <span>
                    <i className={props.icon}></i>
                </span>
                <span className="ml-1 md:inline-block">{props.label}</span>
        </button>
        </>
        
    )
}
export default ButtonLg;