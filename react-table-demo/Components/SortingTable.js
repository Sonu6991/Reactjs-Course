import React from "react";
import { useSortBy, useTable } from "react-table";
import classes from "./Table.module.css";
import tabledata from "../tabledata.json";
import colums from "../colums";

const SortingTable = () => {
  const data = React.useMemo(() => tabledata, []);
  const columns = React.useMemo(() => colums, []);
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
      <h1>Sorting Table</h1>
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
