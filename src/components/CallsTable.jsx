import TableItem from './Table/TableItem'
import ButtonSort from "./ui/ButtonSort/ButtonSort.jsx";

const CallsTable = ({callList, delCall}) => {

    return (
        <>
            <h2>List of calls</h2>

            <table className="table">
                <tbody>
                    <tr>
                        <th>
                            <ButtonSort>Name</ButtonSort>
                        </th>
                        <th>Phone</th>
                        <th><ButtonSort>Time</ButtonSort></th>
                        <th>Action</th>
                        <th>Finished</th>
                    </tr>

                    {callList && callList.length > 0 ? (
                        callList.map((item, index) => (
                            <TableItem key={index} data={item} delCall={delCall} />
                        ))
                    ) : (
                        <tr><td colSpan="5" style={{textAlign: 'center'}}>No calls available</td></tr>
                    )}

                </tbody>
            </table>
        </>
    );
}

export default CallsTable;