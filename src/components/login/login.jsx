import React, { Component } from "react";
import { Grid, Input } from "@material-ui/core";
import { Input as Inp, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  takeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
                height: "500px",
                margin: "0 auto",
                borderRadius: "10px",
              }}
              className="animate__animated animate__fadeInBottomRight animate__delay-1s"
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
                    Login <br /> Your Restaurant
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
                  style={{ paddingLeft: "20%", marginBottom: "10px" }}
                >
                  <Inp
                    icon="user"
                    iconPosition="left"
                    placeholder="example@123.com"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.takeInput}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "20%", marginBottom: "10px" }}
                >
                  <Inp
                    icon="key"
                    iconPosition="left"
                    placeholder="*******"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.takeInput}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: "20%", marginBottom: "10px" }}
                >
                  <Button
                    style={{
                      backgroundColor: "#e91e63",
                      color: "white",
                      width: "200px",
                    }}
                    onClick={() => console.log(this.state)}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item style={{ paddingLeft: "80px" }}>
                  <Link to="/signup">
                    <p style={{ textAlign: "" }}>
                      Don't have an account Signup
                    </p>
                  </Link>
                </Grid>
                <Grid item style={{ paddingLeft: "80px" }}>
                  <Link to="/forgotten/password">
                    <p style={{ textAlign: "" }}>Forgotten Password</p>
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
