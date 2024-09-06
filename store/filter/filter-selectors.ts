
interface FiltersState {
    [key: string]: string | undefined;
}
export const getFilters = ({ filters }: FiltersState) => filters;
