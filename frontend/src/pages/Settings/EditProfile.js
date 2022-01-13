import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import uploadImage from '../../assets/img/logo/uploadImage.jpg';
import { BASE_URL, Local } from '../../API/APIEndpoints';
import {
  changePassword,
  getAllProfileAction,
  getAllProfiles,
  getProfile,
  updateProfile,
  updateProfileAction,
  updateProfileImgAction,
} from '../../Redux/Actions/SettingAction';
import axios from 'axios';

const EditProfile = props => {
  const [old, oldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confPass, setConPass] = useState('');
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState('true');
  const [show2, setShow2] = useState('true');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let profileData = useSelector(state => state.setting.getProfile);
  console.log(profileData, 'ajit');

  const validationSchema = yup.object({
    fName: yup
      .string()
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
    phoneNumber: yup
      .number('Please enter only a number')
      .required('Required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup
      .string()
      .email('Invalid Email Format')
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
  });

  const onProfileImageAdd = async imgData => {
    console.log('shivam');
    const data = new FormData();
    data.append('avatar', imgData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=profile_image',
      data,
    );
    console.log('data', result.data.url);
    // if (result && result.data && result.data.url) {
    //   setLogoImgUrl(result.data.url);
    // }
  };

  const updatePassword = async () => {
    // const Id = localStorage.getItem('userid');

    const data = {
      currentPassword: old,
      newPassword: newPass,
      confirmPassword: confPass,
    };
    dispatch(changePassword(data, props.history));

    // const url = BASE_URL + AUTH + CHANGE_PASSWORD;
    // const res = await new APIService().post(url, data);

    // if (res.status === 200) {
    //   cogoToast.success('password updated sucessfuly');
    //   history.push('/account');
    // } else {
    //   cogoToast.error(res);
    // }
  };

  const dispatch = useDispatch();
  // let history = useHistory();

  const onUpdateProfile = values => {
    console.log(values, 'priyank');
    const obj = {
      name: values.fName,
      email: values.emailId,
      mobile: values.phoneNumber,
    };
    dispatch(updateProfileAction(obj, props.history));
    // dispatch(updateProfileImgAction(img, props.history));
  };
  useEffect(() => {
    dispatch(getAllProfileAction());
  }, []);

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
            YOUR PROFILE
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
                marginTop: '18px',
              }}
            >
              <div className="image-upload">
                <label for="file-input">
                  {/* <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    id="file-input"
                   
                    style={{ display: 'none' }}
                  /> */}
                  <input
                    onChange={e => console.log('Chinmay', e.target)}
                    type="file"
                    placeholder="Browse"
                  ></input>
                  <img
                    className="AttachImage"
                    style={{ width: '100%', height: '250px' }}
                    src={
                      profileData.profileImage
                        ? Local + '/' + profileData.profileImage
                        : uploadImage
                    }
                  />
                </label>
              </div>
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
              <Formik
                initialValues={{
                  fName: profileData.name || '',
                  phoneNumber: profileData.mobile || '',
                  emailId: profileData.email || '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => onUpdateProfile(values)}
                enableReinitialize={true}
              >
                {({ errors, values, touched }) => (
                  <Form>
                    <div style={{ padding: '15px', paddingBottom: '20px' }}>
                      <label style={{ fontWeight: 'bold' }}>Name:</label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter First Name"
                        name="fName"
                        type="text"
                        autocomplete="off"
                        value={values.fName}
                      />
                      {errors.fName && touched.fName && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.fName}</span>
                        </div>
                      )}
                    </div>

                    <div className="row" style={{ marginBottom: '1.5em' }}>
                      <div className="col-6 ">
                        <div className="input-box">
                          <label style={{ fontWeight: 'bold' }}>
                            Mobile Number:
                          </label>
                          <Field
                            className="form-control"
                            placeholder="Please Enter Mobile Number"
                            name="phoneNumber"
                            type="text"
                            autocomplete="off"
                            maxLength={10}
                            value={values.phoneNumber}
                          />
                          {errors.phoneNumber && touched.phoneNumber && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>
                                {errors.phoneNumber}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-6 ">
                        <div className="input-box">
                          <label style={{ fontWeight: 'bold' }}>
                            Email Address:
                          </label>
                          <Field
                            className="form-control"
                            placeholder="Please Enter Email"
                            name="emailId"
                            type="email"
                            autocomplete="off"
                            value={values.emailId}
                          />
                          {errors.emailId && touched.emailId && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>
                                {errors.emailId}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{
                        marginLeft: '0',
                      }}
                    >
                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          style={{
                            marginRight: '10px',
                            marginBottom: '10px',
                          }}
                          onClick={handleShow}
                        >
                          Change Password
                        </button>
                        <button
                          class="btn btn-success"
                          style={{
                            marginRight: '10px',
                            marginBottom: '10px',
                          }}
                          type="submit"
                        >
                          Update
                        </button>
                        <Link to="/my_profile">
                          <button
                            class="btn btn-danger"
                            style={{
                              marginRight: '10px',
                              marginBottom: '10px',
                            }}
                          >
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title style={{ textAlign: 'center' }}>
                Change Password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="form-group required-field">
                  <label className="required"> Old Password</label>
                  <input
                    type={show ? 'password' : 'text'}
                    className="form-control"
                    style={{ textAlign: 'left' }}
                    onChange={e => {
                      oldPass(e.target.value);
                    }}
                    required
                  />
                  <i
                    className={`fa ${
                      show ? 'fa-eye-slash' : 'fa-eye'
                    } login-password-icon`}
                    onClick={() => setShow(!show)}
                    style={{
                      position: 'absolute',
                      left: '450px',
                      top: '60px',
                      height: '25px',
                      width: '25px',
                    }}
                  ></i>
                </div>
                <div className="form-group required-field">
                  <label className="required"> New Password</label>
                  <input
                    type={show1 ? 'password' : 'text'}
                    className="form-control"
                    onChange={e => {
                      setNewPass(e.target.value);
                    }}
                    required
                  />
                  <i
                    className={`fa ${
                      show1 ? 'fa-eye-slash' : 'fa-eye'
                    } login-password-icon`}
                    onClick={() => setShow1(!show1)}
                    style={{
                      position: 'absolute',
                      left: '450px',
                      top: '145px',
                      height: '25px',
                      width: '25px',
                    }}
                  ></i>
                </div>
                <div className="form-group required-field">
                  <label className="required"> Confirm Password</label>
                  <input
                    type={show2 ? 'password' : 'text'}
                    className="form-control"
                    onChange={e => {
                      setConPass(e.target.value);
                    }}
                  />
                  <i
                    className={`fa ${
                      show2 ? 'fa-eye-slash' : 'fa-eye'
                    } login-password-icon`}
                    onClick={() => setShow2(!show2)}
                    style={{
                      position: 'absolute',
                      left: '450px',
                      top: '230px',
                      height: '25px',
                      width: '25px',
                    }}
                  ></i>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={updatePassword}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
