import React from 'react';

const AutoDonate = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 1.7em',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
              paddingTop: '3px',
            }}
          >
            Auto Donate
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-5">
          {' '}
          <div
            style={{
              margin: '20px',
              backgroundColor: 'white',
              marginBottom: '2px',
              borderRadius: '1.5em',
              textAlign: 'center',
            }}
          >
            <div className="autoDonate">
              <div style={{ backgroundColor: 'white', padding: '25px' }}>
                <div>
                  <p
                    style={{
                      fontsize: '20px',
                      fontWeight: 'bold',
                      margin: '10px',
                    }}
                  >
                    Donate fund for Feeding Pigeons Grains
                  </p>
                </div>

                <div>
                  <label style={{ float: 'left' }}>Add Fund:</label>
                  <input
                    className="form-control"
                    name="fund_amount"
                    type="text"
                  />
                  <label style={{ float: 'left', marginTop: '20px' }}>
                    Fund Date :{' '}
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
      <div className="col-3"></div>
    </div>
  );
};

export default AutoDonate;
