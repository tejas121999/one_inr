import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
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
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as View } from '../../assets/icons/view.svg';
import { ReactComponent as AutoDonate } from '../../assets/icons/Autodonate.svg';
import { ReactComponent as Contribute } from '../../assets/icons/Contribute.svg';
import Switch from '@material-ui/core/Switch';
import './project.css';
import { getAllProjectAction } from '../../Redux/Actions/ProjectActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewAllProjects = () => {
  const [state, setState] = React.useState({
    checked: true,
    checkedB: true,
  });

  const handleChangeSwitch = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectAction(''));
  }, []);

  let allProject = useSelector(state => state.project.projectList);

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
      <div
        className="row"
        style={{
          margin: '1em',
        }}
      >
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
            View All Project
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '50%',
            padding: '0.5em 2.3em',
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
      {allProject && allProject.length > 0 ? (
        <div
          style={{
            margin: '30px 50px',
            marginBottom: '5em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div className="row" style={{ margin: '1em 0' }}>
            <div
              style={{
                display: 'flex',
                width: '30%',
                padding: '0.2em 0 1em 2em',
                justifyContent: 'flex-start',
              }}
            >
              <p className="overview">Overview</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '70%',
                padding: '0.5rem 1.5rem 0.5rem 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    margin: '0 0.4em',
                  }}
                >
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    // value="2018-07-22"
                    style={{
                      padding: '0 0.5em',
                      border: '1px solid #ced4da',
                      borderRadius: '1.5em',
                      height: '2.3em',
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: '0',
                  }}
                >
                  <input
                    type="date"
                    id="end"
                    name="trip-end"
                    // value="2018-07-22"
                    style={{
                      padding: '0em 0.5em',
                      border: '1px solid #ced4da',
                      borderRadius: '1.5em',
                      height: '2.3em',
                    }}
                  />
                </div>
                {/* <div> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    marginLeft: '0.5em',
                    borderRadius: '2em',
                    fontSize: '20',
                  }}
                >
                  Search
                </button>
                {/* </div> */}
              </div>

              <button
                style={{
                  marginLeft: '0.5em',
                  borderRadius: '2em',
                  fontSize: '20',
                }}
                className="btn btn-primary"
                // onClick={e => handleClick(e)}
              >
                Export
              </button>
              {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ top: '30px', left: '-8px' }}
              >
                <MenuItem>
                  <button
                    className="export-btn w-100"
                    onClick={() => onCopyClick()}
                  >
                    Copy
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="export-btn w-100" onClick={downloadCsv}>
                    CSV
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="export-btn w-100" onClick={downloadXls}>
                    Excel
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="export-btn w-100" onClick={downloadPdf}>
                    PDF
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="export-btn w-100"
                    onClick={() => onPrintClick()}
                  >
                    Print
                  </button>
                </MenuItem>
              </Menu> */}
            </div>
          </div>
          {/* <hr style={{ margin: '0' }} /> */}
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <TableContainer>
              <Table aria-labelledby="tableTitle">
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
                          <TableCell id={labelId} align="left">
                            {row.title}
                          </TableCell>
                          <TableCell align="left">{row.goal}</TableCell>
                          <TableCell align="left">{row.target}</TableCell>
                          <TableCell align="left">{row.funded}</TableCell>
                          <TableCell align="left">{row.days_left}</TableCell>
                          <TableCell align="left">{row.recurring}</TableCell>
                          <TableCell align="left">
                            {/* <div className="container"> */}
                            <Switch color="primary" size="medium" />
                            {/* </div> */}
                          </TableCell>
                          <TableCell align="left">
                            <Switch color="primary" size="medium" />
                          </TableCell>
                          <TableCell align="left">
                            <button
                              data-bs-toggle="tooltip"
                              title="View Details"
                              className="btn"
                              onClick={() =>
                                history.push(`/project_details`, row)
                              }
                              style={{ padding: '0 0.5em 0 0' }}
                            >
                              <View style={{ width: '25', height: '20' }} />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Edit"
                              className="btn"
                              onClick={() => history.push('/edit_project', row)}
                              style={{ padding: '0' }}
                            >
                              {/* <FaRegEdit /> */}
                              <Edit style={{ width: '20', height: '20' }} />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Auto donate"
                              className="btn"
                              onClick={() => history.push('/auto_donate', row)}
                              style={{ padding: '0 0.4em' }}
                            >
                              <AutoDonate
                                style={{ width: '22', height: '23' }}
                              />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Contributors"
                              className="btn"
                              onClick={() => history.push('/Contributors', row)}
                              style={{ padding: '0' }}
                            >
                              <Contribute
                                style={{ width: '24', height: '23' }}
                              />
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
      ) : (
        <Loader />
      )}
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
