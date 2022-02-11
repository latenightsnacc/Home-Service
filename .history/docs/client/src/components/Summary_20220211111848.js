const Summary = (props) => {
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                <div className="flex justify-between items-center">
                    <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{props.tag}</span>
                    <span className="text-gray-500 text-xs">{props.date}</span>
                </div>
                <p className="py-2 text-gray-500 leading-7">{props.text}</p>        
            </div>
        </div>
    )
}

export default Summary;