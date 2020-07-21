import React from "react";
import { Grid, Card, Avatar, Paper, Divider } from "@material-ui/core";
import services from "./service.json";

export default function Services() {
  return (
    <div>
      <Grid container>
        <Grid item xs={false} sm={1} md={2}></Grid>
        <Grid item xs={12} sm={10} md={8} style={{ padding: "10px" }}>
          <Card
            style={{ margin: "0 auto", padding: "15px", height: "auto" }}
            elevation={3}
          >
            {services.map((data, index) => (
              <Card
                key={index}
                style={{
                  float: "left",
                  width: "250px",
                  margin: "20px",
                  textAlign: "center",
                  padding: "10px",
                  height: "270px",
                }}
                className="animate__animated animate__fadeInBottomLeft animate__delay-1s"
              >
                <Avatar
                  src={data.img}
                  style={{
                    margin: "0 auto",
                    marginBottom: "5px",
                    height: "70px",
                    width: "70px",
                  }}
                />
                <Divider />
                <br />
                <strong>{data.title}</strong>
                <br />
                <br />
                <p>{data.content}</p>
              </Card>
            ))}
          </Card>
        </Grid>
        <Grid item xs={false} sm={1} md={2}></Grid>
      </Grid>
    </div>
  );
}
