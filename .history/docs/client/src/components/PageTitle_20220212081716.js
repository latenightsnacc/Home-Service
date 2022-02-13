const PageTitle = (props) => {
    return(
        <div className="container">
            <h1 className="text-gray-700 font-bold md:text-xl lg:text-3xl">{props.title}</h1>
        </div>
    )
}
export default PageTitle;