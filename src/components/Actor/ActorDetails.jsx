import { Grid, Typography } from "@mui/material";

export default function ActorDetails() {
  return (
    <>
      <Grid container>
        <Grid item sx={4}>
          image actor
        </Grid>
        <Grid item sx={8}>
          <Grid>
            <Grid>fio actor</Grid>
            <Grid>anotation</Grid>
          </Grid>
          <Grid>film wis him scroll</Grid>
        </Grid>
        <Grid container>
          <Typography variant="h4">personal info</Typography>
          <Grid>icons</Grid>
          <Grid>Birthday</Grid>
          <Grid>Country</Grid>
          <Grid>Gender</Grid>
        </Grid>
      </Grid>
    </>
  );
}
