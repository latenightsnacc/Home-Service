const TableRow = ({children, props}) => {
    return <tr className='hover:bg-white hover:text-green-500' key={props.rowKey} >{children}</tr>
}

export default TableRow;