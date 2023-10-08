import TableItem from './Table/TableItem'
import ButtonSort from "./ui/ButtonSort/ButtonSort.jsx";
import Button from "./ui/Button/Button.jsx";

const CallsTable = ({callList, delCall}) => {

    const buttons = [
        {
            name: 'all',
            title: 'All'
        },
        {
            name: 'next',
            title: 'Next'
        },
        {
            name: 'finished',
            title: 'Finished'
        },
    ]

    const getFilterName = (name) => {
        return name;
    }

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
                {
                    buttons.map( (button, i) => {
                        return <Button
                            key={i}
                            getFilterName={getFilterName}
                            filterName={button.name}
                            buttonVariant="outline"
                            type="button"
                        >
                            {button.title}
                        </Button>
                    } )
                }
            </div>
        </>
    );
}

export default CallsTable;