import React from 'react'
import { Carousel, Nav, Tab, Tabs } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


const ProjectDetails = () => {
    const history = useHistory();
    const [key, setKey] = React.useState('details');
    const [projectkey, setProjectKey] = React.useState('project_Details');


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
                        PROJECT DETAIL
                    </p>
                </div>
            </div>
            <div className='projectDetails'>
                <div className='white-box'>
                    <div className='row'>
                        <div className='col-mb-12'>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="details" title="Details" >
                                    <div className='row'>
                                        <div className='col-4'>
                                            <Carousel nextLabel={null} prevLabel={null}>

                                            </Carousel>
                                        </div>

                                        <div className='col-8'>
                                            <br />
                                            <br />
                                            <Tabs
                                                id="controlled-tab-example"
                                                activeKey={projectkey}
                                                onSelect={(k) => setProjectKey(k)}
                                                className="mb-3"
                                            >
                                                <Tab eventKey="project_Details" title="Project Details" >
                                                    <p className='m-t-30'>1INR has collaborated with Hunger Project by Lions Club of Millennials and
                                                        Lions Club of Churchgate Mumbai supported by Roti Bank.</p>
                                                    <b>
                                                        About Project
                                                        <br />
                                                    </b>
                                                    <p className='p1'>
                                                        <span style={{}}></span>
                                                    </p>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contributors" title="Contributors" >
                                    <br />
                                    <div>
                                        <h1 align={'center'}> No Contribution Yet </h1>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
