import React from 'react';

function PaymentInfo() {
  return (
    <div
      style={{
        padding: '25px',
        backgroundColor: 'white',
      }}
    >
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th>Title:</th>
            <td>Behatar Swaasthay, Behatar Desh</td>
          </tr>
          <tr>
            <th>Target:</th>
            <td>456</td>
          </tr>
          <tr>
            <th>Funded:</th>
            <td>287</td>
          </tr>
          <tr>
            <th>10% Commision:</th>
            <td>26 (+1)</td>
          </tr>
          <tr>
            <th>18% GST:</th>
            <td>5</td>
          </tr>
          <tr>
            <th>2% PG Charges:</th>
            <td>6</td>
          </tr>
          <tr>
            <th>Total amt to pay (Vendor):</th>

            <td>252</td>
          </tr>
          <tr>
            <th>Amt Paid (Vendor):</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Amt to Pay (Vendor):</th>
            <td>251</td>
          </tr>

          <tr style={{ height: '10px' }}>
            <th></th>
            <td></td>
          </tr>
          <tr>
            <th>Total amt to pay (Partner):</th>
            <td>31</td>
          </tr>
          <tr>
            <th>Amt Paid (Partner):</th>
            <td>12</td>
          </tr>
          <tr>
            <th>Amt to Pay (Partner):</th>
            <td>19</td>
          </tr>
        </tbody>
      </table>
      <hr />
      {/* <br /> */}
    </div>
  );
}

export default PaymentInfo;
