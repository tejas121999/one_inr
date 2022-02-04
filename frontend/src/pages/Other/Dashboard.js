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
      {/* <div style={{ backgroundColor: '#31313' }}> */}
      {/* <div
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
            fontWeight: 'bold',
            fontSize: '25',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          Dashboard
        </p>
      </div> */}
      <div>
        <p
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '25',
            margin: '2em 50px',
            width: '100%',
          }}
        >
          Dashboard
        </p>
        <hr />
        <p
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            // width: '100%',
            padding: '20px 50px',
            fontSize: '25',
          }}
        >
          Daily Funds
        </p>
        <div style={{ margin: '0px 62px' }}>
          <div className="row">
            <div
              style={{
                marginBottom: '24rem',
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                border: '2px solid #D0EDFF',
                borderRadius: '1.5rem',
                width: '100%',
              }}
            >
              <div className="col" style={{ paddingRight: '0px' }}>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '45',
                    padding: '20px 20px 5px',
                    // fontWeight: '700',
                    color: 'darkorange',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '18',
                    paddingBottom: '20px',
                    paddingLeft: '1em',
                  }}
                >
                  TOTAL FUNDS
                </p>
              </div>
              <div className="col" style={{ padding: '0px 0px 5px' }}>
                {' '}
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '45',
                    padding: '20px 20px 5px',
                    // fontWeight: '700',
                    color: 'cornflowerblue',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '18',
                    paddingBottom: '20px',
                    paddingLeft: '1em',
                  }}
                >
                  PENDING FUNDS
                </p>
              </div>
              <div className="col" style={{ padding: '0px 0px 5px' }}>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '45',
                    padding: '20px 20px 5px',
                    // fontWeight: '700',
                    color: 'darkorchid',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '18',
                    paddingBottom: '20px',
                    paddingLeft: '1em',
                  }}
                >
                  USED FUNDS
                </p>
              </div>
              <div className="col-4" style={{ paddingLeft: '0px' }}>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '45',
                    padding: '20px 20px 5px',
                    // fontWeight: '700',
                    color: 'chartreuse',
                  }}
                >
                  169
                </p>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '18',
                    paddingBottom: '20px',
                    paddingLeft: '1em',
                  }}
                >
                  UPCOMING DONOR RENEWAL
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
