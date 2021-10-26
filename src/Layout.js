import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';

import { withRouter, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  useScrollTrigger,
  Grid,
  Menu,
  MenuItem,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

//------------------Created Componets----------------------//
import About from './components/about/About';
import Program from './components/program/Program';
import AdditionalServices from "./components/AdditionalServices/AdditionalServices";

import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
  AccountCircle,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  MoreVert as MoreIcon,
  Opacity,
} from "@material-ui/icons";
// import { logoutUser } from "./redux/actions/authActions";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./images/logo/aleenta.png";
import clsx from "clsx";

// --------------------------------------Component-----------------------------------------

// import Footer from "./components/Header_Footer/Footer";
// import Header from "./components/Header_Footer/Header";

const useStyles = makeStyles((theme) => ({
  leftLogo: {
    display: "flex",
    alignItems: "center"
  },
  grow: {
    flexGrow: 1, 
  },
  menuContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    marginRight: theme.spacing(6),
  },
  menuCollapseContaier: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  
  },
  toolBarContainer:{
    margin:"0",
    padding:'0',
    "& .MuiContainer-root": {
      paddingLeft: "0%",
  }, 
  "& .MuiContainer-maxWidthLg": {
      maxWidth: "100%",
  },
  },
  title: {
    fontSize: "16px",
    // fontWeight: 600,
    textDecoration: "none",
    color: "#000000",
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  
  },
  titleActive: {
    // color: "#008dd2",
  },
  mobileTitle: {
    color: "Black",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 'bold'
  },
  profileIconButton: {
    marginLeft: "10px",
    // background: "#F8F9F9",
    border: "1px solid #005a86",
    borderRadius: 25,
    color: "#005a86",
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: 16,
    "&:hover": {
      border: "1px solid #006b9f",
      background: "#005a86",
      color: "#F8F9F9",
    },
  },
  profileIcon: {
    marginRight: theme.spacing(1),
  },
  userDetails: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    color: "#2B2B2B",
    cursor: "pointer",
    fontWeight: 600,
  },
  profileDrop: {
    marginTop: "35px",
    "& .MuiPaper-root": {
      top: '19px !important',
      left: '0px !important',
      width: '100%',
      height: '100%',
      maxHeight: 'fit-content',
      maxWidth: 'inherit',
      boxShadow: 'none'
    },
    "& .MuiButtonBase-root": {
      // color: '#F8F9F9',
      // '&:hover': {
      //   background: '#1e293a'
      // }
    },
    "& .MuiMenu-list":{
      backgroundColor: "rgb(251, 242, 222)",
      width: "100%",
      height: "100%"
    },
    // "& .MuiSvgIcon-root": {
    //   marginRight: theme.spacing(1),
    // },
  },
  paper: {
    height: 'auto',
    width: '300px',
    top: '56px',
    right: '0',
    maxHeight: 'calc(100% - 20%)',
    background: "#fffaf3",
    "& .MuiList-padding": {
      paddingTop: '0px',
      paddingBottom: '0px'
    }
  },
  modal: {
    "& .MuiBackdrop-root": {
      background: "transparent"
    }
  }
}));


// function ElevationScroll(props) {
//   const { children, window } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
  
//   window: PropTypes.func,
// };


const Layout = (props,history) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const { pathname } = props.location;
//   const { isAuthenticated, user } = props?.auth;


const [appClassName, setAppClassName] = useState("closed");
const [appTitle, setAppTitle] = useState("");
const [open, setOpen] = useState(false);
const [mobileMenu, setMobileMenu] = useState(false)


useEffect(()=>{
  console.log(open)
  if (open == true ){
    setAppClassName("closed")
    setAppTitle("")
  }
  console.log(appClassName)
  console.log(appTitle)
},[open])


