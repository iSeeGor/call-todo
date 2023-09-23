import React from 'react';

function CallTodoList(props) {
    const data = [
        {
            name: 'Igor',
            phone: '+3000000000',
            time: '22:40',
            completed: false,
        }
    ]

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
                        data.map((item, index) => (
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
        </>
    );
}

export default CallTodoList;