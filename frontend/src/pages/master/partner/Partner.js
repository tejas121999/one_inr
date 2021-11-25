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
import {
  FaRegEdit,
  FaRegEye,
  FaRegTrashAlt,
  FaBookOpen,
  FaDollarSign,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import './Donor.css';
// import Viewdonormodal from '../../Modals/Donor/ViewDonorModal';
// import Addfund from '../../Modals/Donor/AddFund';



const data = [
  {
    id: 1,
    name: 'a',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 2,
    name: 'b',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 3,
    name: 'c',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 4,
    name: 'd',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 5,
    name: 'e',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 6,
    name: 'f',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 7,
    name: 'g',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 8,
    name: 'h',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 9,
    name: 'i',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 10,
    name: 'j',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 11,
    name: 'k',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
  {
    id: 12,
    name: 'l',
    company: 'nimap infotech',
    phone: '7854123698',
    email: 'akshay@gmail.com',
    gst: 'GST125436',
  },
];

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
  console.log('Chinmay', array, comparator);
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  console.log('SOrted', stabilizedThis);
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: true,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'company',
    numeric: true,
    disablePadding: false,
    label: 'Company Name',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'PHONE NO',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'gst',
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

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  console.log('test', order, orderBy);
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="table-head">
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
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
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function Partner() {
const [data, setData] = React.useState([])

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [viewModal, setViewModal] = React.useState(false);
  const [viewData, setViewData] = React.useState('');
  const [fundModal, setFundModal] = React.useState(false);

  const ViewModalOpen = data => {
    setViewData(data);
    setViewModal(true);
  };
  const ViewModalClose = () => {
    setViewModal(false);
  };
  const fundModaOpen = () => {
    setFundModal(true);
  };
  const fundModaClose = () => {
    setFundModal(false);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  // const classes = useToolbarStyles();
  return (
    <>


      {/* <div className="card">
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
            </div>*/}
      <nav className="navbar navbar-light"
      // style={{ backgroundColor: '#e2e2e2' }} 
      >
        <a className="navbar-brand">PARTNER DETAILS</a>
        <form className="form-inline">
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Add Doner</button>
        </form>
      </nav>
      <div
        style={{
          margin: '20px',
          backgroundColor: '#fcfcfc',
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
            className="btn btn-outline-primary"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Export
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">csv</a>
            <a className="dropdown-item" href="#">pdf</a>
            <a className="dropdown-item" href="#">jpg</a>
          </div>
          <input placeholder="Search" />
        </div>
        <Paper sx={{ width: '100%', mb: 2 }} style={{ backgroundColor: '#fcfcfc' }}>
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
                rowCount={data.length}
              />
              <TableBody>
                {stableSort(data, getComparator(order, orderBy))
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
                          align="right"
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.company}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.gst}</TableCell>
                        <TableCell align="right">
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
                          >
                            <FaRegEdit />
                          </button>
                          <button
                            data-bs-toggle="tooltip"
                            title="Add Fund"
                            className="btn"
                            onClick={() => fundModaOpen()}
                          >
                            <FaDollarSign />
                          </button>
                          <button
                            data-bs-toggle="tooltip"
                            title="Delete"
                            className="btn"
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
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}