import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../error/TextError';
import * as yup from 'yup';
import { element } from 'prop-types';
import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createNGOAction } from '../../Redux/Actions/NgoActions';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';

const AddNgo = props => {
  const dispatch = useDispatch();
  const [logoImgUrl, setLogoImgUrl] = useState('');
  const [panCardImgUrl, setPanCardImgUrl] = useState('');
  const [certificateImgUrl, setCertificateImgUrl] = useState('');
  const [charityCertificateImgUrl, setCharityCertificateImgUrl] = useState('');
  const [deedImgUrl, setDeedImgUrl] = useState('');

  const [addContactValues, setAddContactValues] = useState([]);

  const [addBankDetailsValues, setAddBankDetailsValues] = useState([]);

  let handleChangeForAddBankDetails = (e, i) => {
    let newFormValues = [...addBankDetailsValues];
    newFormValues[i][e.target.name] = e.target.value;
    setAddBankDetailsValues(newFormValues);
  };

  let addBankDetailsFormFields = () => {
    setAddBankDetailsValues([
      ...addBankDetailsValues,
      { bankName: '', accountNumber: '', beneficiaryName: '', ifscCode: '' },
    ]);
  };

  let removeBankDetailsFormFields = i => {
    let newFormValues = [...addBankDetailsValues];
    newFormValues.splice(i, 1);
    setAddBankDetailsValues(newFormValues);
  };

  let handleChangeForAddContact = (i, e) => {
    let newFormValues = [...addContactValues];
    newFormValues[i][e.target.name] = e.target.value;
    setAddContactValues(newFormValues);
  };

  let addContactFormFields = () => {
    setAddContactValues([
      ...addContactValues,
      { name: '', designation: '', email: '', mobileNumber: '' },
    ]);
  };

  let removeContactFormFields = i => {
    let newFormValues = [...addContactValues];
    newFormValues.splice(i, 1);
    setAddContactValues(newFormValues);
  };

  const validationSchema = yup.object({
    ngoName: yup
      .string()
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
    address: yup
      .string()
      .required('Required'),
    emailId: yup
      .string()
      .email('Invalid Email Format')
      .required('Required')
      .max(50, 'Max limit is 50 characters'),
    registrationDate: yup.string().required('Required'),
    registrationNumber: yup
      .string()
      .required('Required')
      .min(12, 'please enter 12 digits'),
    mobileNumber: yup
      .string()
      .required('Required')
      .min(10, 'Please enter 10 digits'),
    landlineNumber: yup
      .string()
      .required('Required')
      .min(10, 'please enter 10 digits'),
    password: yup
      .string()
      .required('Required')
      .min(7, 'Should be 7 character'),
    panNumber: yup
      .string()
      .required('Required')
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid Format'),
  });

  //Submit





  const onlogoImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_logo',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setLogoImgUrl(result.data.pathtoUpload);
    }
  };

  const onPanCardImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_pancard',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setPanCardImgUrl(result.data.pathtoUpload);
    }
  };


  const onCertificateImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_certificate',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setCertificateImgUrl(result.data.pathtoUpload);
    }
  };


  const onCharityCertificateImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_certificate',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setCharityCertificateImgUrl(result.data.pathtoUpload);
    }
  };

  const onDeedImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_deed',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setDeedImgUrl(result.data.pathtoUpload);
    }
  };

  const onAddNgo = values => {

    const obj = {
      logo: logoImgUrl,
      name: values.ngoName,
      address: values.address,
      email: values.emailId,
      registrationDate: values.registrationDate,
      registrationNumber: values.registrationNumber,
      mobileNumber: values.mobileNumber,
      landline: values.landline,
      password: values.password,
      panNumber: values.panCard,
      panCardImage: panCardImgUrl,
      certificateImage: certificateImgUrl,
      charityCertificateImage: charityCertificateImgUrl,
      deedImage: deedImgUrl,
      bankDetails: addBankDetailsValues,
      contactDetails: addContactValues
    };
    dispatch(createNGOAction(obj, props.history));
  };

  // const AddNgo = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '15px',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginTop: '5px',
            }}
          >
            ADD NGO
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          margin: '30px',
          marginBottom: '5em',
        }}
      >
        <Formik
          initialValues={{
            ngoName: '',
            address: '',
            emailId: '',
            registrationDate: '',
            registrationNumber: '',
            mobileNumber: '',
            landlineNumber: '',
            password: '',
            panNumber: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => onAddNgo(values)}
          enableReinitialize={true}
        >
          {({ errors, values, touched }) => (
            <Form>
              <div className="row">
                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>Logo Name</label>
                    <DropzoneComponent onChangeImage={onlogoImageAdd}
                    />
                    <ErrorMessage name="logo_img" component={TextError} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>NGO Name</label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter NGO Name"
                      name="ngoName"
                      type="text"
                      autocomplete="off"
                      required
                      value={values.ngoName}
                    />
                    {errors.ngoName && touched.ngoName && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.ngoName}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Address</label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter ddress"
                      name="address"
                      type="text"
                      required
                      autocomplete="off"
                      value={values.address}
                    />
                    {errors.address && touched.address && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.address}</span>
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
                      type="emailId"
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
                    <label style={{ fontWeight: 'bold' }}>
                      RegistrationDate
                    </label>
                    <Field
                      className="form-control"
                      name="registrationDate"
                      type="date"
                      required
                      autocomplete="off"
                      value={values.registrationDate}
                    />
                    {errors.registrationDate && touched.registrationDate && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.registrationDate}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>
                      {' '}
                      Registration Number
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter Registration Number"
                      name="registrationNumber"
                      type="text"
                      autocomplete="off"
                      maxLength={12}
                      required
                      value={values.registrationNumber}
                    />
                    {errors.registrationNumber && touched.registrationNumber && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.registrationNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>
                      {' '}
                      Mobile Number{' '}
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter Mobile Number"
                      name="mobileNumber"
                      type="text"
                      autocomplete="off"
                      maxLength={10}
                      required
                      value={values.mobileNumber}
                    />
                    {errors.mobileNumber && touched.mobileNumber && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.mobileNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>
                      {' '}
                      Landline Number{' '}
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter landline Number"
                      name="landlineNumber"
                      type="text"
                      autocomplete="off"
                      maxLength={10}
                      required
                      value={values.landlineNumber}
                    />
                    {errors.landlineNumber && touched.landlineNumber && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.landlineNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Password</label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter password"
                      name="password"
                      type="password"
                      required
                      autocomplete="off"
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.password}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}> Pan Number </label>
                    <Field
                      className="form-control"
                      placeholder="Please Enter Pan Number"
                      name="panNumber"
                      type="text"
                      autocomplete="off"
                      maxLength={12}
                      required
                      value={values.panNumber}
                    />
                    {errors.panNumber && touched.panNumber && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.panNumber}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Pancard
                    </label>
                    <DropzoneComponent onChangeImage={onPanCardImageAdd} />
                    <ErrorMessage name="pancard_img" component={TextError} />
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Certificate
                    </label>
                    <DropzoneComponent onChangeImage={onCertificateImageAdd} />
                    <ErrorMessage
                      name="certificate_img"
                      component={TextError}
                    />
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Charity Registration Certificate
                    </label>
                    <DropzoneComponent onChangeImage={onCharityCertificateImageAdd} />
                    <ErrorMessage
                      name="charityCertificate_img"
                      component={TextError}
                    />
                  </div>
                </div>

                <div className="col-3 ">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold', height: '3em' }}>
                      Deed
                    </label>
                    <DropzoneComponent onChangeImage={onDeedImageAdd} />
                    <ErrorMessage name="deed_img" component={TextError} />
                  </div>
                </div>
              </div>

              <br />
              {addContactValues.map((element, index) => (
                <div className="row" style={{ marginLeft: '4px' }}>
                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Name</label>
                      <input
                        className="form-control"
                        placeholder="Please enter your Name"
                        name="name"
                        autocomplete="off"
                        required
                        value={addContactValues[index].name}
                        onChange={(e) => handleChangeForAddContact(index, e)}
                      />
                      {errors.name && touched.name && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>{errors.Name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Designation</label>
                      <Field
                        className="form-control"
                        placeholder="Please enter designation"
                        name="designation"
                        autocomplete="off"
                        required
                        value={addContactValues[index].designation}
                        onChange={(e) => handleChangeForAddContact(index, e)}
                      />
                      {errors.designation && touched.designation && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>
                            {errors.Designation}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Email</label>
                      <Field
                        className="form-control"
                        placeholder="Please enter email"
                        name="email"
                        autocomplete="off"
                        required
                        value={addContactValues[index].email}
                        onChange={(e) => handleChangeForAddContact(index, e)}
                      />
                      {errors.email && touched.email && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>{errors.Email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Mobile</label>
                      <Field
                        className="form-control"
                        placeholder="Please enter mobile"
                        name="mobile"
                        autocomplete="off"
                        required
                        value={addContactValues[index].mobile}
                        onChange={(e) => handleChangeForAddContact(index, e)}
                      />
                      {errors.mobile && touched.mobile && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>{errors.Mobile}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="delete"
                    className="btn btn-danger"
                    style={{
                      maxWidth: '1.5cm',
                      maxHeight: '1cm',
                      marginTop: '1.2cm',
                    }}
                    onClick={() => removeContactFormFields()}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}

              <div style={{ textAlign: 'center' }}>
                <button
                  type="add contact"
                  className="btn btn-success"
                  onClick={() => addContactFormFields()}
                >
                  Add Contact
                </button>
              </div>

              <br />
              {addBankDetailsValues.map((element, index) => (
                <div className="row" style={{ marginLeft: '4px' }}>
                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Bank Name</label>
                      <Field
                        className="form-control"
                        placeholder="Please enter your Bank Name"
                        name="bankName"
                        autocomplete="off"
                        required
                        value={addBankDetailsValues[index].bankName}
                        onChange={(e) => handleChangeForAddBankDetails(e, index)}

                      />
                      {errors.BankName && touched.BankName && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>
                            {errors.BankName}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Account Number
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please enter Account Number"
                        name="accountNumber"
                        autocomplete="off"
                        required
                        value={addBankDetailsValues[index].accountNumber}
                        onChange={(e) => handleChangeForAddBankDetails(e, index)}
                      />
                      {errors.accountnumber && touched.accountnumber && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>
                            {errors.AccountNumber}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Beneficiary Name
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please enter Beneficiary Name"
                        name="beneficiaryName"
                        autocomplete="off"
                        required
                        value={addBankDetailsValues[index].beneficiaryName}
                        onChange={(e) => handleChangeForAddBankDetails(e, index)}
                      />
                      {errors.BeneficiaryName && touched.BeneficiaryName && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>
                            {errors.BeneficiaryName}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-2.5 ">
                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                      <label style={{ fontWeight: 'bold' }}>IFSC Code</label>
                      <Field
                        className="form-control"
                        placeholder="Please enter IFSC Code"
                        name="IFSCCode"
                        autocomplete="off"
                        required
                        value={addBankDetailsValues[index].IFSCCode}
                        onChange={(e) => handleChangeForAddBankDetails(e, index)}
                      />
                      {errors.IFSCCode && touched.IFSCCode && (
                        <div className="text-left">
                          <span style={{ color: 'blue' }}>
                            {errors.IFSCCode}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    type="delete"
                    className="btn btn-danger"
                    style={{
                      maxWidth: '1.5cm',
                      maxHeight: '1cm',
                      marginTop: '1.2cm',
                    }}
                    onClick={() => removeBankDetailsFormFields()}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="add bank details"
                  className="btn btn-success"
                  onClick={() => addBankDetailsFormFields()}
                >
                  Add Bank Details
                </button>
              </div>
              <br />
              <div style={{ marginLeft: '2em', paddingBottom: '2em' }}>
                <button type="submit" className="btn btn-success
                 "

                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNgo;
