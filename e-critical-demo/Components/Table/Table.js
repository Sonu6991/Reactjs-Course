import { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableContext } from '../../ShareableData/TableContext';
import { Card, Menu } from '@mui/material';
import classes from './Table.module.css'
import ContextMenu from '../ContextMenu/ContextMenu';
import { height } from '@mui/system';


const StickyHeadTable = (props) => {
      const { columns, data } = props;
      const [page, setPage] = useState(3);
      const [showContext, setShowContext] = useState(false);
      const [mousePosition, setMousePosition] = useState(null);
      let hight = 200;
      const { rowsPerPage, setRowsPerPage } = useContext(TableContext)

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

            setShowContext(false)

            if (left) {
                  if (event.clientY > 400) { 
                        setMousePosition({
                              x: event.clientX - 165,
                              y: event.clientY - hight,
                        })
                  } else {

                        setMousePosition({
                              x: event.clientX - 165,
                              y: event.clientY - 4,
                        })
                  }
            } else {
                  if (event.clientY > 400) {
                        console.log("if");
                        setMousePosition({
                              x: event.clientX + 10,
                              y: event.clientY - height,
                        })
                  } else {
                        console.log("else");
                        setMousePosition({
                              x: event.clientX + 10,
                              y: event.clientY - 2,
                        })
                  }
            }

            setShowContext(true)
      }

      useEffect(() => {
            hight = showContext && +document.getElementById("context-menu").clientHeight
      }, [])
      const handleClose = () => {
            setShowContext(false);
      };

      console.log("show", showContext);
      return (
            <Card onClick={handleClose} sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHPapert: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                              <TableHead>
                                    <TableRow>
                                          {columns.map((column) => (
                                                <TableCell
                                                      key={column.id}
                                                      align={column.align}
                                                      style={{ minWidth: column.minWidth }}
                                                >
                                                      {column.label}
                                                </TableCell>
                                          ))}
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {data.map((row) => {
                                          return (
                                                <TableRow key={row.id} hover role="checkbox" tabIndex={-1} onContextMenu={handleContextMenu} onClick={handleClose} >
                                                      {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                  <TableCell key={column.id} align={column.align}>
                                                                        {column.id !== 'action' ? value : <span onClick={(e) => { handleContextMenu(e, true) }} className={`fas fa-ellipsis-v opacity-50 ${classes.menu}`}></span>}
                                                                  </TableCell>
                                                            )
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

            </Card >
      );
}
export default StickyHeadTable;