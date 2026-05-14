import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import type { User } from "../types/user";

type AuthorBadgeProps = {
    author?: User;
    fallbackUserId: number;
};

export const AuthorBadge = ({ author, fallbackUserId }: AuthorBadgeProps) => {
    return (
        <Box>
            <Chip
                label={author ? `@${author.name}` : `User ${fallbackUserId}`}
                size="small"
                color="primary"
                variant="outlined"
            />
        </Box>
    );
};