import React from "react";
import { useSortBy, useTable } from "react-table";
import classes from "./Table.module.css";

const SortingTable = () => {
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
        // columns: [],
      },
    ],
    []
  );
  const table = useTable({ columns, data }, useSortBy);

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
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  {/* {column.isSorted ? (
                    <span
                      className="fas fa-chevron-up"
                      style={{ "font-size": "12px" }}
                    ></span>
                  ) : (
                    <span
                      className="fas fa-chevron-down"
                      style={{ "font-size": "12px" }}
                    ></span>
                  )} */}
                  {/* {column.isSorted ? (column.isSortedDesc ? "^" : "^^") : ""} */}
                </th>
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
        {/* <tfoot>
          {footerGroups.map((footergroup) => (
            <tr {...footergroup.getFooterGroupProps()}>
              {footergroup.headers.map((column) => (
                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  );
};

export default SortingTable;
