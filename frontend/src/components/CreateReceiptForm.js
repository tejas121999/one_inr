import React, { useEffect, useState } from 'react';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import logo from '../assets/img/logo/logo_200.png';
// import '../pages/login.css';
import { NavLink, useHistory } from 'react-router-dom';
import { BASE_URL, GetAllDonor, AddUserReceipt } from '../API/APIEndpoints';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

let validationSchema = yup.object().shape({
  Project: yup.string().required(),
  Donar: yup.string().required(),
  Amount: yup.number().min(1, 'enter amount must be grater than 0.').required(),
  date: yup.string().required(),
  Transaction: yup.string().required(),
});

const CreateReceiptForm = ({ modal, handleModal }) => {
  let history = useHistory();
  const [donorList, setDonorList] = useState([]);
  useEffect(() => {
    const URL = BASE_URL + GetAllDonor;
    axios
      .get(URL)
      .then(response => {
        // console.log('response', response.data.data.rows);
        setDonorList(response.data.data.rows);
        // return response.data.data.rows;
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  const AddUserReceiptHandler = values => {
    console.log('values2', values);
    const URL = BASE_URL + AddUserReceipt;
    axios
      .post(URL, values)
      .then(response => {
        console.log('send', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  return (
    // console.log('test', donorList)
    <Modal show={modal} onHide={handleModal}>
      <Modal.Header closeButton>Create Receipt</Modal.Header>
      <Modal.Body>
        <div className="container loginbg">
          <Formik
            initialValues={{
              Project: '',
              Donar: '',
              Amount: '',
              date: '',
              Transaction: 'cash',
              Cheque: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              //   loginHandler(values);
              console.log('values', values);
              AddUserReceiptHandler(values);
              handleModal();
            }}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form className="login2">
                {/* Project */}
                <div className="form-group">
                  <label className="mb-0" htmlFor="Project">
                    Select Project *
                  </label>
                  <Field as="select" name="Project" className="form-control">
                    <option value=""> Select Project </option>
                    <option value="1">Feed Cows with grass of Love</option>
                    <option value="2">Paying Children education fee</option>
                    <option value="3">Sponsoring Books for Students</option>
                    <option value="4">
                      Sponsoring Stationary for Students
                    </option>
                    <option value="5">Feeding Pigeons Grains</option>
                    <option value="6">Pehli Roti Dayitva Ki</option>
                    <option value="7">this is testing project..</option>
                    <option value="8">Behatar Swaasthay, Behatar Desh</option>
                    <option value="9">Project One</option>
                  </Field>
                  {touched.Project && errors.Project ? (
                    <small className="text-danger ">{errors.Project}</small>
                  ) : null}
                </div>

                {/* Donar */}
                <div className="form-group">
                  <label className="mb-0" htmlFor="Donar">
                    Select Donar *
                  </label>
                  <Field as="select" name="Donar" className="form-control">
                    <option value=""> Select Donar </option>
                    {donorList &&
                      donorList.map(e => {
                        {
                          return (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          );
                        }
                      })}
                  </Field>
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
                      />
                      <label className="form-check-label ml-1">cash</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="online"
                      />
                      <label className="form-check-label ml-1">online</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="neft"
                      />
                      <label className="form-check-label ml-1">neft</label>
                    </div>
                    <div className="form-check">
                      <Field
                        name="Transaction"
                        type="radio"
                        className="form-check-input"
                        value="Cheque"
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

                <Button onClick={handleModal}>cancle</Button>
                <Button type="submit">create receipt</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreateReceiptForm;
