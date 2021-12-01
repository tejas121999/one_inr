import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import '../../pages/Doner/Donor.css';
import { ADD_DONOR_FUND_URL, BASE_URL } from '../../API/APIEndpoints';

const Addfund = props => {
  const [balance, setBalance] = useState(0);
  const [userId, setId] = useState(0);

  useEffect(() => {
    setId(props.data);
  }, [props]);

  const onSubmit = async () => {
    const url = BASE_URL + `donor/balance/${userId}`;
    console.log('ModalURL', url, balance);
    const obj = {
      balance: parseInt(balance),
    };
    await axios
      .put(url, obj)
      .then(res => {
        console.log('fundAtt', res);
        setBalance(0);
        // props.getDonor();
        props.onHide();
      })
      .catch(err => {
        console.log(err);
      });
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
