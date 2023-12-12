import { Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
 

function Main() {
  <div className="App">
    <Navigation />
    <Grid container>
      <Outlet />
    </Grid>
  </div>;
}

export default Main;
