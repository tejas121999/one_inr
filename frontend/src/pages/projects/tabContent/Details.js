import React from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import TextEditor from '../TextEditor';
import { Field, Form, Formik } from 'formik';
import NumericInput from 'react-numeric-input';

const Details = () => {
    return (
        <div>
            <div className='tab-content'>
                <div className='row'>
                    <div className='col-12'>
                        <Formik>
                            <Form>
                                <div className='row'>
                                    <div className="col-4">
                                        <div className="input-box">
                                            <label style={{ fontWeight: 'bold' }}>
                                                Extend Date:
                                            </label>
                                            <Field
                                                className="form-control"
                                                name="extenddate:"
                                                type="date"
                                                required
                                                autocomplete="off"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Title:
                                            </label>
                                            <Field
                                                className="form-control"
                                                name="title"
                                                type="text"
                                                required
                                                placeholder="title"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                        <hr style={{ borderWidth: "2px", borderColor: "rgb(0, 2, 0)" }} className='mt-4' />
                                    </div>
                                    <div className='col-8'>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Description:
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="title"
                                                type='textarea'
                                                row="2"
                                                col="50"
                                                required
                                                placeholder="Description"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Gole
                                            </label>
                                            <NumericInput
                                                className="form-control"
                                                min='1'
                                                value='401'
                                            />
                                        </div>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Commission (%):
                                            </label>
                                            <NumericInput
                                                className="form-control"
                                                min='1'
                                                value='10'
                                            />
                                        </div>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Target:
                                            </label>
                                            <NumericInput
                                                className="form-control"
                                                style={false}
                                                value='501'
                                                readOnly
                                            />
                                        </div>
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                        <hr style={{ borderWidth: "2px", borderColor: "rgb(0, 2, 0)" }} className='mt-4' />
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Recurring days:
                                            </label>
                                            <NumericInput
                                                className="form-control"
                                                // style={false}
                                                value='7'
                                            // readOnly
                                            />
                                        </div>
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className='input-box'>
                                            <label style={{ fontWeight: 'bold' }}>
                                                Long Description:
                                            </label>
                                            <TextEditor />
                                        </div>
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
