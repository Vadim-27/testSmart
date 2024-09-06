import * as React from 'react';
import {  useSelector } from 'react-redux';
import { getFilters } from '../../../store/filter/filter-selectors';
import Image from 'next/image';
import TooltipOffset from './Tooltip';

interface FiltersState {
    [key: string]: string | undefined;
}

const FilterList: React.FC<{ cleanHidden: (id: string) => void }> = ({ cleanHidden }) => {
   

    const filter = useSelector(getFilters) as unknown as FiltersState;
     const hasFilters = Object.values(filter).some((value) => value !== '');

    return (
        <section className="min-h-[34px]">
            <ul className="flex gap-6">
                {hasFilters && (
                    <li className="flex gap-4 rounded-2xl border border-solid border-white px-4 py-1">
                        <p className="font-poppins text-[12px] font-normal leading-6 text-white">
                            All
                        </p>
                        <TooltipOffset title="Close All filters ">
                            <button onClick={() => cleanHidden('All')}>
                                <Image
                                    src={'/icons/cancel-circle.svg'}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </TooltipOffset>
                    </li>
                )}
                {filter.name && (
                    <li className="flex gap-4 rounded-2xl border border-solid border-white px-4 py-1">
                        <p className="font-poppins text-[12px] font-normal leading-6 text-white">
                            Name
                        </p>
                        <TooltipOffset title="Close filter by name">
                            <button onClick={() => cleanHidden('name')}>
                                <Image
                                    src={'/icons/cancel-circle.svg'}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </TooltipOffset>
                    </li>
                )}
                {filter.username && (
                    <li className="flex gap-4 rounded-2xl border border-solid border-white px-4 py-1">
                        <p className="font-poppins text-[12px] font-normal leading-6 text-white">
                            User Name
                        </p>
                        <TooltipOffset title="Close filter by user name">
                            <button onClick={() => cleanHidden('username')}>
                                <Image
                                    src={'/icons/cancel-circle.svg'}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </TooltipOffset>
                    </li>
                )}
                {filter.email && (
                    <li className="flex gap-4 rounded-2xl border border-solid border-white px-4 py-1">
                        <p className="font-poppins text-[12px] font-normal leading-6 text-white">
                            Email
                        </p>
                        <TooltipOffset title="Close filter by email">
                            <button onClick={() => cleanHidden('email')}>
                                <Image
                                    src={'/icons/cancel-circle.svg'}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </TooltipOffset>
                    </li>
                )}
                {filter.phone && (
                    <li className="flex gap-4 rounded-2xl border border-solid border-white px-4 py-1">
                        <p className="font-poppins text-[12px] font-normal leading-6 text-white">
                            Phone
                        </p>
                        <TooltipOffset title="Close filter by phone">
                            <button onClick={() => cleanHidden('phone')}>
                                <Image
                                    src={'/icons/cancel-circle.svg'}
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </TooltipOffset>
                    </li>
                )}
            </ul>
        </section>
    );
};
export default FilterList;
