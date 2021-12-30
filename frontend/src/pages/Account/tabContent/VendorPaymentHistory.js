import React from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { visuallyHidden } from '@mui/utils';
import Paper from '@mui/material/Paper';
import {
    FaRegEdit,
    FaRegEye,
    FaRegTrashAlt,
    FaBookOpen,
    FaPlusCircle,
} from 'react-icons/fa';
import EditPayment from '../EditPayment';


const VendorPaymentHistory = () => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [editModal, setEditModal] = React.useState(false);
    const [viewModal, setViewModal] = React.useState(false);
    const [viewData, setViewData] = React.useState('');
    const [fundModal, setFundModal] = React.useState(false);
    const [fundModalData, setFundModalData] = React.useState(0);
    // const [donorList, setDonorList] = React.useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    const fundModaOpen = data => {
        setFundModalData(data.id);
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
        console.log('ChinmayChange', newPage);

        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = name => selected.indexOf(name) !== -1;


    const constData = [
        {
            id: 1,
            sr_no: 1,
            date: "10-12-2020",
            amount_pade: 50,
            vendor_name: 'tejas talkar',
            vendor_company: 'nimap infotech',
            ngo: '1INR',
            project: 'feeding pigeons grain',
            project_date: '8-feb-2020 to 15-may-2020',
            description: 'hgscce',
            receipt: '--',
            action: ''
        },
        {
            id: 1,
            sr_no: 1,
            date: "10-12-2020",
            amount_pade: 50,
            vendor_name: 'tejas talkar',
            vendor_company: 'nimap infotech',
            ngo: '1INR',
            project: 'feeding pigeons grain',
            project_date: '8-feb-2020 to 15-may-2020',
            description: 'hgscce',
            receipt: '--',
            action: ''
        },
    ];


    return (
        <div>
            <EditPayment show={fundModal} onHide={fundModaClose} data={fundModalData} />

            <div className=''>
                <div className=''>
                    <div className='row'>
                        <div className='col-6' style={{ marginLeft: '24cm' }}>
                            <label>Search</label>&nbsp;&nbsp;
                            <input type='search' />
                        </div>
                    </div>
                    <Paper sx={{ width: '100%', mb: 2, height: '60vh' }}>
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
                                                    key={row.sr_no}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell
                                                        id={labelId}
                                                        align="center"
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.sr_no}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.date}
                                                    </TableCell>
                                                    <TableCell align="center">{row.amount_pade}</TableCell>
                                                    <TableCell align="center">{row.vendor_name}</TableCell>
                                                    <TableCell align="center">{row.vendor_company}</TableCell>
                                                    <TableCell align="center">{row.ngo}</TableCell>
                                                    <TableCell align="center">{row.project}</TableCell>
                                                    <TableCell align="center">{row.project_date}</TableCell>
                                                    <TableCell align="center">{row.description}</TableCell>
                                                    <TableCell align="center">{row.receipt}</TableCell>
                                                    <TableCell align="center">
                                                        <button
                                                            data-bs-toggle="tooltip"
                                                            title="Edit"
                                                            className="btn"
                                                            onClick={() => fundModaOpen(row)}
                                                        >
                                                            <FaRegEdit />
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
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default VendorPaymentHistory

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
        id: 'sr_no',
        numeric: false,
        disablePadding: false,
        label: 'sr_no',
    },
    {
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'date',
    },
    {
        id: 'amount_pade',
        numeric: true,
        disablePadding: false,
        label: 'Amount Pade',
    },
    {
        id: 'vendor_name',
        numeric: true,
        disablePadding: false,
        label: 'Vendor Name',
    },
    {
        id: 'vendor_company',
        numeric: true,
        disablePadding: false,
        label: 'Vendor Company',
    },
    {
        id: 'ngo',
        numeric: true,
        disablePadding: false,
        label: 'ngo',
    },
    {
        id: 'project',
        numeric: true,
        disablePadding: false,
        label: 'project',
    },
    {
        id: 'project_date',
        numeric: true,
        disablePadding: false,
        label: 'Project Date',
    },
    {
        id: 'description',
        numeric: true,
        disablePadding: false,
        label: 'description',
    },
    {
        id: 'receipt',
        numeric: true,
        disablePadding: false,
        label: 'receipt',
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

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};