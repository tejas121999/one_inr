import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../../Redux/Actions/SettingAction';
import { Local } from '../../API/APIEndpoints';

const MyProfile = () => {
  const dispatch = useDispatch();
  let profileData = useSelector(state => state.setting.getProfile);
  console.log(profileData);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  // const initialData = {
  //   name: '',
  //   email: '',
  //   mobile: '',
  // };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '15px',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
            }}
          >
            MY PROFILE
          </p>
        </div>
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
        }}
      >
        <div className="row" style={{ flexWrap: 'nowrap', margin: '0' }}>
          <div
            className="col-md-3 col-xs-12"
            style={{
              marginTop: '20px',
            }}
          >
            <div
              style={{
                padding: '25px',
                marginBottom: '30px',
                marginLeft: '30px',
              }}
            >
              <img
                style={{ width: '250px', height: '200px' }}
                src={Local + '/' + profileData.profileImage}
              />
            </div>
          </div>
          <div
            className="col-md-9 col-xs-12"
            style={{
              marginTop: '20px',
            }}
          >
            <div
              style={{
                padding: '25px',
                marginBottom: '30px',
                // backgroundColor: 'red',
              }}
            >
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <th style={{ width: '10em' }}>Name</th>
                    <td style={{ width: '50em' }}>
                      {profileData && profileData.name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10em' }}>Mobile</th>
                    <td style={{ width: '50em' }}>
                      {profileData && profileData.email}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10em' }}>Email</th>
                    <td style={{ width: '50em' }}>
                      {profileData && profileData.mobile}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <Link to="/editProfile">
                <button class="btn btn-primary" style={{ width: '5em' }}>
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
