import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { FcMoneyViewCompleteProject } from 'react-icons/fc';
import { RiRefund2Line } from 'react-icons/ri';
import { BsArchive, BsEye } from 'react-icons/bs';
import '../../Doner/Donor.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Loader from '../../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDonorByValueAction,
  getViewAllDonorAction,
} from '../../../Redux/Actions/DonorActions';
import PaymentInfo from '../../projects/Complete_Project/PaymentInfo';
import PaymentNavTab from '../../projects/Complete_Project/PaymentNavTab';
import PaymentDistribution from '../../projects/Complete_Project/PaymentDistribution';

const ViewCompleteProject = () => {
  const [navLink, setNavLink] = useState();
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
  // const [donorList, setDonorList] = React.useState([]);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteId, setDeleteID] = React.useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getViewAllDonorAction());
  }, []);

  // const getDonorList = async () => {
  //   const url = BASE_URL + ADD_DONOR_URL;
  //   await axios
  //     .get(url)
  //     .then(res => {
  //       setDonorList(res.data.data.message);
  //       toast.success('Yeay! New data is here.');
  //     })
  //     .catch(err => {
  //     });
  // };

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

  const constData = [
    {
      id: 1,
      title: 'Behatar Swaasthay, Behatar Desh',
      date: '08 May 2020 To 08 May 2020',
      goal: '456',
      funded: '287',
      paid: '13',
      status: 'Half Paid',
      action: '',
    },
    {
      id: 2,
      title: 'Feed Cows with grass of Love',
      date: '23 Oct 2019 To 23 Oct 2019',
      goal: '114',
      funded: '5',
      paid: '0',
      status: 'Refunded',
      action: '',
    },
    {
      id: 3,
      title: 'pahli roti dayittv ki',
      date: '27 Nov 2019 To 27 Nov 2019',
      goal: '338',
      funded: '29',
      paid: '0',
      status: 'Action Required',
      action: '',
    },
    {
      id: 4,
      title: 'Feeding Pigeons Grains',
      date: '08 Feb 2020 To 08 Feb 2020',
      goal: '582',
      funded: '582',
      paid: '100',
      status: 'Half Paid',
      action: '',
    },
  ];

  const handleMoneyAdd = data => {
    setNavLink(data);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '15px',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
            }}
          >
            STARTER PAGE
          </p>
        </div>
      </div>
      <div className="row" style={{ flexWrap: 'nowrap', margin: '0' }}>
        <div
          className="col-md-6"
          style={{
            marginTop: '20px',
          }}
        >
          <PaymentInfo />
        </div>
        {/* <div
          className="col-md-6"
          style={{
            marginTop: '20px',
          }}
        >
          <PaymentDistribution />
        </div> */}
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
          marginBottom: '5em',
        }}
      >
        <div style={{ marginTop: '1.5em' }}>
          <PaymentNavTab />
        </div>
      </div>
    </>
  );
};

export default ViewCompleteProject;

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
    id: 'title',
    numeric: false,
    // disablePadding: true,
    label: 'Title',
  },
  {
    id: 'date',
    numeric: true,
    label: 'Date',
  },
  {
    id: 'goal',
    numeric: true,
    label: 'Goal',
  },
  {
    id: 'funded',
    numeric: true,
    label: 'Funded',
  },
  {
    id: 'paid',
    numeric: true,
    label: 'Paid',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Status',
  },
  {
    id: 'action',
    numeric: false,
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
            // padding={headCell.disablePadding ? 'none' : 'normal'}
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
