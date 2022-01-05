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
      <div style={{ backgroundColor: '#31313' }}>
        <div className="card">
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              width: '100%',
              fontSize: 'x-large',
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
              width: '100%',
              padding: '30px',
              fontSize: 'xx-large',
            }}
          >
            DAILY FUNDS
          </p>
        </div>
        <div style={{ margin: '30px' }}>
          <div className="row">
            <div className="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: 'x-large',
                    width: '80%',
                    padding: '30px',
                  }}
                >
                  Total Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div className="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: 'x-large',
                    width: '80%',
                    padding: '30px',
                  }}
                >
                  Pending Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div className="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: 'x-large',
                    width: '80%',
                    padding: '30px',
                  }}
                >
                  Used Funds
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  169
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: '30px' }}>
          <div className="row">
            <div className="col">
              {' '}
              <div className="datCard">
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: 'x-large',
                    width: '80%',
                    padding: '30px',
                  }}
                >
                  Upcoming Donor Renewal
                </p>

                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 'x-large',
                    padding: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  169
                </p>
              </div>
            </div>
            <div className="col"> </div>
            <div className="col"> </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
