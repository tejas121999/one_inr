import * as React from 'react';
import { useEffect } from 'react';
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
  FaPlusCircle,
} from 'react-icons/fa';
import './ngo.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNGOAction } from '../../Redux/Actions/NgoActions';
import DeleteNgo from './NgoModals/DeleteNgo';

const ViewAllNgo = () => {
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
  // const [NgoList, setNgoList] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const [pdfUrl, setPdfUrl] = React.useState('');
  const [CsvUrl, setCsvUrl] = React.useState('');
  const [XlsUrl, setXlsUrl] = React.useState('');
  const [printNgoTable, setPrintNgoTable] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNGOAction(''));
  }, []);

  let allNgoList = useSelector(state => state.ngo.ngoList);
  console.log(allNgoList);

  // const getNgoList = async () => {
  //   const url = BASE_URL + ADD_NGO_URL;
  //   await axios
  //     .get(url)
  //     .then(res => {
  //       setNgoList(res.data.data.message);
  //       toast.success('Yeay! New data is here.');
  //     })
  //     .catch(err => {
  //     });
  // };

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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - allNgoList.length) : 0;
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
      dispatch(getAllNGOAction(value));
    } else {
      dispatch(getAllNGOAction(''));
    }
  };

  const constData = [
    {
      id: 1,
      name: 'shivani',
      pending: 0,
      active: '0',
      actionrequired: '0',
      action: '',
    },
    {
      id: 2,
      name: 'b',
      pending: 0,
      active: '0',
      actionrequired: '0',
      action: '',
    },
    {
      id: 3,
      name: 'c',
      pending: 0,
      active: '0',
      actionrequired: '0',
      action: '',
    },
    {
      id: 4,
      name: 'd',
      pending: 0,
      active: '0',
      actionrequired: '0',
      action: '',
    },
    {
      id: 5,
      name: 'e',
      pending: 0,
      active: '0',
      actionrequired: '0',
      action: '',
    },
  ];

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <DeleteNgo show={deleteModal} onHide={deleteModalClose} id={deleteId} />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginTop: '5px',
            }}
          >
            LIST OF ALL NGO
          </p>
          <button className="btn btn-primary">Add NGO</button>
        </div>
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
          marginBottom: '5em',
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
          <label style={{ fontWeight: '500', marginTop: '0.5em' }}>
            Search :
            <input
              type="search"
              placeholder="Search"
              style={{ marginLeft: '0.5em', border: '1px solid #ced4da' }}
              onChange={e => handleChange(e)}
            />
          </label>
        </div>
        <hr style={{ margin: '0' }} />
        <Paper sx={{ width: '100%' }}>
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
                  rowCount={constData.length}
                />
                <TableBody>
                  {stableSort(constData, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                          <TableCell align="center">{row.pending}</TableCell>
                          <TableCell align="center">{row.active}</TableCell>
                          <TableCell align="center">
                            {row.actionRequired}
                          </TableCell>
                          <TableCell align="center">
                            <button
                              data-bs-toggle="tooltip"
                              title="View Details"
                              className="btn"
                              onClick={() =>
                                history.push('/view_single_ngo', row)
                              }
                            >
                              <FaRegEye />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Edit Ngo"
                              className="btn"
                              onClick={() => history.push('/edit_ngo', row)}
                            >
                              <FaRegEdit />
                            </button>
                            <button
                              data-bs-toggle="tooltip"
                              title="Add project"
                              className="btn"
                              onClick={() => history.push('/add_project', row)}
                            >
                              <FaPlusCircle />
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
              count={constData.length}
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
  );
};

export default ViewAllNgo;

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

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'pending',
    numeric: true,
    disablePadding: false,
    label: 'Pending',
  },
  {
    id: 'active',
    numeric: true,
    disablePadding: false,
    label: 'Active',
  },
  {
    id: 'actionRequired',
    numeric: true,
    disablePadding: false,
    label: 'ActionRequired',
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
};
