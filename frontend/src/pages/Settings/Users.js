import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Loader from '../Loader';
import Adduser from '../../Modals/Settings/AddUser';
import DeleteUser from '../../Modals/Settings/DeleteUser';
import Edituser from '../../Modals/Settings/EditUser';
import {
  getUserListAction,
  getUserListByValueAction,
} from '../../Redux/Actions/SettingAction';

const Users = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [editData, setEditData] = React.useState([]);

  const dispatch = useDispatch();
  let userList = useSelector(state => state.setting.getUserList);
  // console.log(userList, 'sagar');
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

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
      dispatch(getUserListByValueAction(value));
    } else {
      dispatch(getUserListAction());
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
  const onEditModalOpen = row => {
    setEditData(row);
    setEditModal(true);
  };
  const onEditModalClose = () => {
    setEditModal(false);
  };
  const deleteModalOpen = row => {
    setEditData(row);
    setDeleteModal(true);
  };
  const deleteModalClose = () => {
    setDeleteModal(false);
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

      <Edituser show={editModal} data={editData} onHide={onEditModalClose} />
      <ToastContainer hideProgressBar />
      <Adduser show={addModal} onHide={onAddModalClose} />
      <DeleteUser
        show={deleteModal}
        data={editData}
        onHide={deleteModalClose}
      />
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 1.7em',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
              paddingTop: '3px',
            }}
          >
            Users List
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '50%',
            padding: '0.5em 1.7em',
          }}
        >
          <button
            style={{ marginLeft: '1em', borderRadius: '2em', width: '20%' }}
            className="btn btn-primary"
            onClick={e => onAddModalOpen(e)}
          >
            Add User
          </button>
        </div>
      </div>

      {userList && userList.length > 0 ? (
        <div
          style={{
            margin: '20px',
            backgroundColor: 'white',
            marginBottom: '5em',
            borderRadius: '1.5em',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '2em',
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
          {/* <hr style={{ margin: '0' }} /> */}
          <Paper
            sx={{ width: '96%', marginBottom: '2em', marginLeft: '1.5em' }}
          >
            <React.Fragment>
              <TableContainer id="tableDiv">
                <Table aria-labelledby="tableTitle">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={userList.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(userList, getComparator(order, orderBy))
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
                            <TableCell align="center">
                              {row.role.roleName}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.mobile}</TableCell>
                            <TableCell align="center">
                              <button
                                data-bs-toggle="tooltip"
                                title="Edit"
                                className="btn"
                                onClick={() => {
                                  onEditModalOpen(row);
                                }}
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
                // style={{ marginTop: '0.5em', marginRight: '1.5em' }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showLastButton={true}
                showFirstButton={true}
              />
            </React.Fragment>
          </Paper>
        </div>
      ) : (
        <Loader />
      )}
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
