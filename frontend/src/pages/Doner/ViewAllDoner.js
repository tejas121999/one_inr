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
import Viewdonormodal from '../../Modals/Donor/ViewDonorModal';
import Addfund from '../../Modals/Donor/AddFund';
import {
  ADD_DONOR_URL,
  BASE_URL,
  GetAllDonor,
  Local,
} from '../../API/APIEndpoints';
import axios from '../../utils/interceptor';
import { Link, useHistory } from 'react-router-dom';
import Donordelete from '../../Modals/Donor/DonorDelete';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDonorByValueAction,
  getViewAllDonorAction,
} from '../../Redux/Actions/DonorActions';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../components/Pagination';
import { DropdownButton } from 'react-bootstrap';
import ViewAllDonorTable from './ViewAllDonorTable';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from '../../Modals/Donor/DonorDetails/Details';
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
  const [viewDetails, setViewDetails] = React.useState('');
  const [fundModal, setFundModal] = React.useState(false);
  const [fundModalData, setFundModalData] = React.useState(0);
  const [pdfUrl, setPdfUrl] = React.useState('');
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const [CsvUrl, setCsvUrl] = React.useState('');
  const [XlsUrl, setXlsUrl] = React.useState('');
  const [printDonorTable, setPrintDonorTable] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getViewAllDonorAction());

    exportPdf();
    exportCsv();
    exportXls();
  }, []);

  let donorList = useSelector(state => state.donor.ViewAllDonor);

  // console.log("donerlist", donorList)

  // console.log("view all doner")

  const ViewModalOpen = data => {
    setViewData(data);
    setViewModal(true);
  };
  const ViewModalClose = () => {
    setViewModal(false);
  };

  const ViewDetailModalOpen = data => {
    setViewData(data);
    setViewDetails(true);
  };
  const ViewDetailModalClose = () => {
    setViewDetails(false);
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
    setPage(0);
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
      dispatch(getDonorByValueAction(value));
    } else {
      dispatch(getViewAllDonorAction());
    }
  };

  // END

  const exportPdf = async () => {
    const res = await axios.get(BASE_URL + '/donor/donor-pdf');

    if (res.data.url) {
      const downloadUrl = res.data.url;
      setPdfUrl(downloadUrl);
    }
  };
  const exportCsv = async () => {
    const resCsv = await axios.get(BASE_URL + '/donor/donor-csv');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setCsvUrl(downloadUrl);
    }
  };
  const exportXls = async () => {
    const resCsv = await axios.get(BASE_URL + '/donor/donor-xlsx');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setXlsUrl(downloadUrl);
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
          a.download = 'Donor.pdf';
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
          a.download = 'Doner.csv';
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
          a.download = 'Donor.xlsx';
          a.click();
        });
        //window.location.href = response.url;
      })
      .catch(err => {});
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

  // end
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Viewdonormodal
        show={viewModal}
        onHide={ViewModalClose}
        data={viewData}
      />
      <Details show={viewDetails} onHide={ViewDetailModalClose} />
      <ToastContainer hideProgressBar />
      <Addfund show={fundModal} onHide={fundModaClose} data={fundModalData} />
      <Donordelete show={deleteModal} onHide={deleteModalClose} id={deleteId} />
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
              fontWeight: '600',
              fontSize: '1.25rem',
              marginBottom: '0',
              paddingTop: '3px',
            }}
          >
            Donor List
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
              <button
                className="export-btn w-100"
                onClick={downloadEmployeeData}
              >
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
      {donorList && donorList.length > 0 ? (
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
                              align="left"
                              // scope="row"
                              // paddingLeft="2em"
                            >
                              {row.name}
                            </TableCell>
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
                                onClick={() => ViewDetailModalOpen(row)}
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
          <ViewAllDonorTable
            printDonorTable={printDonorTable}
            tableData={stableSort(
              donorList,
              getComparator(order, orderBy),
            ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            setPrintDonorValue={setPrintDonorValue}
          ></ViewAllDonorTable>
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
