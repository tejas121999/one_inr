import React from 'react';
import { Modal } from 'react-bootstrap';

const Addfund = props => {

    return (
        <React.Fragment>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Receipt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='form-group'>
                            <label>Receipt</label>
                            <input type='file' class="form-control" />
                        </div>
                        <button type="button" class="btn btn-light">close</button>
                        <button type="submit" class="btn btn-primary">save change</button>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default Addfund;
