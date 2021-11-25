import React from 'react';

const Tabel = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#31313' }}>
        <div className="card">
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              width: '100%',
            }}
          >
            DASHBOARD
          </p>
        </div>

        <div style={{ margin: '30px' }} className="card">
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              width: '100%',
              padding: '25px',
            }}
          >
            DAILY FUNDS
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '25px',
                  }}
                >
                  Total Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '20px',
                  }}
                >
                  Pending Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '20px',
                  }}
                >
                  Used Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '20px',
                  }}
                >
                  Priyank Donor
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '20px',
                  }}
                >
                  Non Priyank Donor
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div class="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',

                    marginTop: '20px',
                    width: '80%',
                    padding: '20px',
                  }}
                >
                  Upcoming Donor Renewal
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    padding: '20px',
                  }}
                >
                  169
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tabel;
