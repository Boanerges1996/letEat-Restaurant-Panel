import React from "react";
import { Grid, Button, Icon, Divider } from "@material-ui/core";
import { Input, Button as Btn, Icon as Ic } from "semantic-ui-react";

export default function Footer() {
  return (
    <div style={{ padding: "10px", backgroundColor: "#283593" }}>
      <Grid container spacing={3} style={{}}>
        <Grid item xs={6} sm={3} style={{ textAlign: "left" }}>
          <h3 style={{ color: "#e91e63" }}>About Us</h3>
          <p style={{ color: "white" }}>
            We bring your restaurant close to the public
          </p>
          <br />
          <h3 style={{ color: "#e91e63" }}>Contact Us</h3>
          <Button style={{ color: "white" }} startIcon={<Icon>phone</Icon>}>
            +918264174451
          </Button>
          <br />
          <Button style={{ color: "white" }} startIcon={<Icon>email</Icon>}>
            boanergeskwaku253@gmail.com
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{ color: "#e91e63" }}>Information</h3>
          <p style={{ color: "white" }}>About Us</p>
          <p style={{ color: "white" }}>More search</p>
          <p style={{ color: "white" }}>Services</p>
          <p style={{ color: "white" }}>Testimonial</p>
          <p style={{ color: "white" }}>Daily ads</p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{ color: "#e91e63" }}>Helpful Links</h3>
          <p style={{ color: "white" }}>Services</p>
          <p style={{ color: "white" }}>Supports</p>
          <p style={{ color: "white" }}>Terms and Condition</p>
          <p style={{ color: "white" }}>Privacy Policy</p>
        </Grid>
        <Grid item xs={6} sm={3}>
          <h3 style={{ color: "#e91e63" }}>Subscribe for more info</h3>
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="email address..."
          />
        </Grid>
      </Grid>
      <Divider
        light={true}
        style={{ height: "1px", color: "white", backgroundColor: "white" }}
      />
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Grid container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Btn icon style={{ color: "white", backgroundColor: "#e91e63" }}>
              <Ic name="facebook f" />
            </Btn>
            <Btn icon style={{ color: "white", backgroundColor: "#e91e63" }}>
              <Ic name="twitter" />
            </Btn>
            <Btn icon style={{ color: "white", backgroundColor: "#e91e63" }}>
              <Ic name="google plus g" />
            </Btn>
            <Btn icon style={{ color: "white", backgroundColor: "#e91e63" }}>
              <Ic name="instagram" />
            </Btn>
            <Btn icon style={{ color: "white", backgroundColor: "#e91e63" }}>
              <Ic name="linkedin" />
            </Btn>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}
