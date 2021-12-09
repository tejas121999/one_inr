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
import {
  FaRegEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaBookOpen,
  FaDollarSign,
} from 'react-icons/fa';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getAllVEndorAction } from '../../../Redux/Actions/MasterActions';
import Loader from '../../Loader';
import Vendordelete from '../../../Modals/Master/VendorDelete';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../../components/Pagination';
import axios from 'axios';
import { BASE_URL, Local } from '../../../API/APIEndpoints';
import { DropdownButton } from 'react-bootstrap';
export const constData = [
  {
    id: 1,
    name: 'Chinmay Pattar',
    donated: 1,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
    plan: 1,
    balanceNextRenewDate: '2021-03-14',
    parentId: 0,
    mobile: 9819312721,
  },
  {
    id: 2,
    name: 'b',
    donated: 82,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 3,
    name: 'c',
    donated: 13,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 4,
    name: 'd',
    donated: 5,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 5,
    name: 'e',
    donated: 8,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 6,
    name: 'f',
    donated: 19,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 7,
    name: 'g',
    donated: 15,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 8,
    name: 'h',
    donated: 20,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 9,
    name: 'i',
    donated: 21,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 10,
    name: 'j',
    donated: 23,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 11,
    name: 'k',
    donated: 25,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
  {
    id: 12,
    name: 'l',
    donated: 26,
    balance: '100',
    project: '10',
    email: 'akshay@gmail.com',
  },
];
export default function EnhancedTable() {
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
  const [pdfUrl, setPdfUrl] = React.useState('');
  // const [donorList, setDonorList] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllVEndorAction(''));
    exportPartner();
  }, []);

  let donorList = useSelector(state => state.master.vendorList);

  const ViewModalOpen = data => {
    setViewData(data);
    setViewModal(true);
  };
  const ViewModalClose = () => {
    setViewModal(false);
  };
  const fundModaOpen = data => {
    setFundModalData(data.id);
    setFundModal(true);
  };
  const fundModaClose = () => {
    setFundModal(false);
  };
  const deleteModalOpen = data => {
    setDeleteID(data.id);
    setDeleteModal(true);
  };
  const deleteModalClose = () => {
    setDeleteModal(false);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - donorList.length) : 0;
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
      dispatch(getAllVEndorAction(value));
    } else {
      dispatch(getAllVEndorAction(''));
    }
  };

  // END
  let downloadUrl = '';
  const exportPartner = async () => {
    const res = await axios.get(Local + '/vendor/get-vendor-pdf');

    if (res.data.url) {
      downloadUrl = BASE_URL + res.data.url.slice(9);
      setPdfUrl(downloadUrl);
    }
  };
  // test
  const downloadEmployeeData = () => {
    fetch(pdfUrl)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'Vendor.pdf';
          a.click();
        });
        //window.location.href = response.url;
      })
      .catch(err => {});
  };
  // end
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Vendordelete
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />

      <nav className="navbar navbar-light">
        <a className="navbar-brand">Vendor List</a>
        <form className="form-inline">
          <div className="modalClass">
            <Link to="/addvendor" type="" className="btn btn-primary">
              Add Vendor
            </Link>
          </div>
        </form>
      </nav>
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
            justifyContent: 'space-between',
          }}
        >
          {/* <button
            style={{ alignSelf: 'flex-start' }}
            className="btn btn-primary"
          >
            Export
          </button> */}
          <DropdownButton variant="primary" title="Export">
            <a className="dropdown-item" href={pdfUrl} target="_self" download>
              CSV
            </a>

            <a onClick={downloadEmployeeData} className="dropdown-item">
              PDF{' '}
            </a>
            <a className="dropdown-item" target="_blank" download>
              Excel
            </a>
          </DropdownButton>
          <input
            placeholder="Search"
            onChange={e => handleChange(e)}
            type="search"
          />
        </div>
        <Paper sx={{ width: '100%', mb: 2 }}>
          {donorList && donorList.length > 0 ? (
            <React.Fragment>
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
                    rowCount={donorList.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(donorList, getComparator(order, orderBy))
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
                              {row.name}
                            </TableCell>
                            <TableCell align="center">{row.company}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.gst}</TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => history.push('/editvendor', row)}
                              >
                                <FaRegEdit />
                              </button>

                              <button
                                data-bs-toggle="tooltip"
                                title="Delete"
                                className="btn"
                                onClick={() => deleteModalOpen(row)}
                              >
                                <FaRegTrashAlt />
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
                count={donorList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          ) : (
            <Loader />
          )}
        </Paper>
      </div>
    </>
  );
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'Company Name',
    numeric: true,
    disablePadding: false,
    label: 'company name',
  },
  {
    id: 'Phone No',
    numeric: true,
    disablePadding: false,
    label: 'Phone No',
  },
  {
    id: 'Email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'GST',
    numeric: true,
    disablePadding: false,
    label: 'GST',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];
