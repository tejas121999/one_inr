import React, { useEffect } from 'react';

export default function UpcomingDonorRenewalTable({
  printDonorTable,
  tableData,
  setPrintDonorValue,
}) {
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
              <th>Renewal Date</th>
              <th>Name</th>
              <th>Donated</th>
              <th>Balance</th>
              <th>Projects</th>
              {/* <th>GST Status</th> */}
            </thead>
            {tableData.map((row, i) => {
              return (
                <tr key={i}>
                  <td>
                    {row.balanceNextRenewDate ? row.balanceNextRenewDate : '-'}
                  </td>
                  {/* <td>{row.donor_name ? i : '-'}</td> */}
                  <td>{row.name ? row.name : '-'}</td>
                  <td>{row.donated ? row.donated : '100'}</td>
                  <td>{row.balance ? row.balance : '-'}</td>

                  <td>{row.project ? row.projects : '20'}</td>
                  {/* <td>{"kdhh"}</td> */}
                  {/* <td>{row.gst ? row.gstNumber : '-'}</td> */}
                </tr>
              );
            })}
          </table>
        ) : (
          ''
        )}
        <div>{printDonorTable}</div>
      </div>
    </>
  );
}
