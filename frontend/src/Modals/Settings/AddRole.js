import React from 'react';
import { Modal } from 'react-bootstrap';

const Addrole = props => {
  const handleChange = e => {
    console.log('Roles', e.target.value);
  };
  return (
    <React.Fragment>
      <Modal show={props.show}>
        <Modal.Header>
          <p style={{ fontWeight: 'bold', textAlign: 'left' }}>Add Role</p>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: '10px', paddingTop: '0px' }} className="row">
            <label>Role</label>
            <input
              type="text"
              className="form-control"
              // onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>
          {staticData &&
            staticData.map(data => (
              <div className="row">
                <div className="col-4">
                  <p>{data.title}</p>
                </div>
                <div className="col-4">
                  <input
                    value="ReadOnly"
                    onChange={e => handleChange(e)}
                    type="checkbox"
                  />
                  <label>Read-Only</label>
                </div>
                <div className="col-4">
                  <input
                    type="checkbox"
                    value="ReadWrite"
                    onChange={e => handleChange(e)}
                  />
                  <label>Read-Write</label>
                </div>
              </div>
            ))}
        </Modal.Body>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '20px',
          }}
        >
          <button className="btn btn-primary"> Submit</button>
          <button className="btn btn-danger" onClick={props.onHide}>
            {' '}
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

const staticData = [
  {
    title: 'Donor',
  },
  {
    title: 'NGO',
  },
  {
    title: 'Project',
  },
  {
    title: 'Accounts',
  },
];
export default Addrole;
