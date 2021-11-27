import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL, VIEW_DONER_ID_URL } from '../../API/APIEndpoints';

const Viewdonormodal = props => {
  console.log('Props', props.data.name);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const id = props.id;
    axios
      .get(BASE_URL + `/api/donor/${id}`)
      .then(res => {
        console.log(res);
        setData([res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Donor Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            {data.map(user => (
              <div>
                <tr>
                  <td>Name</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.donated}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Total Amount Donated</td>
                  <td>{user.donated}</td>
                </tr>
                <tr>
                  <td>Balance</td>
                  <td>{user.balance}</td>
                </tr>
              </div>
            ))}
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

export default Viewdonormodal;
