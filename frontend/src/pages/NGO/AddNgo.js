import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../error/TextError';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';
import { FaMonument, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createNGOAction } from '../../Redux/Actions/NgoActions';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const AddNgo = props => {
  const dispatch = useDispatch();
  const [logoImgUrl, setLogoImgUrl] = useState('');
  const [panCardImgUrl, setPanCardImgUrl] = useState('');
  const [certificateImgUrl, setCertificateImgUrl] = useState('');
  const [charityCertificateImgUrl, setCharityCertificateImgUrl] = useState('');
  const [deedImgUrl, setDeedImgUrl] = useState('');
  const [show, setShow] = useState('true');
  const [addContactValues, setAddContactValues] = useState([]);

  const [addBankDetailsValues, setAddBankDetailsValues] = useState([]);
  const [date, setDate] = useState(new Date());

  let handleChangeForAddBankDetails = (e, i) => {
    let newFormValues = [...addBankDetailsValues];
    newFormValues[i][e.target.name] = e.target.value;
    setAddBankDetailsValues(newFormValues);
  };

  let addBankDetailsFormFields = () => {
    setAddBankDetailsValues([
      ...addBankDetailsValues,
      { bankName: '', accountNumber: '', beneficiaryName: '', ifsc: '' },
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
      .required('Required Field')
      .max(50, 'Max limit is 50 characters'),
    address: yup.string().required('Required Field'),
    emailId: yup
      .string()
      .email('Invalid Email Format')
      .required('Required Field')
      .max(50, 'Max limit is 50 characters'),
    // registrationDate: yup.string().required('Required'),
    registrationNumber: yup
      .string()
      .required('Required Field')
      .min(12, 'please enter 12 digits'),
    mobileNumber: yup
      .string()
      .required('Required Field')
      .min(10, 'Please enter 10 digits'),
    landline: yup
      .string()
      .required('Required Field')
      .min(10, 'please enter 10 digits'),
    password: yup
      .string()
      .required('Required Field')
      .min(7, 'Should be 7 character'),
    panNumber: yup
      .string()
      .required('Required Field')
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
    let newDate = moment(date).format('LL');

    const obj = {
      logo: logoImgUrl,
      name: values.ngoName,
      address: values.address,
      email: values.emailId,
      registrationDate: newDate,
      registrationNumber: values.registrationNumber,
      mobile: values.mobileNumber,
      landline: values.landline,
      password: values.password,
      panNumber: values.panNumber,
      panCard: panCardImgUrl,
      certificate: certificateImgUrl,
      charityRegistrationCertificate: charityCertificateImgUrl,
      deed: deedImgUrl,
      bankDetails: addBankDetailsValues,
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
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        {' '}
        <p
          style={{
            textAlign: 'left',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '20px',
            width: '100%',
            marginLeft: '1em',
          }}
        >
          Add NGO
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
        <Formik
          initialValues={{
            ngoName: '',
            address: '',
            emailId: '',
            registrationDate: '',
            registrationNumber: '',
            mobileNumber: '',
            landline: '',
            password: '',
            panNumber: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => onAddNgo(values)}
          enableReinitialize={true}
        >
          {({ errors, values, touched }) => (
            <Form>
              <div className="w-100 mx-auto" style={{ padding: '4rem 10rem' }}>
                <div className="row" style={{ justifyContent: 'center' }}>
                  <div className="col-3">
                    <div style={{ padding: '15px 15px -2px' }}>
                      <label style={{ fontWeight: 'bold' }}>Logo Name</label>
                      <DropzoneComponent onChangeImage={onlogoImageAdd} />
                      <ErrorMessage name="logo_img" component={TextError} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        NGO Name<label style={{ color: 'red' }}>*</label>
                      </label>
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Address<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Address"
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Email Id<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Email"
                        name="emailId"
                        type="emailId"
                        required
                        autocomplete="on"
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Registration Date
                        <label style={{ color: 'red' }}>*</label>
                      </label>
                      <DatePicker
                        name="registration Date"
                        //  value={}
                        required
                        selected={date}
                        onChange={date => setDate(date)}
                        dateFormat="MMMM d, yyyy"
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Registration Number
                        <label style={{ color: 'red' }}>*</label>
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Mobile Number<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Mobile Number"
                        name="mobileNumber"
                        type="number"
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Landline Number<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Landline Number"
                        name="landline"
                        type="number"
                        autocomplete="off"
                        maxLength={10}
                        required
                        value={values.landline}
                      />
                      {errors.landline && touched.landline && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>
                            {errors.landline}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Password<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Password"
                        name="password"
                        type={show ? 'password' : 'text'}
                        required
                        autocomplete="off"
                        value={values.password}
                      />
                      <i
                        className={`fa ${
                          show ? 'fa-eye-slash' : 'fa-eye'
                        } login-password-icon`}
                        onClick={() => setShow(!show)}
                        style={{
                          float: 'right',
                          marginLeft: '-25px',
                          marginTop: '-27px',
                          marginRight: '10px',
                          position: 'relative',
                          zIndex: '2',
                        }}
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
                <div className="row">
                  <div className="col-12 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        {' '}
                        Pan Number<label style={{ color: 'red' }}>*</label>
                      </label>
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
                          <span style={{ color: 'red' }}>
                            {errors.panNumber}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold', height: '3em' }}>
                        Pancard
                      </label>
                      <DropzoneComponent onChangeImage={onPanCardImageAdd} />
                      <ErrorMessage name="pancard_img" component={TextError} />
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold', height: '3em' }}>
                        Certificate
                      </label>
                      <DropzoneComponent
                        onChangeImage={onCertificateImageAdd}
                      />
                      <ErrorMessage
                        name="certificate_img"
                        component={TextError}
                      />
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold', height: '3em' }}>
                        Charity Registration Certificate
                      </label>
                      <DropzoneComponent
                        onChangeImage={onCharityCertificateImageAdd}
                      />
                      <ErrorMessage
                        name="charityCertificate_img"
                        component={TextError}
                      />
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div style={{ padding: '15px 0 10px' }}>
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
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                          Name<label style={{ color: 'red' }}>*</label>
                        </label>
                        <input
                          className="form-control"
                          placeholder="Please enter your Name"
                          name="name"
                          autocomplete="off"
                          required
                          value={addContactValues[index].name}
                          onChange={e => handleChangeForAddContact(index, e)}
                        />
                        {errors.name && touched.name && (
                          <div className="text-left">
                            <span style={{ color: 'blue' }}>{errors.Name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-2.5 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                          Designation<label style={{ color: 'red' }}>*</label>
                        </label>
                        <Field
                          className="form-control"
                          placeholder="Please enter designation"
                          name="designation"
                          autocomplete="off"
                          required
                          value={addContactValues[index].designation}
                          onChange={e => handleChangeForAddContact(index, e)}
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
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                          Email<label style={{ color: 'red' }}>*</label>
                        </label>
                        <Field
                          className="form-control"
                          placeholder="Please enter email"
                          name="email"
                          autocomplete="off"
                          required
                          value={addContactValues[index].email}
                          onChange={e => handleChangeForAddContact(index, e)}
                        />
                        {errors.email && touched.email && (
                          <div className="text-left">
                            <span style={{ color: 'blue' }}>
                              {errors.Email}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-2.5 ">
                      <div style={{ padding: '15px 0 10px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                          Mobile<label style={{ color: 'red' }}>*</label>
                        </label>
                        <Field
                          className="form-control"
                          placeholder="Please enter mobile"
                          name="mobile"
                          autocomplete="off"
                          required
                          value={addContactValues[index].mobile}
                          onChange={e => handleChangeForAddContact(index, e)}
                        />
                        {errors.mobile && touched.mobile && (
                          <div className="text-left">
                            <span style={{ color: 'blue' }}>
                              {errors.Mobile}
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
                      onClick={() => removeContactFormFields()}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}

                {/*   <div style={{ textAlign: 'center' }}>
                <button
                  type="add contact"
                  className="btn btn-success"
                  onClick={() => addContactFormFields()}
                >
                  Add Contact
                </button>
                  </div>            */}

                <br />
                {addBankDetailsValues.map((element, index) => (
                  <>
                    <div className="row">
                      <div className="col-6 ">
                        <div style={{ padding: '15px 0 10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            Bank Name
                          </label>
                          <Field
                            className="form-control"
                            placeholder="Please enter your Bank Name"
                            name="bankName"
                            autocomplete="off"
                            required
                            value={addBankDetailsValues[index].bankName}
                            onChange={e =>
                              handleChangeForAddBankDetails(e, index)
                            }
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

                      <div className="col-6 ">
                        <div style={{ padding: '15px 0 10px' }}>
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
                            onChange={e =>
                              handleChangeForAddBankDetails(e, index)
                            }
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

                      <div className="col-6 ">
                        <div style={{ padding: '15px 0 10px' }}>
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
                            onChange={e =>
                              handleChangeForAddBankDetails(e, index)
                            }
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

                      <div className="col-6">
                        <div style={{ padding: '15px 0 10px' }}>
                          <label style={{ fontWeight: 'bold' }}>
                            IFSC Code
                          </label>
                          <Field
                            className="form-control"
                            placeholder="Please enter IFSC Code"
                            name="ifsc"
                            autocomplete="off"
                            required
                            value={addBankDetailsValues[index].ifsc}
                            onChange={e =>
                              handleChangeForAddBankDetails(e, index)
                            }
                          />
                          {errors.ifsc && touched.ifsc && (
                            <div className="text-left">
                              <span style={{ color: 'blue' }}>
                                {errors.ifsc}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <button
                        type="delete"
                        className="btn btn-danger"
                        style={{
                          maxHeight: '1cm',
                          marginBottom: '2em',
                          borderRadius: '0.4em',
                        }}
                        onClick={() => removeBankDetailsFormFields()}
                      >
                        {/* <FaTimes /> */}
                        Remove
                      </button>
                    </div>
                  </>
                ))}
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="add bank details"
                    className="btn btn-primary"
                    onClick={() => addBankDetailsFormFields()}
                    style={{ borderRadius: '0.4em', width: '13rem' }}
                  >
                    Add Bank Details
                  </button>
                </div>
                <br />
                {/* <div style={{ marginLeft: '2em', paddingBottom: '2em' }}>
                  <button
                    type="submit"
                    className="btn btn-success
                 "
                  >
                    Submit
                  </button>
                </div> */}
                <div className="row">
                  <div className="col-6" style={{ paddingRight: '8px' }}>
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      <button
                        style={{ width: '6rem', borderRadius: '0.4em' }}
                        className="btn btn-primary"
                        type="submit"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="col-6" style={{ paddingLeft: '20px' }}>
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'start',
                      }}
                    >
                      <Link to="/view_all_ngo">
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNgo;
