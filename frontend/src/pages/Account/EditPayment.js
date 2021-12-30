import React from 'react';
import { Modal } from 'react-bootstrap';

const Addfund = props => {

    return (
        <React.Fragment>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>edit vendor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>edit vender</h1>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Addfund;
