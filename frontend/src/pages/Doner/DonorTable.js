import React, { useEffect } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

export default function DonorTable({ printDonorTable, tableData, setPrintDonorValue }) {

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
                  <th>Sr No.</th>
                  <th>Donor Name</th>
                  <th>Receipt No.</th>
                  <th>Project Name</th>
                  <th>NGO Name</th>
                  <th>Mail Status</th>
              </thead>
              {
                  tableData.map((row, i) => {
                      return (
                          <tr key={i}>
                              <td>{row.id ?row.id: '-'}</td>
                              {/* <td>{row.donor_name ? i : '-'}</td> */}
                              <td>{row.donor_name ? row.donor_name : '-'}</td>
                              <td>{row.receiptNumber ? row.receiptNumber : '-'}</td>
                              <td>{row.project_name ? row.project_name : '-'}</td>
                              <td>{"kdhh"}</td>
                              <td>{row.mailSend ? row.mailSend : '-'}</td>
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
