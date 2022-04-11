import React from 'react';
import User from '../components/User';
import { useAuth } from '../context/AuthContext';

import useGetUserList from '../hooks/useGetUserList';

import  '../styles/userlist.css'

const API = 'https://reqres.in/api/users?page=2'

const UserList = () => {

    const auth = useAuth();
	const users = useGetUserList(API, auth.user);
	return (
        
		<section className="main-container">
            
			


        	<div className="table-area">
			<table className="responsive-table table">

				<tr>

				<th>Name</th>

				<th>Last Name</th>

				<th>Email</th>

				<th>Photo</th>

				<th className ="edit-col">Edit</th>
				</tr>

				{users.data?.map(user => (
					<User user = {user} key= {user.id}/>
				))}
				

				

			</table>
				
			</div>
		</section>
	);
}

export default UserList;