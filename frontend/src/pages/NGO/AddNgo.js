import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { element } from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';
import { FaTimes } from 'react-icons/fa';


const AddNgo = () => {

    const [logoImgUrl, setLogoImgUrl] = useState('');
    const [panCardImgUrl, setPanCardImgUrl] = useState('');
    const [certificateImgUrl, setCertificateImgUrl] = useState('');
    const [charityCertificateImgUrl, setCharityCertificateImgUrl] = useState('');
    const [deadImgUrl, setDeadImgUrl] = useState('');


    const [addContactValues, setAddContactValues] = useState([{ name: "", designation: "", email: "", mobileNumber: "" }])

    const [addBankDetailsValues, setAddBankDetailsValues] = useState([{ bankName: "", accountNumber: "", beneficiaryName: "", ifscCode: "" }])

    let handleChangeForAddBankDetails = (i, e) => {
        let newFormValues = [...addBankDetailsValues];
        newFormValues[i][e.target.name] = e.target.value;
        setAddBankDetailsValues(newFormValues);
    }

    let addBankDetailsFormFields = () => {
        setAddBankDetailsValues([...addBankDetailsValues, { bankName: "", accountNumber: "", beneficiaryName: "", ifscCode: "" }])
    }

    let removeBankDetailsFormFields = (i) => {
        let newFormValues = [...addBankDetailsValues];
        newFormValues.splice(i, 1);
        setAddBankDetailsValues(newFormValues)
    }

    let handleChangeForAddContact = (i, e) => {
        let newFormValues = [...addContactValues];
        newFormValues[i][e.target.name] = e.target.value;
        setAddContactValues(newFormValues);
    }

    let addContactFormFields = () => {
        setAddContactValues([...addContactValues, { name: "", designation: "", email: "", mobileNumber: "" }])
    }

    let removeContactFormFields = (i) => {
        let newFormValues = [...addContactValues];
        newFormValues.splice(i, 1);
        setAddContactValues(newFormValues)
    }

    const validationSchema = yup.object({
        ngoName: yup.string().required('Required'),
        address: yup.string().required('required'),
        emailId: yup.string().email('Invalid Email Format').required('Required'),
        registrationDate: yup.string().required('required'),
        registrationNumber: yup.string().required('required').min(12, 'please enter 12 digits'),
        mobileNumber: yup
            .string()
            .required('required')
            .min(10, 'Please enter 10 digits'),
        landline: yup.string().required('required').min(10, 'please enter 10 digits'),
        password: yup.string().required('Required').min(7, 'Should be 7 character'),
        panNumber: yup.string().required('required').min(12, 'please enter 12 digits'),
    });

    
  const onlogoImageAdd = async imagData => {
    const data = new FormData();
    data.append('avatar', imagData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_logo',
      data,
    );
    console.log('data', result.data.url);
    if (result && result.data && result.data.url) {
        setLogoImgUrl(result.data.url);
    }
  };
  console.log('logoImage', logoImgUrl);


  
  const onpanCardImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_pancard',
      data,
    );
    console.log('data', result.data.url);
    if (result && result.data && result.data.url) {
      setPanCardImgUrl(result.data.url);
    }
  };
  console.log('panCardImage', panCardImgUrl);


  const oncertificateImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_certificate',
      data,
    );
    console.log('data', result.data.url);
    if (result && result.data && result.data.url) {
      setCertificateImgUrl(result.data.url);
    }
  };
  console.log('certificateImage', certificateImgUrl);


  
  const onCharityCertificateImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_certificate',
      data,
    );
    console.log('data', result.data.url);
    if (result && result.data && result.data.url) {
      setCharityCertificateImgUrl(result.data.url);
    }
  };
  console.log('charityCertificateImage', charityCertificateImgUrl);

  
  const ondeadImageAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=ngo_dead',
      data,
    );
    console.log('data', result.data.url);
    if (result && result.data && result.data.url) {
      setDeadImgUrl(result.data.url);
    }
  };
  console.log('deadImage', deadImgUrl);

    return (
        <div>
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
                    ADD NGO
                </p>
            </div>
            <div style={{ backgroundColor: 'white', margin: '30px', marginBottom: '50px' }}>
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
                >
                    {({ errors, values, touched }) => (
                        <Form>

                            <div className="row">
                                <div className="col-6 ">
                                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                        <label style={{ fontWeight: 'bold' }}>Logo Name</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            placeholder="Please Enter Logo Name"
                                            name="logo_img"
                                            accept=".png,.jpg,"
                                            onChange={e => onlogoImageAdd(e.target.files[0])}
                                        />
                                        {errors.ngoName && touched.logoName && (
                                            <div className="text-left">
                                                <span style={{ color: 'red' }}>{errors.logoName}</span>
                                            </div>
                                        )}
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
                                                <span style={{ color: 'blue' }}>{errors.ngoName}</span>
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
                                            placeholder="Please Enter Address"
                                            name="address"
                                            type="text"
                                            required
                                            autocomplete="off"
                                            value={values.address}
                                        />
                                        {errors.address && touched.address && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>{errors.address}</span>
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
                                                <span style={{ color: 'blue' }}>{errors.emailId}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-6 ">
                                    <div className="input-box">
                                        <label style={{ fontWeight: 'bold' }}>RegistrationDate</label>
                                        <Field
                                            className="form-control"
                                            name="registrationDate"
                                            type="registrationDate"
                                            required
                                            autocomplete="off"
                                            value={values.registrationDate}
                                        />
                                        {errors.registrationDate && touched.registrationDate && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>
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
                                        <label style={{ fontWeight: 'bold' }}> Registration Number</label>
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
                                                <span style={{ color: 'blue' }}>
                                                    {errors.registrationNumber}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="input-box">
                                        <label style={{ fontWeight: 'bold' }}> Mobile Number </label>
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
                                                <span style={{ color: 'blue' }}>
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
                                        <label style={{ fontWeight: 'bold' }}> Landline Number </label>
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
                                                <span style={{ color: 'blue' }}>
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
                                                <span style={{ color: 'blue' }}>
                                                    {errors.password}
                                                </span>
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
                                                <span style={{ color: 'blue' }}>
                                                    {errors.panNumber}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3 ">
                                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                        <label style={{ fontWeight: 'bold', height: "3em" }}>Pancard</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            placeholder="Please upload pancard image"
                                            name="pancard_img"
                                            accept=".png,.jpg,"
                                            value={values.Pancard}
                                            onChange={e => onpanCardImageAdd(e.target.files[0])}
                                        />
                                        {errors.pancard && touched.pancard && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>{errors.Pancard}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-3 ">
                                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                        <label style={{ fontWeight: 'bold', height: "3em" }}>Certificate</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            placeholder="Please upload certificate"
                                            name="certificate_img"
                                            accept=".png,.jpg,"
                                            values={values.Certificate}   
                                            onChange={e => oncertificateImageAdd(e.target.files[0])}  
                                        />
                                        {errors.certificate && touched.certificate && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>{errors.Certificate}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-3 ">
                                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                        <label style={{ fontWeight: 'bold', height: "3em" }}>Charity Registration Certificate</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            placeholder="Please upload charityCertificate"
                                            name="charityCertificate_img"
                                            accept=".pnj,.jpg,"
                                            value={values.CharitynCertificate}
                                            onChange={e => onCharityCertificateImageAdd(e.target.files[0])}
                                        />
                                        {errors.CharityCertificate && touched.CharityCertificate && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>{errors.CharityCertificate}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-3 ">
                                    <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                        <label style={{ fontWeight: 'bold', height: "3em" }}>Dead</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            placeholder="Please Enter dead Name"
                                            name="dead_img"
                                            accept=".pnj,.jpg,"
                                            value={values.Dead}
                                            onChange={e => ondeadImageAdd(e.target.files[0])}
                                        />
                                        {errors.Dead && touched.Dead && (
                                            <div className="text-left">
                                                <span style={{ color: 'blue' }}>{errors.Dead}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <br />
                            {addContactValues.map((element, index) => (

                                <div className="row" style={{ marginLeft: '4px' }}>
                                    <div className="col-2.5 ">
                                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                            <label style={{ fontWeight: 'bold' }}>Name</label>
                                            <Field
                                                className="form-control"
                                                placeholder="Please enter your Name"
                                                name="name"
                                                autocomplete="off"
                                                required
                                                value={values.name}
                                            />
                                            {errors.name && touched.name && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.name}</span>
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
                                                value={values.designation}
                                            />
                                            {errors.designation && touched.designation && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.designation}</span>
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
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.email}</span>
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
                                                value={values.mobile}
                                            />
                                            {errors.mobile && touched.mobile && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.mobile}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button type="delete" className="btn btn-danger" style={{ maxWidth: "1.5cm", maxHeight: "1cm", marginTop: "1.2cm" }}  onClick={() => removeContactFormFields()}>
                                        <FaTimes />
                                    </button>

                                </div>
                            ))}

                            <div style={{ textAlign: "center" }}>
                                <button type="add contact" className="btn btn-success" onClick={() => addContactFormFields()}>
                                    Add Contact
                                </button>
                            </div>

                            < br />
                            {addBankDetailsValues.map((element, index) => (
                                <div className="row" style={{ marginLeft: '4px' }}>
                                    <div className="col-2.5 ">
                                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                            <label style={{ fontWeight: 'bold' }}>Bank Name</label>
                                            <Field
                                                className="form-control"
                                                placeholder="Please enter your Bank Name"
                                                name="bankname"
                                                autocomplete="off"
                                                required
                                                value={values.bankname}
                                            />
                                            {errors.bankname && touched.bankname && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.bankname}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-2.5 ">
                                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                            <label style={{ fontWeight: 'bold' }}>Account Number</label>
                                            <Field
                                                className="form-control"
                                                placeholder="Please enter Account Number"
                                                name="accountnumber"
                                                autocomplete="off"
                                                required
                                                value={values.accountnumber}
                                            />
                                            {errors.accountnumber && touched.accountnumber && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.accountnumber}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-2.5 ">
                                        <div style={{ padding: '15px', paddingBottom: '10px' }}>
                                            <label style={{ fontWeight: 'bold' }}>Beneficiary Name</label>
                                            <Field
                                                className="form-control"
                                                placeholder="Please enter Beneficiary Name"
                                                name="beneficiaryName"
                                                autocomplete="off"
                                                required
                                                value={values.beneficiaryName}
                                            />
                                            {errors.beneficiaryName && touched.beneficiaryName && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.beneficiaryName}</span>
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
                                                value={values.IFSCCode}
                                            />
                                            {errors.IFSCCode && touched.IFSCCode && (
                                                <div className="text-left">
                                                    <span style={{ color: 'blue' }}>{errors.IFSCCode}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button type="delete" className="btn btn-danger" style={{ maxWidth: "1.5cm", maxHeight: "1cm", marginTop: "1.2cm" }} onClick={() => removeBankDetailsFormFields()}>
                                        <FaTimes />
                                    </button>

                                </div>
                            ))}
                            <div style={{ textAlign: "center" }}>
                                <button type="add bank details" className="btn btn-success" onClick={() => addBankDetailsFormFields()}>
                                    Add Bank Details
                                </button>
                            </div>
                            <br />
                            <div style={{marginLeft: '12px'}}>
                            <button type="submit" className="btn btn-success" >
                               Submit
                            </button>
                            </div>

                        </Form>
                    )}

                </Formik>
            </div>



        </div>

    )
}

export default AddNgo;