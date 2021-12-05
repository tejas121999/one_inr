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
import { Button } from 'react-bootstrap';

import {
  FaRegEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaBookOpen,
  FaDollarSign,
} from 'react-icons/fa';

// import '../Donor.css';
import Viewdonormodal from '../../Modals/Donor/ViewDonorModal';
import Addfund from '../../Modals/Donor/AddFund';
import { BASE_URL, VIEW_RECEPT_URL } from '../../API/APIEndpoints';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Donordelete from '../../Modals/Donor/DonorDelete';
import CreateReceiptForm from '../../components/CreateReceiptForm';
import Loader from '../Loader';
import {
  getViewReceiptDonorAction,
  SearchReceiptByValueAction,
} from '../../Redux/Actions/DonorActions';
import { useDispatch, useSelector } from 'react-redux';

export default function ViewRecept() {
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
  const [recept, setReceipt] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    async function onMount() {
      await dispatch(getViewReceiptDonorAction());
    }
    onMount();
  }, []);

  let ViewReceipt = useSelector(state => state.donor.ViewReceipt);

  const handleModal = () => {
    setModal(!modal);
  };

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
  // const createReceiptHandler = () => {};
  const isSelected = name => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - recept.length) : 0;

  // SEARCH functionality start
  let timeout = null;
  const handleChange = e => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };

  const onSearch = value => {
    if (value) {
      dispatch(SearchReceiptByValueAction(value));
    } else {
      dispatch(getViewReceiptDonorAction());
    }
  };

  // SEARCH functionality END

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
      <nav className="navbar navbar-light">
        <a className="navbar-brand"> DONOR RECEIPT LIST</a>
        <form className="form-inline">
          <div className="modalClass">
            <Button onClick={handleModal}>Create Receipt</Button>
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
          <button
            style={{ alignSelf: 'flex-start' }}
            className="btn btn-primary"
          >
            Export
          </button>
          <input placeholder="Search" onChange={e => handleChange(e)} />
        </div>
        <CreateReceiptForm modal={modal} handleModal={handleModal} />
        <Paper sx={{ width: '100%', mb: 2, height: '60vh' }}>
          {ViewReceipt && ViewReceipt.length > 0 ? (
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
                    rowCount={ViewReceipt.length}
                  />
                  <TableBody>
                    {stableSort(ViewReceipt, getComparator(order, orderBy))
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
                            key={row.id}
                            selected={isItemSelected}
                          >
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.id}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.donor_name ? row.donor_name : '-'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.receiptNumber ? row.receiptNumber : '-'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.project_name ? row.project_name : '-'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.project_name ? row.project_name : '-'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.mailSend ? row.mailSend : 'Mail not send'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.recieptPdf ? 'view' : '-'}
                            </TableCell>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                            >
                              {row.createdAt
                                ? row.createdAt
                                    .split('')
                                    .slice(0, 10)
                                    .join()
                                    .replace(/,/g, '')
                                : '-'}
                            </TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => history.push('/edit_doner', row)}
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
                count={recept.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
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

const tableHeader = [
  {
    id: '1',
    numeric: false,
    disablePadding: false,
    label: 'Sr No',
  },
  {
    id: '2',
    numeric: true,
    disablePadding: false,
    label: 'Donor Name',
  },
  {
    id: '3',
    numeric: true,
    disablePadding: false,
    label: 'Receipt No',
  },
  {
    id: '4',
    numeric: true,
    disablePadding: false,
    label: 'Project Name',
  },
  {
    id: '5',
    numeric: true,
    disablePadding: false,
    label: 'NGO Name',
  },
  {
    id: '6',
    numeric: true,
    disablePadding: false,
    label: 'Mail Status',
  },
  {
    id: '7',
    numeric: true,
    disablePadding: false,
    label: 'Receipt',
  },
  {
    id: '8',
    numeric: true,
    disablePadding: false,
    label: 'Created At',
  },
  {
    id: '9',
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
        {tableHeader.map(headCell => (
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
              {headCell.label}
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
