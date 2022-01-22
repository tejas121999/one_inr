import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  GetRazorpayByIdAction,
  updateRazorpayByIdAction,
} from '../../Redux/Actions/SettingAction';

const EditRazorpay = props => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    key_id: Yup.string().required('The Razorpay Key Field Is Required.'),
    key_secret: Yup.string().required('The Razorpay Secret Field Is Required.'),
    status: Yup.string(),
  });

  const onUpdateRazor = async values => {
    console.log(values, 'shiv');
    dispatch(updateRazorpayByIdAction(props.result.id, values, props.history));
  };
  useEffect(id => {
    dispatch(GetRazorpayByIdAction(id));
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
            EDIT RAZORPAY CREDENTIALS
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
          onSubmit={values => onUpdateRazor(values)}
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
              <Form>
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
                        value={values.key_id}
                        onChange={handleChange}
                        isValid={touched.key_id && !errors.key_id}
                      />
                      {errors.key_id && touched.key_id && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.key_id}</span>
                        </div>
                      )}
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
                        value={values.key_secret}
                        onChange={handleChange}
                        isValid={touched.key_secret && !errors.key_secret}
                      />
                      {errors.key_secret && touched.key_secret && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>
                            {errors.key_secret}
                          </span>
                        </div>
                      )}
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
                        <option value="1" label="Enabled" />
                        <option value="0 " label="Disabled" />
                      </select>
                      {errors.status && touched.status && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.status}</span>
                        </div>
                      )}{' '}
                    </Form.Group>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ padding: '1em', marginLeft: '1px' }}
                >
                  <Link to="/razorpay_credentials">
                    <Button type="submit" className="btn btn-success">
                      Submit
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditRazorpay;
