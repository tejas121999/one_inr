import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card
} from 'react-bootstrap';
import { getConfigAction, updateConfigAction } from '../../Redux/Actions/SettingAction';
import { height } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { getAllProjectAction } from '../../Redux/Actions/ProjectActions';

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

  let configData = useSelector(state => state.setting.getConfig)
  console.log('config', configData)
  useEffect(() => {
    dispatch(getConfigAction());
  }, []);



  // commition
  const [Commision, setCommition] = useState('')
  const { commission } = Commision
  const onCommisionChange = e => {
    setCommition({ ...Commision, [e.target.name]: e.target.value });
  }
  const submitCommition = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(Commision))
  }

  // Feature Commission (%)
  const [FeatureCommission, setFeatureCommission] = useState('')
  const { feature_commision } = FeatureCommission
  const onFeatureCommisionChange = e => {
    setFeatureCommission({ ...FeatureCommission, [e.target.name]: e.target.value });
  }
  const submitFeatureCommition = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(FeatureCommission))
  }

  // payment_gateway_percentage
  const [PaymentGateway, setPaymentgatewaypercentage] = useState('')
  const { payment_gateway_percentage } = PaymentGateway
  const onPaymentgatewaypercentage = e => {
    setPaymentgatewaypercentage({ ...PaymentGateway, [e.target.name]: e.target.value })
  }
  const submitPaymentgatewaypercentage = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(PaymentGateway))
  }

  // gst 
  const [GstCommission, setGstCommission] = useState('')
  const { gst } = GstCommission
  const onGstChange = e => {
    setGstCommission({ ...GstCommission, [e.target.name]: e.target.value });
  }
  const submitGst = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(GstCommission))
  }

  // payment_gateway_name
  const [paymentgatewayname, setPaymentgatewayname] = useState('')
  const { payment_gateway_name } = paymentgatewayname
  const onPaymentgatewaynameChange = e => {
    setPaymentgatewayname({ ...paymentgatewayname, [e.target.name]: e.target.value });
  }
  const submitPaymentgatewayname = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(paymentgatewayname))
  }

  // home project
  useEffect(() => {
    dispatch(getAllProjectAction(''))
  }, []);

  let getProject = useSelector(state => state.project.projectList)
  console.log(getProject);

  const [homeProject, setHomeproject] = useState('')
  const { home_project } = homeProject
  const onHomeProjectChange = e => {
    setHomeproject({ ...homeProject, [e.target.name]: e.target.value })
  }

  const submitHomeProject = (e) => {
    e.preventDefault();
    dispatch(updateConfigAction(homeProject))
  }



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
              <Formik>
                <Form onSubmit={submitCommition}>
                  <Field
                    name="commission"
                    className='form-control'
                    value={commission}
                    onChange={onCommisionChange}
                  />

                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>
                Feature Commission (%)
              </Card.Title>
              <Formik>
                <Form onSubmit={submitFeatureCommition}>
                  <Field
                    name="feature_commision"
                    className='form-control'
                    value={feature_commision}
                    onChange={onFeatureCommisionChange}
                  />
                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Payment Gateway (%)</Card.Title>
              <Formik>
                <Form onSubmit={submitPaymentgatewaypercentage}>
                  <Field
                    name="payment_gateway_percentage"
                    className='form-control'
                    value={payment_gateway_percentage}
                    onChange={onPaymentgatewaypercentage}
                  />
                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>GST (%)</Card.Title>
              <Formik>
                <Form onSubmit={submitGst}>
                  <Field
                    name="gst"
                    className='form-control'
                    value={gst}
                    onChange={onGstChange}
                  />
                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>

              </Formik>
            </Card.Body>
          </Card>

          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Payment Gateway Name</Card.Title>
              <Formik>
                <Form onSubmit={submitPaymentgatewayname}>
                  <Field
                    name='payment_gateway_name'
                    className='form-control'
                    value={payment_gateway_name}
                    onChange={onPaymentgatewaynameChange}
                  />
                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.title}>Home Project</Card.Title>
              <Formik>
                <Form
                  onSubmit={submitHomeProject}
                >
                  <select
                    name='home_prject'
                    className='form-control'
                    value={home_project}
                    onChange={onHomeProjectChange}
                  >
                    {getProject && getProject.map(row => (
                      <option value={row.title}>{row.title}</option>
                    ))}
                  </select>
                  <button
                    class="btn btn-success"
                    style={{
                      marginRight: '10px',
                      marginBottom: '10px',
                    }}
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </>
  );
};

export default Config;
