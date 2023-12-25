import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./FooterStyle.css";
function Footer() {
  return (
    <footer style={{marginTop:"100px"}}>
      <Grid
        sx={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: "flex",
          backgroundColor: "#191919",
        }}
      >
        <Grid
          container
          md={3}
          sx={{
            display: "flex",
            direction: "column",
            alignItems: "center",
            margin: "auto",
            paddingLeft: "30px",
            color: "white",
          }}
        >
          <Stack spacing={6} direction="row">
            <Button size="small" variant="text" sx={{ color: "white" }}>
              Terms Of Use
            </Button>
            <Button size="small" variant="text" sx={{ color: "white" }}>
              Privacy-policy
            </Button>
            <Button size="small" variant="text" sx={{ color: "white" }}>
              FAQ
            </Button>
            <Button size="small" variant="text" sx={{ color: "white" }}>
              Watch list
            </Button>
          </Stack>
          <Typography variant="caption">
            © 2021 STREAMIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="body2" style={{ margin: "20px", color: "white" }}>
            Follow Us:
          </Typography>
          <Stack direction="row" spacing={1} style={{ margin: "20px" }}>
            <IconButton sx={{color:"white", backgroundColor:"#252525"}}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{color:"white", backgroundColor:"#252525"}}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{color:"white", backgroundColor:"#252525"}}>
              <GoogleIcon />
            </IconButton>
            <IconButton sx={{color:"white", backgroundColor:"#252525"}}>
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid sx={{ paddingRight: "50px" }}>
          <Typography sx={{color: "white"}}>Whatchit App</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton>
              <img
                src="https://frames.payhub.com.ua/assets/images/GooglePlay.svg"
                alt="Google Play"
              />
              <img
                src="	https://frames.payhub.com.ua/assets/images/AppStore.svg"
                alt="IO play store"
              />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
