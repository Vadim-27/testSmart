import React from "react";
import UsersList from "./_components/UsersList";

const Users = () => {
  

    return (
      <div className="bg-black block">
        <div className="p-8">
          <h1 className="text-white font-poppins py-6">Users</h1>
          <UsersList />
        </div>
      </div>
    );
 }
export default Users;