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
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as View } from '../../assets/icons/view.svg';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllNGOAction,
  getAllNGOByValueAction,
} from '../../Redux/Actions/NgoActions';
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
      dispatch(getAllNGOByValueAction(value));
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
      <DeleteNgo show={deleteModal} onHide={deleteModalClose} id={deleteId} />
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
            List Of All Ngo
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            // padding: '2em',
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
      {allNgoList && allNgoList.length > 0 ? (
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
                to="/add_ngo"
                type="button"
                className="btn btn-primary"
                style={{ borderRadius: '2em', fontSize: '20' }}
              >
                Add NGO
              </Link>
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
              {/* <Menu
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
          </Menu> */}
            </div>
          </div>
          {/* <hr style={{ margin: '0' }} /> */}
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={allNgoList.length}
                  />
                  <TableBody>
                    {stableSort(allNgoList, getComparator(order, orderBy))
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
                              {row.user.name}
                            </TableCell>
                            <TableCell align="left">
                              {row.projectDeactiveCount}
                            </TableCell>
                            <TableCell align="left">
                              {row.projectActiveCount}
                            </TableCell>
                            {/* <TableCell align="left">
                              {row.actionRequired}
                        </TableCell> */}
                            <TableCell align="left">
                              <button
                                data-bs-toggle="tooltip"
                                title="View Details"
                                className="btn"
                                onClick={() =>
                                  history.push('/view_single_ngo', row)
                                }
                                style={{ padding: '0 0.5em 0 0' }}
                              >
                                {/* <FaRegEye /> */}
                                <View style={{ width: '25', height: '20' }} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Add project"
                                className="btn"
                                onClick={() =>
                                  history.push('/add_project', row)
                                }
                                style={{ padding: '0 0.5em 0 0' }}
                              >
                                <Plus style={{ width: '21', height: '21' }} />
                              </button>
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit Ngo"
                                className="btn"
                                onClick={() => history.push('/edit_ngo', row)}
                                style={{ padding: '0' }}
                              >
                                {/* <FaRegEdit /> */}
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
                count={allNgoList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                // pageSize={10}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </>
          </Paper>
        </div>
      ) : (
        <Loader />
      )}
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
  // {
  //   id: 'actionRequired',
  //   numeric: false,
  //   disablePadding: false,
  //   label: 'ActionRequired',
  // },
  {
    id: 'action',
    numeric: false,
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
};
