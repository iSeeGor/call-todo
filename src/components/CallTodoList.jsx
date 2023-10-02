import React, {useEffect, useState} from 'react';
import useLocalStorage from "../hooks/useLocalStorage.js";

function CallTodoList({callList}) {
    const [call, setCall] = useLocalStorage([], 'calltodo');

    const addCall = () => {
        setCall([...call, {name: 'test', phone: '23432234', time: '00:00'}])
    }

    return (
        <>
            <h2>List of calls</h2>

            <table className="table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Time</th>
                        <th>Action</th>
                        <th>Finished</th>
                    </tr>

                    {
                        callList.map((item, index) => (
                           <tr key={index}>
                               <td>{item.name}</td>
                               <td>{item.phone}</td>
                               <td>{item.time}</td>
                               <td>{item.name}</td>
                               <td>{item.name}</td>
                           </tr>
                        ))
                    }
                </tbody>
            </table>

            <button style={{marginTop: '20px',}} onClick={addCall}>Add</button>
        </>
    );
}

export default CallTodoList;