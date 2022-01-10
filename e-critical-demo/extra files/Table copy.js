import { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TableContext } from "../../ShareableData/TableContext";
import { Card, Menu } from "@mui/material";
import classes from "./Table.module.css";
import ContextMenu from "../ContextMenu/ContextMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRouter } from "next/router";

const StickyHeadTable = (props) => {
      const { columns, data } = props;
      const [page, setPage] = useState(0);
      const [showContext, setShowContext] = useState(false);
      const [mousePosition, setMousePosition] = useState(null);
      let hight = 200;
      const { rowsPerPage, setRowsPerPage } = useContext(TableContext);
      const router = useRouter();
      console.log(router);
      const handleChangePage = (event, newPage) => {
            setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
      };
      const handleContextMenu = (event, left) => {
            event.preventDefault();
            event.stopPropagation();

            setShowContext(false);

            if (left) {
                  if (event.clientY > window.innerHeight - 200) {
                        setMousePosition({
                              x: event.clientX - 120,
                              y: event.clientY - 200,
                        });
                  } else {
                        setMousePosition({
                              x: event.clientX - 120,
                              y: event.clientY - 3,
                        });
                  }
            } else {
                  if (event.clientY > window.innerHeight - 200) {
                        setMousePosition({
                              x: event.clientX + 10,
                              y: event.clientY - 200,
                        });
                  } else {
                        setMousePosition({
                              x: event.clientX + 10,
                              y: event.clientY - 2,
                        });
                  }
            }

            setShowContext(true);
      };

      useEffect(() => {
            hight =
                  showContext && +document.getElementById("context-menu").clientHeight;
      }, []);
      const handleClose = () => {
            setShowContext(false);
      };
      const rowClickHandler = () => {
            handleClose();
            // setShowContext(false);
            // router.push("/hospitals/hospitalId");
      };

      console.log("show", showContext);
      return (
            <Card onClick={handleClose} sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHPapert: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                    <TableRow className="d-flex">
                                          {columns.map((column) => (
                                                <TableCell
                                                      className={`${classes.td}`}
                                                      key={column.id}
                                                      align="center"
                                                      style={{ flex: column.flex, minWidth: column.minWidth }}
                                                >
                                                      {column.label}
                                                </TableCell>
                                          ))}
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {data.map((row) => {
                                          return (
                                                <TableRow
                                                      className={`${classes["table-row"]} d-flex td`}
                                                      key={row.id}
                                                      hover
                                                      role="checkbox"
                                                      tabIndex={-1}
                                                      onContextMenu={handleContextMenu}
                                                      onClick={rowClickHandler}
                                                >
                                                      {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                  <TableCell
                                                                        className={`${classes.td}`}
                                                                        style={{ flex: column.flex, minWidth: column.minWidth }}
                                                                        key={column.id}
                                                                        align={column.align}
                                                                  >
                                                                        {column.id !== "action" ? (
                                                                              value
                                                                        ) : (
                                                                              <MoreVertIcon
                                                                                    className={classes.menu}
                                                                                    onClick={(e) => {
                                                                                          handleContextMenu(e, true);
                                                                                    }}
                                                                              ></MoreVertIcon>
                                                                        )}
                                                                  </TableCell>
                                                            );
                                                      })}
                                                </TableRow>
                                          );
                                    })}
                              </TableBody>
                        </Table>
                        {showContext && <ContextMenu mousePosition={mousePosition} />}
                  </TableContainer>

                  <TablePagination
                        className="d-flex align-items-center justify-content-end"
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                  />
            </Card>
      );
};
export default StickyHeadTable;

{
      /* <span onClick={(e) => { handleContextMenu(e, true) }} className={`fas fa-ellipsis-v opacity-50 ${classes.menu}`}></span> */
}
