import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import DrawerSideBar from "./sideBar";
import Dashboard from "./dashboard/dashboard";
import { useStyles } from "./styles";
import RestaurantDetails from "./restaurant/restaurant";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      dashboard: false,
      category: false,
      orders: false,
      transactions: false,
      chats: false,
      history: false,
      customers: false,
      settings: false,
      restaurant: true,
      header: "Dashboard",
    };
  }

  componentDidMount() {}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#e91e63" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {this.state.header}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {"rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <DrawerSideBar
            clickCategory={() =>
              this.setState({
                header: "Category",
                dashboard: false,
                category: true,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickDashboard={() =>
              this.setState({
                header: "Dashboard",
                dashboard: true,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickOrder={() =>
              this.setState({
                header: "Orders",
                dashboard: false,
                category: false,
                orders: true,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickTransaction={() =>
              this.setState({
                header: "Transactions",
                dashboard: false,
                category: false,
                orders: false,
                transactions: true,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickChats={() =>
              this.setState({
                header: "Chats",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: true,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickHistory={() =>
              this.setState({
                header: "History",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: true,
                customers: false,
                settings: false,
                restaurant: false,
              })
            }
            clickCustomers={() =>
              this.setState({
                header: "Customers",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: true,
                settings: false,
                restaurant: false,
              })
            }
            clickRestaurantInfo={() =>
              this.setState({
                header: "Restaurant",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: true,
              })
            }
            clickSettings={() =>
              this.setState({
                header: "Settings",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: true,
                restaurant: false,
              })
            }
          />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            {this.state.dashboard ? (
              <Dashboard />
            ) : this.state.restaurant ? (
              <RestaurantDetails />
            ) : (
              <div></div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Main);
