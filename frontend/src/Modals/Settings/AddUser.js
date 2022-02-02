import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { addUserListAction } from '../../Redux/Actions/SettingAction';

const Adduser = props => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    mobile: yup.string().required('required').min(10, 'Please enter 10 digits'),
    email: yup.string().email('Invalid Email Format').required('Required'),
    // roleName: yup.string().required('Required'),
  });

  const onAddUser = async values => {
    // console.log(values, 'shiv');

    dispatch(addUserListAction(values, props.history));
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
                name: '',
                roleId: 1,
                mobile: '',
                email: '',
                password: '',
              }}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={values => onAddUser(values)}
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
                        <select
                          type="text"
                          name="role"
                          placeholder="Role"
                          className="form-control"
                          value={values.role}
                          list="parentList"
                          autocomplete="off"
                        >
                          <option>select</option>
                          <option>admin</option>
                          <option>doner</option>
                          <option>ngo</option>
                          <option>account</option>
                        </select>
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
                          name="email"
                          type="email"
                          autocomplete="off"
                          value={values.email}
                        />
                        {errors.email && touched.email && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>{errors.email}</span>
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
                          name="mobile"
                          type="text"
                          autocomplete="off"
                          maxLength={10}
                          value={values.mobile}
                        />
                        {errors.mobile && touched.mobile && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>
                              {errors.mobile}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Password</label>
                        <Field
                          className="p-2   w-100 input-border psw-feild"
                          aria-invalid="false"
                          placeholder="Create Password"
                          name="password"
                          autocomplete="off"
                          value={values.password}
                        />

                        {errors.password && touched.password && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>
                              {errors.password}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='col-6'>
                      <div style={{ paddingBottom: '10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Permition</label>
                        <select
                          type="text"
                          name="permition"
                          placeholder="Permition"
                          className="form-control"
                          // value={values.permition}
                          list="parentList"
                          autocomplete="off"
                        >
                          <option>read-only</option>
                          <option>write-only</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ display: 'flex', justifyContent: 'space-evenly' , margin:'20px' }}
                  >
                    <button type="submit" className="btn btn-lg btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={props.onHide}
                      className="btn btn-danger btn-lg"
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

export default Adduser;
