import React from 'react';

const TableItem = ({data, delCall}) => {
    const { name, phone, time, id } = data;

    const delHandle = (e) => {
        e.preventDefault();

        delCall(id);
    }

    const checked = new Date().getTime() > id;

    // const

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{id}</td>
                <td> <a href='#' title='Click to datete call item.' onClick={delHandle}>delete</a> </td>
                <td><input type="checkbox" disabled checked={checked}/></td>
            </tr>
        </>
    );
};

export default TableItem;