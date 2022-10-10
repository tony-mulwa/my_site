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

export default function Login() {
  const [formData, setFormData] = useState({
    email: null,
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
          <Typography variant="h4">Login</Typography>
          <Typography variant="subtitle1">
            Not a user yet?
            <Link href="/auth/register" sx={{ margin: "auto 5px" }}>
              Register
            </Link>
            now.
          </Typography>
          <Button variant="outlined" fullWidth>
            Continue with Google
          </Button>
          <Divider>
            <Typography>or</Typography>
          </Divider>
          <TextField
            onChange={HandleChange}
            name="email"
            label="Email"
            type="email"
            required
            placeholder="example@mail.com"
          />
          <TextField
            onChange={HandleChange}
            name="password"
            label="Password"
            type="password"
            required
          />

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
