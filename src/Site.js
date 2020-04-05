import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
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
  darken: {
    backgroundColor: "rgba(48, 51, 68, 0.8)",
    height: "calc(100% + 24px)",
  },
  fullHeight: {
    height: "100%",
  },
  iconButton: {
    color: "inherit",
    backgroundColor: "rgba(236, 236, 236, 0.5)",
    "&:hover": {
      backgroundColor: "rgba(236, 236, 236, 0.3)",
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
    border: `1px solid ${theme.palette.text.secondary}`,
  },
  removeChildSidePadding: {
    "& > .MuiGrid-item": {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

function Site() {
  const classes = useStyles(theme);
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const atLeastMed = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.mainImage}>
      <div className={classes.darken}>
        <Grid
          className={classes.fullHeight}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            wrap="nowrap"
            spacing={3}
            xs={7}
            sm={7}
            md={12}
            className={classes.removeChildSidePadding}
          >
            <Grid item>
              <div className={classes.profileImage} />
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                align="center"
                style={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                }}
              >
                Mackenzie Salloum
              </Typography>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12} md="auto">
                <Typography
                  variant="h5"
                  align={isSmall ? "left" : "center"}
                  style={{ color: theme.palette.text.secondary }}
                >
                  Software Developer
                </Typography>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: theme.palette.text.secondary }}
                >
                  {atLeastMed && "\u00A0\u00A0|\u00A0\u00A0"}
                </Typography>
              </Grid>
              <Grid item xs={12} md="auto">
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: theme.palette.text.secondary }}
                >
                  ReactJS Enthusiast
                </Typography>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: theme.palette.text.secondary }}
                >
                  {atLeastMed && "\u00A0\u00A0|\u00A0\u00A0"}
                </Typography>
              </Grid>
              <Grid item xs={12} md="auto">
                <Typography
                  variant="h5"
                  align={isSmall ? "right" : "center"}
                  style={{ color: theme.palette.text.secondary }}
                >
                  Employed at{" "}
                  <Link href={currentCompanyLink}>{currentCompanyText}</Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container justify="center" spacing={5}>
              <Grid item>
                <IconButton href={linkedinLink} className={classes.iconButton}>
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
        </Grid>
      </div>
    </div>
  );
}

export default Site;
