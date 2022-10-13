import { Typography, Stack, Button, TextField, Divider } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      setFormData((state) => ({
        ...state,
        ...value,
      }));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Username should be 4 characters long.")
        .required("Username required."),
      email: Yup.string().email("Invalid email").required("Email required."),
      password: Yup.string()
        .min(8, "Password should Be 8 characters long.")
        .required("Password required."),
    }),
  });
  return (
    <>
      <Stack
        component="form"
        onSubmit={formik.handleSubmit}
        spacing={2}
        sx={{ margin: "20px auto ", width: "400px", align: "center" }}
      >
        <Typography variant="h5" align="center">
          Form Validation
        </Typography>
        <TextField
          name="username"
          label="Username"
          required
          error={formik.touched && Boolean(formik.errors.username)}
          helperText={formik.touched && formik.errors.username}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          required
          error={formik.touched && Boolean(formik.errors.email)}
          helperText={formik.touched && formik.errors.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          error={formik.touched && Boolean(formik.errors.password)}
          helperText={formik.touched && formik.errors.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>

        <Divider />
        <Typography variant="h6">FormData</Typography>
        <Typography>Username : {(formData.username ??= null)}</Typography>
        <Typography>Email : {(formData.email ??= null)}</Typography>
        <Typography>Password : {(formData.password ??= null)}</Typography>
      </Stack>
    </>
  );
}
