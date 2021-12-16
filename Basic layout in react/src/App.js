import "./App.css";
import { Fragment } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Main from "./Components/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <section style={{ height: "80vh", "background-color": "skyblue" }}>
        <Slider />
        <Main />
        <Slider />
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
