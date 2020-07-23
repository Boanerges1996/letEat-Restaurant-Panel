import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Input, Button } from "semantic-ui-react";
import PhoneInput from "react-phone-number-input";

export default class RestaurantDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "US",
      telephone: "244581027",
      ownerName: "",
      restaurantName: "",
      email: "",
      city: "",
      state: "",
    };
  }

  render() {
    return (
      <div style={{ margin: "70px" }}>
        <Grid container>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="restaurant"
              style={{ width: "100%", height: "350px" }}
            />
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>Owner name</label>
                  </td>
                  <td>
                    <Input value="Samson Kwaku Nkrumah" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>
                      Restaurant Name
                    </label>
                  </td>
                  <td>
                    <Input value="Munch Foodies" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>Email</label>
                  </td>
                  <td>
                    <Input value="bogmen@gmail.com" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>Telephone</label>
                  </td>
                  <td>
                    <Input value="Munch Foodies" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>City</label>
                  </td>
                  <td>
                    <Input value="Dansoman" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    <label style={{ fontWeight: "bold" }}>State/Region</label>
                  </td>
                  <td>
                    <Input value="Greater Accra" />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  {/* <td style={{ textAlign: "right" }}>
                  <label style={{ fontWeight: "bold" }}>Telephone</label>
                </td> */}
                  <td>
                    <PhoneInput
                      //   international
                      flagUrl="https://flag.pk/flags/4x3/{xx}.svg"
                      country="Ghana"
                      onChange={(value) => {
                        this.setState({ telephone: value });
                        console.log(value);
                      }}
                      value={this.state.telephone}
                      defaultCountry="GH"
                    />
                  </td>
                  <td>
                    <Button
                      style={{ color: "white", backgroundColor: "#283593" }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </div>
    );
  }
}
