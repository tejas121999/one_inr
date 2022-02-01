import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import './Donor.css';
import * as yup from 'yup';
import axios from '../../utils/interceptor';
import { useHistory } from 'react-router-dom';
import {
  getAllParentDonorAction,
  addDonorAction,
  addDonorBulkAction,
} from '../../Redux/Actions/DonorActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../API/APIEndpoints';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Adddonor extends Component {
  constructor(props) {
    super(props);

    this.getParentList();
    this.state = {
      parentsList: [],
      isCsv: false,
      csvUrl: '',
      isForm: false,
      csvId: '',
      isPasswordVisble: false,
    };
  }

  getParentList = async () => {
    await this.props.getAllParentDonorAction();
  };

  validationSchema = yup.object({
    fName: yup
      .string()
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
    lName: yup
      .string()
      .required('required')
      .max(50, 'Max limit is 50 characters'),
    phoneNumber: yup
      .string()
      .required('required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup
      .string()
      .email('Invalid Email Format')
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
    password: yup.string().required('Required').min(5, 'Should be 5 character'),
  });

  // Submit
  onAddDoner = async values => {
    const { parentsList } = this.props;
    const parentId = parentsList.filter(data => data.name == values.parent);
    let id = parentId && parentId.length ? parentId[0].id : 0;

    if (this.state.isCsv && (values.fName || values.lName || values.mobile)) {
      console.log(
        'panni',
        this.state.isCsv && (values.fName || values.lName || values.mobile),
      );
      toast.error("Can't Upload both CSV and Form", {
        position: 'top-center',
        autoClose: 2000,
      });
    } else {
      if (this.state.isCsv) {
        alert('File');
        const obj = {
          path: this.state.csvUrl,
          fileExtension: 'csv',
          fileId: this.state.csvId,
        };
        this.props.addDonorBulkAction(obj, this.props.history);
      } else {
        values.parent = id;
        const obj = {
          name: values.fName + ' ' + values.lName,
          email: values.emailId,
          mobile: values.phoneNumber,
          password: values.password,
          parentId: id,
        };
        this.props.addDonorAction(obj, this.props.history);
      }
    }
  };

  // END

  onCsvAdd = async fileData => {
    if (fileData == undefined) {
      this.setState({ isCsv: false });
    } else {
      this.setState({ isCsv: true });
    }

    console.log('data1Csv', fileData);
    const data = new FormData();
    data.append('avatar', fileData);
    const result = await axios.post(
      BASE_URL + 'csvUserUpload/csv-upload',
      data,
    );
    console.log('Chinmay', result.data.uploadFile);

    if (result && result.data.uploadFile) {
      this.setState({
        isCsv: true,
        csvUrl: result.data.uploadFile.url,
        csvId: result.data.uploadFile.id,
      });
    }
  };

  validateEmail = value => {
    let error;
    if (!this.state.isCsv) {
      if (!value) {
        error = 'Required';
      } else if (
        !new RegExp(/^([a-z0-9]+)@([a-z0-9]+)\.([a-z]{2,3})$/).test(value)
      ) {
        error = 'Invalid email id';
      } else if (value.length > 50) {
        error = 'Max limit is 50 characters';
      }
    }

    // }
    return error;
  };
  validateFname = value => {
    let error;
    if (!this.state.isCsv) {
      if (!value) {
        error = 'Required';
      } else if (value.length > 50) {
        error = 'Max limit is 50 characters';
      }
    }

    // }
    return error;
  };
  validateLname = value => {
    let error;
    if (!this.state.isCsv) {
      if (!value) {
        error = 'Required';
      } else if (value.length > 50) {
        error = 'Max limit is 50 characters';
      }
    }

    // }
    return error;
  };
  validateMobile = value => {
    let error;
    if (!this.state.isCsv) {
      if (!value) {
        error = 'Required';
      } else if (!new RegExp(/^([0-9]{10})$/).test(value)) {
        error = 'Invalid Format';
      } else if (value.length > 10) {
        error = 'Max limit is 10 Digits';
      }
    }

    // }
    return error;
  };
  validatePassword = value => {
    let error;
    if (!this.state.isCsv) {
      if (!value) {
        error = 'Required';
      } else if (value.length > 50) {
        error = 'Max limit is 50 characters';
      }
    }

    // }
    return error;
  };
  validateParent = value => {
    const { parentsList } = this.props;
    const data = parentsList.filter(item => item.name == value);
  };
  handleMouseDownPassword = () => {
    this.setState({ isPasswordVisble: !this.state.isPasswordVisble });
  };
  render() {
    const { parentsList } = this.props;
    console.log('ADD', this.state.isCsv);

    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <ToastContainer hideProgressBar />
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
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '20px',
              width: '100%',
              marginLeft: '20px',
            }}
          >
            Add Donor
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
          {' '}
          <Formik
            initialValues={{
              fName: '',
              lName: '',
              phoneNumber: '',
              emailId: '',
              password: '',
              parent: '',
            }}
            enableReinitialize={true}
            // validationSchema={this.validationSchema}
            onSubmit={values => {
              this.onAddDoner(values);
            }}
          >
            {({ errors, values, touched }) => (
              <div className="w-100 mx-auto" style={{ padding: '4rem 10rem' }}>
                <Form>
                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Parent</label>
                        <Field
                          type="search"
                          name="parent"
                          placeholder="No Parent"
                          className="form-control"
                          value={values.parent}
                          list="parentList"
                          autocomplete="off"
                          validate={this.validateParent}
                        />
                        <datalist id="parentList">
                          <option value="No Parent">No Parent</option>
                          {parentsList &&
                            parentsList.length > 0 &&
                            parentsList.map(data => {
                              return <option value={data.name} />;
                            })}
                        </datalist>
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>First Name</label>
                        <Field
                          className="form-control"
                          placeholder="Please Enter First Name"
                          name="fName"
                          type="text"
                          autocomplete="off"
                          value={values.fName}
                          validate={this.validateFname}
                        />
                        {errors.fName && touched.fName && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>{errors.fName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Last Name</label>
                        <Field
                          className="form-control"
                          placeholder="Please Enter Last Name"
                          name="lName"
                          type="text"
                          autocomplete="off"
                          value={values.lName}
                          validate={this.validateLname}
                        />
                        {errors.lName && touched.lName && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>{errors.lName}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div style={{ padding: '15px 0 10px' }}>
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
                          validate={this.validateMobile}
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
                  <div className="row">
                    <div className="col-6 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Email Id</label>
                        <Field
                          className="form-control"
                          placeholder="Please Enter Email"
                          name="emailId"
                          type="email"
                          autocomplete="off"
                          validate={this.validateEmail}
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
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>Password</label>
                        <Field
                          className="form-control"
                          aria-invalid="false"
                          placeholder="Create Password"
                          name="password"
                          type={
                            this.state.isPasswordVisble ? 'text' : 'password'
                          }
                          autocomplete="off"
                          validate={this.validatePassword}
                          value={values.password}
                        />
                        <i
                          className={`fa ${
                            this.state.isPasswordVisble
                              ? 'fa-eye-slash'
                              : 'fa-eye'
                          } `}
                          id="togglePassword"
                          style={{
                            float: 'right',
                            marginLeft: '-25px',
                            marginTop: '-27px',
                            marginRight: '10px',
                            position: 'relative',
                            zIndex: '2',
                          }}
                          onMouseDown={this.handleMouseDownPassword}
                        ></i>
                        {errors.password && touched.password && (
                          <div className="text-left">
                            <span style={{ color: 'red' }}>
                              {errors.password}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div> */}
                  <p
                    style={{
                      fontWeight: 'bold',
                      fontSize: '1.5em',
                      textAlign: 'center',
                      margin: '0.7em 0',
                    }}
                  >
                    Or
                  </p>
                  {/* <div className="col-6"> */}
                  {/* <div style={{ padding: '10px 0 10px' }}> */}
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    You Can Upload CSV Only
                  </p>
                  <center>
                    <input
                      onChange={e => this.onCsvAdd(e.target.files[0])}
                      type="file"
                      placeholder="Browse"
                      accept=".csv"
                      style={{ width: '14rem', marginBottom: '1.5em' }}
                    ></input>
                  </center>
                  {/* </div> */}
                  {/* </div> */}
                  {/* <div className="col-6"> */}
                  {/* <div style={{ padding: '15px 0 10px' }}> */}
                  <center>
                    <a href="">Download and check format of sample CSV </a>
                  </center>
                  <p
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: '1.5em',
                    }}
                  >
                    Note: Before uploading CSV, make sure that each and every
                    row in CSV must be unique.
                  </p>
                  {/* </div> */}
                  {/* </div> */}
                  {/* </div> */}
                  <div className="row">
                    <div className="col-6">
                      <div
                        style={{
                          padding: '15px 0 10px',
                          display: 'flex',
                          justifyContent: 'end',
                        }}
                      >
                        <button
                          className="btn btn-primary"
                          style={{ width: '6rem', borderRadius: '0.4em' }}
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        style={{
                          padding: '15px 0 10px',
                          display: 'flex',
                          justifyContent: 'start',
                        }}
                      >
                        <Link to="/view_all_doner">
                          <button
                            className="btn"
                            style={{
                              color: 'white',
                              backgroundColor: 'darkgray',
                              borderRadius: '0.4em',
                            }}
                          >
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  parentsList: state.donor.allParent,
});

export default connect(mapStateToProps, {
  getAllParentDonorAction,
  addDonorAction,
  addDonorBulkAction,
})(Adddonor);
