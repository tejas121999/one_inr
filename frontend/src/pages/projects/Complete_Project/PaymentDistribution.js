import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

function PaymentDistribution() {
  const [key, setKey] = useState('vendor');
  //   const { Formik } = formik;

  const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
  });

  return (
    <div
      style={{
        padding: '25px',
        backgroundColor: 'white',
      }}
    >
      {/* <Tabs
       Container defaultActiveKey="vendor">
           <Row>
                <Col sm={3}>

                  <Nav variant="pills" className="flex-column">

                    <Nav.Item>
                      <Nav.Link eventKey="vendor">Vendor Payment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="partner">Partner Payment</Nav.Link>
                    </Nav.Item>
                  </Nav>

                </Col>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: 'Mark',
            lastName: 'Otto',
            username: '',
            city: '',
            state: '',
            zip: '',
            terms: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <div>
                <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="vendor" title="Vendor Payment">
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="partner" title="Partner Payment ">
                  <h1>Partner</h1>
                </Tab.Pane>
              </Tab.Content>
              </Col>
            </div>
          )}
        </Formik>
        </Row>
      </Tabs> */}
      <Tabs activeKey={key} onSelect={k => setKey(k)} className="mb-3">
        <Tab eventKey="vendor" title="Vendor Payment">
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: 'sHIVAM',
              lastName: '',
              username: '',
              city: '',
              state: '',
              zip: '',
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <div>
                {/* <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="vendor" title="Vendor Payment"> */}
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01" className="mb-3">
                    <Form.Label>Vendor List:</Form.Label>
                    <br />
                    <Form.Select
                      name="vendor"
                      value={values.vendor}
                      onChange={handleChange}
                      isValid={touched.vendor && !errors.vendor}
                      style={{
                        height: '2.5em',
                        width: '100%',
                        border: '1px solid #ced4da',
                        // transition:
                        //   'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                        borderRadius: '0.25rem',
                      }}
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik02" className="mb-3">
                    <Form.Label>Amount To Pay:</Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      isValid={touched.amount && !errors.amount}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik03" className="mb-3">
                    <Form.Label>Payment Description:</Form.Label>
                    <Form.Control
                      value={values.description}
                      onChange={handleChange}
                      isValid={touched.description && !errors.description}
                      as="textarea"
                      name="description"
                      rows={5}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
                {/* </Tab.Pane>
              </Tab.Content>
              </Col> */}
              </div>
            )}
          </Formik>
        </Tab>
        <Tab eventKey="partner" title="Partner Payment">
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: 'Mark',
              lastName: 'Otto',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <div>
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01" className="mb-3">
                    <Form.Label>Partner List:</Form.Label>
                    <br />
                    <Form.Select
                      name="vendor"
                      value={values.vendor}
                      onChange={handleChange}
                      isValid={touched.vendor && !errors.vendor}
                      style={{
                        height: '2.5em',
                        width: '100%',
                        border: '1px solid #ced4da',
                        borderRadius: '0.25rem',
                      }}
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik02" className="mb-3">
                    <Form.Label>Amount To Pay:</Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      isValid={touched.amount && !errors.amount}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik03" className="mb-3">
                    <Form.Label>Payment Description:</Form.Label>
                    <Form.Control
                      value={values.description}
                      onChange={handleChange}
                      isValid={touched.description && !errors.description}
                      as="textarea"
                      name="description"
                      rows={5}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit">Submit</Button>
                </Form>
              </div>
            )}
          </Formik>
        </Tab>
      </Tabs>
    </div>
  );
}

export default PaymentDistribution;
