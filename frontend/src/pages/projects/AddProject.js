import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import './project.css';
import TextEditor from './TextEditor';
import TextField from '@material-ui/core/TextField';
import TextError from '../error/TextError';
import DatePicker from 'react-date-picker';

const AddProject = () => {
  const [value, onChange] = useState(new Date());
  const [key, setKey] = React.useState('no');

  const validationSchema = yup.object({
    title: yup.string().required('Required'),
    description: yup.string().required('Required'),
    gole: yup.string().required('Required'),
  });

  return (
    <div>
      <br />
      <be />
      <br />
      <br />
      <div className="card">
        <div
          style={{
            display: 'flex',
            padding: '2px',
            justifyContent: 'space-betwee n',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              marginLeft: '20px',
            }}
          >
            ADD PROJECT
          </p>
        </div>
      </div>
      <div className="AddDoner mb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="white-box">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <Formik
                    initialValues={{
                      title: '',
                      description: '',
                      gole: '',
                      startDate: '',
                      endDate: '',
                    }}
                    validationSchema={validationSchema}
                    onSelect={k => setKey(k)}
                  >
                    {({ values, errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-sm-12 col-xs-12">
                            <label style={{ fontWeight: 'bold' }}>Title:</label>
                            <Field
                              type="text"
                              name="title"
                              placeholder="No Parent"
                              className="form-control"
                              // value={values.parent}
                              list="parentList"
                            />
                            {errors.title && touched.title && (
                              <div className="text-left">
                                <span style={{ color: 'red' }}>
                                  {errors.title}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="col-sm-12 col-xs-12 mt-3">
                            <label style={{ fontWeight: 'bold' }}>
                              Description: (Max 144 char)
                            </label>
                            <textarea
                              type="textarea"
                              name="description"
                              row="2"
                              col="50"
                              // placeholder="No Parent"
                              className="form-control"
                              // value={values.parent}
                              list="parentList"
                            />
                            <ErrorMessage
                              name="logo_img"
                              component={TextError}
                            />
                          </div>
                          <div className="col-sm-12 col-xs-12 mt-3">
                            <label style={{ fontWeight: 'bold' }}>
                              Is this project recurring?
                            </label>
                            <label style={{ marginLeft: '3cm' }}>
                              <Field
                                type="radio"
                                name="recurring"
                                value="yes"
                                eventKey="yes"
                              />
                            </label>
                            <label style={{ marginLeft: '5px' }}>
                              <Field
                                type="radio"
                                name="recurring"
                                value="no"
                                eventKey="no"
                              />
                            </label>

                            <div style={{ visibility: 'visible' }}>
                              <div className="col-xs-12 col-md-3 p-l-0">
                                {values.recurring}
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-4 col-xs-12">
                                <label>Gole:</label>
                                <Field
                                  type="text"
                                  name="gole"
                                  placeholder="No Parent"
                                  className="form-control"
                                  // value={values.parent}
                                  list="parentList"
                                />
                                {errors.gole && touched.gole && (
                                  <div className="text-left">
                                    <span style={{ color: 'red' }}>
                                      {errors.gole}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <label>Start Date:</label>
                                <br />
                                <DatePicker
                                  className="form-control"
                                  onChange={onChange}
                                  value={value}
                                />
                                {errors.startDate && touched.startDate && (
                                  <div className="text-left">
                                    <span style={{ color: 'red' }}>
                                      {errors.startDate}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <label>End Date:</label>
                                <DatePicker
                                  className="form-control"
                                  onChange={onChange}
                                  // value={value}
                                />
                                {errors.endDate && touched.endDate && (
                                  <div className="text-left">
                                    <span style={{ color: 'red' }}>
                                      {errors.endDate}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Video Embed Link:
                                </label>
                                <Field
                                  type="text"
                                  name="videoLink"
                                  placeholder="No Parent"
                                  className="form-control"
                                  // value={values.parent}
                                  list="parentList"
                                />
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Long Description:
                                </label>
                                <TextEditor />
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Select NGO:
                                </label>
                                <input
                                  class="form-control"
                                  list="datalistOptions"
                                  id="exampleDataList"
                                  placeholder="Type to search..."
                                />
                                <datalist id="datalistOptions">
                                  <option value="San Francisco" />
                                  <option value="New York" />
                                  <option value="Seattle" />
                                  <option value="Los Angeles" />
                                  <option value="Chicago" />
                                </datalist>
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Feature Image (Image on banner)*:
                                </label>
                                <br />
                                <label>Note:</label>
                                Image dimensions must be 1024(i.e. width) *
                                768(i.e. height)
                                <div className="col-sm-4 col-xs-12 mt-3">
                                  <DropzoneComponent />
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Cover Image (Image in tile)*:
                                </label>
                                <br />
                                <label>Note:</label>
                                Image dimensions must be 1024(i.e. width) *
                                768(i.e. height)
                                <div className="col-sm-4 col-xs-12 mt-3">
                                  <DropzoneComponent />
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Mobile Image (Image on Mobile):
                                </label>
                                <br />
                                <label>Note:</label>
                                Image dimensions must be 1024(i.e. width) *
                                768(i.e. height)
                                <div className="col-sm-4 col-xs-12 mt-3">
                                  <DropzoneComponent />
                                </div>
                              </div>
                              <div className="col-sm-12 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Slider Images (Images on detailed page)*:
                                </label>
                                <br />
                                <label>Note:</label>
                                Image dimensions must be 1024(i.e. width) *
                                768(i.e. height)
                              </div>
                              <div className="row">
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                                <div className="col-sm-4 col-xs-4 mt-3">
                                  <DropzoneComponent />
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12 mt-3">
                                <label style={{ fontWeight: 'bold' }}>
                                  Commision (%):
                                </label>
                                <input
                                  class="form-control"
                                  list="datalistOptions"
                                  id="exampleDataList"
                                  placeholder="Type to search..."
                                />
                                <datalist id="datalistOptions">
                                  <option value="San Francisco" />
                                  <option value="New York" />
                                  <option value="Seattle" />
                                  <option value="Los Angeles" />
                                  <option value="Chicago" />
                                </datalist>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginLeft: '12px', marginTop: '20px' }}>
                          <button type="submit" className="btn btn-success">
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
