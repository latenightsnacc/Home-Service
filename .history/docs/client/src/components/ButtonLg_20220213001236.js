const Button = (props) => {
    return(
        <>
            <button  type="submit" className="my-1 mr-1 lg:mr-2 inline-block px-3 py-2 rounded tracking-wide text-gray-800 bg-gray-100 bg-opacity-50 hover:bg-green-100 text-xs text-left md:text-right md:text-sm capitalize shadow-sm flex items-center">
                <span>
                    <i className={props.icon}></i>
                </span>
                <span className="hidden md: ml-1 md:inline-block">{props.label}</span>
        </button>
        </>
        
    )
}
export default Button;