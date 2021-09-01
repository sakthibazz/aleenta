import React, { useState } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
  AccountCircle,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  MoreVert as MoreIcon,
} from "@material-ui/icons";
// import { logoutUser } from "./redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./images/logo/aleenta.png";
import clsx from "clsx";


const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
    center:{
        textAlign: 'center',
    },
    right:{
        textAlign: 'right',
    },
    left:{
        textAlign: 'left',
    },

  }));


const Header = (props) => {

    const classes = useStyles();

    const { pathname } = props.location;

    return (  <div>
      <AppBar position="static" style={{backgroundColor:"#FAF2DD"}}>
        <Toolbar>
        <div className={classes.title}>
            <div  className={classes.center}>
                <Typography variant="h5" noWrap>
                    <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Home
                      </Link>
                </Typography>

                <Typography variant="h5" noWrap>
                      <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        About
                      </Link>
                </Typography>

                <Typography variant="h5" noWrap>
                      <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Programs
                      </Link>
                </Typography>

                    <Typography variant="h5" noWrap>
                      <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Gift Packages
                      </Link>
                </Typography>

                <Typography variant="h5" noWrap>
                      <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Blog
                      </Link>
                </Typography>

                <Typography variant="h5" noWrap>
                      <Link
                        to="/"
                        className={
                          pathname === "/"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Contact
                      </Link>
                </Typography>

            </div>
            <div>
                <Typography variant="h6" className={classes.right}>
                    right Text
                </Typography>
            </div>
            <div>
                <img src={Logo} width="50px" height="50px" />
            </div>
        </div>
        </Toolbar>
      </AppBar>
    </div> );
}
 
export default Header;