import React, { useEffect, useRef, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../error/TextError';
import * as yup from 'yup';
import { element } from 'prop-types';
import axios from '../../utils/interceptor';
import { BASE_URL, Local } from '../../API/APIEndpoints';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNGOAction,
  getNgoByIdAction,
  updateNgoAction,
} from '../../Redux/Actions/NgoActions';
import uploadImage from '../../assets/uploadImage.png';
import { Link } from 'react-router-dom';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const EditNgo = props => {
  let ngoById = useSelector(state => state.ngo.ngoData);
  const dispatch = useDispatch();
  const [endPoint] = useState('http://144.91.79.237:8901/');
  const [logoImgUrl, setLogoImgUrl] = useState();
  const [panCardImgUrl, setPanCardImgUrl] = useState();
  const [certificateImgUrl, setCertificateImgUrl] = useState();
  const [charityCertificateImgUrl, setCharityCertificateImgUrl] = useState();
  const [deedImgUrl, setDeedImgUrl] = useState();
  const [show, setShow] = useState('true');
  const [LogoCondition, setLogoCondition] = useState('true');

  const [date, setDate] = useState();
  const textInput = useRef(null);
  const [addContactValues, setAddContactValues] = useState([]);
  const [addBankDetailsValues, setAddBankDetailsValues] = useState([]);
  const [dropCondition, setDropCondition] = useState(false);
  const [bankName, setBankName] = useState([]);
  const [id, setCount] = useState(0);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLogoImgUrl(ngoById.logoURL);
    dispatch(getNgoByIdAction(props.location.state.id));
  }, []);

  console.log('logoImgUrl :>> ', logoImgUrl);
  console.log('acc', ngoById);
  const handleDropzone = () => {
    setDropCondition(true);
  };
  let handleChangeForAddBankDetails = (i, e) => {
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
    registrationDate: yup.date().required('Required Field'),
    registrationNumber: yup
      .number()
      .required('Required Field')
      .min(12, 'please enter 12 digits'),
    mobile: yup
      .string()
      .required('Required Field')
      .min(10, 'please enter 10 digits'),
    landline: yup.string().min(10, 'please enter 10 digits'),
    password: yup
      .string()
      .required('Required Field')
      .min(8, 'Should be 8 character'),
    panNumber: yup
      .string()
      .required('Required Field')
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid Format'),
  });

  const onlogoImageAdd = async imgData => {
    const data = new FormData();
    console.log('imgData', imgData);
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_logo',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setLogoImgUrl(result.data.pathtoUpload);
    }
  };

  console.log('logoImage', logoImgUrl);

  const onPanCardImageAdd = async imgData => {
    console.log('shivani', imgData);
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
  console.log('panCardImage', panCardImgUrl);

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
  console.log('certificateImage', certificateImgUrl);

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
  console.log('charityCertificateImage', charityCertificateImgUrl);

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
  const handlefileUpload = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_logo',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setLogoImgUrl(result.data.path);
    }
  };

  const handlePancardUpload = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_pancard',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setPanCardImgUrl(result.data.path);
    }
  };

  const handleCertificateUpload = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_certificate',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setCertificateImgUrl(result.data.path);
    }
  };

  const handleCharityCertificateUpload = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_charity_registration_certificate',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setCharityCertificateImgUrl(result.data.path);
    }
  };

  const handleDeedUpload = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_deed',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setDeedImgUrl(result.data.path);
    }
  };

  const onEditNgo = values => {
    let newDate = moment(date).format('LL');
    console.log('panCardImgUrl', panCardImgUrl);
    const obj = {
      logo: logoImgUrl,
      name: values.name,
      address: values.address,
      email: values.email,
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
    console.log('shivani', props);
    dispatch(updateNgoAction(props.location.state.id, obj, props.history));
  };

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
          Edit NGO
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
            name: ngoById && ngoById.user && ngoById.user.name,
            address: ngoById.address,
            email: ngoById && ngoById.user && ngoById.user.email,
            registrationDate: ngoById && ngoById.registrationDate,
            registrationNumber: ngoById.registrationNumber,
            mobile: ngoById && ngoById.user && ngoById.mobile,
            landline: ngoById.landline,
            password: ngoById.password,
            panNumber: ngoById.panNumber,
            user: {
              bankDetails: [{ accountNumber: '' }],
            },
          }}
          //validationSchema={validationSchema}
          onSubmit={values => onEditNgo(values)}
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
                      {/*   {dropCondition && (
                        <DropzoneComponent
                          onChangeImage={onlogoImageAdd}
                          // value={logoImgUrl}
                        />
                  )}             */}
                      <div>
                        {/*       style={{
                          padding: '0.5em 1em 1.5em',
                          textAlign: 'center',
                        }}
                      >
                        {!dropCondition && (
                          <div className="image-upload">
                            <button
                              style={{
                                border: 'none',
                                background: 'none',
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                gridTemplateRows: '1fr',
                                gridTemplateColumns: '1fr',
                              }}
                              onClick={handleDropzone}
                            >
                              <img
                                className="Edit-NGO-logo-img"
                                style={{ gridRow: '1/2' }}
                                src={`${ngoById.logoURL}`}
                              ></img>
                              <p
                                className="Edit-NGO-logo-p"
                                onClick={handleDropzone}
                              >
                                Upload Logo
                              </p>
                            </button>
                          </div>
                            )}            */}
                        <img
                          src={
                            logoImgUrl === undefined
                              ? `${ngoById.logoURL}`
                              : `${logoImgUrl}`
                          }
                          alt="no img"
                          height={'100px'}
                          width={'100px'}
                        />
                        <input
                          type="file"
                          onChange={handlefileUpload}
                          name="file"
                          id="logoname"
                          style={{ display: 'none' }}
                        />
                        <div className="label">
                          <label htmlFor="logoname" className="file">
                            <i className="bi bi-camera"></i>
                          </label>
                        </div>
                      </div>
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
                        name="name"
                        type="text"
                        autocomplete="off"
                        required
                        value={values.name}
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
                        name="email"
                        type="email"
                        required
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Registration Date
                        <label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        type="date"
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
                        Mobile<label style={{ color: 'red' }}>*</label>
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
                      <label style={{ fontWeight: 'bold' }}>
                        Landline Number
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Landline Number"
                        name="landline"
                        type="text"
                        autocomplete="off"
                        maxLength={10}
                        required
                        value={values.landline}
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
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Password<label style={{ color: 'red' }}>*</label>
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Please Enter Password"
                        name="password"
                        type={show ? 'password' : 'text'}
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
                    <label
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        margin: '0.8em 0 0',
                      }}
                    >
                      Pancard<label style={{ color: 'red' }}>*</label>
                    </label>
                    {/*      {dropCondition && (
                      <DropzoneComponent
                        onChangeImage={onPanCardImageAdd}
                        value={panCardImgUrl}
                      /> 
             )}                     */}
                    <div
                    // style={{ padding: '15px 0 10px', textAlign: 'center' }}
                    >
                      {/*    {!dropCondition && (
                        <div className="image-upload">
                          <button
                            style={{
                              border: 'none',
                              background: 'none',
                              display: 'grid',
                              justifyContent: 'center',
                              alignItems: 'center',
                              alignContent: 'center',
                              gridTemplateRows: '1fr',
                              gridTemplateColumns: '1fr',
                            }}
                            onClick={handleDropzone}
                          >
                            <img
                              className="Edit-NGO-logo-img"
                              style={{ gridRow: '1/2' }}
                              src={`${ngoById.panCardURL}`}
                            ></img>
                            <p
                              className="Edit-NGO-logo-p"
                              onClick={handleDropzone}
                            >
                              Upload Pancard
                            </p>
                          </button>
                        </div>
                          )}                                */}
                      <img
                        src={
                          panCardImgUrl === undefined
                            ? `${ngoById.panCardURL}`
                            : `${panCardImgUrl}`
                        }
                        alt="no img"
                        height={'100px'}
                        width={'100px'}
                      />
                      <input
                        type="file"
                        onChange={handlePancardUpload}
                        name="file"
                        id="panCardname"
                        style={{ display: 'none' }}
                      />
                      <div className="label">
                        <label htmlFor="panCardname" className="file">
                          <i className="bi bi-camera"></i>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div
                      style={{ padding: '15px 0 10px', textAlign: 'center' }}
                    >
                      {/*    <div className="image-upload">
                        <img
                          style={{
                            height: '235px',
                            width: '100%',
                            borderRadius: '1.5em',
                          }}
                          src={`${ngoById.certificateURL}`}
                        />
                        </div>       */}
                      <label
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1em',
                          margin: '0.8em 0 0',
                        }}
                      >
                        Certificate<label style={{ color: 'red' }}>*</label>
                      </label>
                    </div>
                    <img
                      src={
                        certificateImgUrl === undefined
                          ? `${ngoById.certificateURL}`
                          : `${certificateImgUrl}`
                      }
                      alt="no img"
                      height={'100px'}
                      width={'100px'}
                    />
                    <input
                      type="file"
                      onChange={handleCertificateUpload}
                      name="file"
                      id="certificatename"
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="certificatename" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div
                      style={{ padding: '15px 0 10px', textAlign: 'center' }}
                    >
                      {/*   <div className="image-upload">
                        <img
                          style={{
                            height: '235px',
                            width: '100%',
                            borderRadius: '1.5em',
                          }}
                          src={`${ngoById.charityRegistrationCertificateURL}`}
                        />           
                      </div>            */}
                      <label
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1em',
                          margin: '0.8em 0 0',
                        }}
                      >
                        Charity Registration Certificate
                        <label style={{ color: 'red' }}>*</label>
                      </label>
                    </div>
                    <img
                      src={
                        charityCertificateImgUrl === undefined
                          ? `${ngoById.charityRegistrationCertificateURL}`
                          : `${charityCertificateImgUrl}`
                      }
                      alt="no img"
                      height={'100px'}
                      width={'100px'}
                    />
                    <input
                      type="file"
                      onChange={handleCharityCertificateUpload}
                      name="file"
                      id="charityCertificatename"
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="charityCertificatename" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
                  </div>

                  <div className="col-3 ">
                    <div
                      style={{ padding: '15px 0 10px ', textAlign: 'center' }}
                    >
                      {/*    <div className="image-upload">
                        <img
                          style={{
                            height: '235px',
                            width: '100%',
                            borderRadius: '1.5em',
                          }}
                          src={`${ngoById.deedURL}`}
                        />
                      </div>                  */}
                      <label
                        style={{
                          fontWeight: 'bold',
                          fontSize: '1em',
                          margin: '0.8em 0 0',
                        }}
                      >
                        Deed<label style={{ color: 'red' }}>*</label>
                      </label>
                    </div>
                    <img
                      src={
                        deedImgUrl === undefined
                          ? `${ngoById.deedURL}`
                          : `${deedImgUrl}`
                      }
                      alt="no img"
                      height={'100px'}
                      width={'100px'}
                    />
                    <input
                      type="file"
                      onChange={handleDeedUpload}
                      name="file"
                      id="deedname"
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="deedname" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
                  </div>
                </div>

                <br />

                <div
                  className="row"
                  key={element.id}
                  style={{ padding: '3rem 8rem' }}
                >
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
                        value={element.bankName}
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
                        value={element.accountNumber}
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
                        value={element.beneficiaryName}

                        // value={addBankDetailsValues[index].beneficiaryName}

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
                        value={element.ifscCode}
                        // value={addBankDetailsValues[index].ifscCode}
                        // onChange={e =>
                        //   // handleChangeForAddBankDetails(e, index)

                        //   setIfsc(e.target.value)
                        // }
                      />
                    </div>
                  </div>
                </div>

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
                        Update
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

export default EditNgo;
