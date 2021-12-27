import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import {
  getComparator,
  stableSort,
  EnhancedTableHead,
} from '../../components/Pagination';
import { constData } from '../../utils/colors';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Loader from '../Loader';
import Adduser from '../../Modals/Settings/AddUser';
import DeleteUser from '../../Modals/Settings/DeleteUser';
import Edituser from '../../Modals/Settings/EditUser';

const Users = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
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
      //   dispatch(getAllVEndorAction(value));
    } else {
      //   dispatch(getAllVEndorAction(''));
    }
  };

  // END

  const onAddModalOpen = e => {
    e.preventDefault();
    setAddModal(true);
  };
  const onAddModalClose = () => {
    setAddModal(false);
  };
  const onEditModalOpen = () => {
    setEditModal(true);
  };
  const onEditModalClose = () => {
    setEditModal(false);
  };
  const deleteModalOpen = () => {
    setDeleteModal(!deleteModal);
  };

  //   start
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

  //

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <Edituser show={editModal} onHide={onEditModalClose} />
      <ToastContainer hideProgressBar />
      <Adduser show={addModal} onHide={onAddModalClose} />
      <DeleteUser show={deleteModal} onHide={deleteModalOpen} />
      <nav className="navbar navbar-light">
        <a className="navbar-brand">Users List</a>
        <form className="form-inline">
          <div className="modalClass">
            <button
              onClick={e => onAddModalOpen(e)}
              className="btn btn-primary"
            >
              Add User
            </button>
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
            justifyContent: 'flex-end',
          }}
        >
          <input
            placeholder="Search"
            onChange={e => handleChange(e)}
            type="search"
          />
        </div>
        <Paper sx={{ width: '100%', mb: 2 }}>
          {constData && constData.length > 0 ? (
            <React.Fragment>
              <TableContainer id="tableDiv">
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={constData.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(constData, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                      .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow hover tabIndex={-1} key={row.name}>
                            <TableCell
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                              style={{ padding: '20px' }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => onEditModalOpen()}
                              >
                                <FaRegEdit />
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
};

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'mobile',
    numeric: false,
    disablePadding: false,
    label: 'Mobile',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];
export default Users;
