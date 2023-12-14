import TableItem from './Table/TableItem'
import ButtonSort from "./ui/ButtonSort/ButtonSort.jsx";
import Button from "./ui/Button/Button.jsx";
import {useState} from "react";
import {useQuery} from "../helpers/useQuery.js";
import { useEffect } from 'react';

const CallsTable = ({callTodos, delCall}) => {

    const [options, setOptions] = useState({});

    const [sortedTodos, sortOptions] = useQuery(callTodos, options);

    const filterButtonHandler = (data) => {
        setOptions({filter: data.filter})
    }

    const sortButtonHandler = (data) => {
        const order = options.order === 'asc' ? 'desc' : 'asc';

        setOptions({sortby: data.sortby, order: order})
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
    ];

    useEffect(() => {
        setOptions(sortOptions);
    }, []);

    return (
        <>
            <section className="section">
                <header className="section__header">
                    <h2 className="section__title">List of calls</h2>
                </header>

                <table className="table">
                    <tbody>
                        <tr>
                            <th>
                                <ButtonSort
                                    sortby="name"
                                    icon={options.order}
                                    isActive={options.sortby === 'name'}
                                    onClick={sortButtonHandler}
                                >Name</ButtonSort>
                            </th>
                            <th>Phone</th>
                            <th><ButtonSort sortby="time" icon={options.order} onClick={sortButtonHandler} isActive={options.sortby === 'time'}>Time</ButtonSort></th>
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
                                isActive={options.filter === button.name}
                            >
                                {button.title}
                            </Button>
                        } )
                    }
                </div>
            </section>
        </>
    );
}

export default CallsTable;