const closeMenu = ()=>{
  if (open){
    setAppClassName("closed")
  }
}

  const handleprogram = (event) => {
    setAppTitle("program")
    setOpen(false)
  };
  const handleabout =(event) => {
    setAppTitle("about")
    setOpen(false)
  }
  const handleAdditionalServices =(event) => {
    setAppTitle("additionalServices")
    setOpen(false)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    props.history.push("/sign-in");
  };

  const handleMobileMenu = (event) => {
    setMobileMenu(!mobileMenu)
  };

  const handleMobileMenuClose = () => {
    setMobileMenu(!mobileMenu)
  };


  return (
    <>
      <CssBaseline />
      {/* <ElevationScroll  {...props}> */}
        <AppBar className={appClassName} style={{backgroundColor:"#fbf2de"}}>
          <Toolbar className={classes.toolBarContainer}>
            <Grid container>
              <div style={{marginLeft:"7%", width: '100%', justifyContent: 'space-between'}} className={`${classes.menuCollapseContaier} ${classes.leftLogo}`}>
              
                <Link
                to="/"
              >
                <img src={Logo} width="60px" height="50px" style={{ paddingTop: "0", alignSelf: "center"}} />
              </Link>
              <IconButton edge="end" style={{marginRight: '1%'}} onClick={handleMobileMenu}>
                {
                  mobileMenu ? <ClearIcon className="animate__animated animate__fadeIn" /> : <MenuIcon className="animate__animated animate__fadeIn"/>
                }  
                  
                </IconButton>
              </div>
              
            <Grid item xs={12} md={12}>
            <Container maxWidth="lg" className="headerContent">
              {/* <Grid container> */}
                <Link
                  // onClick={()=>{appClassName==='expand'
                  //           ?setAppClassName("closed")
                  //           // :null
                  //           :null
                  // }}
                  to="/"
                  className={
                    pathname === "/"
                    ? clsx(classes.title, classes.titleActive)
                    : classes.title
                  }
                >
                  <img src={Logo} width="110px" height="80px" style={{paddingTop:"2px",paddingLeft:"20px"}} />
                </Link>
              {/* </Grid> */}
              
              <div className={classes.grow} />
              <div className={classes.userDetails}>

                  <div className={appTitle !='about'
                                  ?`${classes.menuContainer} menuContainer1`
                                  :`${classes.menuContainer} menuContainer2`
                                }>
                  {/* {`${classes.menuContainer} menuContainer1`}> */}
                    {/* {appTitle==='about'
                                  ?`${classes.menuContainer} menuContainer2`
                                  :`${classes.menuContainer} menuContainer1`
                                }> */}
                    <Typography variant="h5" noWrap
                      className={classes.title}
                      onClick={()=>{appClassName==='closed'
                                    ?setAppClassName("expand")
                                    :setAppClassName("closed")
                                    
                                    appTitle==='about'
                                    ?setAppTitle("")
                                    :handleabout()
                                  } 
                                }
                    >
                      {/* <Link
                        to="/about-us"
                        className={
                          pathname === "/about-us"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      > */}
                        About {appTitle === "about"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
                      {/* </Link> */}
                    </Typography>
                  </div>
                  <div className={appTitle !='program'
                                  ?`${classes.menuContainer} menuContainer1`
                                  :`${classes.menuContainer} menuContainer2`
                                }>
                    <Typography variant="h5" noWrap
                      className={classes.title}
                      onClick={()=>{appClassName==='closed'
                                    ?setAppClassName("expand")
                                    :setAppClassName("closed")

                                    appTitle==='program'
                                    ?setAppTitle("")
                                    :handleprogram()
                                  } 
                                }
                    >
                    
                        Programs {appTitle === "program"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
                     
                    </Typography>
                  </div>

                <div className={appTitle !='additionalServices'
                                  ?`${classes.menuContainer} menuContainer1`
                                  :`${classes.menuContainer} menuContainer2`
                                }>
                    <Typography variant="h5" noWrap
                      className={classes.title}
                      onClick={()=>{appClassName==='closed'
                                    ?setAppClassName("expand")
                                    :setAppClassName("closed")

                                    appTitle==='additionalServices'
                                    ?setAppTitle("")
                                    :handleAdditionalServices()
                                  } 
                                }
                    >
                    
                        Additional Services {appTitle === "additionalServices"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
                     
                    </Typography>
                  </div> 
                  {/* <div className={`${classes.menuContainer} menuContainer1`}>
                    <Typography variant="h5" noWrap
                      className={classes.title}
                      onClick={()=>{appClassName==='closed'
                                    ?setAppClassName("expand")
                                    :setAppClassName("closed")

                                    appTitle==='gift'
                                    ?setAppTitle("")
                                    :setAppTitle("gift")
                                  } 
                                }
                    >
                   
                        Gift Packages {appTitle === "gift"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
                    
                    </Typography>
                  </div> */}
                 
                 <div className={appTitle !='blogs'
                                  ?`${classes.menuContainer} menuContainer1`
                                  :`${classes.menuContainer} menuContainer2`
                                }>
                  <Link to='/blogs' className={classes.title}>
                    <Typography variant="h5"  noWrap 
                    className={classes.title}
                    onClick={()=>{
                                  setAppClassName("closed")
                                  appTitle==='blogs'
                                  ?setAppTitle("")
                                  :setAppTitle("blogs")
                                } 
                              }>
                      
                        Blog
                        {appTitle === "blogs"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>} 
                      
                      
                    </Typography>
                    </Link>
                  </div>

                  <div className={appTitle !='contact'
                                  ?`${classes.menuContainer} menuContainer1`
                                  :`${classes.menuContainer} menuContainer2`
                                }>
                  <Link to='/contact' className={classes.title}>
                    <Typography variant="h5"  noWrap 
                    className={classes.title}
                    onClick={()=>{
                                  setAppClassName("closed")
                                  
                                  appTitle==='contact'
                                  ?setAppTitle("")
                                  :setAppTitle("contact")
                                } 
                              }>
                      
                        Contact 
                        {appTitle === "contact"?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>} 
                      
                      
                    </Typography>
                    </Link>
                  </div>

                  {/* <div className={classes.menuContainer}>
                    <Button variant="h5" noWrap 
                      // classNane="signButton"
                      variant="outlined"
                      disableRipple
                      className={classes.profileIconButton}
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      variant="outlined"
                      // onClick={handleMenu}
                    >
                      <Link
                        to="/sign-in"
                        className={
                          pathname === "/sign-in"
                            ? clsx(classes.title, classes.titleActive)
                            : classes.title
                        }
                      >
                        Sign UP
                      </Link>
                    </Button>
                  </div> */}


                  <div className={classes.menuCollapseContaier} >
                    <Drawer 
                      open={mobileMenu}
                      anchor='right'
                      classes={{
                        paper: classes.paper,
                        modal: classes.modal
                      }}
                      onClose={handleMobileMenuClose}
                      >
                    
                      <List>
                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>
                            Home
                        </Typography>
                      </ListItem>

                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/about-us" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/about-us"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>
                            About
                        </Typography>
                      </ListItem>

                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/program" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/program"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>
                            Programs
                        </Typography>
                      </ListItem>
                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/additionalServices" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/additionalServices"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>
                            Additional Services
                        </Typography>
                      </ListItem>

                      {/* <MenuItem onClick={handleMobileMenuClose}>
                        <Typography variant="h5" noWrap>
                          <Link
                            to="/explore"
                            className={
                              pathname === "/explore"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }
                          >
                            Gift Packages
                          </Link>
                        </Typography>
                      </MenuItem> */}

                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/blogs" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/blogs"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>
                            Blog
                        </Typography>
                      </ListItem>

                      <ListItem onClick={handleMobileMenuClose} component={Link} to="/contact" className="mobile-link">
                        <Typography variant="h5" noWrap className={
                              pathname === "/contact"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }>

                            Contact
                        </Typography>
                      </ListItem>
                     
                      {/* <MenuItem onClick={handleMobileMenuClose}>
                        <Typography variant="h5" noWrap>
                          <Link
                            to="/sign-in"
                            className={
                              pathname === "/sign-in"
                                ? clsx(classes.mobileTitle, classes.titleActive)
                                : classes.mobileTitle
                            }
                          >
                            Sign In
                          </Link>
                        </Typography>
                      </MenuItem> */}
                      </List>
                    </Drawer>
                  </div>
                  <Menu
                    className={classes.profileDrop}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      // onClick={() => {
                      //   props.logoutUser(props.history);
                      //   handleClose();
                      //   handleLogout();
                      // }}
                    >
                      <ExitToAppIcon /> Logout
                    </MenuItem>
                  </Menu>
                </div>
            </Container>
            <Grid item xs={12} md={12} className='lineGrid' >
              </Grid>
            </Grid>

            {/* <Grid item xs={12} md={12} className='lineGrid' >
            </Grid> */}

            <Grid item xs={12} md={12}>
              {appTitle==="about"
                ? <About/>
                :null
              }
            </Grid>

            <Grid item xs={12} md={12}>
              {appTitle==="program"
                ?<Program setOpen={setOpen} open={open}/>
                :null
              }
            </Grid>

            <Grid item xs={12} md={12}>
              {appTitle==="additionalServices"
                ?<AdditionalServices  setOpen={setOpen} open={open} />
                :null
              }
            </Grid>

          </Grid>
          </Toolbar>
        </AppBar>
      {/* </ElevationScroll > */}
      <Toolbar />
      {/* {appClassName !='closed'
        ?<Grid style={{filter:" brightness(20%)"}} >
            {console.log(appClassName)}
           {props.children}
          </Grid>
        :<Grid>
          {console.log(appClassName)}
           {props.children}
        </Grid>
      } */}
      {props.children}
        {/* </Grid> */}
      {/* <Footer /> */}
      
    </>
  );
};

// Layout.propTypes = {
//   auth: PropTypes.object.isRequired,
//   logoutUser: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// const mapDispatchToProps = { logoutUser };

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));

export default  Layout;
