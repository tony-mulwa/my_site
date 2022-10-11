import { Notifications, SearchOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Stack,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const HandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar sx={{ position: "sticky", width: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">YourSite</Typography>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar
            onClick={HandleClick}
            sx={{ marginLeft: 2, cursor: "pointer" }}
          />
        </Stack>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => navigate("user/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => navigate("/auth/login")}>Login</MenuItem>
      </Menu>
    </AppBar>
  );
}
