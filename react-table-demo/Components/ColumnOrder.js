import React from "react";
import { useTable, useColumnOrder } from "react-table";
import classes from "./Table.module.css";
import tabledata from "../tabledata.json";
import colums from "../colums";

const ColumnOrder = () => {
  const data = React.useMemo(() => tabledata, []);
  const columns = React.useMemo(() => colums, []);
  const table = useTable({ columns, data }, useColumnOrder);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = table;

  const changeOrder = () => {
    setColumnOrder([
      "age",
      "contact",
      "gender",
      "firstName",
      "lastName",
      "description",
    ]);
  };
  return (
    <div>
      <h1>Column Order Table</h1>
      <button onClick={changeOrder}>Change column order</button>
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

export default ColumnOrder;
