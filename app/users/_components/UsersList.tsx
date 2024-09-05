'use client';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../../../store/users/users-operations';
import { AppDispatch } from '../../../store/store';
import { getFilteredUsers } from '../../../store/users/users-selectors';
import Image from 'next/image';

import UsersFilter from './UsersFilter';
import { setFilter } from '../../../store/filter/filter-slice';

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
    console.log('hiddenInput', hiddenInput);

    useEffect(() => {
        dispatch(fetchAllUsers());
        setLoading(false);
    }, [dispatch]);

    const list: User[] = useSelector(getFilteredUsers);

    const handleHidden = (id: string) => {
        if (hiddenInput.includes(id)) {
            const newHidden = hiddenInput.filter((item) => item !== id);
            setHiddenInput(newHidden);
            dispatch(setFilter({ [id]: '' }));
        } else {
            setHiddenInput((prev) => [...prev, id]);
        }
    };

    return (
        <section>
            <div className="bg-[#151515] px-6 py-6">
                <table className="w-full table-auto text-white">
                    <thead>
                        <tr>
                            <th className="font-poppins relative w-52 px-4 py-6 text-start font-medium text-[#909090]">
                                Name
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                                    onClick={() => handleHidden('name')}
                                >
                                    {hiddenInput.includes('name') ? (
                                        <Image
                                            src={'/icons/cancel-circle.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    ) : (
                                        <Image
                                            src={'/icons/filter.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    )}
                                </button>
                                {hiddenInput.includes('name') && <UsersFilter id="name" />}
                            </th>
                            <th className="font-poppins relative w-52 px-4 py-4 text-start font-medium text-[#909090]">
                                Username
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                                    onClick={() => handleHidden('username')}
                                >
                                    {hiddenInput.includes('username') ? (
                                        <Image
                                            src={'/icons/cancel-circle.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    ) : (
                                        <Image
                                            src={'/icons/filter.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    )}
                                </button>
                                {hiddenInput.includes('username') && <UsersFilter id="username" />}
                            </th>
                            <th className="font-poppins relative w-60 px-4 py-4 text-start font-medium text-[#909090]">
                                Email
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                                    onClick={() => handleHidden('email')}
                                >
                                    {hiddenInput.includes('email') ? (
                                        <Image
                                            src={'/icons/cancel-circle.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    ) : (
                                        <Image
                                            src={'/icons/filter.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    )}
                                </button>
                                {hiddenInput.includes('email') && <UsersFilter id="email" />}
                            </th>
                            <th className="font-poppins relative w-52 px-4 py-4 text-start font-medium text-[#909090]">
                                Phone
                                <button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                                    onClick={() => handleHidden('phone')}
                                >
                                    {hiddenInput.includes('phone') ? (
                                        <Image
                                            src={'/icons/cancel-circle.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    ) : (
                                        <Image
                                            src={'/icons/filter.svg'}
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                    )}
                                </button>
                                {hiddenInput.includes('phone') && <UsersFilter id="phone" />}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(({ id, name, username, email, phone }, index) => (
                            <tr
                                key={id}
                                className={`rounded-2xl ${index % 2 === 1 ? 'bg-black' : ''}`}
                            >
                                <td className="font-poppins rounded-l-2xl px-4 py-2 text-[14px] font-medium leading-6">
                                    {name}
                                </td>
                                <td className="font-poppins px-4 py-2 text-[14px] font-medium leading-6">
                                    {username}
                                </td>
                                <td className="font-poppins px-4 py-2 text-[14px] font-medium leading-6">
                                    {email}
                                </td>
                                <td className="font-poppins rounded-r-2xl px-4 py-4 text-[14px] font-medium leading-6">
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
