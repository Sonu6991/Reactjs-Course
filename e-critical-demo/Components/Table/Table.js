import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const StickyHeadTable = (props) => {
      const { columns, data } = props;
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);

      const handleChangePage = (event, newPage) => {
            setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
      };

      return (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
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
                                                <TableRow key={row.id} hover role="checkbox" tabIndex={-1} key={row.code}>
                                                      {columns.map((column) => {
                                                            const value = row[column.id];
                                                            console.log(column.id);
                                                            return column.id !== 'action' ? (
                                                                  <TableCell key={column.id} align={column.align}>
                                                                        {value}
                                                                  </TableCell>
                                                            ) : <TableCell key={column.id} align={column.align}>
                                                                  <span className='fas fa-ellipsis-v opacity-50'></span>
                                                            </TableCell>
                                                      })}
                                                </TableRow>
                                          );
                                    })}
                              </TableBody>
                        </Table>
                  </TableContainer>
                  <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                  />
            </Paper>
      );
}
export default StickyHeadTable;