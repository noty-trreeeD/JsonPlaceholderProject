import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Divider,
    Box,
    Link,
} from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import type { User } from "../types/user";

type UserCardProps = {
    user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.2s ease",
                "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 4,
                },
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Box>
                        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                            <Chip
                                label={`@${user.username}`}
                                size="small"
                                variant="outlined"
                                color="primary"
                            />
                            <Chip
                                label={`User #${user.id}`}
                                size="small"
                                color="primary"
                                variant="outlined"
                            />
                        </Stack>

                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                lineHeight: 1.3,
                            }}
                        >
                            {user.name}
                        </Typography>
                    </Box>

                    <Divider />

                    <Stack spacing={1.2}>
                        <Stack direction="row" spacing={1.2} sx={{alignItems: "center"}}>
                            <EmailIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.email}
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1.2} sx={{alignItems: "center"}}>
                            <PhoneIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                                {user.phone}
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1.2} sx={{alignItems: "center"}}>
                            <LanguageIcon fontSize="small" color="action" />

                            <Link
                                href={`https://${user.website}`}
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                                variant="body2"
                            >
                                {user.website}
                            </Link>
                        </Stack>

                        <Stack direction="row" spacing={1.2} sx={{alignItems: "flex-start"}}>
                            <LocationOnIcon fontSize="small" color="action" />

                            <Typography variant="body2" color="text.secondary">
                                {user.address.city}, {user.address.street}, {user.address.suite}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Divider />

                    <Box>
                        <Stack direction="row" spacing={1.2} sx={{ mb: 0.5, alignItems: "center"}}>
                            <BusinessIcon fontSize="small" color="action" />

                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                {user.company.name}
                            </Typography>
                        </Stack>

                        <Typography variant="body2" color="text.secondary">
                            {user.company.catchPhrase}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};