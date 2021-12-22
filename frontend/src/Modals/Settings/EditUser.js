import { Field, Form, Formik } from 'formik';
import { Divider } from 'material-ui';
import React from 'react';
import { Modal } from 'react-bootstrap';

const Edituser = props => {
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
                password: '',
                parent: '',
              }}
              enableReinitialize={true}
              // validationSchema={this.validationSchema}
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
