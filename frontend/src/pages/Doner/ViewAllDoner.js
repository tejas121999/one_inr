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
import './Donor.css';
import Viewdonormodal from '../../Modals/Donor/ViewDonorModal';
import Addfund from '../../Modals/Donor/AddFund';
import { ADD_DONOR_URL, BASE_URL, GetAllDonor } from '../../API/APIEndpoints';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getViewAllDonorAction());
    exportPartner();
  }, []);

  let donorList = useSelector(state => state.donor.ViewAllDonor);

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
  let downloadUrl = '';
  const exportPartner = async () => {
    const res = await axios.get(BASE_URL + 'donor/get-partnerPdf');

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
          a.download = 'Donor.pdf';
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
      <Viewdonormodal
        show={viewModal}
        onHide={ViewModalClose}
        data={viewData}
      />
      <Addfund show={fundModal} onHide={fundModaClose} data={fundModalData} />
      <Donordelete show={deleteModal} onHide={deleteModalClose} id={deleteId} />
      <div className="card">
        <p
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          DONOR DETAIL
        </p>
      </div>
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
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={donorList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                pageSize={10}
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
    id: 'donated',
    numeric: true,
    disablePadding: false,
    label: 'Donated',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'projects',
    numeric: true,
    disablePadding: false,
    label: 'Projects',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];
