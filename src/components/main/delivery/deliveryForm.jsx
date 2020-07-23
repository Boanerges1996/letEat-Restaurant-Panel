import React, { Component } from "react";
import { Card, Grid, Input as Inp, Button } from "@material-ui/core";
import { Input, Button as Btn } from "semantic-ui-react";
import PhoneInput from "react-phone-number-input";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

export default class DeliveryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      telephone: "",
    };
  }

  render() {
    return (
      <div
        style={{
          width: "400px",
          height: "100vh",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h2>Delivery Personel Form</h2>
        <table style={{ margin: "0 auto" }}>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>Name</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Input placeholder="Name..." style={{ width: "180px" }} />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>Age</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Input
                  type="number"
                  placeholder="Age"
                  style={{ width: "180px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>DOB</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Input
                  type="date"
                  placeholder="Date of birth"
                  style={{ width: "180px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>
                  Residential Address
                </label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Input
                  type="text"
                  placeholder="Residential address"
                  style={{ width: "180px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>email</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Input
                  type="email"
                  placeholder="email"
                  style={{ width: "180px" }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ textAlign: "left" }}>
                <PhoneInput
                  onChange={(value) => this.setState({ telephone: value })}
                  value={this.state.telephone}
                  style={{ width: "180px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}>Photo</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Button
                  color="primary"
                  variant="contained"
                  component="label"
                  startIcon={<PhotoCameraIcon />}
                >
                  Photo
                  <input type="file" style={{ display: "none" }} />
                </Button>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right" }}>
                <label style={{ fontWeight: "bold" }}> National ID</label>
              </td>
              <td style={{ textAlign: "left" }}>
                <Button
                  color="primary"
                  variant="contained"
                  component="label"
                  startIcon={<PhotoCameraIcon />}
                >
                  Photo
                  <input type="file" style={{ display: "none" }} />
                </Button>
              </td>
            </tr>
          </tbody>
          <tfoot
            style={{ padding: "20px", textAlign: "center", marginTop: "20px" }}
          >
            <tr>
              <td></td>
              <td style={{ textAlign: "left" }}>
                {" "}
                <Btn
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "120px",
                    margin: "0 auto",
                    backgroundColor: "rgb(233,30,99)",
                  }}
                >
                  Register
                </Btn>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
