import React from 'react';
import UsersList from './_components/UsersList';

const Users = () => {
    return (
        <div className="block bg-black">
            <div className="p-8">
                <h1 className="font-poppins py-6 text-white">Users</h1>
                <UsersList />
            </div>
        </div>
    );
};
export default Users;
