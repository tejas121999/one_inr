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

  const [bankName, setBankName] = useState([]);
  const [id, setCount] = useState(0);

  const [addBankDetailsValues, setAddBankDetailsValues] = useState([]);
  const [date, setDate] = useState(new Date());
  console.log('panCardImgUrl', panCardImgUrl);

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

  const newvalidationSchema = yup.object({
    bankName: yup
      .string()
      .required('Required Field')
      .max(50, 'Max limit is 50 characters'),
    accountNumber: yup
      .string()
      .required('Required Field')
      .min(12, 'please enter 12 digits'),
    beneficiaryName: yup
      .string()
      .required('Required Field')
      .max(50, 'Max limit is 50 characters'),
    ifscCode: yup
      .string()
      .required('Required Field')
      .matches(/^[A-Z|a-z]{4}[0][0-9]{6}$/, 'Invalid Format'),
  });

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
    // registrationDate: yup.string().required('Required Field'),
    registrationNumber: yup
      .string()
      .required('Required Field')
      .min(12, 'please enter 12 digits'),
    mobile: yup
      .number()
      .required('A mobile number is required')
      .typeError("That doesn't look like a mobile number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, 'Please enter 10 digits')
      .max(10, 'Please enter 10 digits'),

    landline: yup
      .number()
      .typeError("That doesn't look like a landline number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, 'Please enter 10 digits')
      .max(10, 'Please enter 10 digits'),
    password: yup
      .string()
      .required('Required Field')
      .min(8, 'Password is too short - should be 8 chars minimum'),

    panNumber: yup
      .string()
      .required('Required Field')
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid Format'),
  });

  const deleteBankDetail = event => {
    const id = parseInt(event.target.id);
    var arr = [];
    addBankDetailsValues.filter(temp => {
      if (temp.id !== id) {
        arr.push(temp);
      }
    });
    setAddBankDetailsValues(arr);
  };

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
      BASE_URL + 'fileupload?reason=ngo_charity_registration_certificate',
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
    console.log('abc', values);
    let newDate = moment(date).format('LL');

    const obj = {
      logo: logoImgUrl,
      name: values.ngoName,
      address: values.address,
      email: values.emailId,
      registrationDate: values.registrationDate,
      registrationNumber: values.registrationNumber,
      mobile: values.mobile,
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
            mobile: '',
            landline: '',
            password: '',
            panNumber: '',
            bankName: '',
            accountNumber: '',
            beneficiaryName: '',
            ifscCode: '',
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
                      <label style={{ fontWeight: 'bold' }}>
                        Logo<label style={{ color: 'red' }}>*</label>
                      </label>
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
                      <Field
                        className="form-control"
                        type="date"
                        id="date"
                        name="registrationDate"
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
                        Mobile <label style={{ color: 'red' }}>*</label>
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
                          <span style={{ color: 'red' }}>{errors.mobile}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 ">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Landline</label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Landline Number"
                        name="landline"
                        type="text"
                        autocomplete="off"
                        maxLength={10}
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

                <div className="row" style={{ margin: '1.5rem 0 0.5em' }}>
                  <div
                    className="col-sm-3 col-xs-3"
                    style={{ paddingLeft: '0' }}
                  >
                    <label style={{ fontWeight: 'bold', marginBottom: '0' }}>
                      Pancard<label style={{ color: 'red' }}>*</label>
                    </label>
                  </div>

                  <div
                    className="col-sm-3 col-xs-3 "
                    style={{ paddingLeft: '0' }}
                  >
                    <label style={{ fontWeight: 'bold', marginBottom: '0' }}>
                      Certificate<label style={{ color: 'red' }}>*</label>
                    </label>
                  </div>

                  <div
                    className="col-sm-3 col-xs-3 "
                    style={{ paddingLeft: '0' }}
                  >
                    <label style={{ fontWeight: 'bold', marginBottom: '0' }}>
                      Charity Registration Certificate
                      <label style={{ color: 'red' }}>*</label>
                    </label>
                  </div>

                  <div className="col-sm-3 col-xs-3 " style={{ padding: '0' }}>
                    <label style={{ fontWeight: 'bold', marginBottom: '0' }}>
                      Deed<label style={{ color: 'red' }}>*</label>
                    </label>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ margin: '0rem 0 1.5rem', flex: 'auto' }}
                >
                  <div
                    className="col-sm-3 col-xs-3 "
                    style={{ paddingLeft: '0' }}
                  >
                    <DropzoneComponent onChangeImage={onPanCardImageAdd} />
                    <ErrorMessage name="pancard_img" component={TextError} />
                  </div>

                  <div
                    className="col-sm-3 col-xs-3 "
                    style={{ paddingLeft: '0' }}
                  >
                    <DropzoneComponent onChangeImage={onCertificateImageAdd} />
                    <ErrorMessage
                      name="certificate_img"
                      component={TextError}
                    />
                  </div>

                  <div
                    className="col-sm-3 col-xs-3 "
                    style={{ paddingLeft: '0' }}
                  >
                    <DropzoneComponent
                      onChangeImage={onCharityCertificateImageAdd}
                    />
                    <ErrorMessage
                      name="charityCertificate_img"
                      component={TextError}
                    />
                  </div>

                  <div className="col-sm-3 col-xs-3 " style={{ padding: '0' }}>
                    <DropzoneComponent onChangeImage={onDeedImageAdd} />
                    <ErrorMessage name="deed_img" component={TextError} />
                  </div>
                </div>

                <br />

                {/*<div style={{ textAlign: 'center' }}>
                  <button
                    type="add bank details"
                    className="btn btn-primary"
                    onClick={() => addBankDetailsFormFields()}
                    style={{ borderRadius: '0.4em', width: '13rem' }}
                  >
                    Add Bank Details
                  </button>
                      </div> */}
                <br />
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

        {addBankDetailsValues.map(element => (
          <div key={element.id}>
            <p>Bank name : {element.bankName}</p>
            <p>Acc no : {element.accountNumber}</p>
            <p>Bene name : {element.beneficiaryName}</p>
            <p>IFSC name : {element.ifscCode}</p>
            <button
              id={element.id}
              onClick={element => deleteBankDetail(element)}
            >
              Delete
            </button>
          </div>
        ))}

        <Formik
          initialValues={{
            bankName: '',
            accountNumber: '',
            beneficiaryName: '',
            ifscCode: '',
          }}
          validationSchema={newvalidationSchema}
          onSubmit={values => {
            console.log(values, obj);
            var obj = {
              id,
              bankName: values.bankName,
              accountNumber: values.accountNumber,
              beneficiaryName: values.beneficiaryName,
              ifscCode: values.ifscCode,
            };

            setCount(id + 1);
            setAddBankDetailsValues([...addBankDetailsValues, obj]);
          }}
        >
          {({ errors, values, touched }) => (
            <Form>
              {JSON.stringify(errors)}
              <div className="row">
                <div className="col-6 ">
                  <div style={{ padding: '15px 0 10px' }}>
                    <label style={{ fontWeight: 'bold' }}>
                      Bank Name<label style={{ color: 'red' }}>*</label>
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please enter your Bank Name"
                      name="bankName"
                      autocomplete="off"
                      required
                      // value={addBankDetailsValues[index].bankName}
                      value={values.bankName}
                      // onChange={e =>
                      //   // handleChangeForAddBankDetails(e, index)
                      //   setBankName(e.target.value)
                      // }
                    />
                  </div>
                </div>

                <div className="col-6 ">
                  <div style={{ padding: '15px 0 10px' }}>
                    <label style={{ fontWeight: 'bold' }}>
                      Account Number
                      <label style={{ color: 'red' }}>*</label>
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please enter Account Number"
                      name="accountNumber"
                      autocomplete="off"
                      required
                      // value={addBankDetailsValues[index].accountNumber}
                      value={values.accountNumber}
                      // onChange={e =>
                      //   // handleChangeForAddBankDetails(e, index)

                      //   setAccNo(e.target.value)
                      // }
                    />
                  </div>
                </div>

                <div className="col-6 ">
                  <div style={{ padding: '15px 0 10px' }}>
                    <label style={{ fontWeight: 'bold' }}>
                      Beneficiary Name
                      <label style={{ color: 'red' }}>*</label>
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please enter Beneficiary Name"
                      name="beneficiaryName"
                      autocomplete="off"
                      required
                      // value={addBankDetailsValues[index].beneficiaryName}
                      value={values.beneficiaryName}
                      // onChange={e =>
                      //   // handleChangeForAddBankDetails(e, index)

                      //   setBeneNAme(e.target.value)
                      // }
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div style={{ padding: '15px 0 10px' }}>
                    <label style={{ fontWeight: 'bold' }}>
                      IFSC Code<label style={{ color: 'red' }}>*</label>
                    </label>
                    <Field
                      className="form-control"
                      placeholder="Please enter IFSC Code"
                      name="ifscCode"
                      autocomplete="off"
                      required
                      value={values.ifscCode}
                      // value={addBankDetailsValues[index].ifscCode}
                      // onChange={e =>
                      //   // handleChangeForAddBankDetails(e, index)

                      //   setIfsc(e.target.value)
                      // }
                    />
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'end' }}>
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{
                    maxHeight: '1cm',
                    marginBottom: '2em',
                    borderRadius: '0.4em',
                  }}
                >
                  Add
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
