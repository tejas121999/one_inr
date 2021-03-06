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
import Loader from '../Loader';

const ArchivedProject = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
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
            Archive Projects
          </p>
        </div>
        <div
          style={{
            display: 'flex',
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
      {constData && constData.length > 0 ? (
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
                padding: '0em 2em 1em',
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
                    rowCount={constData.length}
                  />
                  <TableBody>
                    {stableSort(constData, getComparator(order, orderBy))
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
                              {row.title}
                            </TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{row.goal}</TableCell>
                            <TableCell align="left">{row.funded}</TableCell>
                            <TableCell align="left">{row.paid}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>

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
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'goal',
    numeric: false,
    disablePadding: false,
    label: 'Goal',
  },
  {
    id: 'funded',
    numeric: false,
    disablePadding: false,
    label: 'Funded',
  },
  {
    id: 'paid',
    numeric: false,
    disablePadding: false,
    label: 'Paid',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
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
