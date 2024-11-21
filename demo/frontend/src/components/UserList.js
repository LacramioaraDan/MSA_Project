// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the backend
    useEffect(() => {
        axios.get('http://localhost:8080/users')  // Replace with your actual endpoint
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching users!', error);
            });
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.userId}>
                        <h2>{user.username}</h2>
                        <p>Email: {user.email}</p>
                        <p>Location: {user.location}</p>
                        <p>Bio: {user.bio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
