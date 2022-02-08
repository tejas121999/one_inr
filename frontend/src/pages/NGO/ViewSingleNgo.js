import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './ngo.css';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit, FaRegEye } from 'react-icons/fa';
import { Switch } from '@mui/material';
import uploadImage from '../../assets/img/logo/uploadImage.jpg';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { getAllProjectAction } from '../../Redux/Actions/ProjectActions';
import {
  getNgoByIdAction,
  getNgoProjectAction,
} from '../../Redux/Actions/NgoActions';
import { Local } from '../../API/APIEndpoints';
import moment from 'moment';

const ViewSingleNgo = props => {
  const [key, setKey] = React.useState('details');
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [viewModal, setViewModal] = React.useState(false);
  const [viewData, setViewData] = React.useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectAction());
    dispatch(getNgoByIdAction(props.location.state.id));
    dispatch(getNgoProjectAction(props.location.state.id));
  }, []);

  let allProjectList = useSelector(state => state.project.projectList);

  let allNgoProjectList = useSelector(state => state.ngo.ngoProjectList);
  console.log('abc', allNgoProjectList && allNgoProjectList.data);

  let ngoById = useSelector(state => state.ngo.ngoData);

  const ViewModalOpen = data => {
    setViewData(data);
    setViewModal(true);
  };
  const ViewModalClose = () => {
    setViewModal(false);
  };

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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - constData.length) : 0;
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

  //headcells
  const tempCells = [
    {
      id: 'pending',
      numeric: false,
      disablePadding: false,
      label: 'Pending',
    },
    {
      id: 'active',
      numeric: false,
      disablePadding: false,
      label: 'Active',
    },
    {
      id: 'fullfilled',
      numeric: false,
      disablePadding: false,
      label: 'Fullfilled',
    },
    {
      id: 'partial fullfilled',
      numeric: false,
      disablePadding: false,
      label: 'Partial Fullfilled',
    },
    {
      id: 'unfullfilled',
      numeric: false,
      disablePadding: false,
      label: 'Unfullfilled',
    },
    {
      id: 'action required',
      numeric: false,
      disablePadding: false,
      label: 'Action Require',
    },
  ];
  //END headcells

  //data of headcells
  const headcellsconstdata = [
    {
      id: 1,
      pending: '4',
      active: '1',
      fullfilled: '1',
      partialFullfilled: '1',
      unfullfilled: '',
      actionRequired: '0',
    },
    {
      id: 2,
      pending: '2',
      active: '1',
      fullfilled: '1',
      partialFullfilled: '0',
      unfullfilled: '',
      actionRequired: '0',
    },
  ];

  //project headcells
  const projectheadCells = [
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
      id: 'funded',
      numeric: true,
      disablePadding: false,
      label: 'Funded',
    },
    {
      id: 'daysLeft',
      numeric: true,
      disablePadding: false,
      label: 'DaysLeft',
    },
    {
      id: 'startDate',
      numeric: true,
      disablePadding: false,
      label: 'StartDate',
    },
    {
      id: 'endDate',
      numeric: true,
      disablePadding: false,
      label: 'EndDate',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: false,
      label: 'Action',
    },
  ];
  //END Project headcells

  const projectconstData = [
    {
      id: 1,
      title: 'New One Inr',
      goal: '395',
      funded: '0',
      daysLeft: '10 days',
      startDate: '20 Dec 2021',
      endDate: '26 Dec 2021',
      status: '',
      action: '',
    },
    {
      id: 2,
      title: 'Project One',
      goal: '50',
      funded: '10',
      daysLeft: 'Ended',
      startDate: '12 Aug 2020',
      endDate: '16 Nov 2021',
      status: '',
      action: '',
    },
    {
      id: 3,
      title: 'this is testing project',
      goal: '600',
      funded: '1001',
      daysLeft: 'Ended',
      startDate: '23 oct 2019',
      endDate: '15 Nov 2021',
      status: '',
      action: '',
    },
  ];

  //DETAILS const headcells
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: false,
      label: 'Name',
    },
    {
      id: 'account',
      numeric: true,
      disablePadding: false,
      label: 'account',
    },
    {
      id: 'beneficiaryName',
      numeric: true,
      disablePadding: false,
      label: 'beneficiaryName',
    },
    {
      id: 'ifsc',
      numeric: true,
      disablePadding: false,
      label: 'IFSC',
    },
  ];

  const constData = [
    {
      id: 1,
      name: 'shivani',
      account: 0,
      beneficiaryName: '0',
      ifsc: '0',
    },
  ];

  return (
    <>
      <div>
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
              {ngoById && ngoById.user && ngoById.user.name}
            </p>
          </div>
        </div>
      </div>

      <div className="viewNgo">
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={k => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="details" title="Details">
              <div className="row">
                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>Logo </label>
                    <div className="image-upload">
                      <img
                        style={{ width: '250px', height: '200px' }}
                        src={`${Local}/${ngoById.logo}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Pancard
                    </label>
                    <div className="image-upload">
                      <img
                        style={{ width: '250px', height: '200px' }}
                        src={`${Local}/${ngoById.panCard}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Certificate
                    </label>
                    <div className="image-upload">
                      <img
                        style={{ width: '250px', height: '200px' }}
                        src={`${Local}/${ngoById.certificate}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Charity Registration Certificate
                    </label>
                    <div className="image-upload">
                      <img
                        style={{ width: '250px', height: '200px' }}
                        src={`${Local}/${ngoById.charityRegistrationCertificate}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Deed
                    </label>
                    <div className="image-upload">
                      <img
                        style={{ width: '250px', height: '200px' }}
                        src={`${Local}/${ngoById.deed}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <Paper sx={{ width: '100%', mb: 2 }}>
                <>
                  <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                      <TableBody>
                        <TableRow tabIndex={-1}>
                          <TableCell
                            //   id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            NgoName
                          </TableCell>
                          <TableCell align="center">
                            {ngoById && ngoById.user && ngoById.user.name}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          //   aria-checked={isItemSelected}
                          tabIndex={-1}
                          //   key={row.address}
                          //   selected={isItemSelected}
                        >
                          <TableCell
                            //   id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Address
                          </TableCell>
                          <TableCell align="center">
                            {ngoById.address}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          // key={row.email}
                          // selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Email
                          </TableCell>
                          <TableCell align="center">
                            {ngoById && ngoById.user && ngoById.user.email}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          // key={row.mobile}
                          // selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Mobile
                          </TableCell>
                          <TableCell align="center">
                            {ngoById && ngoById.user && ngoById.user.mobile}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          //  aria-checked={isItemSelected}
                          tabIndex={-1}
                          //  key={row.landline}
                          //  selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Landline
                          </TableCell>
                          <TableCell align="center">
                            {ngoById.landline}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          // key={row.registrationdate}
                          // selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Registration Date
                          </TableCell>
                          <TableCell align="center">
                            {moment(ngoById.registrationDate).format('LL')}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          // key={row.registrationnumber}
                          // selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            padding="none"
                            style={{ fontWeight: 700 }}
                          >
                            Registration Number
                          </TableCell>
                          <TableCell align="center">
                            {ngoById.registrationNumber}
                          </TableCell>
                        </TableRow>

                        <TableRow
                          tabIndex={-1}
                          // key={row.pannumber}
                          // selected={isItemSelected}
                        >
                          <TableCell
                            // id={labelId}
                            align="center"
                            scope="row"
                            style={{ fontWeight: 700 }}
                          >
                            Pan Number
                          </TableCell>
                          <TableCell align="center">
                            {ngoById.panNumber}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              </Paper>

              <br />
              <br />
              <div>Bank Details</div>
              <br />

              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell align="right">Account</TableCell>
                        <TableCell align="right">BeneficiaryName</TableCell>
                        <TableCell align="right">IFSC</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {ngoById.user &&
                        ngoById.user.bankDetails.map(row => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.bankName}
                            </TableCell>
                            <TableCell align="right">
                              {row.accountNumber}
                            </TableCell>
                            <TableCell align="right">
                              {row.beneficiaryName}
                            </TableCell>
                            <TableCell align="right">{row.ifsc}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <br />
                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="project" title="Project">
              <br />
              <br />
              {allNgoProjectList &&
              allNgoProjectList.data &&
              allNgoProjectList.data.length > 0 ? (
                <>
                  <div>
                    <hr style={{ margin: '0' }} />
                    <Paper sx={{ width: '100%', mb: 2 }}>
                      <>
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Pending</th>
                              <th scope="col">Active</th>
                              <th scope="col">Fullfilled</th>
                              <th scope="col">partialFullfilled</th>
                              <th scope="col">Unfullfilled</th>
                              <th scope="col">ActionRequired</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{allNgoProjectList.pendingCount}</td>
                              <td>{allNgoProjectList.activeCount}</td>
                              <td>{allNgoProjectList.fullFilledCount}</td>
                              <td>{allNgoProjectList.partialFullfilled}</td>
                              <td>{allNgoProjectList.unfullfilledCount}</td>
                              <td>{allNgoProjectList.actionRequired}</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    </Paper>
                  </div>

                  <br />
                  <br />
                  <div
                    style={{
                      display: 'flex',
                      padding: '20px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <button
                      style={{ alignSelf: 'flex-start' }}
                      className="btn btn-primary"
                    >
                      Export
                    </button>
                    <label style={{ fontWeight: '500', marginTop: '0.5em' }}>
                      Search :
                      <input
                        type="search"
                        placeholder="Search"
                        style={{
                          marginLeft: '0.5em',
                          border: '1px solid #ced4da',
                        }}
                        onChange={e => handleChange(e)}
                      />
                    </label>
                  </div>
                  <hr style={{ margin: '0' }} />

                  <Paper sx={{ width: '100%', mb: 2 }}>
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
                            rowCount={
                              allNgoProjectList &&
                              allNgoProjectList.data &&
                              allNgoProjectList.data.length
                            }
                            headCells={projectheadCells}
                          />
                          <TableBody>
                            {stableSort(
                              allNgoProjectList.data,

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
                                      align="center"
                                      scope="row"
                                      padding="none"
                                    >
                                      {row.title}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.goal}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.funded}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.daysLeft}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.startDate}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.endDate}
                                    </TableCell>
                                    <TableCell align="center">
                                      {/* {row.status}  */}
                                      <Switch color="primary" size="medium" />
                                    </TableCell>

                                    <TableCell align="center">
                                      <button
                                        data-bs-toggle="tooltip"
                                        title="View projects"
                                        className="btn"
                                        onClick={() =>
                                          history.push('/project_details', row)
                                        }
                                      >
                                        <FaRegEye />
                                      </button>
                                      <button
                                        data-bs-toggle="tooltip"
                                        title="Edit"
                                        className="btn"
                                        onClick={() =>
                                          history.push('/edit_project', row)
                                        }
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
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={allNgoProjectList.data.length}
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
                </>
              ) : (
                <p style={{ textAlign: 'center', fontSize: '25px' }}>
                  No Projects Found
                </p>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ViewSingleNgo;

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

const projectheadCells = [
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
    id: 'funded',
    numeric: true,
    disablePadding: false,
    label: 'Funded',
  },
  {
    id: 'daysLeft',
    numeric: true,
    disablePadding: false,
    label: 'DaysLeft',
  },
  {
    id: 'startDate',
    numeric: true,
    disablePadding: false,
    label: 'StartDate',
  },
  {
    id: 'endDate',
    numeric: true,
    disablePadding: false,
    label: 'EndDate',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
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
  headCells: PropTypes.array.isRequired,
};
