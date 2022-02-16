const AttendanceSummary = (props) => {
    return(
        <div className="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                <div className="flex justify-between items-center">
                    <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{props.tag}</span>
                    <span className="text-gray-500 text-xs ">{props.date}</span>
                </div>
                <div className="h-4"></div>
                <div className="flex flex-col items-center md:flex-row justify-evenly ">
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-lg font-medium">{props.attendeesTotal}</span>
                        <span className="text-xs text-gray-500 font-light">Total Attendees</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-lg font-medium">{props.absenteesTotal}</span>
                        <span className="text-xs text-gray-500 font-light">Total Absentees</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-lg font-medium">{props.lateAttendeesTotal}</span>
                        <span className="text-xs text-gray-500 font-light">Late Attendees</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-lg font-medium">{props.lateFee}</span>
                        <span className="text-xs text-gray-500 font-light">Late Fee Collected</span>
                    </div>
                </div>
                
            </div>
    )
}

export default AttendanceSummary;