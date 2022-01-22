import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { FaRegEdit } from 'react-icons/fa';
import {
  getRazorpayAction,
  getRazorpayByValueAction,
} from '../../Redux/Actions/SettingAction';
import Loader from '../Loader';

const RazorpayCredentials = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('key_id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getRazorpayAction());
  }, []);

  const razorpayList = useSelector(state => state.setting.getRazorpay);
  console.log(razorpayList, 'razor');
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
      dispatch(getRazorpayByValueAction(value));
    } else {
      dispatch(getRazorpayAction());
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '15px',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
            }}
          >
            RAZORPAY CREDENTIALS
          </p>
          <Link
            to="/razorpay_credentials/create"
            type="button"
            className="btn btn-primary"
          >
            ADD RAZORPAY CREDENTIALS
          </Link>
        </div>
      </div>
      {razorpayList && razorpayList.length > 0 ? (
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            marginBottom: '5em',
          }}
        >
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
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={razorpayList.length}
                  />
                  <TableBody>
                    {stableSort(razorpayList, getComparator(order, orderBy))
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
                            <TableCell
                              id={labelId}
                              style={{ paddingLeft: '1em' }}
                              scope="row"
                              align="center"
                            >
                              {row.id}
                            </TableCell>
                            <TableCell align="center">{row.key_id}</TableCell>
                            <TableCell align="center">
                              {row.key_secret}
                            </TableCell>
                            <TableCell align="center">
                              {row.status ? 'Enabled' : 'Disabled'}
                            </TableCell>
                            <TableCell align="center">
                              {row.createdAt
                                ? row.createdAt
                                    .split('')
                                    .slice(0, 19)
                                    .join()
                                    .replace(/T/g, ' ')
                                    .replace(/,/g, '')
                                : '-'}
                            </TableCell>
                            <TableCell align="center">
                              {row.updatedAt
                                ? row.updatedAt
                                    .split('')
                                    .slice(0, 19)
                                    .join()
                                    .replace(/T/g, ' ')
                                    .replace(/,/g, '')
                                : '-'}
                            </TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => history.push('/id/edit', row)}
                              >
                                <FaRegEdit />
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={razorpayList.length}
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RazorpayCredentials;

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
    id: 'razorid',
    numeric: true,
    label: 'Id',
  },
  {
    id: 'key',
    numeric: false,
    // disablePadding: true,
    label: 'RAZORPAY KEY',
  },
  {
    id: 'secret',
    numeric: false,
    label: 'RAZORPAY SECRET',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Status',
  },
  {
    id: 'created',
    numeric: true,
    label: 'Created At',
  },
  {
    id: 'updated',
    numeric: true,
    label: 'Updated At',
  },
  {
    id: 'action',
    numeric: false,
    label: 'Action',
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
            align="center"
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <b>{headCell.label}</b>
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
