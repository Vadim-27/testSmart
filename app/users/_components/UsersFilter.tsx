import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../../store/filter/filter-selectors';
import { setFilter } from '../../../store/filter/filter-slice';

type UsersFilterProps = { id: string };

const UsersFilter: React.FC<UsersFilterProps> = ({ id }) => {
    const dispatch = useDispatch();

    const filter = useSelector(getFilter);

    const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter({ [id]: currentTarget.value }));
    };

    return (
        <form className="absolute">
            <input
                className="w-full max-w-full overflow-hidden rounded-md bg-black px-2 py-1"
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder={`Filter by ${id}`}
            />
        </form>
    );
};
export default UsersFilter;
