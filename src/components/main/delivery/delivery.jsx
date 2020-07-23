import React, { Component } from "react";
import { Grid, Button, Card, Drawer } from "@material-ui/core";
import DeliveryForm from "./deliveryForm";
import ListOfDeliveryPersonel from "./listDeliveryPersonel";

export default class DeliveryPersonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openForm: false,
    };
  }
  render() {
    return (
      <div>
        <Drawer
          open={this.state.openForm}
          anchor="right"
          onClose={() => this.setState({ openForm: false })}
        >
          <DeliveryForm />
        </Drawer>
        <Grid container style={{ margin: "70px" }}>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Card
              elevation={3}
              style={{ padding: "10px", width: "100%", height: "150px" }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => this.setState({ openForm: true })}
              >
                Add Delivery
              </Button>
            </Card>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>

        <Grid container style={{ margin: "70px" }}>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <ListOfDeliveryPersonel />
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
      </div>
    );
  }
}
