import React, { useEffect, useState } from 'react';
import axios from '../utils/interceptor';

import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
// import '../pages/login.css';
import { NavLink, useHistory } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';
import {
  AddUserReceiptAction,
  getAllParentDonorAction,
  getViewAllDonorAction,
} from '../Redux/Actions/DonorActions';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../API/APIEndpoints';

let validationSchema = yup.object().shape({
  // Project: yup.string().required(),
  Donar: yup.string().required(),
  Amount: yup.number().min(1, 'enter Amount must be grater than 0.').required(),
  date: yup.string().required(),
  Transaction: yup.string().required(),
  //   Cheque: yup
  //     .number()
  //     .min(1, 'enter Cheque number must be grater than 0.')
  //     .required(),
});

const CreateReceiptForm = ({ modal, handleModal, type, id }) => {
  const [respData, setResData] = useState('');
  let history = useHistory();
  const dispatch = useDispatch();
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    async function onMount() {
      await dispatch(getViewAllDonorAction());
      // setDonorList()
    }
    onMount();
  }, []);

  useEffect(() => {
    async function onMount() {
      await dispatch(getAllParentDonorAction());
      // setDonorList()
    }
    onMount();
  }, []);

  let AllDonorList = useSelector(state => state.donor.allParent);
  console.log('AllDonorList', AllDonorList);

  const AddUserReceiptHandler = values => {
    dispatch(AddUserReceiptAction(values));
  };
  // useEffect(()=>{
  //   getDonorbyId()

  // },[])

  let ReciptData = useSelector(state => {
    return state.donor.getReciptData;
  });

  const CreateReceiptSubmit = async values => {
    if (type == 'edit reciept') {
      const CreateReceiptEditBody = {
        Donar: values && values.Donar ? values.Donar : null,
        Project: null,
        ngoId: null,
        Amount: values && values.Amount ? values.Amount : null, // values?.amount,
        Transaction: values && values.Transaction ? values.Transaction : null, // values?.Transaction,
        realizationNo:
          values && values.realizationNo ? values.realizationNo : null, //values?.realizationNo,
        date: values && values.date ? values.date : null,
        drawnOnBank: '',
        branch: '',
        receiptNumber: '',
      };
      let editUrl = BASE_URL + `/userReceipts/${id}`;
      await axios
        .put(editUrl, CreateReceiptEditBody)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          // console.log('err ', err?.response);
        });
    } else {
      const CreateReceiptpBody = {
        Donar: values && values.Donar ? values.Donar : null,
        Project: null,
        ngoId: null,
        Amount: values && values.Amount ? values.Amount : null, // values?.amount,
        Transaction: values && values.Transaction ? values.Transaction : null, // values?.Transaction,
        realizationNo:
          values && values.realizationNo ? values.realizationNo : null, //values?.realizationNo,
        date: values && values.date ? values.date : null,
        drawnOnBank: '',
        branch: '',
        receiptNumber: '',
      };
      let url = BASE_URL + 'userReceipts/';
      await axios
        .post(url, CreateReceiptpBody)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          // console.log('err ', err?.response);
        });
    }
  };

  return (
    <Modal show={modal} onHide={handleModal}>
      <Modal.Header closeButton>
        {type == 'create receipt' ? 'Create recipt' : 'Edit recipt'}
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Formik
            initialValues={{
              // Project: '',
              Donar: type == 'edit reciept' ? ReciptData.userId : '',
              Amount: type == 'edit reciept' ? ReciptData.amount : '',
              date: '',
              Transaction:
                type == 'edit reciept' ? ReciptData.transactionType : '',
              //   Cheque : '',
            }}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={values => {
              console.log('asd');
              CreateReceiptSubmit(values);
              // loginHandler(values);
              console.log('values', values);
              AddUserReceiptHandler(values);
              handleModal();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              isSubmitting,
              handleBlur,
              handleSubmit,
            }) => (
              <form className="login2" onSubmit={handleSubmit}>
                {/* Donar */}
                <div className="form-group">
                  <label className="mb-0" htmlFor="Donar">
                    Select Donar *
                  </label>
                  <Field
                    name="Donar"
                    className="form-control"
                    list="parentList"
                    value={values.Donar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <datalist id="parentList">
                    <option value=""> Select Donar </option>
                    {AllDonorList &&
                      AllDonorList.map(e => {
                        return <option key={e.id} value={e.name} />;
                      })}
                  </datalist>
                  {touched.Donar && errors.Donar ? (
                    <small className="text-danger ">{errors.Donar}</small>
                  ) : null}
                </div>

                {/* Amount */}
                <div className="form-group">
                  <label className="mb-0" htmlFor="Amount">
                    Donation Amount *
                  </label>
                  <Field
                    name="Amount"
                    type="number"
                    placeholder="enter Amount"
                    className="form-control"
                    autoComplete="off"
                    value={values.Amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Amount && errors.Amount ? (
                    <small className="text-danger ">{errors.Amount}</small>
                  ) : null}
                </div>
                {/* date */}
                <div className="form-group">
                  <label className="mb-0" htmlFor="date">
                    Receipt Date *
                  </label>
                  <Field
                    name="date"
                    type="date"
                    placeholder="enter date"
                    className="form-control"
                    autoComplete="off"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.date && errors.date ? (
                    <small className="text-danger ">{errors.date}</small>
                  ) : null}
                </div>
                {/* Transaction */}
                <div className="form-group">
                  <label>Transaction Type *</label>
                  <div className="radioGroup">
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="cash"
                      // value={values.Transaction}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      />
                      <label className="form-check-label ml-1">cash</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="online"
                      // value={values.Transaction}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      />
                      <label className="form-check-label ml-1">online</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="neft"
                      // value={values.Transaction}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      />
                      <label className="form-check-label ml-1">neft</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="Cheque"
                      // value={values.Transaction}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      />
                      <label className="form-check-label ml-1">Cheque</label>
                    </div>
                  </div>
                  {touched.Transaction && errors.Transaction ? (
                    <small className="text-danger ">{errors.Transaction}</small>
                  ) : null}
                </div>

                {values.Transaction == 'Cheque' ? (
                  <div className="form-group">
                    <label className="mb-0" htmlFor="Cheque">
                      Cheque Number *
                    </label>
                    <Field
                      name="Cheque"
                      type="number"
                      placeholder="enter Cheque"
                      className="form-control"
                      autoComplete="off"
                    />
                    {touched.Cheque && errors.Cheque ? (
                      <small className="text-danger ">{errors.Cheque}</small>
                    ) : null}
                  </div>
                ) : null}

                <div className="text-center mybtn">
                  <Button onClick={handleModal} className="ml-2">
                    Cancel
                  </Button>
                  <Button type="submit">
                    {type == 'create receipt' ? 'Create ' : 'Edit '}
                  </Button>
                  {/* <button type="submit">create</button> */}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateReceiptForm;
