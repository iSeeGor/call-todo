import TableItem from './Table/TableItem'
import ButtonSort from "./ui/ButtonSort/ButtonSort.jsx";
import Button from "./ui/Button/Button.jsx";

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
            
            <div className="table-control">
                <Button buttonVariant="outline" type="button">All</Button>
                <Button buttonVariant="outline" type="button">Next</Button>
                <Button buttonVariant="outline" type="button">Finished</Button>
            </div>
        </>
    );
}

export default CallsTable;