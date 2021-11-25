import React from "react";
import { Modal } from "react-bootstrap";
import axios from 'axios';

const Viewdonormodal = (props) => {
  console.log("Props", props.data.name);
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    // const id = props.match.params.id
    axios.get('' 
    // + id
    )
      .then(res => {
        console.log(res)
        setData([res.data])
      })
      .catch(err => {
        console.log(err)
      })
  };

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
                  <td>{user.email}</td>
                </tr>
              </div>
            ))}


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
      </Modal>
    </React.Fragment>
  );
};

export default Viewdonormodal;
