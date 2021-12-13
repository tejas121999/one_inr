import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import './Donor.css';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  getAllParentDonorAction,
  addDonorAction,
} from '../../Redux/Actions/DonorActions';
import { connect } from 'react-redux';
import { constData } from './ViewAllDoner';

class Adddonor extends Component {
  constructor(props) {
    super(props);

    this.getParentList();
    this.state = {
      parentsList: [],
    };
  }

  getParentList = async () => {
    await this.props.getAllParentDonorAction();
  };

  validationSchema = yup.object({
    fName: yup.string().required('Required'),
    lName: yup.string().required('required'),
    phoneNumber: yup
      .string()
      .required('required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup.string().email('Invalid Email Format').required('Required'),
    password: yup.string().required('Required').min(5, 'Should be 5 character'),
  });
  onAddDoner = async values => {
    const { parentsList } = this.props;
    const parentId = parentsList.filter(data => data.name == values.parent);
    let id = parentId && parentId.length ? parentId[0].id : 0;
    values.parent = id;
    console.log('Aded', values);

    const obj = {
      name: values.fName + ' ' + values.lName,
      email: values.emailId,
      mobile: values.phoneNumber,
      password: values.password,
      parentId: id,
    };
    this.props.addDonorAction(obj, this.props.history);
  };
  render() {
    const { parentsList } = this.props;
    console.log('ADD', parentsList);

    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <div className="card">
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              width: '100%',
              marginLeft: '20px',
            }}
          >
            ADD DONOR
          </p>
        </div>
        <div style={{ backgroundColor: 'white', margin: '30px' }}>
          <Formik
            initialValues={{
              fName: '',
              lName: '',
              phoneNumber: '',
              emailId: '',
              password: '',
              isPriyank: 'false',
              parent: '',
            }}
            enableReinitialize={true}
            validationSchema={this.validationSchema}
            onSubmit={values => this.onAddDoner(values)}
          >
            {({ errors, values, touched }) => (
              <Form>
                <div className="row">
                  <div className="col-6 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Parent</label>
                      <Field
                        type="search"
                        name="parent"
                        placeholder="No Parent"
                        className="form-control"
                        value={values.parent}
                        list="parentList"
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
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>First Name</label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter First Name"
                        name="fName"
                        type="text"
                        autocomplete="off"
                        required
                        value={values.fName}
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
                    <div className="input-box">
                      <label style={{ fontWeight: 'bold' }}>Last Name</label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Last Name"
                        name="lName"
                        type="text"
                        required
                        autocomplete="off"
                        value={values.lName}
                      />
                      {errors.lName && touched.lName && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.lName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="input-box">
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
                        required
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
                    <div className="input-box">
                      <label style={{ fontWeight: 'bold' }}>Email Id</label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Email"
                        name="emailId"
                        type="email"
                        required
                        autocomplete="off"
                        value={values.emailId}
                      />
                      {errors.emailId && touched.emailId && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.emailId}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="input-box">
                      <label style={{ fontWeight: 'bold' }}>Password</label>
                      <Field
                        className="form-control"
                        placeholder="Create Password"
                        name="password"
                        type="password"
                        required
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
                </div>

                <div className="input-box">
                  <p style={{ fontWeight: 'bold' }}>
                    Or You Can Upload CSV Only
                  </p>
                  <input type="file" placeholder="Browse" accept=".csv"></input>
                </div>
                <div className="input-box">
                  <a href="">Download and check format of sample CSV </a>
                  <p style={{ fontWeight: 'bold' }}>
                    Note: Before uploading CSV, make sure that each and every
                    row in CSV must be unique.
                  </p>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </Form>
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
})(Adddonor);
