import React, { Component } from "react";
import Card2 from "./Card2";
import Hoc from "./Hoc";
import List from "./List";

const UserList = Hoc(List);
const Card = Hoc(Card2);

export default class HOCComp extends Component {
  render() {
    return (
      <>
        <ul className="ul">
          <UserList />
        </ul>
        <div className="hoc-card-container">
          <Card name="xyz" />
        </div>
      </>
    );
  }
}
