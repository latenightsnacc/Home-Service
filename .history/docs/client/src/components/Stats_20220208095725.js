import {Link} from 'react-router-dom';


const Stats = (props) => {
    return (
        <div className={`container`}>
            <div className="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                
                <div className="h-4"></div>
                <div className="flex flex-col items-center md:flex-row justify-evenly ">
                    <Link to={"../dashboard/secretarygeneral/members"}>
                        <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                            <span className="text-xl font-medium">{props.totalFigure1}</span>
                            <span className="text-xs text-gray-500 font-light">{props.totalTitle1}</span>
                        </div>
                    </Link>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure2}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle2}</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure3}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle3}</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure4}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle4}</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Stats;