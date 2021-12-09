import React, { useEffect, useState } from 'react';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./viewreciept.css"

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
  getAllParentDonorAction,
  getReceiptDatabyId,
  getViewReceiptDonorAction,
  SearchReceiptByValueAction,
} from '../../Redux/Actions/DonorActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  EnhancedTableHead,
  getComparator,
  stableSort,
} from '../../components/Pagination';
import { color } from '@mui/system';
export default function ViewRecept() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [order, setOrder] = React.useState('asc');
  const[id,setId]=React.useState("");
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
  const [type, setType] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  
  React.useEffect(() => {
    async function onMount() {
      await dispatch(getViewReceiptDonorAction());
    }
    onMount();
  }, []);

  let ViewReceipt = useSelector(state => state.donor.ViewReceipt);
  console.log("ViewReceipt",ViewReceipt);

  const handleModal = (type,row) => {
    if(type=="edit reciept"){
      getDonorbyId(row.id)

    }
    console.log("sada",row);
    setId(row)
    setType(type)
    setModal(!modal);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    console.log("ttttttttt",anchorEl)
    setAnchorEl(null);
  };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
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
  const getDonorbyId=async(id)=>{
    let getViewUrl=`http://newoneinr.nimapinfotech.com/api/userReceipts/${id}`
    await axios.get(getViewUrl).then((response)=>{
      dispatch(getReceiptDatabyId(response.data.data))
      console.log("response.data",response.data)

      // setResData(response.data)

    }).catch((err)=>{
      console.log("err",err)
    })
  }

  

  
    
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
            <Button onClick={()=>handleModal("create receipt")}>Create Receipt</Button>
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
            onClick={(e)=>handleClick(e)}>
          
            Export
         
          </button>
          <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{top: "30px", left:"-8px"}}
                  >
                    <MenuItem >
                    <button className="export-btn w-100">Copy</button>
                   
                    </MenuItem>
                    <MenuItem >
                    <button className="export-btn w-100">CSV</button>
                   
                    </MenuItem>
                    <MenuItem >
                    <button className="export-btn w-100">Excel</button>
                   
                    </MenuItem>
                    <MenuItem >
                    <button className="export-btn w-100">PDF</button>
                   
                    </MenuItem>
                    <MenuItem >
                    <button className="export-btn w-100">Print</button>
                   
                    </MenuItem>
                    {/* <MenuItem></MenuItem> */}
                  </Menu>
          <input placeholder="Search" onChange={e => handleChange(e)} />
        </div>
        <CreateReceiptForm modal={modal} type= {type} id ={id} handleModal={handleModal} />
        <Paper sx={{ width: '100%', mb: 2 }}>
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
                    headCell={headCells}
                  />
                   {/* <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Donor Name</th>
                      <th>Receipt No</th>
                      <th>Project Name</th>
                      <th>NGO Name</th>
                      <th>Mail status</th>
                      <th>Receipt</th>
                      <th>Created At</th>
                      <th>Action</th>

                    </tr>
            </thead> */}
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
                            className="view-pdf"
                              id={labelId}
                              align="center"
                              scope="row"
                              padding="none"
                              // style={color="lightblue"}
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
                                // onClick={() => history.push('/edit_doner', row)}
                              >
                                <FaRegEdit onClick={()=>handleModal("edit reciept",row)} />
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
                count={ViewReceipt.length}
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
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'donated',
    numeric: true,
    disablePadding: false,
    label: 'Donated',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'projects',
    numeric: true,
    disablePadding: false,
    label: 'Projects',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

const tableHeader = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'donated',
    numeric: true,
    disablePadding: false,
    label: 'Donated',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: 'Balance',
  },
  {
    id: 'projects',
    numeric: true,
    disablePadding: false,
    label: 'Projects',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];
