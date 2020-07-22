import React, { Component } from "react";
import { Grid, Card, Avatar, CardHeader, IconButton } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MoneyIcon from "@material-ui/icons/Money";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ margin: "70px", width: "100%", height: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <IconButton
                    style={{
                      backgroundColor: "#84ffff",
                      height: "70px",
                      width: "70px",
                    }}
                  >
                    <GroupIcon color="primary" />
                  </IconButton>
                }
                title={
                  <strong style={{ fontSize: "18px" }}>
                    Total number of customers
                  </strong>
                }
                subheader="204"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <IconButton
                    style={{
                      backgroundColor: "#84ffff",
                      height: "70px",
                      width: "70px",
                    }}
                  >
                    <MoneyIcon color="primary" />
                  </IconButton>
                }
                title={
                  <strong style={{ fontSize: "18px" }}>
                    Total amount made
                  </strong>
                }
                subheader="$2204"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <IconButton
                    style={{
                      backgroundColor: "#84ffff",
                      height: "70px",
                      width: "70px",
                    }}
                  >
                    <ShoppingBasketIcon color="primary" />
                  </IconButton>
                }
                title={
                  <strong style={{ fontSize: "18px" }}>
                    Total number of orders
                  </strong>
                }
                subheader="204"
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
