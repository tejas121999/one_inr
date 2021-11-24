import React from "react";
import { Modal } from "react-bootstrap";

const Addfund = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Balance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="number" className="form-control"></input>
          <button style={{ margin: "20px" }} className="btn btn-primary">
            Add
          </button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Addfund;
