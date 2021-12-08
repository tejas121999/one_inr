import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../../pages/Doner/Donor.css';
import { ADD_DONOR_FUND_URL, BASE_URL } from '../../API/APIEndpoints';
import { useDispatch } from 'react-redux';
import { addUpcomingDonorFundAction } from '../../Redux/Actions/DonorActions';
import { Field, Form, Formik } from 'formik';
const UpcomingDonorAddfund = props => {
  const [userId, setId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setId(props.data);
  }, [props]);

  const validateBalance = value => {
    let error;
    if (!value) {
      error = 'Please enter value';
    } else if (value == 0) {
      error = 'Invalid Value';
    }
    return error;
  };
  const onAdd = async value => {
    console.log('ModalURL', value);
    await dispatch(addUpcomingDonorFundAction(userId, value));
    props.onHide();
  };
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Balance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              balance: 0,
            }}
            enableReinitialize={true}
            onSubmit={values => onAdd(values)}
          >
            {({ errors, values }) => (
              <Form>
                <Field
                  type="number"
                  name="balance"
                  className="form-control"
                  value={values.balance}
                  validate={validateBalance}
                />
                {errors.balance && (
                  <div className="text-left">
                    <span style={{ color: 'red' }}>{errors.balance}</span>
                  </div>
                )}
                <div className="Del-btn">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                  <button
                    onClick={() => props.onHide()}
                    className="btn btn-danger"
                  >
                    Close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpcomingDonorAddfund;
