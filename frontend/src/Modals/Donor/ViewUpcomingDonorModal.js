import React from 'react';
import { Modal } from 'react-bootstrap';

const ViewUpcomingdonormodal = props => {
  console.log('Props', props.data);
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Donor Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tr>
              <td>Name</td>
              <td>{props.data.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{props.data.email}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{props.data.email}</td>
            </tr>
            <tr>
              <td>Total Amount Donated</td>
              <td>{props.data.donated}</td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>{props.data.balance}</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={() => props.onHide()}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ViewUpcomingdonormodal;
