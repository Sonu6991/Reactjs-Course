import React from "react";
import { useTable } from "react-table";
import classes from "./Table.module.css";

const Tabel = () => {
  const data = React.useMemo(
    () => [
      {
        firstName: "Sonu",
        lastName: "Chauhan",
        gender: "Female",
        age: "21",
        contact: "1234567890",
        description:
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae suscipit blanditiis reprehenderit placeat ",
      },
      {
        firstName: "Teajs",
        lastName: "Patel",
        gender: "Male",
        age: "22",
        contact: "2153486745",
        description:
          "amet consectetur adipisicing elit. Eaque explicabo magnam quod accusantium necessitatibus optio temporibus eligendi suscipit quo rerum",
      },
      {
        firstName: "Ajay",
        lastName: "Divaraniya",
        gender: "Male",
        age: "21",
        contact: "3256987425",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo magnam quod accusantium necessitatibus optio temporibus eligendi suscipit quo rerum.",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        Footer: "Name",
        columns: [
          {
            Header: "First name",
            Footer: "First name",
            accessor: "firstName", // accessor is the "key" in the data
          },
          {
            Header: "Last name",
            Footer: "Last name",
            accessor: "lastName", // accessor is the "key" in the data
          },
        ],
      },
      {
        Header: "Info",
        Footer: "Info",
        columns: [
          {
            Header: "Gender",
            Footer: "Gender",
            accessor: "gender", // accessor is the "key" in the data
          },
          {
            Header: "Age",
            Footer: "age",
            accessor: "age", // accessor is the "key" in the data
          },
          {
            Header: "Contact no",
            Footer: "Contact no",
            accessor: "contact", // accessor is the "key" in the data
          },
        ],
      },
      {
        Header: "Description",
        Footer: "Description",
        accessor: "description",
      },
    ],
    []
  );
  const table = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = table;
  return (
    <div>
      <h1>Table</h1>
      <table className={classes.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
