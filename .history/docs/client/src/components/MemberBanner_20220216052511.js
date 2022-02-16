const MemberBanner = () => {
    return(
        <div className="flex flex-row items-center justify-center">
            <div className="w-2/6 lg:w-1/6">
                    <img 
                    className="rounded-full" 
                    src={''} 
                    alt={"Deborah Egonu"} />
            </div>
            <div className="ml-5 md:ml-10 ">
                <h1 className="leading-7 font-medium  md:text-2xl mb-1">Welcome back, Deborah</h1>
                <div className="flex flex-col text-sm text-gray-700 md:text-base">
                    <span className="font-medium">Statecode: EN/21A/0324</span>
                    <span className="my-1 font-medium text-green-500">CDS Group: I.C.T</span>
                    <span className="text-xs font-medium text-gray-400  md:text-sm">{(new Date()).toLocaleDateString('en-US',{
                        weekday: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        month: 'short'
                    })}</span>
                </div>
            </div>
    </div>
    )
}

export default MemberBanner;