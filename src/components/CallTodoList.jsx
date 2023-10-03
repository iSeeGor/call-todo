import TableItem from './Table/TableItem'

const CallTodoList = ({callList}) => {

    return (
        <>
            <h2>List of calls</h2>

            <table className="table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Finished</th>
                    </tr>

                    {
                        callList.map((item, index) => (
                            <TableItem key={index} data={item} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default CallTodoList;