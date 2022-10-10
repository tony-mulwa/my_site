import { Box, Grid } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Grid container>
        {/* children */}
        <Grid item xs={12} sm={4} lg={4}>
          <Box
            sx={{ width: "100%", height: "400px", backgroundColor: "blue" }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={8} lg={5}>
          <Box
            sx={{ width: "100%", height: "400px", backgroundColor: "gray" }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <Box
            sx={{ width: "100%", height: "400px", backgroundColor: "green" }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
