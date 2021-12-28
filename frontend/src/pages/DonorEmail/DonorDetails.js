import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import TextEditor from './TextEditor';
import uploadImage from '../../assets/img/logo/uploadImage.jpg';


const DonorDetails = (props) => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(getAllNGOAction());
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




    const constData = [
        {
            id: 1,
            name: 'mani ghgj',
            email: 'mani@gmail.com',
            projects: '184',
            donated: '967',
        },
        {
            id: 2,
            name: 'shivani abcd',
            email: 'shivani@gmail.com',
            projects: '34',
            donated: '66',
        },
        {
            id: 3,
            name: 'monica ghgj',
            email: 'monica@gmail.com',
            projects: '1',
            donated: '104',
        },
        {
            id: 4,
            name: 'vivek marya',
            email: 'vivek@gmail.com',
            projects: '1',
            donated: '11',
        },
        {
            id: 5,
            name: 'bipin ghgj',
            email: 'bipin@gmail.com',
            projects: '0',
            donated: '0',
        },
        {
            id: 6,
            name: 'chinmay ghgj',
            email: 'chinmay@gmail.com',
            projects: '1',
            donated: '12',
        },
        {
            id: 7,
            name: 'akshay ghgj',
            email: 'akshay@gmail.com',
            projects: '0',
            donated: '0',
        },
        {
            id: 8,
            name: 'tejas ghgj',
            email: 'tejas@gmail.com',
            projects: '1',
            donated: '4',
        },
        {
            id: 9,
            name: 'shivam ghgj',
            email: 'shivam@gmail.com',
            projects: '120',
            donated: '1000',
        },
        {
            id: 10,
            name: 'shubham ghgj',
            email: 'shubham@gmail.com',
            projects: '0',
            donated: '0',
        },

    ];


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
            // dispatch(getNgoByValueAction(value));
        } else {
            // dispatch(getViewAllNgoAction());
        }
    };


    return (
        <>
            <div>
                <br />
                <br />
                <br />
                <div className="card">
                    <p
                        style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            margin: '20px',
                            width: '100%',
                            marginLeft: '20px',
                        }}
                    >
                        DONOR DETAILS
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        padding: '20px',
                        marginLeft: '28cm'
                    }}
                >
                    <input type="search" placeholder="Search" onChange={e => handleChange(e)} />
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

                                                    <TableCell
                                                        id={labelId}
                                                        align="center"
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.email}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.projects}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {row.donated}
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
                <br />
                <div className='row'
                    style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                    }}>
                    <div className='col-12 mt-3'>
                        <p> <b> Subject: </b> </p>
                        <TextField fullWidth label="fullWidth" id="fullWidth" />
                    </div>
                    <br />
                    <div className='col-12 mt-3'>
                        <p> <b> Dear: </b> </p>
                        <TextField fullWidth label="fullWidth" id="fullWidth"
                            disabled />
                    </div>
                    <div className='col-12  mt-3' >
                        <label style={{ fontWeight: 'bold' }}>Broadcast email body : (Max 1000 char)</label>
                        <TextEditor />
                    </div>
                    <div className='col-12  mt-3' >
                        <label style={{ fontWeight: 'bold' }}> Image: </label>
                    </div>

                    <div className="row">
                        <div className="col-6 ">
                            <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                <label style={{ fontWeight: 'bold' }}></label>
                                <div className="image-upload">
                                    <label for="file-input">
                                        <img className="AttachImage" src={uploadImage} />
                                    </label>
                                    <input
                                        id="file-input"
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ marginLeft: '40px' }}>
                    <button type="submit" className="btn btn-success" >
                        Send Emails
                    </button>
                </div>
                <br />
                <br />
                <br />


            </div>

        </>

    )
}

export default DonorDetails;

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
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'projects',
        numeric: false,
        disablePadding: false,
        label: 'Projects',
    },
    {
        id: 'donated',
        numeric: false,
        disablePadding: false,
        label: 'Donated',
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



