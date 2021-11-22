import React from 'react';
import { Field, Form, Formik } from 'formik';
const Editdonor = () => {
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
          EDIT DONOR
        </p>
      </div>
      <div
        style={{ backgroundColor: 'white', height: '100vh', margin: '30px' }}
      >
        <Formik>
          <Form>
            <div className="row">
              <div className="col-6 py-3">
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
              <div className="col-6 py-3">
                <div style={{ padding: '15px', paddingBottom: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>First Name</label>
                  <Field className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Last Name</label>
                  <Field className="form-control" />
                </div>
              </div>
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Mobile Number</label>
                  <Field className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Email Id</label>
                  <Field className="form-control" />
                </div>
              </div>
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Plan Amount</label>
                  <Field type="number" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Is Priyank</label>
                  <Field component="Select" className="form-control">
                    <option value="true">True</option>
                    <option value="false">Fasle</option>
                  </Field>
                </div>
              </div>
              <div className="col-6 py-3">
                <div className="input-box">
                  <label style={{ fontWeight: 'bold' }}>Plan Amount</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
            </div>
            <button style={{ margin: '20px' }} className="btn  btn-success ">
              Update
            </button>
          </Form>
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default Editdonor;
