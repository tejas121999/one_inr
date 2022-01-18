import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
  Form,
} from 'react-bootstrap';
import { getConfigAction } from '../../Redux/Actions/SettingAction';
import { height } from '@mui/system';

const styles = {
  card: {
    width: 400,
    height: 200,
    marginTop: 30,
    marginLeft: 23,
  },
  button: {
    marginLeft: 260,
    marginTop: 40,
    height: 30,
    width: 100,
    fontSize: 13,
  },
  title: {
    fontSize: '18px',
    fontWeight: '500',
  },
  inputgroup: {
    marginTop: 30,
    height: 30,
    width: 360,
    fontSize: 12,
  },
  container: {
    marginTop: -20,
    color: 'black',
    backgroundColor: 'white',
  },
  heading: {
    marginBottom: -20,
  },
};

const Config = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfigAction());
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ border: '0' }}>
        <div
          style={{
            display: 'flex',
            padding: '15px',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontSize: '1.25rem',
              marginBottom: '0',
            }}
          >
            APP CONFIG
          </p>
        </div>
      </div>

      <Col>
        <Row>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Commision (%)</Card.Title>
              <InputGroup size="sm" style={styles.inputgroup}>
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />

                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>
                Feature Commission (%)
              </Card.Title>
              <InputGroup size="sm" style={styles.inputgroup}>
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Payment Gateway (%)</Card.Title>
              <InputGroup size="sm" style={styles.inputgroup}>
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>GST (%)</Card.Title>
              <InputGroup size="sm" style={styles.inputgroup}>
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Payment Gateway Name</Card.Title>
              <InputGroup size="sm" style={styles.inputgroup}>
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Home Project</Card.Title>
              <InputGroup>
                <FloatingLabel controlId="floatingSelectGrid">
                  <Form.Select
                    style={{
                      height: '31px',
                      width: '360px',
                      marginTop: '18px',
                      fontSize: '12px',
                      border: '1px solid #ced4da',
                      borderRadius: '0.25rem',
                    }}
                    aria-label="Floating label select example"
                  >
                    <option value="1">Feed cows with the grass of love</option>
                    <option value="2">Paying children education fees</option>
                    <option value="3">Sponsoring books for students</option>
                    <option value="4">feeding pigeons grains</option>
                    <option value="5">
                      Sponsoring stationary for students
                    </option>
                  </Form.Select>
                </FloatingLabel>
                <Button style={styles.button} variant="primary">
                  Update
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </>
  );
};

export default Config;
