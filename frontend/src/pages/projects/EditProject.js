import { Field, Form, Formik } from 'formik';
import NumericInput from 'react-numeric-input';
import React from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import TextEditor from './TextEditor';
import Details from './tabContent/Details';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';

const EditProject = () => {
    const [key, setKey] = React.useState('details');

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
                        EDIT PROJECT
                    </p>
                </div>
            </div>
            <div className='editproject'>
                <div className='white-box'>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="details" title="Details" >
                            <Details />
                        </Tab>
                        <Tab eventKey="featureimage" title="Feature Image" >
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='col-sm-4'>
                                        <label style={{ fontWeight: 'bold' }}>
                                            Feature Image:
                                        </label>
                                        <DropzoneComponent />
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="coverimage" title="Cover Image" >
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='col-sm-4'>
                                        <label style={{ fontWeight: 'bold' }}>
                                            Cover Image:
                                        </label>
                                        <DropzoneComponent />
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="mobileimage" title="Mobile Image" >
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='col-sm-4'>
                                        <label style={{ fontWeight: 'bold' }}>
                                            Mobile Image:
                                        </label>
                                        <DropzoneComponent />
                                        <div className='input-box'>
                                            <Button variant="success">Update</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="siderimage" title="Sider Image" >
                            <label style={{ fontWeight: 'bold' }}>
                                Slider Image:
                            </label>
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
                            <div className='input-box'>
                                <Button variant="success">Update</Button>
                            </div>

                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>

    )
}

export default EditProject
