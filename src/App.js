import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import backgroundImage from "./assets/andrew-charney-PZZ31takeSU-unsplash.jpg";
import profileImage from "./assets/profile.jpg";
import {
  currentCompanyLink,
  currentCompanyText,
  githubLink,
  linkedinLink,
} from "./constants";
import { theme } from "./theme";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: theme.spacing(4),
  },
  mainImage: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    overflow: "hidden",
  },
  imageButton: {
    borderColor: "white",
    color: "white",
  },
  appBar: {
    backgroundColor: "white",
  },
  welcomeText: {
    color: "white",
  },
  imageDarken: {
    backgroundColor: "rgba(127, 47, 22, 0.3)",
    height: "calc(100% + 24px)",
    // width: "100%"
  },
  fullHeight: {
    height: "100%",
  },
  iconButton: {
    color: "inherit",
    backgroundColor: "rgba(213, 213, 213, 0.5)",
    "&:hover": {
      backgroundColor: "rgba(213, 213, 213, 0.3)",
    },
  },
  profileImage: {
    backgroundImage: `url(${profileImage})`,
    backgroundPosition: "75% 21%",
    backgroundSize: 225,
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 5,
    border: "1px solid #d5d5d5",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} injectFirst>
      <CssBaseline />
      <div className={classes.mainImage}>
        <div className={classes.imageDarken}>
          <Container className={classes.fullHeight}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
              className={classes.fullHeight}
            >
              <Grid item>
                <div className={classes.profileImage} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{ color: "#d5d5d5" }}
                >
                  Mackenzie Salloum
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" align="center">
                  Software Developer | Employed at{" "}
                  <Link href={currentCompanyLink}>{currentCompanyText}</Link>
                </Typography>
              </Grid>
              <Grid item container justify="center" spacing={5}>
                <Grid item>
                  <IconButton
                    href={linkedinLink}
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      style={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton href={githubLink} className={classes.iconButton}>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
