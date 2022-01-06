import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import ColumnOrder from "../Components/ColumnOrder";
import FilteringTable from "../Components/FilteringTable";
import PaginationTable from "../Components/PaginationTable";
import SortingTable from "../Components/SortingTable";

import Tabel from "../Components/Tabel";

export default function Home() {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const abc = ["sdjfsjd", "fsjd"];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      left: "100px !important",
      top: "50px !important",
    }),
  };
  const showcontext = (direction) => {
    return (
      // <DropdownButton
      //   // as={ele}
      //   key={direction}
      //   id={`dropdown-button-drop-${direction}`}
      //   drop={direction}
      //   show={show}
      //   style={{ position: "absolute", top: `${x}px`, left: `${y}px` }}
      // >
      //   <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      //   <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      //   <Dropdown.Divider />
      //   <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      // </DropdownButton>
      <div
        style={{
          position: "fixed !important",
          left: `${x}px !important`,
          top: `${y}px !important`,
          // left: "100px !important",
          // top: "50px !important",
        }}
      >
        <Dropdown show={true}>
          <DropdownMenu
            // styles={{
            //   // position: "fixed !important",
            //   // left: `${x}px !important`,
            //   // top: `${y}px !important`,
            //   left: "100px !important",
            //   top: "50px !important",
            // }}
            styles={customStyles}
          >
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };
  return (
    <div>
      {/* <Tabel /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <ColumnOrder /> */}
      {show && (
        <div
          style={{
            position: "absolute !important",
            // left: `${x}px !important`,
            top: `100px  !important`,
            // left: "100px !important",
            // top: "50px !important",
            // border: "1px  solid red",
            display: "inline-block !important",
          }}
        >
          gdfgfd
        </div>
      )}
      <div className="mb-2 " style={{ marginTop: 300 }}></div>
      <li
        style={{ position: "relative !important" }}
        onContextMenu={(e) => {
          e.preventDefault();
          console.log(e.clientX, e.clientY);
          setX(e.clientX);
          setY(e.clientY);
          setShow(!show);
        }}
        onClick={() => {
          setShow(false);
        }}
        // onMouseMove={(e) => {
        //   console.log(e.clientX, e.clientY);
        //   x = e.clientX;
        //   y = e.clientY;
        // }}
      >
        show menu
      </li>
      {show && showcontext("left")}
    </div>
  );
}
