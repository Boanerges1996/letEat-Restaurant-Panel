import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Grid } from "@material-ui/core";

const fadeImages = [
  "images/slide_5.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg",
];

const Slideshow = () => {
  return (
    <div
      className="slide-container"
      style={{ width: "100%", height: "700px", textAlign: "center" }}
    >
      <Grid container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80"
                  alt="slide"
                  style={{ width: "100%", height: "600px" }}
                />
              </div>
              <h2>Delicious delicacies</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9911d448613063.589ca0f197102.jpg"
                  alt="slide"
                  style={{ width: "100%", height: "600px" }}
                />
              </div>
              <h2>Wonderful food packaging</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg"
                  alt="slide"
                  style={{ width: "100%", height: "600px" }}
                />
              </div>
              <h2>Food delivary service</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://843646.smushcdn.com/1812173/wp-content/uploads/2019/06/1-33.jpg?lossy=1&strip=1&webp=1"
                  alt="slide"
                  style={{ width: "100%", height: "600px" }}
                />
              </div>
              <h2>Cash On delivery</h2>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Slideshow;
