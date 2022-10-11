import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        margin: "70px auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Home Page</Typography>
      <Button variant="outlined" onClick={() => navigate("auth/login")}>
        Login
      </Button>
    </Stack>
  );
}
