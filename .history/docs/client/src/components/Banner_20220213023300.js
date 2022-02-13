

const Banner = (props) => {
    return (
        <div className="container bg-green-500">
            <div className="text-white rounded shadow-sm py-5 px-4">
                <div className="font-semibold text-3xl"><span className="font-light">Welcome back,</span> <br/>{props.position}</div>
                <div className="my-2">
                    <span><i className="far fa-calendar-alt"></i></span><span className="text-xs mx-1">{new Date().getU()}</span>

                </div> 
                <div>
                    <a href="../exco.html" className="text-sm  text-white no-underline hover:underline">&larr; Back to my profile</a> 

                </div>       
            </div>
    </div>
    )
}
export default Banner;