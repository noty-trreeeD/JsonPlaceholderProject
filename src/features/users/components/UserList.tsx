import { Grid } from "@mui/material";
import type { User } from "../types/user";
import { UserCard } from "./UserCard";

type UsersListProps = {
    users: User[];
};

export const UserList = ({ users }: UsersListProps) => {
    return (
        <Grid container spacing={2}>
            {users.map((user) => (
                <Grid
                    key={user.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                    }}
                >
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    );
};