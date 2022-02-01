import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { BASE_URL, ADD_DONOR_GET_PARENTS_URL } from '../../API/APIEndpoints';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllParentDonorAction,
  UpdateDonorByIdAction,
} from '../../Redux/Actions/DonorActions';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const EditDoner = props => {
  const [donarData, setDonarData] = useState([]);
  const [parentId, setParentId] = useState('');
  const [userId, setUserId] = useState(0);
  const [date, setDate] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    async function onMount() {
      setDonarData(props.location.state);
      setUserId(props.location.state.id);
      await dispatch(getAllParentDonorAction());
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


  const onUpdate = async values => {
    const url = BASE_URL + `donor/${userId}`;
    const parentId = parentList.filter(data => data.name == values.parent);

    let id = parentId && parentId.length ? parentId[0].id : 0;

    let newDate = moment(date).format('LL');
    const obj = {
      name: values.fName + ' ' + values.lName,
      email: values.emailId,
      mobile: values.phoneNumber,
      parentId: id,
      balanceNextRenewDate: newDate,
      plan: values.plan,
    };

    dispatch(UpdateDonorByIdAction(userId, obj, props.history));
  };

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <ToastContainer hideProgressBar />

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
            marginLeft: '20px',
          }}
        >
          Edit Donor
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
            fName: props.location.state.name.split(' ').slice(0, -1).toString(),
            lName: props.location.state.name.split(' ').pop().toString(),
            phoneNumber: donarData.mobile,
            emailId: donarData.email,
            password: donarData.password,
            parent: parentId && parentId.length ? parentId : '',
            plan: donarData.plan ? donarData.plan : 1,
            // date: props.location.state.balanceNextRenewDate
            //   ? props.location.state.balanceNextRenewDate
            //       .split('T')
            //       .slice(0, 1)
            //       .toString()
            //   : '',
          }}
          // validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={values => onUpdate(values)}
        >
          {({ values, errors, touched }) => (
            <div className="w-100 mx-auto" style={{ padding: '4rem 10rem' }}>
              <Form>
                <div className="row">
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>Parent</label>
                      <Field
                        type="search"
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
                      </datalist>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
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
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
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
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Mobile Number
                      </label>
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
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
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
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
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
                  <div className="col-6">
                    <div style={{ padding: '15px 0 10px' }}>
                      <label style={{ fontWeight: 'bold' }}>
                        Next Renewal Date
                      </label>
                      <DatePicker
                        name="nextRenewalDate"
                        // value={values.nextRenewalDate}
                        required
                        selected={date}
                        onChange={date => setDate(date)}
                        dateFormat="MMMM d, yyyy"
                      />
                      {errors.date && touched.date && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'end',
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        type="submit"
                        style={{ width: '6rem', borderRadius: '0.4em' }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'start',
                      }}
                    >
                      <Link to="/view_all_doner">
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
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </React.Fragment>

  )
};

export default EditDoner;
