import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Fragment } from "react";
import Header from "./Components/Header";
import Herobox from "./Components/Herobox";
import Navigation from "./Components/Navigation";
import CardSection from "./Components/CardSection";

function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Herobox />
      <div className="title">All Products (123)</div>
      <CardSection />
    </Fragment>
  );
}

export default App;
