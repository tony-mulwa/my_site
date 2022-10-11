import {
  Stack,
  Typography,
  Avatar,
  Paper,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <Stack sx={{ margin: "50px" }} spacing={1}>
      <Typography variant="h5">User profile </Typography>
      <Paper
        fullWidth
        spacing={3}
        component={Stack}
        direction="row"
        sx={{ alignItems: "center", padding: "10px " }}
      >
        <Avatar sx={{ width: 150, height: 150 }} />
        <Stack spacing={1}>
          <Typography>Username : Antony mulwa</Typography>
          <Typography>Email : antony@mail.com</Typography>
          <Typography>Phone Number : +254721894218</Typography>
        </Stack>
      </Paper>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Update profile
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Stack
          spacing={2}
          sx={{
            backgroundColor: "white",
            margin: "50px auto",
            padding: "15px",
            width: "400px",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4">Update profile</Typography>
          <TextField type="file" accept="image/*" />
          <TextField label="Username" value="antony mulwa" />
          <TextField label="Email" type="email" value="antony@mail.com" />
          <TextField label="Phonenumber" value="+254721894218" />
          <Button variant="contained">update</Button>
        </Stack>
      </Modal>
    </Stack>
  );
}
