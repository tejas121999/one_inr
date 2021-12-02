import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import TextError from '../../error/TextError';

const EditPartner = () => {
  const initialValues = {
    name: '',
    company: '',
    phone: '',
    email: '',
    gst: '',
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log('form value', initialValues);
  };

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    company: yup.string().required('required'),
    phone: yup.string().required('required'),
    email: yup.string().email('Invalide Email Format').required('Required'),
    gst: yup.string().required('Required'),
  });

  return (
    <div className="container mb-3">
      <h4 className="mb-3">Edit Partner</h4>
      <br />
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <div className="w-100 mx-auto shadow p-5">
          <div className="row">
            <div className="col-12">
              <Form>
                <div className="form-row">
                  <div className="col form-group">
                    <label>First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="fname"
                      name="fname"
                    />
                    <ErrorMessage name="fname" component={TextError} />
                  </div>
                  <div className="col form-group">
                    <label>Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lname"
                    />
                    <ErrorMessage name="lname" component={TextError} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Mobile Number</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                    />
                    <ErrorMessage name="mobile" component={TextError} />
                  </div>
                  <div className="col form-group">
                    <label>Email Id</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>GST No</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="gst_no"
                      name="gst_no"
                    />
                    <ErrorMessage name="gst_no" component={TextError} />
                  </div>
                  <div className="col form-group">
                    <label for="exampleFormControlFile1">GST image</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="gst"
                      id="exampleFormControlFile1"
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Pan No</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="pan_no"
                      name="pan_no"
                    />
                    <ErrorMessage name="pan_no" component={TextError} />
                  </div>
                  <div className="col form-group">
                    <label for="exampleFormControlFile1">Pan image</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="pan"
                      id="exampleFormControlFile1"
                    />
                    <ErrorMessage name="pan" component={TextError} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Company Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                    />
                    <ErrorMessage name="company" component={TextError} />
                  </div>
                  <div className="col form-group">
                    <label>Address </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                    <ErrorMessage name="address" component={TextError} />
                  </div>
                </div>
                <button className="btn btn-primary" onSubmit={onSubmit}>
                  Edit Partner
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default EditPartner;
