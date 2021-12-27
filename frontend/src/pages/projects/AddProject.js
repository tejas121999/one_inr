import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import DropzoneComponent from '../../components/Layout/DropzoneComponent'
import './project.css'
import TextEditor from './TextEditor'

const AddProject = () => {

    const [value, setValue] = useState()

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
            <div className='AddDoner'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='white-box'>
                            <div className='row'>
                                <div className='col-sm-12 col-xs-12'>
                                    <Formik
                                        initialValues={{
                                            recurring: 'no'
                                        }}
                                    >
                                        {({ values }) => (
                                            <Form>
                                                <div className='row'>
                                                    <div className='col-sm-12 col-xs-12'>
                                                        <label style={{ fontWeight: 'bold' }}>Title:</label>
                                                        <Field
                                                            type="text"
                                                            name="parent"
                                                            placeholder="No Parent"
                                                            className="form-control"
                                                            // value={values.parent}
                                                            list="parentList"
                                                        />
                                                    </div>

                                                    <div className='col-sm-12 col-xs-12 mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Description: (Max 144 char)</label>
                                                        <textarea
                                                            type="textarea"
                                                            name="parent"
                                                            row="2"
                                                            col="50"
                                                            // placeholder="No Parent"
                                                            className="form-control"
                                                            // value={values.parent}
                                                            list="parentList"
                                                        />
                                                    </div>
                                                    <div className='col-sm-12 col-xs-12 mt-3'>
                                                        <label style={{ fontWeight: 'bold' }}>Is this project recurring?</label>
                                                        <label style={{ marginLeft: '3cm' }}>
                                                            <Field type="radio" name="recurring" value="yes" id='1' />
                                                            Yes
                                                        </label>
                                                        <label style={{ marginLeft: '5px' }}>
                                                            <Field type="radio" name="recurring" value="no" id='2' />
                                                            No
                                                        </label>

                                                        <div style={{ visibility: "visible" }}>
                                                            <div className='col-xs-12 col-md-3 p-l-0'>
                                                                {values.recurring}
                                                            </div>
                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className='col-sm-4 col-xs-12'>
                                                                <label>Gole:</label>
                                                                <Field
                                                                    type="text"
                                                                    name="parent"
                                                                    placeholder="No Parent"
                                                                    className="form-control"
                                                                    // value={values.parent}
                                                                    list="parentList"
                                                                />
                                                            </div>
                                                            <div className='col-sm-4 col-xs-12'>
                                                                <label>Start Date:</label>
                                                                <Field
                                                                    type="text"
                                                                    name="parent"
                                                                    placeholder="No Parent"
                                                                    className="form-control"
                                                                    // value={values.parent}
                                                                    list="parentList"
                                                                />
                                                            </div>
                                                            <div className='col-sm-4 col-xs-12'>
                                                                <label>End Date:</label>
                                                                <Field
                                                                    type="text"
                                                                    name="parent"
                                                                    placeholder="No Parent"
                                                                    className="form-control"
                                                                    // value={values.parent}
                                                                    list="parentList"
                                                                />
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Video Embed Link:</label>
                                                                <Field
                                                                    type="text"
                                                                    name="parent"
                                                                    placeholder="No Parent"
                                                                    className="form-control"
                                                                    // value={values.parent}
                                                                    list="parentList"
                                                                />
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Long Description:</label>
                                                                <TextEditor />
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Select NGO:</label>
                                                                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                                                <datalist id="datalistOptions" >
                                                                    <option value="San Francisco" />
                                                                    <option value="New York" />
                                                                    <option value="Seattle" />
                                                                    <option value="Los Angeles" />
                                                                    <option value="Chicago" />
                                                                </datalist>
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Feature Image (Image on banner)*:</label>
                                                                <br />
                                                                <label>Note:</label>
                                                                Image dimensions must be 1024(i.e. width) * 768(i.e. height)
                                                                <div className='col-sm-4 col-xs-12 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Cover Image (Image in tile)*:</label>
                                                                <br />
                                                                <label>Note:</label>
                                                                Image dimensions must be 1024(i.e. width) * 768(i.e. height)
                                                                <div className='col-sm-4 col-xs-12 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Mobile Image (Image on Mobile):</label>
                                                                <br />
                                                                <label>Note:</label>
                                                                Image dimensions must be 1024(i.e. width) * 768(i.e. height)
                                                                <div className='col-sm-4 col-xs-12 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-12 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Slider Images (Images on detailed page)*:</label>
                                                                <br />
                                                                <label>Note:</label>
                                                                Image dimensions must be 1024(i.e. width) * 768(i.e. height)
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                                <div className='col-sm-4 col-xs-4 mt-3'>
                                                                    <DropzoneComponent />
                                                                </div>
                                                            </div>
                                                            <div className='col-sm-4 col-xs-12 mt-3'>
                                                                <label style={{ fontWeight: 'bold' }}>Commision (%):</label>
                                                                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                                                <datalist id="datalistOptions" >
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
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default AddProject
