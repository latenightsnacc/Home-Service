const PageTitle = (props) => {
    return(
        <div className="container">
            <h1 className="text-gray-800 text-md font-semibold md:text-2xl">{props.title}</h1>
        </div>
    )
}
export default PageTitle;