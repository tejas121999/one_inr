import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import {
  GetUserByIdAction,
  updateUserByIdAction,
} from '../../Redux/Actions/SettingAction';

const Edituser = props => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    phoneNumber: yup
      .string()
      .required('required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup.string().email('Invalid Email Format').required('Required'),
    // roleName: yup.string().required('Required'),
  });

  const onUpdate = async values => {
    const obj = {
      name: values.name,
      email: values.emailId,
      mobile: values.phoneNumber,
      role: values.role,
    };
    dispatch(updateUserByIdAction(props.data.id, obj, props.history));
    props.onHide();
  };

  return (
    <React.Fragment>
      <Modal
        size="lg"
        scrollable
        aria-labelledby="example-modal-sizes-title-lg"
        show={props.show}
      >
        <Modal.Body>
          <div style={{ backgroundColor: 'white', margin: '5px' }}>
            <Formik
              initialValues={{
                name: props.data.name,
                // role: props.data.role,
                phoneNumber: props.data.mobile,
                emailId: props.data.email,
              }}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={values => onUpdate(values)}
            >
              {({ errors, values, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Name</label>
                        <Field
                          className="form-control"
                          placeholder="Please Enter First Name"
                          name="name"
                          type="text"
                          autocomplete="off"
                          value={values.name}
                        />
                        {errors.name && touched.name && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>{errors.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Role</label>
                        <Field
                          type="search"
                          name="role"
                          placeholder="No Parent"
                          className="form-control"
                          value={values.role}
                          list="parentList"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Email Id</label>
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
                    <div className="col-6 ">
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                          Mobile Number
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
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={props.onHide}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Edituser;
