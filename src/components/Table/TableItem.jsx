import { useState, useEffect } from 'react';
import { timeFromTimestamp } from '../../helpers/time.js'

const TableItem = ({data, delCall}) => {
    const [completed, setCompleted] = useState(false);
    const { name, phone, time } = data;

    const handleDelete  = (e) => {
        e.preventDefault();

        delCall(time);
    }

    const calculateCompletedStatus = () => new Date().getTime() > time

    useEffect(() => {
        setCompleted(calculateCompletedStatus());

        const interval = setInterval(() => {
            setCompleted(calculateCompletedStatus());
        }, 30000);

        return () => clearInterval( interval );
    }, [time])

    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{timeFromTimestamp(time)}</td>
            <td> <a href='#' title='Click to datete call item.' onClick={handleDelete }>delete</a> </td>
            <td><input type="checkbox" disabled checked={completed}/></td>
        </tr>
    );
};

export default TableItem;