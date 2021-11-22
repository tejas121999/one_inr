import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import './Donor.css';
class Adddonor extends Component {
  render() {
    return (
      <React.Fragment>
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
          <Formik>
            <Form>
              <div className="row">
                <div className="col-6 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>Parent</label>
                    <input
                      type="text"
                      placeholder="No Parent"
                      className="form-control"
                      list="parentList"
                    ></input>
                    <datalist id="parentList">
                      <option value="No Parent">No Parent</option>
                      <option value="Chinmay" />
                      <option value="Abhay" />
                      <option value="Tejas" />
                      <option value="Rahul" />
                    </datalist>
                  </div>
                </div>
                <div className="col-6 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>First Name</label>
                    <Field className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Last Name</label>
                    <Field className="form-control" />
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Mobile Number</label>
                    <Field className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Email Id</label>
                    <Field className="form-control" />
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Password</label>
                    <Field className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Is Priyank</label>
                    <Field component="Select" className="form-control">
                      <option value="true">True</option>
                      <option value="false">Fasle</option>
                    </Field>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
          <div className="input-box">
            <p style={{ fontWeight: 'bold' }}>Or You Can Upload CSV Only</p>
            <input type="file" placeholder="Browse" accept=".csv"></input>
          </div>
          <div className="input-box">
            <a href="">Download and check format of sample CSV </a>
            <p style={{ fontWeight: 'bold' }}>
              Note: Before uploading CSV, make sure that each and every row in
              CSV must be unique.
            </p>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Adddonor;
