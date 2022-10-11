import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { logout, login } from "./state/authSlice";

// reducer
const initialState = {
  openModal: false,
  openMenu: false,
};

function LocalReducer(state, action) {
  switch (action.type) {
    case "openModal":
      return {
        ...state,
        openModal: true,
      };
    case "closeModal":
      return {
        ...state,
        openModal: false,
      };
    case "openMenu":
      return {
        ...state,
        openMenu: action.payload,
      };
    case "closeMenu":
      return {
        ...state,
        openMenu: null,
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(LocalReducer, initialState);
  const userState = useSelector((state) => state.auth.user);
  const authDispatch = useDispatch();

  console.log(userState);
  function OpenModal() {
    dispatch({ type: "openModal" });
  }
  function CloseModal() {
    dispatch({ type: "closeModal" });
  }
  function OpenMenu(event) {
    dispatch({ type: "openMenu", payload: event.currentTarget });
  }
  function CloseMenu() {
    dispatch({ type: "closeMenu" });
  }

  return (
    <Container>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">AuthSite</Typography>
          <Avatar sx={{ cursor: "pointer" }} onClick={OpenMenu} />
          <Menu
            open={Boolean(state.openMenu)}
            anchorEl={state.openMenu}
            onClose={CloseMenu}
          >
            {userState ? (
              <>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={OpenModal}>Login</MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
      <Stack sx={{ margin: "70px auto", alignItems: "center" }}>
        <Typography variant="h3">
          Welcome {userState ? userState.username : "guest."}
        </Typography>
        {userState ? (
          <Button variant="outlined" onClick={() => authDispatch(logout())}>
            Logout
          </Button>
        ) : (
          <Button variant="outlined" onClick={OpenModal}>
            Login
          </Button>
        )}
      </Stack>

      <Modal
        open={state.openModal}
        onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody />
      </Modal>
    </Container>
  );
}

function ModalBody() {
  const [register, setRegister] = useState(false);
  const [formData, setFormData] = useState(
    register
      ? {
          email: null,
          username: null,
          password: null,
          password2: null,
        }
      : {
          email: null,
          password: null,
        }
  );
  const authDispatch = useDispatch();
  const registerFields = [
    { name: "Email", type: "email" },
    { name: "Username", type: "text" },
    { name: "Password", type: "password" },
    { name: "Password2", type: "password" },
  ];
  const loginFields = [
    { name: "Email", type: "email" },

    { name: "Password", type: "password" },
  ];

  function HandleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((state) => ({
      ...state,
      [name.toLowerCase()]: value,
    }));
  }

  function HandleSubmit(event) {
    event.preventDefault();
    console.log(formData);

    authDispatch(login(formData));
  }
  return (
    <Stack
      onSubmit={HandleSubmit}
      component={"form"}
      spacing={2}
      sx={{
        width: "450px",
        padding: 5,
        margin: "50px auto",
        backgroundColor: "white",
        borderRadius: 4,
      }}
    >
      {register ? (
        <>
          <Stack>
            <Typography variant="h4">Register</Typography>
            <Typography variant="subtitle2">
              Already a user?
              <Button onClick={() => setRegister(false)}>Login</Button>now.
            </Typography>
          </Stack>
          {registerFields.map((field, indx) => (
            <TextField
              key={indx}
              name={field.name}
              label={field.name}
              type={field.type}
              onChange={HandleChange}
              required
            />
          ))}

          <Button variant="contained" type="submit">
            Register
          </Button>
        </>
      ) : (
        <>
          <Stack>
            <Typography variant="h4">Login</Typography>
            <Typography variant="subtitle2">
              Not a user?
              <Button onClick={() => setRegister(true)}>Register</Button> now.
            </Typography>
          </Stack>

          {loginFields.map((field, indx) => (
            <TextField
              key={indx}
              name={field.name}
              label={field.name}
              type={field.type}
              onChange={HandleChange}
              required
            />
          ))}

          <Button variant="contained" type="submit">
            Login
          </Button>
        </>
      )}
    </Stack>
  );
}
