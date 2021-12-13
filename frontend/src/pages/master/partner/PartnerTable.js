import React, { useEffect } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

export default function PartnerTable({ printDonorTable, tableData, setPrintDonorValue }) {

    useEffect(() => {
        if (printDonorTable) {
            setTimeout(() => {
                var printContents = document.getElementById('table').innerHTML;
                var originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                window.print();
                window.location.reload();
                // document.body.innerHTML = originalContents;
            }, 1000);
        }
    }, [printDonorTable]);


  return (
    <>
    <div id="table">
      {printDonorTable ? (
          <table>
              <thead>
                  <th>Name</th>
                  <th>Company</th>
                  <th>phone</th>
                  <th>Email</th>
                  {/* <th>NGO Name</th> */}
                  <th>GST Status</th>
              </thead>
              {
                  tableData.map((row, i) => {
                      return (
                          <tr key={i}>
                              <td>{row.name ?row.name: '-'}</td>
                              {/* <td>{row.donor_name ? i : '-'}</td> */}
                              <td>{row.company ? row.company : '-'}</td>
                              <td>{row.phone ? row.phone : '-'}</td>
                              <td>{row.email ? row.email : '-'}</td>
                              {/* <td>{"kdhh"}</td> */}
                              <td>{row.gst ? row.gstNumber : '-'}</td>
                          </tr>
                      )
                  })
              }
          </table>
      ) : ""}
      <div>{printDonorTable}</div>
      </div>
    </>
  );
}
