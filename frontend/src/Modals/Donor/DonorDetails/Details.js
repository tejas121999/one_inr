import React from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import Projects from './projects';
import Transaction from './transaction';
import '../../../pages/Doner/Donor.css';

const Details = props => {
  return (
    <>
      <Modal
        size="lg"
        scrollable
        aria-labelledby="example-modal-sizes-title-lg"
        show={props.show}
        fullscreen
        onHide={props.onHide}
      >
        <Modal.Header>
          <Modal.Title>Donor Details</Modal.Title>
          <button className="btn btn-danger" onClick={() => props.onHide()}>
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="Projects" id="uncontrolled-tab-example">
            <Tab eventKey="Projects" title="Projects">
              <Projects />
            </Tab>
            <Tab eventKey="Transaction" title="Transaction">
              <Transaction />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Details;
