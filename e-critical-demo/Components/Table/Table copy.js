import { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableContext } from '../../ShareableData/TableContext';
import { Card } from '@mui/material';
import classes from './Table.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
import LongMenu from '../ContextMenu/other';
import { IconButton } from '@mui/material';


const StickyHeadTable = (props) => {
      const { columns, data, pageCount } = props;
      const [page, setPage] = useState(0);
      const [showContext, setShowContext] = useState(false);
      const [mousePosition, setMousePosition] = useState(null);
      const { rowsPerPage, setRowsPerPage } = useContext(TableContext)
      const router = useRouter()
      console.log(router);
      const handleChangePage = (event, newPage) => {
            setPage(newPage);
      };


      // Context menu
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);



      const handleClick = (event, isRight) => {
            event.preventDefault()
            event.stopPropagation()
            console.log("event.currentTarget", event.currentTarget);

            // setAnchorEl(event.currentTarget);

            if (isRight) {
                  const ele = document.getElementById("long-menu")
                  console.log(ele);
            } else {
                  setAnchorEl(event.currentTarget);
            }
      };
      const handleMenuClose = () => {
            setAnchorEl(null);
      };
      // ---------- Context menu

      // rows per page
      const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
      };
      //---------- rows per page


      return (
            <Card>
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
                                                <TableRow
                                                      aria-label="more"
                                                      id="long-button"
                                                      aria-controls={open ? 'long-menu' : undefined}
                                                      aria-owns={open ? "long-menu" : undefined}
                                                      aria-expanded={open ? 'true' : undefined}
                                                      aria-haspopup="true"
                                                      onContextMenu={(e) => { handleClick(e, true) }}
                                                      className={`${classes["table-row"]}`} key={row.id} hover role="checkbox" tabIndex={-1}  >
                                                      {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                  <TableCell key={column.id} align={column.align}>
                                                                        {column.id !== 'action' ? value :

                                                                              <IconButton
                                                                                    aria-label="more"
                                                                                    id="long-button"
                                                                                    aria-controls={open ? 'long-menu' : undefined}
                                                                                    aria-owns={open ? "long-menu" : undefined}
                                                                                    aria-expanded={open ? 'true' : undefined}
                                                                                    aria-haspopup="true"
                                                                                    onClick={handleClick}
                                                                              >
                                                                                    <MoreVertIcon />
                                                                              </IconButton>}

                                                                  </TableCell>
                                                            )
                                                      })}
                                                </TableRow>
                                          );
                                    })}
                                    <LongMenu open={open} anchorEl={anchorEl} handleClose={handleMenuClose} position={mousePosition} />
                              </TableBody>
                        </Table>
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
