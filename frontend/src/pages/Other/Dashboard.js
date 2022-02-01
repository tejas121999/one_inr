import axios from 'axios';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'http://localhost:3001/getLang';
    const res = await axios.get(url);
    console.log('Chinmay', res);
  };
  return (
    <React.Fragment>
      <ToastContainer hideProgressBar />
      <br />
      <br />
      <br />
      <br />
      {/* <div style={{ backgroundColor: '#31313' }}> */}
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            fontWeight: '600',
            fontSize: '1.25rem',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          Dashboard
        </p>
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
          marginBottom: '5em',
          borderRadius: '1.5em',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            fontWeight: '600',
            // width: '100%',
            padding: '20px',
            fontSize: '1.25rem',
          }}
        >
          Daily Funds
        </p>
        <div style={{ margin: '0px 30px' }}>
          <div className="row">
            <div
              style={{
                marginBottom: '24rem',
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                border: '2px solid lightcyan',
                borderRadius: '1.5rem',
                width: '100%',
              }}
            >
              <div className="col" style={{ paddingRight: '0px' }}>
                {' '}
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '20px 20px 5px',
                    fontWeight: '700',
                    color: 'darkorange',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'large',
                    paddingBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  Total Funds
                </p>
              </div>
              <div className="col" style={{ padding: '0px 0px 5px' }}>
                {' '}
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '20px 20px 5px',
                    fontWeight: '700',
                    color: 'cornflowerblue',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'large',
                    paddingBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  Pending Funds
                </p>
              </div>
              <div className="col" style={{ padding: '0px 0px 5px' }}>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '20px 20px 5px',
                    fontWeight: '700',
                    color: 'darkorchid',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'large',
                    paddingBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  Used Funds
                </p>
              </div>
              <div className="col-4" style={{ paddingLeft: '0px' }}>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '20px 20px 5px',
                    fontWeight: '700',
                    color: 'chartreuse',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'large',
                    paddingBottom: '20px',
                    fontWeight: '600',
                  }}
                >
                  Upcoming Donor Renewal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Dashboard;
