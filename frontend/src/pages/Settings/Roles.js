import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { Link, useHistory } from 'react-router-dom';
import { getComparator, stableSort } from '../../components/Pagination';
import { constData } from '../../utils/colors';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Loader from '../Loader';
import { TableHead } from '@mui/material';
import Addrole from '../../Modals/Settings/AddRole';
import Editrole from '../../Modals/Settings/EditRole';
import DeleteRole from '../../Modals/Settings/DeleteRole';
import {
  getRoleListAction,
  getRoleListByValueAction,
} from '../../Redux/Actions/SettingAction';
const Roles = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const history = useHistory();
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
      dispatch(getRoleListByValueAction(value));
    } else {
      dispatch(getRoleListAction());
    }
  };

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
  // END

  const hanldeDeleteModal = () => {
    setDeleteModal(!deleteModal);
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

  const dispatch = useDispatch();
  let roleList = useSelector(state => state.setting.getRoleList);
  console.log(roleList, 'role');
  useEffect(() => {
    dispatch(getRoleListAction());
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <DeleteRole show={deleteModal} onHide={hanldeDeleteModal} />
      <Addrole show={addModal} onHide={onAddModalClose} />
      <Editrole show={editModal} onHide={onEditModalClose} />
      <ToastContainer hideProgressBar />
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
            Roles List
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
            Add Role
          </button>
        </div>
      </div>
      {roleList && roleList.length > 0 ? (
        <div
          style={{
            margin: '20px',
            marginBottom: '8em',
            backgroundColor: 'white',
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
                    rowCount={roleList.length}
                    headCells={headCells}
                  />
                  <TableBody>
                    {stableSort(roleList, getComparator(order, orderBy))
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
                              align="left"
                              scope="row"
                              padding="none"
                              style={{ padding: '20px' }}
                            >
                              {row.roleName}
                            </TableCell>

                            <TableCell align="right">
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
                                onClick={() => hanldeDeleteModal(row)}
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
                count={roleList.length}
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
    numeric: true,
    disablePadding: false,
    label: 'Role',
  },

  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];
export default Roles;

export function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
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
            align={headCell.numeric ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              style={{ fontWeight: 'bold' }}
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
