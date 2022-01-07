import * as React from 'react';
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
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FcMoneyTransfer } from 'react-icons/fc';
import { RiRefund2Line } from 'react-icons/ri';
import { BsArchive, BsEye } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCompletedProjectAction,
  getCompletedProjectByValueAction,
} from '../../Redux/Actions/ProjectActions';

const CompleteProject = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllCompletedProjectAction());
  }, []);

  let completedProjectList = useSelector(
    state => state.project.completedProjectList,
  );

  // const ViewModalOpen = data => {
  //   setViewData(data);
  //   setViewModal(true);
  // };
  // const ViewModalClose = () => {
  //   setViewModal(false);
  // };
  // const fundModaOpen = data => {
  //   setFundModalData(data.id);
  //   setFundModal(true);
  // };
  // const fundModaClose = () => {
  //   setFundModal(false);
  // };
  // const deleteModalOpen = data => {
  //   setDeleteID(data.id);
  //   setDeleteModal(true);
  // };
  // const deleteModalClose = () => {
  //   setDeleteModal(false);
  // };

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
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - completedProjectList.length)
      : 0;
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
      dispatch(getCompletedProjectByValueAction(value));
    } else {
      dispatch(getAllCompletedProjectAction());
    }
  };

  // const constData = [
  //   {
  //     id: 1,
  //     title: 'Behatar Swaasthay, Behatar Desh',
  //     date: '08 May 2020 To 08 May 2020',
  //     goal: '456',
  //     funded: '287',
  //     paid: '13',
  //     status: 'Half Paid',
  //     action: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Feed Cows with grass of Love',
  //     date: '23 Oct 2019 To 23 Oct 2019',
  //     goal: '114',
  //     funded: '5',
  //     paid: '0',
  //     status: 'Refunded',
  //     action: '',
  //   },
  //   {
  //     id: 3,
  //     title: 'pahli roti dayittv ki',
  //     date: '27 Nov 2019 To 27 Nov 2019',
  //     goal: '338',
  //     funded: '29',
  //     paid: '0',
  //     status: 'Action Required',
  //     action: '',
  //   },
  //   {
  //     id: 4,
  //     title: 'Feeding Pigeons Grains',
  //     date: '08 Feb 2020 To 08 Feb 2020',
  //     goal: '582',
  //     funded: '582',
  //     paid: '100',
  //     status: 'Half Paid',
  //     action: '',
  //   },
  // ];

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
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
            }}
          >
            COMPLETED PROJECTS
          </p>
        </div>
      </div>
      {completedProjectList && completedProjectList.length > 0 ? (
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
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
            <React.Fragment>
              <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={completedProjectList.length}
                  />
                  <TableBody>
                    {stableSort(
                      completedProjectList,
                      getComparator(order, orderBy),
                    )
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
                              padding="none"
                            >
                              {row.title}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.goal}</TableCell>
                            <TableCell align="center">{row.funded}</TableCell>
                            <TableCell align="center">{row.paid}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Archive"
                                className="btn"
                              //   onClick={() => history.push('/edit_ngo', row)}
                              >
                                <BsArchive size={20} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Refund"
                                className="btn"
                              //   onClick={() => fundModaOpen(row)}
                              >
                                <RiRefund2Line size={23} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Transfer"
                                className="btn"
                                onClick={() =>
                                  history.push('/payments/transfer', row)
                                }
                              >
                                <FcMoneyTransfer size={21} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="View"
                                className="btn"
                                onClick={
                                  () => history.push(`/payments/view`, row)
                                  // history.push(`/payments/${id}`, row)
                                }
                              >
                                <BsEye size={21} />
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
                count={completedProjectList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                pageSize={10}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          </Paper>
        </div>
      ) : (
        <Loader style={{ marginTop: '15%' }} />
      )}
    </>
  );
};

export default CompleteProject;

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
    id: 'title',
    numeric: false,
    // disablePadding: true,
    label: 'Title',
  },
  {
    id: 'date',
    numeric: true,
    label: 'Date',
  },
  {
    id: 'goal',
    numeric: true,
    label: 'Goal',
  },
  {
    id: 'funded',
    numeric: true,
    label: 'Funded',
  },
  {
    id: 'paid',
    numeric: true,
    label: 'Paid',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Status',
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
            padding={headCell.disablePadding ? 'none' : 'normal'}
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
