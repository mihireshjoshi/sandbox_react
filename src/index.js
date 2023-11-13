//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Mihiresh";
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Creeated by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
