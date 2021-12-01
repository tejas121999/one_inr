import React from 'react';
import { Modal } from 'react-bootstrap';
import '../../pages/Doner/Donor.css';
import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';
const Donordelete = props => {
  const onDelete = async () => {
    const id = props.id;
    const Url = BASE_URL + `donor/${id}`;
    await axios
      .delete(Url)
      .then(res => {
        alert('deleted');

        props.onHide();
      })
      .catch(err => {
        alert('err');
      });
  };
  return (
    <React.Fragment>
      <Modal centered show={props.show} onHide={props.onHide}>
        <Modal.Body>
          <h3 style={{ textAlign: 'center' }}>Are You Sure?</h3>
          <p style={{ textAlign: 'center' }}>You want to delete Donar?</p>
          <div className="Del-btn">
            <button onClick={() => props.onHide()} className="btn btn-light">
              No!
            </button>
            <button onClick={() => onDelete()} className="btn btn-danger">
              Yes!
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Donordelete;
