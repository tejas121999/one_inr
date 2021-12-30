import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import * as yup from 'yup';
import uploadImage from '../../assets/img/logo/uploadImage.jpg';

const EditProfile = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  //   const onUpdateProfile = values => {
  //     const obj = {
  //       fname: values.fName + ' ' + values.lName,
  //       emailId: values.email,
  //       phoneNumber: values.mobile,
  //     };
  //     dispatch(updateProfile(props.location.state.id, obj, props.history));
  //   };
  //   useEffect(() => {
  //     dispatch(getProfile(props.location.state.id));
  //   }, []);

  // let vendorData = useSelector(state => state.master);

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
                marginBottom: '30px',
              }}
            >
              <div className="image-upload">
                <label for="file-input">
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    id="file-input"
                    style={{ display: 'none' }}
                  />
                  <img
                    className="AttachImage"
                    style={{ width: '100%' }}
                    src={uploadImage}
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
                  fName:
                    // vendorData.vendorData.name
                    //   .split(' ')
                    //   .slice(0, -1)
                    //   .toString() ||
                    '',
                  phoneNumber:
                    //   vendorData.vendorData.phone ||
                    '',
                  emailId:
                    //   vendorData.vendorData.email ||
                    '',
                }}
                validationSchema={validationSchema}
                // onSubmit={values => onUpdateVendor(values)}
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
                        <Link>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                              marginRight: '10px',
                              marginBottom: '10px',
                            }}
                            onClick={handleShow}
                          >
                            Change Password
                          </button>
                        </Link>
                        <Link to="/editProfile">
                          <button
                            class="btn btn-success"
                            style={{
                              marginRight: '10px',
                              marginBottom: '10px',
                            }}
                          >
                            Update
                          </button>
                        </Link>
                        <Link to="/my_Profile">
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
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
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
