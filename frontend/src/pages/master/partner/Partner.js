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
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getAllPartnerAction } from '../../../Redux/Actions/MasterActions';
import Loader from '../../Loader';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../../components/Pagination';
import Partnerdelete from '../../../Modals/Master/PartnerDelete';
import axios from '../../../utils/interceptor';
import { BASE_URL } from '../../../API/APIEndpoints';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PartnerTable from './PartnerTable';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EnhancedTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pdfUrl, setPdfUrl] = React.useState('');
  const [CsvUrl, setCsvUrl] = React.useState('');
  const [fundModal, setFundModal] = React.useState(false);
  const [fundModalData, setFundModalData] = React.useState(0);
  const [XlsUrl, setXlsUrl] = React.useState('');
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const [printDonorTable, setPrintDonorTable] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllPartnerAction(''));
    exportPdf();
    exportCsv();
    exportXls();
  }, []);

  let partnerList = useSelector(state => state.master.partnerList);
  console.log('parent linst ', partnerList);
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
  const onPrintClick = () => {
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
    setAnchorEl(null);
  };

  const onCopyClick = () => {
    var urlField = document.getElementById('tableDiv');
    var range = document.createRange();
    range.selectNode(urlField);
    window.getSelection().addRange(range);
    document.execCommand('copy');
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - partnerList.length) : 0;
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
      dispatch(getAllPartnerAction(value));
    } else {
      dispatch(getAllPartnerAction(''));
    }
  };
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
  // END
  // EXPORT
  const exportPdf = async () => {
    const res = await axios.get(BASE_URL + 'partner/get-partnerPdf');

    if (res.data.url) {
      const downloadUrl = res.data.url;
      setPdfUrl(downloadUrl);
    }
  };
  const exportCsv = async () => {
    const resCsv = await axios.get(BASE_URL + 'partner/get-partner-csv');
    if (resCsv.data.url) {
      const downloadUrl = resCsv.data.url;
      setCsvUrl(downloadUrl);
    }
  };
  const exportXls = async () => {
    const resCsv = await axios.get(BASE_URL + 'partner/get-partner-excel');
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
          a.download = 'Partner.pdf';
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
          a.download = 'Partner.csv';
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
          a.download = 'Partner.xlsx';
          a.click();
        });
        //window.location.href = response.url;
      })
      .catch(err => {});
  };
  // end

  return (
    // console.log('Download', pdfUrl),
    <>
      <br />
      <br />
      <br />
      <ToastContainer hideProgressBar />
      <Partnerdelete
        show={deleteModal}
        onHide={deleteModalClose}
        id={deleteId}
      />{' '}
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
            Partners
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
      {partnerList && partnerList.length > 0 ? (
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
              <Link
                to="/addpartner"
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: '2em', fontSize: '20' }}
              >
                Add Partner
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
              </Menu>
            </div>
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
                    rowCount={partnerList.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(partnerList, getComparator(order, orderBy))
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
                              // padding="none"
                              // style={{ padding: '20px' }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="left">
                              {row.companyName}
                            </TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.gstNumber}</TableCell>
                            <TableCell align="left">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() =>
                                  history.push('/editpartner', row)
                                }
                                style={{ padding: '0' }}
                              >
                                <Edit style={{ width: '20', height: '20' }} />
                              </button>

                              <button
                                data-bs-toggle="tooltip"
                                title="Delete"
                                className="btn"
                                onClick={() => deleteModalOpen(row)}
                                style={{
                                  padding: '3px 0 0 2px',
                                }}
                              >
                                <Cross style={{ width: '30', height: '30' }} />
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
                count={partnerList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          </Paper>
          <PartnerTable
            printDonorTable={printDonorTable}
            tableData={stableSort(
              partnerList,
              getComparator(order, orderBy),
            ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
            setPrintDonorValue={setPrintDonorValue}
          ></PartnerTable>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
