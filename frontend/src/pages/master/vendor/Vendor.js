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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
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
import VendorTable from './VendorTable';
import axios from '../../../utils/interceptor';
import { BASE_URL, Local } from '../../../API/APIEndpoints';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { red } from '@mui/material/colors';

export default function EnhancedTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pdfUrl, setPdfUrl] = React.useState('');
  const [CsvUrl, setCsvUrl] = React.useState('');
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const [XlsUrl, setXlsUrl] = React.useState('');
  const [printDonorTable, setPrintDonorTable] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllVEndorAction(''));
    exportPdf();
    exportCsv();
    exportXls();
  }, []);

  let donorList = useSelector(state => state.master.vendorList);

  const onPrintClick = () => {
    console.log(printDonorTable);
    setPrintDonorTable(true);
    setTimeout(() => {
      setPrintDonorValue(false);
    }, 1000);
  };

  const setPrintDonorValue = value => {
    if (printDonorTable) {
      setPrintDonorValue(value);
    }
    // window.print();
  };

  const onCopyClick = () => {
    var urlField = document.getElementById('tableDiv');
    var range = document.createRange();
    range.selectNode(urlField);
    window.getSelection().addRange(range);
    document.execCommand('copy');
  };

  const deleteModalOpen = data => {
    setDeleteID(data.id);
    setDeleteModal(true);
  };
  const deleteModalClose = () => {
    setDeleteModal(false);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log('ttttttttt', anchorEl);
    setAnchorEl(null);
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

  const exportPdf = async () => {
    const res = await axios.get(BASE_URL + 'vendor/get-vendor-pdf');

    if (res.data.url) {
      const downloadUrl = res.data.url;
      setPdfUrl(downloadUrl);
    }
  };
  const exportCsv = async () => {
    const resCsv = await axios.get(BASE_URL + 'vendor/get-vendor-csv');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setCsvUrl(downloadUrl);
    }
  };
  const exportXls = async () => {
    const resCsv = await axios.get(BASE_URL + 'vendor/get-vendor-xlsx');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setXlsUrl(downloadUrl);
    }
  };
  // test
  const downloadPdf = () => {
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
  const downloadCsv = () => {
    fetch(CsvUrl)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'Vendor.csv';
          a.click();
        });
        //window.location.href = response.url;
      })
      .catch(err => {});
  };
  const downloadXls = () => {
    fetch(XlsUrl)
      .then(response => {
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'Vendor.xlsx';
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

      <Vendordelete
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />
      <ToastContainer hideProgressBar />
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
            Vendors
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '2em',
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
      {donorList && donorList.length > 0 ? (
        <div
          style={{
            margin: '30px 50px',
            backgroundColor: 'white',
            marginBottom: '5em',
            borderRadius: '1.5em',
            border: '1px solid #63b8ec',
          }}
        >
          <div className="row" style={{ margin: '1em 0' }}>
            <div
              style={{
                display: 'flex',
                width: '50%',
                padding: '0em 2em 1em',
                justifyContent: 'flex-start',
              }}
            >
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '25',
                  marginBottom: '0',
                  paddingTop: '0.5em',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: 'medium',
                  borderColor: '#63b8ec',
                }}
              >
                Overview
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '50%',
                padding: '0.5rem 1.5rem',
              }}
            >
              <Link
                to="/addvendor"
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: '2em', fontSize: '20' }}
              >
                Add Vendor
              </Link>
              <button
                style={{
                  marginLeft: '1em',
                  borderRadius: '2em',
                  fontSize: '20',
                }}
                className="btn btn-primary"
                onClick={e => handleClick(e)}
              >
                Export
              </button>
              <Menu
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
                {/* <MenuItem></MenuItem> */}
              </Menu>
            </div>
          </div>
          {/* <hr style={{ margin: '0' }} /> */}
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <React.Fragment>
              <TableContainer id="tableDiv">
                <Table>
                  <EnhancedTableHead
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
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow hover tabIndex={-1} key={row.name}>
                            <TableCell
                              id={labelId}
                              align="left"
                              // scope="row"
                              // padding="none"
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.company}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.gst}</TableCell>
                            <TableCell align="left">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => history.push('/editvendor', row)}
                                style={{ padding: '0' }}
                              >
                                {/* <FaRegEdit /> */}
                                <Edit style={{ width: '21', height: '21' }} />
                              </button>

                              <button
                                data-bs-toggle="tooltip"
                                title="Delete"
                                className="btn"
                                onClick={() => deleteModalOpen(row)}
                                style={{ padding: '0' }}
                              >
                                <Cross style={{ width: '30', height: '30' }} />
                                {/* <FaRegTrashAlt /> */}
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
                count={donorList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          </Paper>
          <VendorTable
            printDonorTable={printDonorTable}
            tableData={stableSort(
              donorList,
              getComparator(order, orderBy),
            ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            setPrintDonorValue={setPrintDonorValue}
          ></VendorTable>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

const headCells = [
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'Company Name',
    numeric: true,
    disablePadding: false,
    label: 'Company Name',
  },
  {
    id: 'Phone No',
    numeric: true,
    disablePadding: false,
    label: 'Mobile',
  },
  {
    id: 'Email',
    numeric: true,
    disablePadding: false,
    label: 'Email ID',
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
