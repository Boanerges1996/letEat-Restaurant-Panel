import React, { Component } from "react";
import { Grid, IconButton, makeStyles, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import Logo from "../../logo";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = (theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  menu: {
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  menuTwo: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  clickedMenu = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          height: "720px",
          width: "100vw",
          backgroundImage:
            "url(https://www.sendwyre.com/assets/images/HeaderBGWavy2.svg)",
        }}
      >
        <Grid
          container
          style={{
            height: "70px",
            width: "100vw",
          }}
        >
          <Grid item xs={2} sm={false} className={classes.menu}>
            <IconButton onClick={this.clickedMenu}>
              <MenuIcon style={{ color: "white" }} fontSize="large" />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <StyledMenuItem>
                <Link to="/login">
                  <ListItemIcon>
                    <Button>Login</Button>
                  </ListItemIcon>
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/signup">
                  <ListItemIcon>
                    <Button>Signup</Button>
                  </ListItemIcon>
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <Button>About Us</Button>
                </ListItemIcon>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <Button>Services</Button>
                </ListItemIcon>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <Button>Contacts</Button>
                </ListItemIcon>
              </StyledMenuItem>
            </StyledMenu>
          </Grid>
          {/* <Grid xs={2} sm={0}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/cafe-bar-restaurant/100/noodles_2-512.png"
              style={{ width: "65px", height: "65px" }}
              alt="logo"
            />
          </Grid> */}
          <Grid
            item
            xs={0}
            sm={10}
            style={{ textAlign: "center", paddingTop: "15px" }}
          >
            <Logo />
          </Grid>
          <Grid
            item
            style={{ paddingTop: "15px" }}
            className={classes.menuTwo}
            sm={2}
          >
            <Link to="/login">
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  border: "1px solid white",
                  float: "right",
                }}
              >
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  border: "1px solid white",
                  float: "right",
                }}
              >
                Signup
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            paddingTop: "150px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          className="animate__animated animate__bounceInDown animate__delay-1s"
        >
          <Grid item xs={false} sm={1} md={2} lg={3}></Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <h1 style={{ color: "white" }}>
              Build Your <br /> Restaurant Together With Us
            </h1>
            <p style={{ color: "white" }}>
              We help you expand your restaurant, by making your services easy
              and available for all to access
              <br /> Join our platform and enjoy the services
            </p>
            <Link to="/signup">
              <Button
                style={{
                  backgroundImage: "linear-gradient(to right,#18ffff, #00b0ff)",
                  color: "#e91e63",
                }}
              >
                Signup
              </Button>
            </Link>
          </Grid>
          <Grid item xs={false} sm={1} md={2} lg={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
