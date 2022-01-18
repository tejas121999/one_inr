import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DeleteNgoByIdAction } from '../../../Redux/Actions/NgoActions';

const DeleteNgo = props => {
  const dispatch = useDispatch();
  const onDelete = async () => {
    const id = props.id;
    await dispatch(DeleteNgoByIdAction(id));
    props.onHide();
  };

  return (
    <React.Fragment>
      <Modal centered show={props.show} onHide={props.onHide}>
        <Modal.Body>
          <h3 style={{ textAlign: 'center' }}>Are You Sure?</h3>
          <p style={{ textAlign: 'center' }}>You want to delete Ngo?</p>
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

export default DeleteNgo;
