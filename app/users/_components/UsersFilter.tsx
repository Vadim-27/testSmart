import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFilters } from '../../../store/filter/filter-selectors';
import { setFilter } from '../../../store/filter/filter-slice';


interface FiltersState {
    [key: string]: string;
}
type UsersFilterProps = { id: keyof FiltersState };



const UsersFilter: React.FC<UsersFilterProps> = ({ id}) => {
    const dispatch = useDispatch();

    
    const filter = useSelector(getFilters) as unknown as FiltersState;


    const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter({ [id]: currentTarget.value }));
    };
    const filterValue = filter[id] || '';
    console.log('filterValue', filterValue);
    return (
        <form className="absolute">
            <input
                className="w-full max-w-full overflow-hidden rounded-md bg-black px-2 py-1"
                type="text"
                value={filterValue}
                onChange={handleChange}
                pattern="[A-Za-z]*"
                placeholder={`Filter by ${id}`}
            />
        </form>
    );
};
export default UsersFilter;
