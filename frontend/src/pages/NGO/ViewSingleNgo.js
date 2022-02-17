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
import { Link, useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as View } from '../../assets/icons/view.svg';
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
  let ngoById = useSelector(state => state.ngo.ngoData);
  const getData = () => {
    if (ngoById.length !== 0) {
      console.log('ngoById', ngoById);
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
    dispatch(getAllProjectAction());
    dispatch(getNgoByIdAction(props.location.state.id));
    dispatch(getNgoProjectAction(props.location.state.id));
  }, []);

  let allProjectList = useSelector(state => state.project.projectList);

  let allNgoProjectList = useSelector(state => state.ngo.ngoProjectList);
  console.log('abc', allNgoProjectList && allNgoProjectList.data);

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
      <br />
      <br />
      <br />
      {/* <div className="card" style={{ border: '0' }}>
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
        </div> */}
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
          Ngo Details
        </p>
      </div>
      <hr style={{ margin: '0' }} />
      <div
        style={{
          margin: '2em',
          marginBottom: '5em',
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
              <div className="row" style={{ justifyContent: 'center' }}>
                {/* <div className="col-3 "> */}
                <div
                  style={{
                    padding: '0.5em 1em 1.5em',
                    textAlign: 'center',
                  }}
                >
                  <div className="image-upload">
                    <img
                      style={{ width: '200px', borderRadius: '10em' }}
                      src={`${ngoById.logoURL}`}
                    />
                  </div>
                  <label
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.3em',
                      margin: '0.8em 0 0',
                    }}
                  >
                    {ngoById && ngoById.user && ngoById.user.name}
                  </label>
                </div>
                {/* </div> */}
              </div>
              <div className="row">
                <div className="col-3 ">
                  <div style={{ padding: '15px 0 10px', textAlign: 'center' }}>
                    <div className="image-upload">
                      <img
                        style={{
                          height: '235px',
                          width: '100%',
                          borderRadius: '1.5em',
                        }}
                        src={`${ngoById.panCardURL}`}
                      />
                    </div>
                    <label
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        margin: '0.8em 0 0',
                      }}
                    >
                      Pancard
                    </label>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px 0 10px', textAlign: 'center' }}>
                    <div className="image-upload">
                      <img
                        style={{
                          height: '235px',
                          width: '100%',
                          borderRadius: '1.5em',
                        }}
                        src={`${ngoById.certificateURL}`}
                      />
                    </div>
                    <label
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        margin: '0.8em 0 0',
                      }}
                    >
                      Certificate
                    </label>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px 0 10px', textAlign: 'center' }}>
                    <div className="image-upload">
                      <img
                        style={{
                          height: '235px',
                          width: '100%',
                          borderRadius: '1.5em',
                        }}
                        src={`${ngoById.charityRegistrationCertificateURL}`}
                      />
                    </div>
                    <label
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        margin: '0.8em 0 0',
                      }}
                    >
                      Charity Registration Certificate
                    </label>
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px 0 10px ', textAlign: 'center' }}>
                    <div className="image-upload">
                      <img
                        style={{
                          height: '235px',
                          width: '100%',
                          borderRadius: '1.5em',
                        }}
                        src={`${ngoById.deedURL}`}
                      />
                    </div>
                    <label
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        margin: '0.8em 0 0',
                      }}
                    >
                      Deed
                    </label>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              {/* <div className=""> */}
              <div className="row" style={{ display: 'flex' }}>
                <div className="col-6" style={{ padding: '0 15em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>NGO Name</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById && ngoById.user && ngoById.user.name}
                  </label>
                </div>
                <div className="col-6" style={{ padding: '0 13em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Address</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById.address}
                  </label>
                </div>
              </div>
              <div className="row" style={{ display: 'flex' }}>
                <div className="col-6" style={{ padding: '0 15em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Mobile</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById && ngoById.user && ngoById.user.mobile}
                  </label>
                </div>
                <div className="col-6" style={{ padding: '0 13em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Email ID</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById && ngoById.user && ngoById.user.email}
                  </label>
                </div>
              </div>
              <div className="row" style={{ display: 'flex' }}>
                <div className="col-6" style={{ padding: '0 15em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Landline</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById.landline}
                  </label>
                </div>
                <div className="col-6" style={{ padding: '0 13em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Registration Date</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {moment(ngoById.registrationDate).format('LL')}
                  </label>
                </div>
              </div>
              <div className="row" style={{ display: 'flex' }}>
                <div className="col-6" style={{ padding: '0 15em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>Registration Number</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById.registrationNumber}
                  </label>
                </div>
                <div className="col-6" style={{ padding: '0 13em 1em 1em' }}>
                  <span style={{ fontSize: '25' }}>PAN Number</span>
                  <br />
                  <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                    {ngoById.panNumber}
                  </label>
                </div>
              </div>
              <br />
              <br />
              {/*  <div>
                <p className="BankDet">Bank Details</p>
                   </div>     */}
              <br />

              {ngoById.length === 0 ? (
                <div>loading...</div>
              ) : (
                ngoById.user.bankDetails.map(el => (
                  <>
                    <div>
                      {console.log('el', el)}
                      <p className="BankDet">Bank Details</p>
                    </div>
                    <br />
                    <div className="row" style={{ display: 'flex' }}>
                      <div
                        className="col-6"
                        style={{ padding: '0 15em 1em 1em' }}
                      >
                        <span style={{ fontSize: '25' }}>Bank Name</span>
                        <br />
                        <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                          <span>{el.bankName}</span>
                        </label>
                      </div>
                      <div
                        className="col-6"
                        style={{ padding: '0 13em 1em 1em' }}
                      >
                        <span style={{ fontSize: '25' }}>Account Number</span>
                        <br />
                        <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                          <span>{el.accountNumber}</span>
                        </label>
                      </div>
                    </div>
                    <div className="row" style={{ display: 'flex' }}>
                      <div
                        className="col-6"
                        style={{ padding: '0 15em 1em 1em' }}
                      >
                        <span style={{ fontSize: '25' }}>Beneficiary Name</span>
                        <br />
                        <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                          <span>{el.beneficiaryName}</span>
                        </label>
                      </div>
                      <div
                        className="col-6"
                        style={{ padding: '0 13em 1em 1em' }}
                      >
                        <span style={{ fontSize: '25' }}>IFSC Code</span>
                        <br />
                        <label style={{ fontSize: '25', fontWeight: 'bold' }}>
                          <span>{el.ifsc}</span>
                        </label>
                      </div>
                    </div>
                  </>
                ))
              )}

              <div className="row" style={{ display: 'flex', margin: '0' }}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    class="form-check-label"
                    style={{ fontSize: '25', fontWeight: 'bold' }}
                  >
                    Is KYC
                  </label>
                </div>
              </div>
              <div>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: '#65AC12',
                      color: '#fff',
                      // borderRadius: '2em',
                      fontSize: '20',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Tab>

            <Tab eventKey="project" title="Project">
              {allNgoProjectList &&
              allNgoProjectList.data &&
              allNgoProjectList.data.length > 0 ? (
                <>
                  <div
                    style={{
                      margin: '2em 1em',
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
                    </div>
                    {/* <hr style={{ margin: '0' }} /> */}
                    <Paper
                      sx={{
                        width: '96%',
                        marginBottom: '2em',
                        marginLeft: '1.5em',
                      }}
                    >
                      <>
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                  paddingLeft: '1.5rem',
                                }}
                              >
                                Pending
                              </th>
                              <th
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                Active
                              </th>
                              <th
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                Fullfilled
                              </th>
                              <th
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                Partial Fullfilled
                              </th>
                              {/* <th
                                scope="col"
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                Unfullfilled
                              </th>
                              <th
                                scope="col"
                                style={{
                                  fontSize: '0.875rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                Action Required
                              </th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ paddingLeft: '1.5rem' }}>
                                {allNgoProjectList.pendingCount}
                              </td>
                              <td>{allNgoProjectList.activeCount}</td>
                              <td>{allNgoProjectList.fullFilledCount}</td>
                              <td>{allNgoProjectList.partialFullfilled}</td>
                              {/* <td>{allNgoProjectList.unfullfilledCount}</td>
                              <td>{allNgoProjectList.actionRequired}</td> */}
                            </tr>
                          </tbody>
                        </table>
                      </>
                    </Paper>
                  </div>

                  <div
                    style={{
                      margin: '2em 1em',
                      borderRadius: '1.5em',
                      border: '1px solid #63b8ec',
                    }}
                  >
                    <div className="row" style={{ margin: '1em 0' }}>
                      <div
                        style={{
                          display: 'flex',
                          width: '50%',
                          padding: '0.5em 2em 1em',
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
                    {/* <hr style={{ margin: '0' }} /> */}

                    <Paper
                      sx={{
                        width: '96%',
                        marginBottom: '2em',
                        marginLeft: '1.5em',
                      }}
                    >
                      <>
                        <TableContainer>
                          <Table>
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
                                      <TableCell id={labelId} align="left">
                                        {row.title}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.goal}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.funded}
                                      </TableCell>
                                      <TableCell align="left">
                                        {row.daysLeft}
                                      </TableCell>
                                      <TableCell align="left">
                                        {moment(row.startDate).format('LL')}
                                      </TableCell>
                                      <TableCell align="left">
                                        {moment(row.endDate).format('LL')}
                                      </TableCell>
                                      <TableCell align="left">
                                        {/* {row.status}  */}
                                        <Switch color="primary" size="medium" />
                                      </TableCell>

                                      <TableCell align="left">
                                        <button
                                          data-bs-toggle="tooltip"
                                          title="View projects"
                                          className="btn"
                                          onClick={() =>
                                            history.push(
                                              '/project_details',
                                              row,
                                            )
                                          }
                                          style={{ padding: '0 0.5em 0 0' }}
                                        >
                                          <View
                                            style={{
                                              width: '25',
                                              height: '20',
                                            }}
                                          />
                                        </button>
                                        <button
                                          data-bs-toggle="tooltip"
                                          title="Edit"
                                          className="btn"
                                          onClick={() =>
                                            history.push('/edit_project', row)
                                          }
                                          style={{ padding: '0' }}
                                        >
                                          <Edit
                                            style={{
                                              width: '20',
                                              height: '20',
                                            }}
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
                  </div>
                </>
              ) : (
                <div
                  className="DataNotFound text-center"
                  style={{ marginTop: '15%' }}
                >
                  <h2> No Projects Found </h2>
                </div>
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
  headCells: PropTypes.array.isRequired,
};
