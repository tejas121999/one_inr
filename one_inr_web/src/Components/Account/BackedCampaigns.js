import React from "react";
import { Link, Route } from "react-router-dom";
import SideBar from "../Account/sidebar";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.aliceblue,
    fontSize: 18,

    // color: theme.palette.common.aliceblue,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const headCells = [
  { id: "pid", label: "ID", minWidth: 20 },
  { id: "name", label: "Title", minWidth: 150 },
  {
    id: "total",
    label: "Total",
    minWidth: 90,
    align: "right",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 70,
    align: "right",
  },
];

function createData(pid, name, total, action) {
  return { pid, name, total, action };
}

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
  return order === "desc"
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
  return stabilizedThis.map((el) => el[0]);
}

const rows = [
  createData(1, "India", 7263),
  createData(2, "Feed Cows with grass of Love", 6961),
  createData(3, "Italy", 1340),
  createData(4, "United States", 3520),
  createData(5, "Canada", 4670),
  createData(6, "Australia", 2024),
  createData(7, "Germany", 8678),
  createData(8, "Mexico", 5550),
  createData(9, "Japan", 7973),
  createData(10, "France", 679),
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

// const EnhancedTableToolbar = (props) => {

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="site-main">
      {/* <div className="container">
        <h4 style={{ margin: "0" }}>My Profile</h4>
        <div
          class="breadcrumbs"
          style={{ display: "inline-flex", marginBottom: "25px" }}
        >
          <Link to="/">Home</Link>
          <span>&nbsp;/&nbsp;</span>
          Profile
        </div>
      </div> */}
      <div className="account-wrapper">
        <div className="container">
          <div class="row">
            <div className="">
              <div className="account-content profile">
                <h3 className="account-title">Backed Campaigns</h3>
                <div className="account-main">
                  <Box sx={{ width: "100%" }}>
                    <Paper sx={{ width: "100%", mb: 2 }}>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                          justifyContent: "end",
                          backgroundColor: "rgba(0, 0, 0, 0.07)",
                        }}
                      >
                        <label style={{ font: "caption" }}>
                          Search :
                          <input
                            type="search"
                            style={{ marginLeft: "0.5em" }}
                            // onChange={(e) => handleChange(e)}
                          />
                        </label>
                      </div>
                      <hr style={{ margin: "0" }} />
                      <TableContainer>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-labelledby="tableTitle"
                        >
                          <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                          />
                          <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row, index) => {
                                // const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                  <StyledTableRow
                                    hover
                                    // onClick={(event) =>
                                    //   handleClick(event, row.name)
                                    // }
                                    // aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.pid}
                                    // selected={isItemSelected}
                                  >
                                    {/* <StyledTableCell padding="checkbox">
                                      <Checkbox
                                        color="primary"
                                        checked={isItemSelected}
                                        inputProps={{
                                          "aria-labelledby": labelId,
                                        }}
                                      />
                                    </StyledTableCell> */}
                                    <StyledTableCell>{row.pid}</StyledTableCell>
                                    <StyledTableCell
                                      component="th"
                                      id={labelId}
                                      scope="row"
                                      padding="none"
                                    >
                                      {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      {row.total}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      <Link
                                        to="/backed-campaigns/5"
                                        class="btn btn-link"
                                        style={{ display: "inline" }}
                                        title="Details"
                                      >
                                        <i
                                          class="fa fa-money fa-lg"
                                          aria-hidden="true"
                                        ></i>
                                      </Link>
                                    </StyledTableCell>
                                  </StyledTableRow>
                                );
                              })}
                            {emptyRows > 0 && (
                              <TableRow
                              // style={{
                              //   height: (dense ? 33 : 53) * emptyRows,
                              // }}
                              >
                                <StyledTableCell colSpan={6} />
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <hr style={{ margin: "0" }} />
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Route path="/profile/password" component={ProfilePass} />
      <Route path="/profile/edit" component={EditProfile} /> */}
    </div>
  );
}
