import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Background from "./image/product1.jpg";
import * as serviceWorker from "./serviceWorker";

function Card(props) {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="card">
        <img className="card__img" src={props.img}></img>
        <h2 className="card__subtitle">{props.subTitle}</h2>
        <p className="card__desc">{props.description}</p>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Card
    title="Editor's Picks"
    img={Background}
    subTitle="Gifts for Her"
    description="For Valentine's Day"
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
