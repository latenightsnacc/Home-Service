const EventSummary = (props) => {
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow-sm p-2 mt-3 text-xs md:text-sm text-gray-800">
                <div className="flex justify-between my-1 items-center">
                    <span className={`rounded py-2  px-1 text-xs capitalize ${props.tagColor} text-gray-800`}>{props.tag}</span>
                    <span className="text-gray-500 text-xs">{props.date}</span>
                </div>
                <div className=" flex flex-col leading-7 font-medium text-gray-800 pt-4 capitalize">
                        <div><span className="mr-1">Topic:</span> <span>{props.topic}</span></div>
                        <div><span className="mr-1">Venue:</span> <span>{props.venue}</span></div>
                    </div>
                <p className="py-2 text-gray-500 leading-7">{props.text}</p>        
            </div>
        </div>
    )
}

export default EventSummary;