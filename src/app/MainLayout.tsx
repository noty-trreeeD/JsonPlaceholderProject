import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const drawerWidth = 260;

type NavItem = {
    label: string;
    path: string;
    icon: ReactNode;
};

const navItems: NavItem[] = [
    {
        label: "Главная",
        path: "/",
        icon: <HomeIcon />,
    },
    {
        label: "Посты",
        path: "/posts",
        icon: <ArticleIcon />,
    },
    {
        label: "Пользователи",
        path: "/users",
        icon: <PeopleIcon />,
    },
    {
        label: "Todos",
        path: "/todos",
        icon: <CheckCircleIcon />,
    },
];

export function MainLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    function handleDrawerToggle() {
        setMobileOpen((prev) => !prev);
    }

    const drawerContent = (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    JSON App
                </Typography>
            </Toolbar>

            <Divider />

            <List sx={{ px: 1, py: 2 }}>
                {navItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        component={NavLink}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        sx={{
                            mb: 0.5,
                            borderRadius: 2,
                            color: "text.secondary",

                            "&.active": {
                                bgcolor: "primary.main",
                                color: "primary.contrastText",

                                "& .MuiListItemIcon-root": {
                                    color: "primary.contrastText",
                                },
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 40,
                                color: "inherit",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{ flexGrow: 1 }} />

            <Divider />

            <Box sx={{ p: 2 }}>
                <Typography variant="caption" color="text.secondary">
                    JSONPlaceholder practice
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    color: "text.primary",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { md: "none" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        JSONPlaceholder
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{
                    width: { md: drawerWidth },
                    flexShrink: { md: 0 },
                }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },

                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                >
                    {drawerContent}
                </Drawer>

                <Drawer
                    variant="permanent"
                    open
                    sx={{
                        display: { xs: "none", md: "block" },

                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                            borderRight: "1px solid",
                            borderColor: "divider",
                        },
                    }}
                >
                    {drawerContent}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    minHeight: "100vh",
                }}
            >
                <Toolbar />

                <Container
                    maxWidth="lg"
                    sx={{
                        py: 3,
                    }}
                >
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
}