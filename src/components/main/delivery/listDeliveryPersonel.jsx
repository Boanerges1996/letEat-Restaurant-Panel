import React, { Component } from "react";
import data from "./data.json";
import { Card, CardHeader, Avatar, Button, Drawer } from "@material-ui/core";
import DeliveryEditForm from "./deliveryEditForm";

export default class ListOfDeliveryPersonel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedPersonel: {},
    };
  }

  render() {
    return (
      <div>
        <Drawer
          anchor="right"
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <DeliveryEditForm personelData={this.state.selectedPersonel} />
        </Drawer>
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
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() =>
                        this.setState({ open: true, selectedPersonel: value })
                      }
                    >
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
