import React, { Component } from "react";
import data from "./data.json";
import { Card, CardHeader, Avatar, Button } from "@material-ui/core";
export default class ListOfDeliveryPersonel extends Component {
  render() {
    return (
      <div>
        <h2>My Delivery Personels</h2>
        <Card style={{ padding: "10px" }}>
          {data.map((value, index) => (
            <Card
              style={{
                margin: "0 auto",
                width: "90%",
                height: "120px",
                marginTop: "15px",
              }}
              elevation={3}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={value.photo}
                    style={{ width: "80px", height: "80px" }}
                  />
                }
                title={
                  <strong style={{ fontSize: "17px" }}>{value.name}</strong>
                }
                subheader={
                  <p>
                    {value.email}
                    <br />
                    {value.telephone}
                  </p>
                }
                action={
                  <p>
                    <Button color="primary" variant="contained">
                      Edit
                    </Button>{" "}
                    <Button color="secondary" variant="contained">
                      Delete
                    </Button>
                  </p>
                }
              />
            </Card>
          ))}
        </Card>
      </div>
    );
  }
}
