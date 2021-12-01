import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../../pages/Doner/Donor.css';
import { ADD_DONOR_FUND_URL, BASE_URL } from '../../API/APIEndpoints';
import { useDispatch } from 'react-redux';
import {
  addDonorFundAction,
  getViewAllDonorAction,
} from '../../Redux/Actions/DonorActions';

const Addfund = props => {
  const [balance, setBalance] = useState(0);
  const [userId, setId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setId(props.data);
  }, [props]);

  const onSubmit = async () => {
    console.log('ModalURL', balance);
    const obj = {
      balance: parseInt(balance),
    };
    await dispatch(addDonorFundAction(userId, obj));

    setBalance(0);
    props.onHide();
  };
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Balance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            className="form-control"
            onChange={e => setBalance(e.target.value)}
            value={balance}
          ></input>
          <div className="Del-btn">
            <button onClick={onSubmit} className="btn btn-primary">
              Add
            </button>
            <button onClick={() => props.onHide()} className="btn btn-danger">
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Addfund;
