type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};
type FiltersState = {
    name: string;
    username: string;
    email: string;
    phone: string;
};

type UsersState = {
    items: User[];
};

export const getFilteredUsers = ({
    filters,
    users,
}: {
    filters: FiltersState;
    users: UsersState;
}): User[] => {
    const { name, username, email, phone } = filters;

    return users.items.filter((user) => {
        const matchesName = name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
        const matchesUsername = username
            ? user.username.toLowerCase().includes(username.toLowerCase())
            : true;
        const matchesEmail = email ? user.email.toLowerCase().includes(email.toLowerCase()) : true;
        const matchesPhone = phone ? user.phone.toLowerCase().includes(phone.toLowerCase()) : true;

        return matchesName && matchesUsername && matchesEmail && matchesPhone;
    });
};
