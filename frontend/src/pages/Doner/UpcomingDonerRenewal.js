import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import moment from 'moment';
import {
  FaRegEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaBookOpen,
  FaDollarSign,
} from 'react-icons/fa';
import './Donor.css';

import { Link, useHistory } from 'react-router-dom';

import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingDonorAction } from '../../Redux/Actions/DonorActions';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../components/Pagination';
import ViewUpcomingdonormodal from '../../Modals/Donor/ViewUpcomingDonorModal';
import UpcomingDonorAddfund from '../../Modals/Donor/UpcomingDonorAddFund';
import UpcomingDonordelete from '../../Modals/Donor/UpcomingDOnorDelete';
import { constData } from '../../utils/colors';
import UpcomingDonorRenewalTable from './UpcomingDonorRenewalTable copy';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';
export default function EnhancedTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const [viewModal, setViewModal] = React.useState(false);
  const [viewData, setViewData] = React.useState('');
  const [fundModal, setFundModal] = React.useState(false);
  const [fundModalData, setFundModalData] = React.useState(0);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const [printDonorTable, setPrintDonorTable] = React.useState(false);
  const [XlsUrl, setXlsUrl] = React.useState('');
  const [pdfUrl, setPdfUrl] = React.useState('');
  const [CsvUrl, setCsvUrl] = React.useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUpcomingDonorAction(''));
    exportPdf();
    exportCsv();
    exportXls();
  }, []);

  let UpcomingdonorList = useSelector(state => state.donor.upComingDonors);

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
      ? Math.max(0, (1 + page) * rowsPerPage - UpcomingdonorList.length)
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
      dispatch(getUpcomingDonorAction(value));
    } else {
      dispatch(getUpcomingDonorAction(''));
    }
  };
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
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log('ttttttttt', anchorEl);
    setAnchorEl(null);
  };

  const onCopyClick = () => {
    var urlField = document.getElementById('tableDiv');
    var range = document.createRange();
    range.selectNode(urlField);
    window.getSelection().addRange(range);
    document.execCommand('copy');
  };

  // END

  // EXPORT
  const exportPdf = async () => {
    const res = await axios.get(BASE_URL + 'donor/upcoming-donor-pdf');

    if (res.data.url) {
      const downloadUrl = res.data.url;
      setPdfUrl(downloadUrl);
    }
  };
  const exportCsv = async () => {
    const resCsv = await axios.get(BASE_URL + 'donor/upcoming-donor-csv');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setCsvUrl(downloadUrl);
    }
  };
  const exportXls = async () => {
    const resCsv = await axios.get(BASE_URL + 'donor/upcoming-donor-xlsx');
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
          a.download = 'UpcomingDonorRenewal.pdf';
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
          a.download = 'UpcomingDonorRenewal.csv';
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
          a.download = 'UpcomingDonorRenewal.xlsx';
          a.click();
        });
        //window.location.href = response.url;
      })
      .catch(err => {});
  };

  // Export End

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <ToastContainer hideProgressBar />
      <ViewUpcomingdonormodal
        show={viewModal}
        onHide={ViewModalClose}
        data={viewData}
      />
      <UpcomingDonorAddfund
        show={fundModal}
        onHide={fundModaClose}
        data={fundModalData}
      />
      <UpcomingDonordelete
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 1.7em',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0',
              paddingTop: '3px',
            }}
          >
            Upcoming Donor Renewal
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '50%',
            padding: '0.5em 1.7em',
          }}
        >
          <Link
            to="/add_doner"
            type="button"
            className="btn btn-primary"
            style={{ borderRadius: '2em', width: '25%' }}
          >
            Add Donor
          </Link>
          <button
            style={{ marginLeft: '1em', borderRadius: '2em', width: '15%' }}
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
      {UpcomingdonorList && UpcomingdonorList.length > 0 ? (
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            marginBottom: '5em',
            borderRadius: '1.5em',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '2em',
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
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <React.Fragment>
              <TableContainer id="tableDiv">
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={UpcomingdonorList.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(
                      UpcomingdonorList,
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
                            <TableCell id={labelId} align="center">
                              {moment(row.balanceNextRenewDate).format('LL')}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="center">
                              {row.donated ? row.donated : '100'}
                            </TableCell>
                            <TableCell align="center">{row.balance}</TableCell>
                            <TableCell align="center">
                              {row.project ? row.projects : '20'}
                            </TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="View Details"
                                className="btn"
                                onClick={() => ViewModalOpen(row)}
                              >
                                <FaRegEye />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="View Transactions"
                                className="btn"
                              >
                                <FaBookOpen />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => history.push('/edit_doner', row)}
                              >
                                <FaRegEdit />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Add Fund"
                                className="btn"
                                onClick={() => fundModaOpen(row)}
                              >
                                <FaDollarSign />
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
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={UpcomingdonorList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          </Paper>
          <UpcomingDonorRenewalTable
            printDonorTable={printDonorTable}
            tableData={stableSort(
              UpcomingdonorList,
              getComparator(order, orderBy),
            ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            setPrintDonorValue={setPrintDonorValue}
          ></UpcomingDonorRenewalTable>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

const headCells = [
  {
    id: 'balanceNextRenewDate',
    numeric: false,
    disablePadding: false,
    label: 'Renewal Date',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'donated',
    numeric: false,
    disablePadding: false,
    label: 'Donated',
  },
  {
    id: 'balance',
    numeric: false,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'projects',
    numeric: false,
    disablePadding: false,
    label: 'Projects',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];
