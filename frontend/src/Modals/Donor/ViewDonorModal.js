import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
<<<<<<< HEAD

const Viewdonormodal = (props) => {
  console.log("Props", props.data.name);
=======
import axios from 'axios';
import { BASE_URL, VIEW_DONER_ID_URL } from "../../API/APIEndpoints";

const Viewdonormodal = (props) => {
  console.log("Props", props.data.name);
  const [data, setData] = React.useState([])

  useEffect(() => {
    const id = props.id;
    axios.get(BASE_URL + `/api/donor/${id}`)
      .then(res => {
        console.log(res)
        setData([res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  console.log(data)
>>>>>>> origin/Dev_tejas
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Donor Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/Dev_tejas
          </table>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Viewdonormodal;
