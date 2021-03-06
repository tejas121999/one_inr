import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Carousel from 'react-bootstrap/Carousel';
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
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../Loader';
import { Link, useHistory } from 'react-router-dom';
import { visuallyHidden } from '@mui/utils';
import { getProjectByIdAction } from '../../Redux/Actions/ProjectActions';
import moment from 'moment';

const projectDetails = props => {
  //  console.log("ss", props)

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [key, setKey] = React.useState('details');
  const [projectkey, setProjectKey] = React.useState('projectDetails');

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectByIdAction(props.location.state.id));
  }, []);

  let projectById = useSelector(state => state.project.projectDetails);
  console.log('s', projectById);

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

  const isSelected = name => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - constHeadcellsData.length)
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
      // dispatch(getNgoByValueAction(value));
    } else {
      // dispatch(getViewAllNgoAction());
    }
  };

  const data = [
    {
      img: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
      alt: 'image one',
    },
    {
      img: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
      alt: 'image two',
    },
  ];

  const tempCells = [
    {
      id: 'startDate',
      numeric: false,
      disablePadding: false,
      label: 'StartDate',
    },
    {
      id: 'endDate',
      numeric: false,
      disablePadding: false,
      label: 'EndDate',
    },
    {
      id: 'daysLeft',
      numeric: false,
      disablePadding: false,
      label: 'DaysLeft',
    },
  ];

  const newHeadCells = [
    {
      id: 'date',
      numeric: false,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'goal',
      numeric: false,
      disablePadding: false,
      label: 'Goal',
    },
    {
      id: 'funded',
      numeric: false,
      disablePadding: false,
      label: 'Funded',
    },
    {
      id: 'completion',
      numeric: false,
      disablePadding: false,
      label: 'Completion',
    },
  ];

  const TableconstData = [
    {
      id: 1,
      startdate: '20-Jan-2021 To 20-Jan-2021',
      endDate: '210',
      daysLeft: '0',
    },
  ];

  //END

  const constHeadcellsData = [
    {
      id: 1,
      date: '26-Dec-2021 To 27-Dec-2021',
      goal: '310',
      funded: '0',
      completion: '0.001%',
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
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            fontSize: '25',
            fontWeight: 'bold',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          Project Details
        </p>
      </div>
      <hr style={{ margin: '0' }} />

      <div
        style={{
          padding: '20px',
          margin: '20px',
        }}
      >
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={k => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="details" title="Details">
              <div className="row">
                <div className="col-12">
                  <Carousel nextLabel={null} prevLabel={null}>
                    {data.map(item => (
                      <Carousel.Item interval={2000}>
                        <img
                          // className="row"
                          style={{
                            height: '400px',
                            width: '100%',
                            borderRadius: '1.5em',
                          }}
                          src={item.img}
                          alt={item.alt}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="col-12">
                  <br />
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <label style={{ fontWeight: 'bold', fontSize: '25px' }}>
                        {projectById.title}
                      </label>
                      <p style={{ marginBottom: '1em' }}>
                        {projectById && projectById.description}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <label className="BankDet">About</label>
                      <p style={{ marginTop: '1em', marginBottom: '1em' }}>
                        {projectById && projectById.longDesc}
                      </p>
                    </div>
                  </div>
                  <br />
                  <div
                    className="row"
                    style={{ marginTop: '1em', marginBottom: '1em' }}
                  >
                    <div className="col-12">
                      <p style={{ fontSize: '20px' }}>Recurring</p>
                      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        {projectById && projectById.recurringDays}Days
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <label className="BankDet">Goal</label>
                      <p
                        style={{
                          fontSize: '3em',
                          fontWeight: 'bold',
                          marginTop: '5px',
                          marginBottom: '0.5em',
                        }}
                      >
                        {projectById && projectById.goal} INR
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <label className="BankDet">Dates</label>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginTop: '5px', marginBottom: '0.5em' }}
                  >
                    <div className="col-3">
                      <p style={{ fontSize: '20px' }}>Start Date</p>
                      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        {moment(projectById && projectById.startDate).format(
                          'LL',
                        )}
                      </p>
                    </div>
                    <div className="col-3">
                      <p style={{ fontSize: '20px' }}>End Date</p>
                      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        {moment(projectById && projectById.endDate).format(
                          'LL',
                        )}
                      </p>
                    </div>
                    <div className="col-3">
                      <p style={{ fontSize: '20px' }}>Days Left</p>
                      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>46</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  {constHeadcellsData && constHeadcellsData.length > 0 ? (
                    <div
                      style={{
                        margin: '1em 0 5em',
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
                          <button
                            style={{
                              marginLeft: '1em',
                              borderRadius: '2em',
                              fontSize: '20',
                            }}
                            className="btn btn-primary"
                            // onClick={e => handleClick(e)}
                          >
                            Export
                          </button>
                        </div>
                      </div>
                      <Paper
                        sx={{
                          width: '96%',
                          marginBottom: '2em',
                          marginLeft: '1.5em',
                        }}
                      >
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
                              rowCount={constHeadcellsData.length}
                              headCells={newHeadCells}
                            />
                            <TableBody>
                              {stableSort(
                                constHeadcellsData,
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
                                      key={row.date}
                                      selected={isItemSelected}
                                    >
                                      <TableCell id={labelId} align="left">
                                        {row.date}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.goal}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.funded}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.completion}
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
                          count={constHeadcellsData.length}
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
                </div>
              </div>
            </Tab>

            <Tab eventKey="contributors" title="Contributors">
              <br />
              <div>
                <h1 align={'center'}>NO CONTRIBUTION YET</h1>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default projectDetails;

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

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
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
