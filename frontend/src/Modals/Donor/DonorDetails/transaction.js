import React from 'react';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../../components/Pagination';
import Loader from '../../../pages/Loader';
import { constData } from '../../../utils/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

const Transaction = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    console.log('ChinmayChange', newPage);

    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '10px',
        }}
      >
        <input type="date" />
        <input type="date" />
        <button className="btn btn-primary">Search</button>
      </div>

      <input placeholder="Search" type="search" />

      <Paper sx={{ width: '100%', mb: 2 }}>
        {constData && constData.length > 0 ? (
          <React.Fragment>
            <TableContainer id="tableDiv">
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={constData.length}
                  headCells={headCells}
                />
                <TableBody>
                  {stableSort(constData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow hover tabIndex={-1} key={row.name}>
                          <TableCell
                            id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                          >
                            {row.projectName}
                          </TableCell>
                          <TableCell align="center">{row.ngo}</TableCell>
                          <TableCell align="center">
                            {row.balanceNextRenewDate}
                          </TableCell>
                          <TableCell align="center">{row.donated}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={constData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              pageSize={10}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              showLastButton={true}
              showFirstButton={true}
            />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </Paper>
    </>
  );
};

export default Transaction;

const headCells = [
  {
    id: 'ProjectName',
    numeric: false,
    disablePadding: false,
    label: 'Project Name',
  },
  {
    id: 'ngo',
    numeric: true,
    disablePadding: false,
    label: 'NGO',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'donated',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
];
