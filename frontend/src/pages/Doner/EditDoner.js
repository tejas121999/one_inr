import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { BASE_URL, ADD_DONOR_GET_PARENTS_URL } from '../../API/APIEndpoints';
const Editdonor = props => {
  const [donarData, setDonarData] = useState([]);
  const [parentList, setParentList] = useState([]);
  const [parentId, setParentId] = useState(0);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    async function onMount() {
      await getParentList();
      setDonarData(props.location.state);
      setUserId(props.location.state.id);
    }
    onMount();
  }, []);

  const getParentList = async () => {
    const url = BASE_URL + ADD_DONOR_GET_PARENTS_URL;
    const res = await axios
      .get(url)
      .then(res => {
        console.log('Response');
        setParentList(res.data.data);
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  const validationSchema = yup.object({
    fName: yup.string().required('Required'),
    lName: yup.string().required('required'),
    phoneNumber: yup
      .string()
      .required('required')
      .min(10, 'Please enter 10 digits'),
    emailId: yup.string().email('Invalid Email Format').required('Required'),
    plan: yup.string().required('Required'),
    date: yup.date().required('Required'),
  });

  const onUpdate = async values => {
    const url = BASE_URL + `donor/${userId}`;

    const obj = {
      name: values.fName + values.lName,
      email: values.emailId,
      mobile: values.phoneNumber,
      password: values.password,
      parentId: values.parent,
      isPriyank: values.isPriyank,
      date: values.date,
      plan: values.plan,
    };
    await axios
      .post(url, obj)
      .then(res => {})
      .catch(err => {
        alert(err);
      });
  };

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
        <Formik
          initialValues={{
            fName: donarData.name,
            lName: donarData.name,
            phoneNumber: donarData.mobile,
            emailId: donarData.email,
            password: donarData.password,
            isPriyank: 'false',
            parent: donarData.parentId,
            plan: donarData.plan,
            date: donarData.balanceNextRenewDate,
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={values => onUpdate(values)}
        >
          {({ values, errors, touched }) => (
            <Form>
              <div className="row">
                <div className="col-6 py-3">
                  <div style={{ padding: '15px', paddingBottom: '10px' }}>
                    <label style={{ fontWeight: 'bold' }}>Parent</label>
                    <Field
                      type="search"
                      placeholder="No Parent"
                      className="form-control"
                      list="parentList"
                      value="No parent"
                      aucomplete="off"
                    />
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
                    <Field
                      name="fName"
                      value={values.fName}
                      className="form-control"
                      required
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
                <div className="col-6 py-3">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Last Name</label>
                    <Field
                      className="form-control"
                      name="lName"
                      value={values.lName}
                      required
                    />
                    {errors.lName && touched.lName && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.lName}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6 py-3">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Mobile Number</label>
                    <Field
                      className="form-control"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 py-3">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Email Id</label>
                    <Field
                      className="form-control"
                      name="emailId"
                      value={values.emailId}
                      required
                    />
                  </div>
                </div>
                <div className="col-6 py-3">
                  <div className="input-box">
                    <label style={{ fontWeight: 'bold' }}>Plan Amount</label>
                    <Field
                      type="number"
                      className="form-control"
                      name="plan"
                      required
                      value={values.plan}
                    />
                    {errors.plan && touched.plan && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.plan}</span>
                      </div>
                    )}
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
                    <label style={{ fontWeight: 'bold' }}>
                      Next Renewal Date
                    </label>
                    <Field
                      type="date"
                      className="form-control"
                      name="date"
                      value={values.date}
                    />
                    {errors.date && touched.date && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                style={{ margin: '20px' }}
                className="btn  btn-success "
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default Editdonor;
