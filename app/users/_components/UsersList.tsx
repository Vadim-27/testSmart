'use client'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../store/users/users-operations";
import { AppDispatch } from "../../../store/store";
import { getFilteredUsers } from "../../../store/users/users-selectors";
import Image from "next/image";

import UsersFilter from "./UsersFilter";
import { setFilter } from "../../../store/filter/filter-slice";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}


const UsersList: React.FC = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  const [hiddenInput, setHiddenInput] = useState<string[]>([]);
console.log("hiddenInput", hiddenInput);

  useEffect(() => {
    dispatch(fetchAllUsers());
    setLoading(false);

   
  
  }, [dispatch]);

  const list: User[] = useSelector(getFilteredUsers);

  const handleHidden = (
    id: string
  ) => {
    if (hiddenInput.includes(id)) {
      const newHidden = hiddenInput.filter((item) => item !== id);
      setHiddenInput(newHidden);
      dispatch(setFilter({ [id]: "" }));
    } else {
      setHiddenInput((prev) => [...prev, id]);
    }
  };



  return (
    <section>
      <div className="py-6 px-6 bg-[#151515]">
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-6 font-poppins w-52 font-medium text-start relative text-[#909090] ">
                Name
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleHidden("name")}
                >
                  {hiddenInput.includes("name") ? (
                    <Image
                      src={"/icons/cancel-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src={"/icons/filter.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                </button>
                {hiddenInput.includes("name") && (
                  <UsersFilter id="name"  />
                )}
              </th>
              <th className="px-4 py-4 w-52  font-poppins font-medium text-start relative text-[#909090]">
                Username
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleHidden("username")}
                >
                  {hiddenInput.includes("username") ? (
                    <Image
                      src={"/icons/cancel-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src={"/icons/filter.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                </button>
                {hiddenInput.includes("username") && (
                  <UsersFilter id="username"  />
                )}
              </th>
              <th className="px-4 py-4 w-60 font-poppins font-medium text-start relative text-[#909090]">
                Email
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleHidden("email")}
                >
                  {hiddenInput.includes("email") ? (
                    <Image
                      src={"/icons/cancel-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src={"/icons/filter.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                </button>
                {hiddenInput.includes("email") && (
                  <UsersFilter
                    id="email"
          
                  />
                )}
              </th>
              <th className="px-4 py-4 w-52 font-poppins font-medium text-start relative text-[#909090]">
                Phone
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleHidden("phone")}
                >
                  {hiddenInput.includes("phone") ? (
                    <Image
                      src={"/icons/cancel-circle.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src={"/icons/filter.svg"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                </button>
                {hiddenInput.includes("phone") && (
                  <UsersFilter id="phone"  />
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, name, username, email, phone }, index) => (
              <tr
                key={id}
                className={`rounded-2xl ${index % 2 === 1 ? "bg-black" : ""}`}
              >
                <td className=" rounded-l-2xl px-4 py-2  font-poppins font-medium text-[14px] leading-6">
                  {name}
                </td>
                <td className="px-4 py-2 font-poppins font-medium text-[14px] leading-6">
                  {username}
                </td>
                <td className="px-4 py-2 font-poppins font-medium text-[14px] leading-6">
                  {email}
                </td>
                <td className=" rounded-r-2xl px-4 py-4 font-poppins font-medium text-[14px] leading-6">
                  {phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default UsersList;