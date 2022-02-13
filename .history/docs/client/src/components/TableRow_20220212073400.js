const TableRow = () => {
    return(
        <tr className='hover:bg-white hover:text-green-500' key={val.id}>
                                    <td>{val.id}</td>
                                    <td>
                                        <img src={val.profile_pic} alt={val.name} /> 
                                    </td>
                                    <td>{val.name}</td>
                                    <td>{val.state_code}</td>
                                    <td>{val.batch}</td>
                                    <td>Member</td>
                                    <td>{val.lga}</td>
                                    <td>{val.ppa}</td>
                                    <td>{val.phone}</td>
                                </tr>
    )
}