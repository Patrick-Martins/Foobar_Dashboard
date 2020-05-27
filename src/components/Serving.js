import React from "react";
import Order from "./Order";
import { ReactComponent as AlienHead } from "../images/svgs/head.svg";
// import alienHead from "../images/svgs/head.svg";

export default function Serving(props) {
  const ordersServing = props.serving.map((order) => <Order id={order.id} />);
  return (
    <section className="Serving dashboard-section">
      <h2 className="section-header">Currently serving</h2>
      <AlienHead className="alien-head" />
      {/* <div className="serving-container">
        <img src={alienHead} alt="Alien Head" />
      </div> */}
      <div className="servingOrders-container">{ordersServing}</div>
    </section>
  );
}
