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
import { ReactComponent as View } from '../../assets/icons/view.svg';
import { ReactComponent as Transfer } from '../../assets/icons/Transfer.svg';
import { ReactComponent as Archieve } from '../../assets/icons/archieve.svg';
import { ReactComponent as Refund } from '../../assets/icons/Refund.svg';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCompletedProjectAction,
  getCompletedProjectByValueAction,
} from '../../Redux/Actions/ProjectActions';
import moment from 'moment';

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
    state => state.project.completedProjectList.result,
  );
  console.log(completedProjectList);
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

  return (
    <>
      <br />
      <br />
      <br />
      <div className="row" style={{ margin: '1em' }}>
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 2em',
            justifyContent: 'flex-start',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '25',
              fontWeight: 'bold',
              marginBottom: '0',
              paddingTop: '5px',
            }}
          >
            Completed Projects
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 2.3em',
            justifyContent: 'flex-end',
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
      <hr style={{ margin: '0' }} />
      {completedProjectList && completedProjectList.length > 0 ? (
        <div
          style={{
            margin: '30px 50px',
            marginBottom: '5em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div
            className="row"
            style={{ margin: '1em 0', padding: '0em 2em 1em' }}
          >
            <p className="overview">Overview</p>
          </div>
          {/* <hr style={{ margin: '0' }} /> */}
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <React.Fragment>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={completedProjectList.length}
                    headCells={headCells}
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
                            <TableCell id={labelId} align="left">
                              {row.title}
                            </TableCell>
                            <TableCell align="left">
                              {moment(row.startDate).format('ll')} To{' '}
                              {moment(row.endDate).format('ll')}
                            </TableCell>
                            <TableCell align="left">{row.goal}</TableCell>
                            <TableCell align="left">{row.funded}</TableCell>
                            <TableCell align="left">{row.paid}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left">
                              <button
                                data-bs-toggle="tooltip"
                                title="Archive"
                                className="btn"
                              >
                                <Archieve
                                  style={{ width: '24', height: '24' }}
                                />{' '}
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Refund"
                                className="btn"
                              >
                                <Refund style={{ width: '20', height: '20' }} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Transfer"
                                className="btn"
                                onClick={() =>
                                  history.push('/payments/transfer', row)
                                }
                              >
                                <Transfer
                                  style={{ width: '20', height: '20' }}
                                />{' '}
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="View"
                                className="btn"
                                onClick={
                                  () => history.push(`/payments/view`, row)
                                  // history.push(`/payments/${id}`, row)
                                }
                                style={{ padding: '0 0.5em 0 0' }}
                              >
                                <View style={{ width: '25', height: '20' }} />
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
        <Loader />
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
            align="left"
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
