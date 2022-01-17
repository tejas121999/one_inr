import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Divider } from 'material-ui';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../API/APIEndpoints';
import { Modal } from 'react-bootstrap';
import {
  GetUserByIdAction,
  updateUserByIdAction,
} from '../../Redux/Actions/SettingAction';

const Edituser = props => {
  console.log(props, 'sms');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetUserByIdAction());
  // }, []);

  // let parentList = useSelector(state => state.setting.getUserList);

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    phoneNumber: yup
      .string()
      .required('required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup.string().email('Invalid Email Format').required('Required'),
    roleName: yup.string().required('Required'),
  });

  const onUpdate = async values => {
    // const url = BASE_URL + `user/${userId}`;
    // const parentId = parentList.filter(data => data.name == values.parent);

    // let id = parentId && parentId.length ? parentId[0].id : 0;

    const obj = {
      name: values.name,
      email: values.emailId,
      mobile: values.phoneNumber,
      role: values.role,
    };
    // dispatch(updateUserByIdAction(parentId, obj, props.history));
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
                name: '',
                role: '',
                phoneNumber: '',
                emailId: '',
                // password: '',
                // parent: '',
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
                    <button className="btn btn-success">Submit</button>
                    <button onClick={props.onHide} className="btn btn-danger">
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
