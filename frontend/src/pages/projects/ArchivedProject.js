import React, { useEffect } from 'react';
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
import { BsArchive } from 'react-icons/bs';
import { FaRegFileArchive } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArchivedProjectAction } from '../../Redux/Actions/ProjectActions';

const ArchivedProject = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArchivedProjectAction());
  }, []);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - constData.length) : 0;

  // SEARCH functionality starts

  let timeout = null;
  const handleChange = e => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };

  const onSearch = value => {
    if (value) {
      // dispatch(getNgoByValueAction(value));
    } else {
      // dispatch(getViewAllNgoAction());
    }
  };

  let projectList = useSelector(state => state.project.archivedProjectList);
  const headCells = [
    {
      id: 'title',
      numeric: false,
      disablePadding: false,
      label: 'Title',
    },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'goal',
      numeric: true,
      disablePadding: false,
      label: 'Goal',
    },
    {
      id: 'funded',
      numeric: true,
      disablePadding: false,
      label: 'Funded',
    },
    {
      id: 'paid',
      numeric: true,
      disablePadding: false,
      label: 'Paid',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: false,
      label: 'Action',
    },
  ];
  //end

  const constData = [
    {
      id: 1,
      title: 'Feed Cows with grass of Love',
      date: '21 Oct 2019 To 21 Oct 2019',
      goal: '114',
      funded: '5',
      paid: '0',
      status: 'Refunded',
      action: '',
    },
    {
      id: 2,
      title: 'Feed Cows with grass of Love',
      date: '07 May 2020 To 07 May 2020',
      goal: '114',
      funded: '29',
      paid: '0',
      status: 'Action Required',
      action: '',
    },
    {
      id: 3,
      title: 'Feed Cows with grass of Love',
      date: '08 May 2020 To 08 May 2020',
      goal: '114',
      funded: '114',
      paid: '100',
      status: 'Full Paid',
      action: '',
    },
    {
      id: 4,
      title: 'Feeding Pigeons Grains',
      date: '07 May 2020 To 07 May 2020',
      goal: '120	',
      funded: '29',
      paid: '0',
      status: 'Refunded',
      action: '',
    },
  ];

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
            padding: '20px',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0',
            }}
          >
            ARCHIVED PROJECTS
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}
      >
        <button style={{ alignSelf: 'flex-start' }} className="btn btn-primary">
          Export
        </button>
        <input placeholder="Search" onChange={e => handleChange(e)} />
      </div>

      <Paper sx={{ width: '100%', mb: 2 }}>
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
                          {row.title}
                        </TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.goal}</TableCell>
                        <TableCell align="center">{row.funded}</TableCell>
                        <TableCell align="center">{row.paid}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>

                        <TableCell>
                          {row.action}
                          <button
                            data-bs-toggle="tooltip"
                            title="Archive"
                            className="btn"
                          // onClick={() => deleteModalOpen(row)}
                          >
                            <FaRegFileArchive />
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
    </>
  );
};

export default ArchivedProject;

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
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'goal',
    numeric: true,
    disablePadding: false,
    label: 'Goal',
  },
  {
    id: 'funded',
    numeric: true,
    disablePadding: false,
    label: 'Funded',
  },
  {
    id: 'paid',
    numeric: true,
    disablePadding: false,
    label: 'Paid',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
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


