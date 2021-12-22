import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const ViewSingleNgo = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card">
        <p
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            margin: '20px',
            marginLeft: '20px',
          }}
        >
          LIST OF ALL NGO
        </p>
      </div>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              // size={dense ? 'small' : 'medium'}
            >
              <TableBody>
                <TableRow
                  //  aria-checked={isItemSelected}
                  tabIndex={-1}
                  //  key={row.name}
                  //  selected={isItemSelected}
                >
                  <TableCell
                    //   id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    NgoName
                  </TableCell>
                  <TableCell align="center">ABC</TableCell>
                </TableRow>

                <TableRow
                  //   aria-checked={isItemSelected}
                  tabIndex={-1}
                  //   key={row.address}
                  //   selected={isItemSelected}
                >
                  <TableCell
                    //   id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Address
                  </TableCell>
                  <TableCell align="center">XYZ</TableCell>
                </TableRow>

                <TableRow
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  // key={row.email}
                  // selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Email
                  </TableCell>
                  <TableCell align="center">EFG</TableCell>
                </TableRow>

                <TableRow
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  // key={row.mobile}
                  // selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Mobile
                  </TableCell>
                  <TableCell align="center">BCD</TableCell>
                </TableRow>

                <TableRow
                  //  aria-checked={isItemSelected}
                  tabIndex={-1}
                  //  key={row.landline}
                  //  selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Landline
                  </TableCell>
                  <TableCell align="center">EFG</TableCell>
                </TableRow>

                <TableRow
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  // key={row.registrationdate}
                  // selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Registration Date
                  </TableCell>
                  <TableCell align="center">12/4/2021</TableCell>
                </TableRow>

                <TableRow
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  // key={row.registrationnumber}
                  // selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Registrationnumber
                  </TableCell>
                  <TableCell align="center">LMN</TableCell>
                </TableRow>

                <TableRow
                  tabIndex={-1}
                  // key={row.pannumber}
                  // selected={isItemSelected}
                >
                  <TableCell
                    // id={labelId}
                    align="center"
                    scope="row"
                    padding="none"
                  >
                    Pannumber
                  </TableCell>
                  <TableCell align="center">CDE</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </Paper>
    </>
  );
};

export default ViewSingleNgo;
