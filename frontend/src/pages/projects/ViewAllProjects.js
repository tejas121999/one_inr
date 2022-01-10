import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { visuallyHidden } from '@mui/utils';
import Paper from '@mui/material/Paper';
import { FaRegEdit, FaRegEye } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

import './project.css';
import { getAllProjectAction } from '../../Redux/Actions/ProjectActions';

const ViewAllProjects = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [viewModal, setViewModal] = React.useState(false);
  const [viewData, setViewData] = React.useState('');
  const [fundModal, setFundModal] = React.useState(false);
  const [fundModalData, setFundModalData] = React.useState(0);
  // const [donorList, setDonorList] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectAction(''))
  }, [])


  let allProject = useSelector((state) => state.project.projectList)
  //console.log("shivani", allProject)


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    //console.log('ChinmayChange', newPage);

    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  let timeout = null;
  const handleChange = e => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };

  const onSearch = value => {
    if (value) {
      dispatch(getAllProjectAction(value));
    } else {
      dispatch(getAllProjectAction(''));
    }
  };

  const constData = [
    {
      id: 1,
      title: 'shivani',
      goal: 0,
      target: '0',
      funded: '0',
      days_left: '0',
      recurring: '$1',
      status: '',
      home_project: '',
      action: '',
    },
    {
      id: 1,
      title: 'shivani',
      goal: 0,
      target: '0',
      funded: '0',
      days_left: '0',
      recurring: '$1',
      status: '',
      home_project: '',
      action: '',
    },
  ];

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
            VIEW ALL PROJECT
          </p>
        </div>
      </div>
      <div className="ViewAll">
        <div className="white-box">
          <div className="row">
            <div className="col-2">
              <div className="input-box">
                <TextField
                  id="date"
                  label="start date"
                  type="date"
                  defaultValue="YY-DD-MM"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="input-box">
                <TextField
                  id="date"
                  label="end date"
                  type="date"
                  defaultValue="YY-DD-MM"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="search-btn">
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          <hr style={{ margin: '0' }} />
          <div
            className="row"
            style={{
              display: 'flex',
              padding: '20px',
              justifyContent: 'space-between',
            }}
          >
            <button type="button" className="btn btn-primary">
              Export
            </button>
            <label style={{ fontWeight: '500', marginTop: '0.5rem' }}>
              Search :
              <input
                type="search"
                placeholder="Search"
                style={{ marginLeft: '0.5em', border: '1px solid #ced4da' }}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <hr style={{ margin: '0' }} />
          <Paper sx={{ width: '100%' }}>
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
                  rowCount={allProject.length}
                />
                <TableBody>
                  {stableSort(allProject, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.title}
                          selected={isItemSelected}
                        >
                          <TableCell
                            id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                          >
                            {row.title}
                          </TableCell>
                          <TableCell align="center">{row.goal}</TableCell>
                          <TableCell align="center">{row.target}</TableCell>
                          <TableCell align="center">{row.funded}</TableCell>
                          <TableCell align="center">{row.days_left}</TableCell>
                          <TableCell align="center">{row.recurring}</TableCell>
                          <TableCell align="center">
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitch1"
                              />
                              <label
                                className="custom-control-label"
                                for="customSwitch1"
                              />
                            </div>
                          </TableCell>
                          <TableCell align="center">
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customSwitch2"
                              />
                              <label
                                className="custom-control-label"
                                for="customSwitch2"
                              />
                            </div>
                          </TableCell>
                          <TableCell align="center">
                            <button
                              data-bs-toggle="tooltip"
                              title="View Details"
                              className="btn"
                              onClick={() =>
                                history.push(`/project_details`, row)
                              }
                            >
                              <FaRegEye />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Edit"
                              className="btn"
                              onClick={() => history.push('/edit_project', row)}
                            >
                              <FaRegEdit />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Auto donate"
                              className="btn"
                              onClick={() => history.push('/auto_donate', row)}
                            >
                              <AiOutlineDollarCircle />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Contributors"
                              className="btn"
                              onClick={() => history.push('/Contributors', row)}
                            >
                              <BiLink />
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={allProject.length}
              rowsPerPage={rowsPerPage}
              page={page}
              pageSize={10}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              showLastButton={true}
              showFirstButton={true}
            />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default ViewAllProjects;

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
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'goal',
    numeric: true,
    disablePadding: false,
    label: 'Goal',
  },
  {
    id: 'target',
    numeric: true,
    disablePadding: false,
    label: 'Target',
  },
  {
    id: 'funded',
    numeric: true,
    disablePadding: false,
    label: 'Funded',
  },
  {
    id: 'days_left',
    numeric: true,
    disablePadding: false,
    label: 'Days Left',
  },
  {
    id: 'recurring',
    numeric: true,
    disablePadding: false,
    label: 'Recurring',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'home_project',
    numeric: true,
    disablePadding: false,
    label: 'Home Project',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
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
