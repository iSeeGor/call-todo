import React from 'react';

const TableItem = ({data, delCall}) => {
    const { name, phone, time, id } = data;

    const delHandle = (e) => {
        e.preventDefault();

        delCall(id);
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{time}</td>
                <td> <a href='#' title='Click to datete call item.' onClick={delHandle}>delete</a> </td>
                <td>{id}</td>
            </tr>
        </>
    );
};

export default TableItem;