import React from 'react';
import { Modal } from 'react-bootstrap';
import { BASE_URL } from '../../API/APIEndpoints';
import { useDispatch } from 'react-redux';
import {
  DeleteDonorByIdAction,
  getViewAllDonorAction,
} from '../../Redux/Actions/DonorActions';
const Donordelete = props => {
  const dispatch = useDispatch();
  const onDelete = async () => {
    const id = props.id;
    await dispatch(DeleteDonorByIdAction(id));
    props.onHide();
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
