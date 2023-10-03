import React from 'react';

const TableItem = ({data}) => {
    const { name, phone, time } = data;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{time}</td>
                <td> <a href='#' title='Click to datete call item.'>delete</a> </td>
                <td>{time}</td>
            </tr>
        </>
    );
};

export default TableItem;