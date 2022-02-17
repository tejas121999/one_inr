import React from 'react'
import { Button } from 'react-bootstrap'
import TextEditor from '../TextEditor';
import { Field, Form, Formik } from 'formik';
import NumericInput from 'react-numeric-input';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const Details = () => {
    return (
        <div>
            <div className='tab-content'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col'>
                                <Formik
                                    initialValues={{
                                        endDate: ''
                                    }}
                                >
                                    <Form>
                                        <div className="input-box">
                                            <label style={{ fontWeight: 'bold' }}>
                                                Extend Date:
                                            </label>
                                            <Field
                                                className="form-control"
                                                name="endDate"
                                                type="date"
                                                required
                                                autocomplete="off"
                                            />
                                            <div
                                                style={{
                                                    padding: '15px 0 10px',
                                                    display: 'flex',
                                                    justifyContent: 'start',
                                                }}
                                            >
                                                <button
                                                    className="btn btn-primary"
                                                    style={{ width: '6rem', borderRadius: '0.4em' }}
                                                    type="submit"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                                <hr style={{ borderWidth: "2px", borderColor: "rgb(0, 2, 0)" }} className='mt-4' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='input-box'>
                                    <label style={{ fontWeight: 'bold' }}>
                                        goal
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
                                    <div
                                        style={{
                                            padding: '15px 0 10px',
                                            display: 'flex',
                                            justifyContent: 'start',
                                        }}
                                    >
                                        <button
                                            className="btn btn-primary"
                                            style={{ width: '6rem', borderRadius: '0.4em' }}
                                            type="submit"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <hr style={{ borderWidth: "2px", borderColor: "rgb(0, 2, 0)" }} className='mt-4' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
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
                                    <div
                                        style={{
                                            padding: '15px 0 10px',
                                            display: 'flex',
                                            justifyContent: 'start',
                                        }}
                                    >
                                        <button
                                            className="btn btn-primary"
                                            style={{ width: '6rem', borderRadius: '0.4em' }}
                                            type="submit"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <Formik>
                            <Form>
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
                                <div className='input-box'>
                                    <label style={{ fontWeight: 'bold' }}>
                                        Long Description:
                                    </label>
                                    <SunEditor
                                        // setContents="My contents"
                                        // value={longDesc}
                                        showToolbar={true}
                                        // onChange={Desc => {
                                        //     setLongDesc(Desc);
                                        // }}
                                        setDefaultStyle="height: auto"
                                        setOptions={{
                                            buttonList: [
                                                [
                                                    'bold',
                                                    'underline',
                                                    'italic',
                                                    'strike',
                                                    'list',
                                                    'align',
                                                    'fontSize',
                                                    'formatBlock',
                                                    'table',
                                                    'image',
                                                ],
                                            ],
                                        }}
                                    />
                                    <div
                                        style={{
                                            padding: '15px 0 10px',
                                            display: 'flex',
                                            justifyContent: 'start',
                                        }}
                                    >
                                        <button
                                            className="btn btn-primary"
                                            style={{ width: '6rem', borderRadius: '0.4em' }}
                                            type="submit"
                                        >
                                            Add
                                        </button>
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
