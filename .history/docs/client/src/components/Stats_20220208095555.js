import {Link} from 'react-router-dom';


const Stats = (props) => {
    return (
        <div className={`container`}>
            <div className="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                
                <div className="h-4"></div>
                <div className="flex flex-col items-center md:flex-row justify-evenly ">
                    <Link to={"../dashboard/secretarygeneral/members"}>
                        <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                            <span className="text-xl font-medium">{props.totalFigure}</span>
                            <span className="text-xs text-gray-500 font-light">Total Members</span>
                        </div>
                    </Link>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">76</span>
                        <span className="text-xs text-gray-500 font-light">Total Meetings</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">5</span>
                        <span className="text-xs text-gray-500 font-light">Total Events</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">₦18,600.00</span>
                        <span className="text-xs text-gray-500 font-light">Total Fees Collected</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Stats;