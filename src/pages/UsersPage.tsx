import { ErrorMessage, Loader, PageHeader } from "../shared";
import { getUsers, UserList} from "../features";
import { useQuery } from "@tanstack/react-query";

export function UsersPage() {
    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });

    if (usersQuery.isLoading) return <Loader />;
    if (usersQuery.error) return <ErrorMessage error={"Error"} />;

    const users = usersQuery.data ?? [];

    if (users.length === 0) return <div>Пользователи не найдены</div>;

    return (
        <>
            <PageHeader
                title={"Users page"}
            />
            <UserList users={users}/>
        </>

    );
}