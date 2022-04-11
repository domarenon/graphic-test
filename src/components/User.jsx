import React from 'react';
//import '../styles/user.css';

import edit from '../assets/edit.png'

const User = ({ user }) => {
    return (
        <>
            <tr>
            <td>{user.first_name}</td>

            <td>{user.last_name}</td>

            <td>{user.email}</td>

            <td><img src={user.avatar}></img></td>

            <td className="edit-col"><a href="/create"><img src={edit}></img></a></td>
            </tr>
            
        </>
        

    );
}

export default User;


