const FinancialSummary = (props) => {
    return(
        <div className="container my-4">
            <div className="min-w-sm shadow-sm p-2 mt-3 text-sm text-gray-800">
                <div className="flex justify-between items-center">
                    <span className="rounded py-1 px-3 bg-green-100 text-gray-800 ">{props.tag}</span>
                    <span className="text-gray-500 text-xs">{props.date}</span>
                </div>
                <div className="flex flex-col items-center md:flex-row justify-evenly ">
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure1}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle1}</span>
                        </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure2}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle2}</span>
                    </div>
                    <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure3}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle3}</span>
                    </div>
                    {/* <div className="border-0 hover:text-green-500 rounded by-white flex flex-col items-center p-3">
                        <span className="text-xl font-medium">{props.totalFigure4}</span>
                        <span className="text-xs text-gray-500 font-light">{props.totalTitle4}</span>
                    </div> */}
                </div>        
            </div>
        </div>
    )
    
}

export default FinancialSummary;