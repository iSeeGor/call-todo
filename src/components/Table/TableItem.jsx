import React from 'react';
import { timeFromTimestamp } from '../../helpers/time.js'

const TableItem = ({data, delCall}) => {
    const { name, phone, time } = data;

    const delHandle = (e) => {
        e.preventDefault();

        delCall(time);
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{timeFromTimestamp(time)}</td>
                <td> <a href='#' title='Click to datete call item.' onClick={delHandle}>delete</a> </td>
                <td><input type="checkbox" disabled checked={new Date().getTime() > time}/></td>
            </tr>
        </>
    );
};

export default TableItem;