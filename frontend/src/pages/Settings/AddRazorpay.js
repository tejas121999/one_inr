import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addRazorpayAction } from '../../Redux/Actions/SettingAction';

const AddRazorpay = props => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    key_id: Yup.string().required('The Razorpay Key Field Is Required.'),
    key_secret: Yup.string().required('The Razorpay Secret Field Is Required.'),
    status: Yup.string(),
  });

  const onAddRazor = async values => {
    console.log(values, 'add');

    dispatch(addRazorpayAction(values, props.history));
  };
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
            ADD RAZORPAY CREDENTIALS
          </p>
        </div>
      </div>
      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
        }}
      >
        <Formik
          validationSchema={schema}
          onSubmit={values => onAddRazor(values)}
          initialValues={{
            key_id: '',
            key_secret: '',
            status: '',
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
                <div className="row" style={{ padding: '1em' }}>
                  <div className="col-md-6 col-xs-12">
                    <Form.Group
                    //   className="mb-3 mt-3 col-md-6 col-xs-12"
                    //   style={{ paddingLeft: '1px' }}
                    >
                      <Form.Label>RAZORPAY KEY:</Form.Label>
                      <br />
                      <Form.Control
                        type="text"
                        name="key_id"
                        value={values.key}
                        onChange={handleChange}
                        isValid={touched.key && !errors.key}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <Form.Group
                    //   className="mb-3 mt-3 col-md-6 col-xs-12"
                    //   style={{ paddingLeft: '1px' }}
                    >
                      <Form.Label>RAZORPAY SECRET:</Form.Label>
                      <Form.Control
                        type="text"
                        name="key_secret"
                        value={values.secret}
                        onChange={handleChange}
                        isValid={touched.secret && !errors.secret}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div className="row" style={{ padding: '1em' }}>
                  <div className="col-md-6 col-xs-12">
                    <Form.Group>
                      <Form.Label>Status:</Form.Label>
                      <select
                        name="status"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '2.5em',
                        }}
                      >
                        <option value="1" label="Active" />
                        <option value="0 " label="Disabled" />
                      </select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ padding: '1em', marginLeft: '1px' }}
                >
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddRazorpay;
