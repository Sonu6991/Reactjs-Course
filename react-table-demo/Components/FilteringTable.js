import React, { useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import SearchInput from "./SearchInput";
import classes from "./Table.module.css";
import tabledata from "../tabledata.json";
import colums from "../colums";

const FilteringTable = () => {
  const data = React.useMemo(() => tabledata, []);
  const columns = React.useMemo(() => colums, []);
  const table = useTable({ columns, data }, useGlobalFilter);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  } = table;

  const { globalFilter } = state;

  return (
    <div>
      <h1>Filtering Table</h1>
      <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
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

export default FilteringTable;
