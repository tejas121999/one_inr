import React from 'react';
import { useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const SingleProjectDetails = (props) => {
    const [key, setKey] = React.useState('details');


    const dispatch = useDispatch();

    return (
        <>
            <div>
                <br />
                <br />
                <br />
                <div className="card">
                    <p
                        style={{
                            textAlign: 'left',
                            fontWeight: 'bold',
                            margin: '20px',
                            width: '100%',
                            marginLeft: '20px',
                        }}
                    >
                        PROJECT DETAILS
                    </p>
                </div>
            </div>

            <div style={{
                padding: '20px',
                margin: '20px'
            }}>
                <div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="details" title="Details" >


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
        </>
    )
}

export default SingleProjectDetails
