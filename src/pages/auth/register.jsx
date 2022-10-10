import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: null,
    phonenumber: null,
    username: null,
    password: null,
  });

  function HandleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name.toLowerCase()]: value,
    }));
  }

  function HandleSubmit(event) {
    event.preventDefault();

    if (!formData.email && !formData.password) {
      console.warn("Error input data required!");
    }

    console.log(formData);
  }
  return (
    <Box
      sx={{
        margin: "50px auto",
        padding: {
          sm: "auto 20px",
          xs: "auto 20px",
        },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: "400px" }}>
        <Stack spacing={2} component="form" onSubmit={HandleSubmit}>
          <Typography variant="h4">Register</Typography>
          <Typography variant="subtitle1">
            Already a user?
            <Link href="/auth/login" sx={{ margin: "auto 5px" }}>
              Login
            </Link>
            now.
          </Typography>
          <Button variant="outlined" fullWidth>
            Register with Google
          </Button>
          <Divider>
            <Typography>or</Typography>
          </Divider>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <TextField
              onChange={HandleChange}
              name="username"
              label="UserName"
              type="text"
              required
            />
            <TextField
              onChange={HandleChange}
              name="phoneNumber"
              label="PhoneNumber"
              type="text"
              required
            />
          </Stack>

          <TextField
            onChange={HandleChange}
            name="email"
            label="Email"
            placeholder="example@mail.com"
            type="email"
            required
          />
          <TextField
            onChange={HandleChange}
            name="password"
            label="Password"
            type="password"
            required
          />
          <TextField
            onChange={HandleChange}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
          />

          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
