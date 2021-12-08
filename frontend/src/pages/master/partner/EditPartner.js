import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import TextError from '../../error/TextError';
import '../vendor/vendor.css';
import { CreatePartnerAction } from '../../../Redux/Actions/MasterActions';
import { useDispatch } from 'react-redux';

const EditPartner = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    fName: yup.string().required('Required'),
    lName: yup.string().required('Required'),
    company: yup.string().required('required'),
    email: yup.string().email('Invalide Email Format').required('Required'),
    mobile: yup.string().required('required').min(10, 'Please enter 10 digits'),
    gst: yup
      .string()
      .matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
        'Invalid Format',
      ),
    pan: yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid Format'),
  });
  const onAddPartner = values => {
    dispatch(CreatePartnerAction(values));
  };
  return (
    <>
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
          ADD PARTNER
        </p>
      </div>
      <div style={{ backgroundColor: 'white', margin: '30px' }}>
        <Formik
          initialValues={{
            fName: '',
            lName: '',
            mobile: '',
            email: '',
            gst: '',
            pan: '',
            company: '',
            address: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => onAddPartner(values)}
          enableReinitialize={true}
        >
          {({ values, errors, touched }) => (
            <div className="w-100 mx-auto shadow p-5">
              <div className="row">
                <div className="col-12">
                  <Form>
                    <div className="row">
                      <div className="col-6 ">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            First Name
                          </label>
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
                              <span style={{ color: 'red' }}>
                                {errors.fName}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            Last Name
                          </label>
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
                              <span style={{ color: 'red' }}>
                                {errors.lName}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
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
                            required
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
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>Email Id</label>
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Please Enter Email Id"
                            id="email"
                            name="email"
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>
                                {errors.email}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>GST No</label>
                          <Field
                            type="text"
                            placeholder="Please Enter GST No"
                            className="form-control"
                            id="gst"
                            name="gst"
                            value={values.gst}
                          />
                          {errors.gst && touched.gst && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>{errors.gst}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            GST image
                          </label>
                          <input
                            type="file"
                            className="form-control-file"
                            name="gst_img"
                            accept=".png,.jpg,"
                          />
                          <ErrorMessage name="name" component={TextError} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>Pan No</label>
                          <Field
                            type="text"
                            placeholder="Please Enter PAN No"
                            className="form-control"
                            id="pan"
                            name="pan"
                            value={values.pan}
                          />
                          {errors.pan && touched.pan && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>{errors.pan}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            Pan image
                          </label>
                          <input
                            type="file"
                            className="form-control-file"
                            name="pan_img"
                            accept=".png,.jpg,"
                          />
                          <ErrorMessage name="pan" component={TextError} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            Company Name
                          </label>
                          <Field
                            type="text"
                            placeholder="Please Enter Company Name"
                            className="form-control"
                            id="company"
                            name="company"
                            value={values.company}
                          />
                          {errors.company && touched.company && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>
                                {errors.company}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col form-group">
                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                          <label style={{ fontWeight: 'bold' }}>Address </label>
                          <Field
                            as="textarea"
                            className="form-control"
                            placeholder="Please Enter Address"
                            id="address"
                            name="address"
                            value={values.address}
                            rows="1"
                          />
                          {errors.address && touched.address && (
                            <div className="text-left">
                              <span style={{ color: 'red' }}>
                                {errors.address}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button className="btn btn-success" type="submit">
                        Add Partner
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditPartner;
