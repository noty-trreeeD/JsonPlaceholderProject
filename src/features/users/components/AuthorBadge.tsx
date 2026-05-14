import type { User } from "../types/user";
import {
    Box,
    Chip
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type AuthorBadgeProps = {
    author: User;
    fallbackUserId: number;
};

export const AuthorBadge = ({ author, fallbackUserId }: AuthorBadgeProps) => {
    return (
        <Box>
            <Chip
                component={RouterLink}
                to={`/users/${author.id}`}
                sx={{cursor: "pointer"}}
                label={author ? `@${author.name}` : `User ${fallbackUserId}`}
                size="small"
                color="primary"
                variant="outlined"
            />
        </Box>
    );
};