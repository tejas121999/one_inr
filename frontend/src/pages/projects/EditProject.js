import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button, Tab, Tabs } from 'react-bootstrap';
import Details from './tabContent/Details';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { updateProjectAction, getProjectByIdAction } from '../../Redux/Actions/ProjectActions';
import { useDispatch, useSelector } from 'react-redux';

const EditProject = (props) => {
  const [key, setKey] = React.useState('details');

  const [bannerImgURL, setbannerImgURL] = useState('');
  const [coverImgURL, setCoverImg] = useState('');
  const [mobileImgURL, setMoileImg] = useState('');
  const [sliderone, setSliderone] = useState('');
  const [slidertwo, setSlidertwo] = useState('');
  const [sliderthree, setSliderthree] = useState('');
  const [sliderfour, setSliderfour] = useState('');
  const [sliderfive, setSliderfive] = useState('');
  const [slidersix, setSlidersix] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectByIdAction(props.location.state.id));
  }, []);

  let projectById = useSelector(state => state.project.projectDetails.project_image);
  console.log('s', projectById);

  const onEdit = values => {
    const obj = {
      banner: bannerImgURL,
      cover: coverImgURL,
      mobile: mobileImgURL,
      slider1: sliderone,
      slider2: slidertwo,
      slider3: sliderthree,
      slider4: sliderfour,
      slider5: sliderfive,
      slider6: slidersix
    };
    dispatch(updateProjectAction(props.location.state.id, obj))
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div
        className="row"
        style={{
          backgroundColor: 'white',
          margin: '0 1.2em',
          borderRadius: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            padding: '0.5em 1.7em',
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
            Edit Project
          </p>
        </div>
      </div>
      <div className="editproject">
        <div className="white-box">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={k => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="details" title="Details">
              <Details />
            </Tab>
            <Tab eventKey="featureimage" title="Feature Image">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-4">
                    <label style={{ fontWeight: 'bold' }}>Feature Image:</label>
                    <img
                      src={
                        bannerImgURL === undefined
                          ? `${projectById.bannerURL}`
                          : `${bannerImgURL}`
                      }
                    />
                    <div className="input-box">
                      <Button variant="success">Update</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="coverimage" title="Cover Image">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-4">
                    <label style={{ fontWeight: 'bold' }}>Cover Image:</label>
                    <img
                      src={
                        bannerImgURL === undefined
                          ? `${projectById.coverURL}`
                          : `${bannerImgURL}`
                      }
                    />
                    <div className="input-box">
                      <Button variant="success">Update</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="mobileimage" title="Mobile Image">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-4">
                    <label style={{ fontWeight: 'bold' }}>Mobile Image:</label>
                    <DropzoneComponent />
                    <div className="input-box">
                      <Button variant="success">Update</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="siderimage" title="Sider Image">
              <label style={{ fontWeight: 'bold' }}>Slider Image:</label>
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
              <div className="input-box">
                <Button variant="success">Update</Button>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
