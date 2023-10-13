import TableItem from './Table/TableItem'
import ButtonSort from "./ui/ButtonSort/ButtonSort.jsx";
import Button from "./ui/Button/Button.jsx";
import {useEffect, useState} from "react";
import {useQuery} from "../helpers/useQuery.js";

const CallsTable = ({callTodos, delCall}) => {


    const [filter, setFilter] = useState('all');
    const [filteredCalls, setFilteredCalls] = useState();
    const [activeButton, setActiveButton] = useState('');
    const [sorting, setSorting] = useState({
        sortby: 'default',
        ord: 'asc'
    });
    const [opt, setOpt] = useState({});

    const [sortedTodos, options] = useQuery(callTodos, opt);

    const filterButtonHandler = (data) => {
        setOpt({filter: data.filter})
    }

    const sortButtonHandler = (data) => {
        const order = opt.order === 'asc' ? 'desc' : 'asc';
        setOpt({sortby: data.sortby, order: order})
    }

    const activeButtonHandler = (name) => {
        setActiveButton(name);
    }

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

    const filterCalls = () => {
        let calls = callTodos;
        const currentTime = new Date().getTime();

        if ( 'next' === filter ) {
            calls = callTodos.filter(obj => obj.time > currentTime);
        }

        if ( 'finished' === filter ) {
            calls = callTodos.filter(obj => obj.time < currentTime);
        }

        return calls;
    }

    const sortingCalls = () => {
        let calls;
        const {sortby} = sorting;
        const {ord} = sorting;

        // console.log(sorting);

        if ( 'default' === sortby ) return;

        if ( 'name' === sortby ) {
            calls = filteredCalls.slice();

            calls.sort((a,b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();

                if ( ord === 'asc' ) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                } else {
                    if (nameA > nameB) {
                        return -1;
                    }
                    if (nameA < nameB) {
                        return 1;
                    }
                }


                return 0;
            })
        }

        if ( 'time' === sortby ) {
            calls = filteredCalls.slice();

            console.log(calls)

            calls.sort((a,b) => {
                const A = a.time;
                const B = b.time;

                return ord === 'asc' ? A - B : B - A;
            })
        }

        return calls;
    }

    useEffect(() => {
        setFilteredCalls(filterCalls());

        // setQueriedCalls(callTodos);

        if ( sortingCalls() ) {
            setFilteredCalls(sortingCalls());
        }

    }, [filter, callTodos, sorting]);

    return (
        <>
            <h2>List of calls</h2>

            <table className="table">
                <tbody>
                    <tr>
                        <th>
                            <ButtonSort
                                sortby="name"
                                onClick={sortButtonHandler}
                            >Name</ButtonSort>
                        </th>
                        <th>Phone</th>
                        <th><ButtonSort sortby="time" onClick={sortButtonHandler}>Time</ButtonSort></th>
                        <th>Action</th>
                        <th>Finished</th>
                    </tr>

                    {sortedTodos && sortedTodos.length > 0 ? (
                        sortedTodos.map((item, index) => (
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
                            onClick={filterButtonHandler}
                            filterName={button.name}
                            buttonVariant="outline"
                            type="button"
                            isActive={opt.filter === button.name}
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