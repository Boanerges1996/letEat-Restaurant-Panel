import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Input as Inp, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  state = {
    ownerName: "",
    restaurantName: "",
    token: "",
    email: "",
    password: "",
  };
  render() {
    return (
      <div
        style={{ backgroundColor: "#283593", width: "100vw", height: "100vh" }}
      >
        <Grid container>
          <Grid item xs={false} sm={1}></Grid>
          <Grid
            item
            xs={12}
            sm={10}
            style={{
              height: "100vh",
              paddingTop: "100px",
              paddingBottom: "100px",
              paddingLeft: "2px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "370px",
                height: "600px",
                margin: "0 auto",
                borderRadius: "10px",
              }}
              className="animate__animated animate__bounceInDown animate__delay-1s"
            >
              <Grid container>
                <Grid item xs={12} style={{ height: "220px" }}>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "28px",
                      fontFamily: "serif",
                      color: "#e91e63",
                    }}
                  >
                    Signup <br /> Your Restaurant
                  </p>
                  <img
                    src="https://www.clipartmax.com/png/middle/274-2749872_noodles-comments-bowl-of-rice-chopstick-png.png"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginLeft: "35%",
                    }}
                    alt="logo"
                  />
                </Grid>
                <Grid item></Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Inp placeholder="Owner Name" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Inp placeholder="Restaurant Name" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Inp placeholder="Token" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Inp placeholder="example@123.com" type="email" />
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Inp placeholder="*******" type="password" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "25%", marginBottom: "10px" }}
                >
                  <Button
                    style={{
                      backgroundColor: "#e91e63",
                      color: "white",
                      width: "177px",
                    }}
                  >
                    Signup
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "80px" }}>
                  <Link to="/login">
                    <p>Already have an account Login</p>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </div>
    );
  }
}
