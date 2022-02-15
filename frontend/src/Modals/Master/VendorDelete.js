import React from 'react';
import { Modal } from 'react-bootstrap';

import { BASE_URL } from '../../API/APIEndpoints';
import { useDispatch } from 'react-redux';
import { DeleteVendorByIdAction } from '../../Redux/Actions/MasterActions';

const Vendordelete = props => {
  const dispatch = useDispatch();
  const onDelete = async () => {
    const id = props.id;
    const Url = BASE_URL + `donor/${id}`;
    await dispatch(DeleteVendorByIdAction(id));
    props.onHide();
  };
  return (
    <React.Fragment>
      <Modal centered show={props.show} onHide={props.onHide} size="sm">
        <Modal.Body>
          <h3
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: '1.5rem',
            }}
          >
            Are You Sure?
          </h3>
          <p style={{ textAlign: 'center', fontSize: 20 }}>
            You want to delete Vendor?
          </p>
          <div className="Del-btn">
            <button
              onClick={() => onDelete()}
              className="btn"
              style={{
                color: 'white',
                backgroundColor: '#65AC12',
                width: '6em',
                borderRadius: '7px',
              }}
            >
              Yes!
            </button>
            <button
              onClick={() => props.onHide()}
              className="btn"
              style={{
                color: 'white',
                backgroundColor: '#AFAFAF',
                width: '6em',
                borderRadius: '7px',
              }}
            >
              No!
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Vendordelete;
