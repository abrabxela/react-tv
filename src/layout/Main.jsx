import { Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
 

function Main() {
  return (
    <div className="App">
    <Navigation />
    <Grid container>
      <Outlet />
    </Grid>
    <Footer />
  </div>
  )
}

export default Main;
