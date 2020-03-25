import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Container,
  Grid,
  Button
} from "@material-ui/core";
import React from "react";
import { theme } from "./theme";
import { Menu } from "@material-ui/icons";
import image from "./assets/sarah-crutchfield-Dq3LFhdmYcw-unsplash.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    paddingTop: theme.spacing(4)
  },
  mainImage: {
    backgroundImage: `url(https://images.unsplash.com/photo-1517315003714-a071486bd9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    overflow: "hidden"
  },
  imageButton: {
    borderColor: "white",
    color: "white"
  },
  appBar: {
    backgroundColor: "white"
  },
  welcomeText: {
    color: "white"
  },
  imageDarken: {
    backgroundColor: "rgba(0,0,0,0.2)",
    height: "calc(100% + 24px)"
    // width: "100%"
  }
}));

// use transitions to slide out title page after clicking "projects" and slide in projects 
// minimalistic cards

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography align="center" variant="h5">
            Mackenzie Salloum
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.mainImage}>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={3}
          className={classes.imageDarken}
        >
          <Grid item>
            <Typography
              variant="h3"
              className={classes.welcomeText}
              align="center"
            >
              Welcome to my website!
            </Typography>
          </Grid>
          <Grid item container justify="center" spacing={5}>
            <Grid item>
              <Button variant="contained" color="secondary">
                About Me
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" className={classes.imageButton}>
                Contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justify="space-evenly"
        >
          <Grid item>
            <div>img of me!</div>
          </Grid>
          <Grid item>
            <Typography variant="h4">About me</Typography>
            <Typography variant="body1" component="p">
              My name is Mackenzie! Currently located in Kelowna, BC, I enjoy
              doing various things, including hiking all over BC in the
              beautiful sunshine, skiing in the winter, and programming high
              quality software from front to back. Take a look at my LinkedIn
              profile and GitHub page.
            </Typography>
            <Typography variant="body1" component="p">
              Take a look at my LinkedIn profile and GitHub page.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
