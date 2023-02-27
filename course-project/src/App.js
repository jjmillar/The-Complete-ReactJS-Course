import React from "react";

import classes from "./App.module.css";
import ProductData from "./ProductData.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color-1024x576.png"
            alt="Amazon Logo"
          />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

          {/*<div className={classes.TimeSection}>
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
          </div>*/}

          <div className={classes.HeartBeatSection}>
          <i class="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div>
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>
            {ProductData.description}
          </p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img
              className={[
                classes.ProductImage,
                classes.SelectedProductImage,
              ].join(" ")}
              src="https://imgur.com/iOeUBV7.png"
              alt="Black Colorored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/PTgQlim.png"
              alt="Red Colorored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/Mplj1YR.png"
              alt="Blue Colorored Watch"
            />
            <img
              className={classes.ProductImage}
              src="https://imgur.com/xSIK4M8.png"
              alt="Purple Colorored Watch"
            />
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button
              className={[
                classes.FeatureItem,
                classes.SelectedFeatureItem,
              ].join(" ")}
            >
              Time
            </button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
