import { AppErrorBoundary, Loader } from "../shared";
import { UserList, getUsers } from "../features";
import { Suspense } from "react";

const usersPromise = getUsers();

export function UsersPage() {
    return (
        <AppErrorBoundary>
            <Suspense fallback={<Loader />}>
                <UserList usersPromise={usersPromise}/>
            </Suspense>
        </AppErrorBoundary>
    );
}