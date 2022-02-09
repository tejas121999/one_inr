import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   getDonorByValueAction,
//   getViewAllDonorAction,
// } from '../../Redux/Actions/DonorActions';

function PaymentNavTab() {
  const [key, setKey] = useState('donor');
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(getViewAllDonorAction());
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  //   const emptyRows =
  //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - donorList.length) : 0;
  // SEARCH
  let timeout = null;
  const handleChange = e => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };

  const onSearch = value => {
    if (value) {
      //   dispatch(getDonorByValueAction(value));
    } else {
      //   dispatch(getViewAllDonorAction());
    }
  };

  const constData = [
    {
      id: 1,
      donor: 'Rahul Jain',
      amount: '08 May 2020',
    },
    {
      id: 2,
      donor: 'Prakash Mishra',
      amount: '15 June 2019',
    },
  ];

  return (
    <Tabs
      activeKey={key}
      onSelect={k => setKey(k)}
      className={key == 'donor' ? 'mb-0' : 'mb-5'}
      style={{ borderBottom: 'none' }}
    >
      <Tab eventKey="donor" title="Donores List">
        <div
          style={{
            display: 'flex',
            padding: '20px',
            justifyContent: 'end',
          }}
        >
          <label style={{ fontWeight: '500' }}>
            Search :
            <input
              type="search"
              placeholder="Search"
              style={{ marginLeft: '0.5em', border: '1px solid #ced4da' }}
              onChange={e => handleChange(e)}
            />
          </label>
        </div>
        <hr style={{ margin: '0' }} />
        <Paper sx={{ width: '100%' }}>
          <>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={constData.length}
                />
                <TableBody>
                  {stableSort(constData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell
                            id={labelId}
                            style={{ paddingLeft: '1em' }}
                            scope="row"
                            padding="none"
                          >
                            {row.donor}
                          </TableCell>
                          <TableCell>{row.amount}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
          </>
        </Paper>
      </Tab>
      <Tab eventKey="vendor" title="Vendor Payment History">
        <Paper sx={{ width: '100%' }}>
          <>
            <TableContainer>
              <table class="table table-responsive">
                <tbody>
                  <tr>
                    <th class="text-center" style={{ width: '18rem' }}>
                      Company Name
                    </th>
                    <th class="text-center" style={{ width: '18rem' }}>
                      Vendor Name
                    </th>
                    <th class="text-center">Amount Paid</th>
                    <th class="text-center" style={{ width: '21rem' }}>
                      Description
                    </th>
                    <th class="text-center" style={{ width: '13rem' }}>
                      Date
                    </th>
                  </tr>
                  <tr>
                    <td class="text-center">Softkraft Solutions</td>
                    <td class="text-center">Sagar Nagda</td>
                    <td class="text-center">55</td>
                    <td class="text-center">donation</td>
                    <td class="text-center">23 Oct 2020</td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <hr style={{ margin: '0' }} />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
          </>
        </Paper>
      </Tab>
      <Tab eventKey="partner" title="Partner Payment History">
        <Paper sx={{ width: '100%' }}>
          <>
            <TableContainer>
              <table class="table table-responsive">
                <tbody>
                  <tr>
                    <th class="text-center" style={{ width: '18rem' }}>
                      Company Name
                    </th>
                    <th class="text-center" style={{ width: '18rem' }}>
                      Partner Name
                    </th>
                    <th class="text-center">Amount Paid</th>
                    <th class="text-center" style={{ width: '21rem' }}>
                      Description
                    </th>
                    <th class="text-center" style={{ width: '13rem' }}>
                      Date
                    </th>
                  </tr>
                  <tr>
                    <td class="text-center">Nimap Infotech LLP</td>
                    <td class="text-center">Priyank Ranka</td>
                    <td class="text-center">99</td>
                    <td class="text-center">donation</td>
                    <td class="text-center">23 Oct 2019</td>
                  </tr>
                  <tr>
                    <td class="text-center">Lenovo Infotech LLP</td>
                    <td class="text-center">Carry Lane</td>
                    <td class="text-center">59</td>
                    <td class="text-center">donation</td>
                    <td class="text-center">10 Jan 2020</td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <hr style={{ margin: '0' }} />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
          </>
        </Paper>
      </Tab>
    </Tabs>
  );
}

export default PaymentNavTab;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: 'donor',
    numeric: false,
    // disablePadding: true,
    label: 'Donor Name',
  },
  {
    id: 'amount',
    numeric: true,
    label: 'Donated Amount',
  },
];
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="table-head">
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            // align="center"
            style={{ fontWeight: '600' }}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
