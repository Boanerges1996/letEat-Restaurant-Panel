import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Badge } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ReceiptIcon from "@material-ui/icons/Receipt";
import HistoryIcon from "@material-ui/icons/History";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import RestaurantIcon from "@material-ui/icons/Restaurant";

export default function DrawerSideBar(props) {
  return (
    <div>
      <List>
        <ListItem button onClick={props.clickDashboard}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem button onClick={props.clickCategory}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary={"Category"} />
        </ListItem>
        <ListItem button onClick={props.clickOrder}>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Orders"} />
        </ListItem>
      </List>
      <ListItem button onClick={props.clickTransaction}>
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary={"Transactions"} />
      </ListItem>
      <Divider />
      <List>
        <ListItem button onClick={props.clickChats}>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <ChatIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Chats"} />
        </ListItem>

        <ListItem button onClick={props.clickHistory}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"History"} />
        </ListItem>
        <ListItem button onClick={props.clickCustomers}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Customers"} />
        </ListItem>
        <ListItem button onClick={props.clickRestaurantInfo}>
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText primary={"Restaurant Info"} />
        </ListItem>
        <ListItem button onClick={props.clickSettings}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
      </List>
    </div>
  );
}
