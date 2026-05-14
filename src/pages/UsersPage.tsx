import { Typography } from "@mui/material";
import { Loader, ErrorMessage } from "../shared";
import { UserList, getUsers } from "../features";
import { useEffect, useState } from "react";
import type { User } from "../features";

export function UsersPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function loadUsers() {
            try {
                setIsLoading(true);
                setError(null);
                setUsers([]);

                const data = await getUsers();

                setUsers(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : "Неизвестная ошибка");
            } finally {
                setIsLoading(false);
            }
        }

        loadUsers();
    }, [])

    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                Пользователи
            </Typography>

            {isLoading && <Loader />}

            {!isLoading && error && <ErrorMessage error={error} />}

            {!isLoading && !error && users.length === 0 && (
                <div>user is not defined</div>
            )}

            {!isLoading && !error && users && (
                <>
                    <UserList users={users} />
                </>
            )}

        </>
    );
}