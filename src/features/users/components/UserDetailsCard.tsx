import {
    Card,
    CardContent,
    Typography,
    Stack,
    Box,
    Divider,
    Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import type { User } from "../types/user";
import { AuthorBadge } from "./AuthorBadge";

type UserDetailsCardProps = {
    user: User;
};

export const UserDetailsCard = ({ user }: UserDetailsCardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
            }}
        >
            <CardContent>
                <Stack spacing={3}>
                    <Box>
                        <AuthorBadge author={user} fallbackUserId={user.id} />
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                            <PersonIcon color="primary" />

                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    lineHeight: 1.25,
                                }}
                            >
                                {user.username}
                            </Typography>
                        </Stack>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Контакты
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                                <EmailIcon fontSize="small" color="action" />
                                <Typography variant="body1" color="text.secondary">
                                    {user.email}
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                                <PhoneIcon fontSize="small" color="action" />
                                <Typography variant="body1" color="text.secondary">
                                    {user.phone}
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                                <LanguageIcon fontSize="small" color="action" />

                                <Link
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    underline="hover"
                                    variant="body1"
                                >
                                    {user.website}
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Адрес
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "flex-start" }}>
                                <LocationOnIcon fontSize="small" color="action" />

                                <Typography variant="body1" color="text.secondary">
                                    {user.address.city}, {user.address.street}, {user.address.suite}
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                                <MapIcon fontSize="small" color="action" />

                                <Typography variant="body1" color="text.secondary">
                                    ZIP: {user.address.zipcode}
                                </Typography>
                            </Stack>

                            <Typography variant="body2" color="text.secondary">
                                Координаты: {user.address.geo.lat}, {user.address.geo.lng}
                            </Typography>
                        </Stack>
                    </Box>

                    <Divider />

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Компания
                        </Typography>

                        <Stack spacing={1.5}>
                            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
                                <BusinessIcon fontSize="small" color="action" />

                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {user.company.name}
                                </Typography>
                            </Stack>

                            <Typography variant="body1" color="text.secondary">
                                {user.company.catchPhrase}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {user.company.bs}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};