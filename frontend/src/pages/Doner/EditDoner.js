import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
<<<<<<< HEAD
import { BASE_URL, ADD_DONOR_GET_PARENTS_URL } from '../../API/APIEndpoints';
import { useDispatch, useSelector } from 'react-redux';
import { getParentListAction } from '../../Redux/Actions/DonorActions';
import { useHistory } from 'react-router-dom';
const Editdonor = props => {
  const [donarData, setDonarData] = useState([]);
  const [parentId, setParentId] = useState('');
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    async function onMount() {
      setDonarData(props.location.state);
      setUserId(props.location.state.id);
      await dispatch(getParentListAction());
    }
    onMount();
  }, []);
  console.log('Chinmay', props.location.state);
  let parentList = useSelector(state => state.donor.allParent);

  useEffect(() => {
    if (parentList && parentList.length > 0) {
      const result = parentList.filter(
        data => data.id == props.location.state.parentId,
      );
      let parent = result && result.length && result[0].name;
      setParentId(parent);
    }
  }, [parentList]);
=======
import { BASE_URL, GET_ALL_PARENT_URL } from '../../API/APIEndpoints';
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
    const url = BASE_URL + GET_ALL_PARENT_URL;
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
>>>>>>> f034b8621929b76c9939beb94922835e5166429b

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
    const parentId = parentList.filter(data => data.name == values.parent);

    let id = parentId && parentId.length ? parentId[0].id : 0;

    const obj = {
      name: values.fName + ' ' + values.lName,
      email: values.emailId,
      mobile: values.phoneNumber,
      parentId: id,
      balanceNextRenewDate: values.date,
      plan: values.plan,
    };
    console.log('Chinmay Update', obj);
    await axios
      .put(url, obj)
      .then(res => {
        history.push('/view_all_doner');
      })
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
<<<<<<< HEAD
        {console.log(
          'render',
          props.location.state.name.split(' ').slice(0, -1).toString(),
        )}
        <Formik
          initialValues={{
            fName: props.location.state.name.split(' ').slice(0, -1).toString(),
            lName: props.location.state.name.split(' ').pop().toString(),
            phoneNumber: donarData.mobile,
            emailId: donarData.email,
            password: donarData.password,
            parent: parentId && parentId.length ? parentId : '',
            plan: donarData.plan ? donarData.plan : 1,
            date: props.location.state.balanceNextRenewDate
              ? props.location.state.balanceNextRenewDate
                  .split('T')
                  .slice(0, 1)
                  .toString()
              : '',
=======
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
>>>>>>> f034b8621929b76c9939beb94922835e5166429b
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
<<<<<<< HEAD
                      name="parent"
                      placeholder="No Parent"
                      className="form-control"
                      value={values.parent}
                      list="parentList"
                    />
                    <datalist id="parentList">
                      <option value="No Parent">No Parent</option>
                      {parentList &&
                        parentList.length > 0 &&
                        parentList.map(data => {
                          return <option value={data.name} />;
                        })}
=======
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
>>>>>>> f034b8621929b76c9939beb94922835e5166429b
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
<<<<<<< HEAD
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
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.phoneNumber}
                        </span>
                      </div>
                    )}
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
                    {errors.emailId && touched.emailId && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>{errors.emailId}</span>
=======
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
>>>>>>> f034b8621929b76c9939beb94922835e5166429b
                      </div>
                    )}
                  </div>
                </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> f034b8621929b76c9939beb94922835e5166429b
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
