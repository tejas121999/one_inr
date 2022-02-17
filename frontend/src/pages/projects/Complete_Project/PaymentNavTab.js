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

  const vendorData = [
    {
      id: 1,
      company: 'uewgsvyuhev',
      vendor: 'Rahul Jain',
      amount: '550',
      desc: 'Donation',
      date: '08 May 2020',
    },
    {
      id: 2,
      company: 'gswohev',
      vendor: 'sahil Jain',
      amount: '750',
      desc: 'Donation',
      date: '23 Mar 2022',
    },
  ];

  const partnerData = [
    {
      id: 1,
      company: 'svyu bjbjhev',
      partner: 'sanjyot chavhan',
      amount: '630',
      desc: 'Donation',
      date: '10 Feb 2022',
    },
    {
      id: 2,
      company: 'huguhev',
      partner: 'ramesh ghag',
      amount: '450',
      desc: 'Donation',
      date: '12 Apr 2018',
    },
  ];

  return (
    <Tabs
      activeKey={key}
      onSelect={k => setKey(k)}
      // className={key == 'donor' ? 'mb-0' : 'mb-5'}
      style={{ borderBottom: 'none', margin: '2em 3em' }}
    >
      <Tab eventKey="donor" title="Donors List">
        <div
          style={{
            margin: '2.5em 2.3em 3em  2.9em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div className="row" style={{ margin: '1em 0' }}>
            <div
              style={{
                display: 'flex',
                width: '50%',
                padding: '0.2em 2em 1em',
                justifyContent: 'flex-start',
              }}
            >
              <p className="overview">Overview</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '50%',
                padding: '0.5rem 1.5rem',
              }}
            >
              <input
                placeholder="Search"
                onChange={e => handleChange(e)}
                type="search"
                style={{
                  paddingLeft: '1em',
                  border: '1px solid #ced4da',
                  borderRadius: '1.5em',
                  height: '2.2em',
                }}
              />
            </div>
          </div>
          <Paper sx={{ width: '96%', margin: '0 1.5em 2em' }}>
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={constData.length}
                    keyId={key}
                  />
                  <TableBody>
                    {stableSort(constData, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
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
                            <TableCell id={labelId}>{row.donor}</TableCell>
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
        </div>
      </Tab>
      <Tab eventKey="vendor" title="Vendor Payment History">
        <div
          style={{
            margin: '2.5em 2.3em 3em  2.9em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div className="row" style={{ margin: '1em 0' }}>
            <div
              style={{
                display: 'flex',
                width: '50%',
                padding: '0.2em 2em 1em',
                justifyContent: 'flex-start',
              }}
            >
              <p className="overview">Overview</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '50%',
                padding: '0.5rem 1.5rem',
              }}
            >
              <input
                placeholder="Search"
                onChange={e => handleChange(e)}
                type="search"
                style={{
                  paddingLeft: '1em',
                  border: '1px solid #ced4da',
                  borderRadius: '1.5em',
                  height: '2.2em',
                }}
              />
            </div>
          </div>
          <Paper sx={{ width: '96%', margin: '0 1.5em 2em' }}>
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={vendorData.length}
                    keyId={key}
                  />
                  <TableBody>
                    {stableSort(vendorData, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.company}
                            selected={isItemSelected}
                          >
                            <TableCell id={labelId}>{row.company}</TableCell>
                            <TableCell>{row.vendor}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell>{row.date}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <hr style={{ margin: '0' }} />
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={vendorData.length}
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
        </div>
      </Tab>
      <Tab eventKey="partner" title="Partner Payment History">
        <div
          style={{
            margin: '2.5em 2.3em 3em  2.9em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div className="row" style={{ margin: '1em 0' }}>
            <div
              style={{
                display: 'flex',
                width: '50%',
                padding: '0.2em 2em 1em',
                justifyContent: 'flex-start',
              }}
            >
              <p className="overview">Overview</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '50%',
                padding: '0.5rem 1.5rem',
              }}
            >
              <input
                placeholder="Search"
                onChange={e => handleChange(e)}
                type="search"
                style={{
                  paddingLeft: '1em',
                  border: '1px solid #ced4da',
                  borderRadius: '1.5em',
                  height: '2.2em',
                }}
              />
            </div>
          </div>
          <Paper sx={{ width: '96%', margin: '0 1.5em 2em' }}>
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={partnerData.length}
                    keyId={key}
                  />{' '}
                  <TableBody>
                    {stableSort(partnerData, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.company}
                            selected={isItemSelected}
                          >
                            <TableCell id={labelId}>{row.company}</TableCell>
                            <TableCell>{row.partner}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell>{row.date}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <hr style={{ margin: '0' }} />
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={partnerData.length}
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
        </div>
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

const headCells1 = [
  {
    id: 'company',
    numeric: false,
    label: 'Company Name',
  },
  {
    id: 'vendor',
    numeric: false,
    label: 'Vendor Name',
  },
  {
    id: 'amount',
    numeric: false,
    label: 'Amount Paid',
  },
  {
    id: 'desc',
    numeric: false,
    label: 'Description',
  },
  {
    id: 'date',
    numeric: false,
    label: 'Date',
  },
];

const headCells2 = [
  {
    id: 'company',
    numeric: false,
    label: 'Company Name',
  },
  {
    id: 'partner',
    numeric: false,
    label: 'Partner Name',
  },
  {
    id: 'amount',
    numeric: false,
    label: 'Amount Paid',
  },
  {
    id: 'desc',
    numeric: false,
    label: 'Description',
  },
  {
    id: 'date',
    numeric: false,
    label: 'Date',
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
      {props.keyId === 'donor' ? (
        <TableRow>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              // align="center"
              style={{ fontWeight: 'bold' }}
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
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      ) : props.keyId === 'vendor' ? (
        <TableRow>
          {headCells1.map(headCell => (
            <TableCell
              key={headCell.id}
              // align="center"
              style={{ fontWeight: 'bold' }}
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
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      ) : props.keyId === 'partner' ? (
        <TableRow>
          {headCells2.map(headCell => (
            <TableCell
              key={headCell.id}
              // align="center"
              style={{ fontWeight: 'bold' }}
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
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      ) : (
        ''
      )}
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
