import React from 'react';

const AutoDonate = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div
        className="row"
        style={{
          margin: '1em',
          padding: '0.8em 2em',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            fontSize: '25',
            fontWeight: 'bold',
            marginBottom: '0',
          }}
        >
          Add Fund
        </p>
      </div>
      <hr style={{ margin: '0' }} />

      <div
        className="row"
        style={{
          margin: '5% 33%',
          textAlign: 'center',
        }}
      >
        <div
          className="autoDonate"
          style={{ borderRadius: '1.5em', border: '1px solid #707070' }}
        >
          <div style={{ margin: '2em' }}>
            <div>
              <p
                style={{
                  fontsize: '25px',
                  fontWeight: 'bold',
                  margin: '10px',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: 'medium',
                  borderColor: '#63b8ec',
                }}
              >
                Donate fund for Feeding Pigeons Grains
              </p>
            </div>

            <div>
              <label style={{ float: 'left', fontsize: '20px' }}>
                Add Fund :
              </label>
              <input
                className="form-control"
                name="fund_amount"
                placeholder="Enter Amount"
                type="text"
              />
              <label
                style={{ float: 'left', marginTop: '20px', fontsize: '20px' }}
              >
                Fund Date :
              </label>
              <input type="date" className="form-control" />
            </div>

            <button
              style={{ width: '100%', marginTop: '20px' }}
              type="submit"
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>
            Max Doner amount available is Rs.
            <b>397</b>
          </span>
          <br />
          <span>
            Max fund limit is Rs.
            <b>146</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AutoDonate;
