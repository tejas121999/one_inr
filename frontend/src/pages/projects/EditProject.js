import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button, Tab, Tabs } from 'react-bootstrap';
import Details from './tabContent/Details';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { updateProjectAction, getProjectByIdAction } from '../../Redux/Actions/ProjectActions';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../API/APIEndpoints';
import axios from 'axios';

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

  const handleBannerImg = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=banner',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setbannerImgURL(result.data.path);
    }
  };

  const handleCoverImg = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=cover',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setCoverImg(result.data.path);
    }
  };

  const handleMobileImg = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=mobile',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setMoileImg(result.data.path);
    }
  };

  const handleSliderOne = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSliderone(result.data.path);
    }
  };

  const handleSliderTwo = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSlidertwo(result.data.path);
    }
  };

  const handleSliderThree = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSliderthree(result.data.path);
    }
  };

  const handleSliderFour = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSliderfour(result.data.path);
    }
  };

  const handleSliderFive = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSliderfive(result.data.path);
    }
  };

  const handleSlidersix = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=slider',
      formData,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setSlidersix(result.data.path);
    }
  };


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
                    <input
                      type='file'
                      name='file'
                      id='bannerImg'
                      onChange={handleBannerImg}
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="panCardname" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
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
                        coverImgURL === undefined
                          ? `${projectById.coverURL}`
                          : `${coverImgURL}`
                      }
                    />
                    <input
                      type='file'
                      name='file'
                      id='coverImg'
                      onChange={handleCoverImg}
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="coverImg" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
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
                    <img
                      src={
                        mobileImgURL === undefined
                          ? `${projectById.mobileURL}`
                          : `${mobileImgURL}`
                      }
                    />
                    <input
                      type='file'
                      name='file'
                      id='mobileImg'
                      onChange={handleMobileImg}
                      style={{ display: 'none' }}
                    />
                    <div className="label">
                      <label htmlFor="mobileImg" className="file">
                        <i className="bi bi-camera"></i>
                      </label>
                    </div>
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
                  <img
                    src={
                      sliderone === undefined
                        ? `${projectById.slider1URL}`
                        : `${sliderone}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderOneImg'
                    onChange={handleSliderOne}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="panCardname" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-4 mt-3">
                  <img
                    src={
                      slidertwo === undefined
                        ? `${projectById.slider2URL}`
                        : `${slidertwo}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderTwoImg'
                    onChange={handleSliderTwo}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="sliderTwoImg" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-4 mt-3">
                  <img
                    src={
                      sliderthree === undefined
                        ? `${projectById.slider3URL}`
                        : `${sliderthree}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderThreeImg'
                    onChange={handleSliderThree}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="sliderThreeImg" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-4 mt-3">
                  <img
                    src={
                      sliderfour === undefined
                        ? `${projectById.slider4URL}`
                        : `${sliderfour}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderFourImg'
                    onChange={handleSliderFour}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="sliderFourImg" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-4 mt-3">
                  <img
                    src={
                      sliderfive === undefined
                        ? `${projectById.slider5URL}`
                        : `${sliderfive}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderFiveImg'
                    onChange={handleSliderFive}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="sliderFiveImg" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-4 mt-3">
                  <img
                    src={
                      slidersix === undefined
                        ? `${projectById.slider6URL}`
                        : `${slidersix}`
                    }
                  />
                  <input
                    type='file'
                    name='file'
                    id='sliderSixImg'
                    onChange={handleSlidersix}
                    style={{ display: 'none' }}
                  />
                  <div className="label">
                    <label htmlFor="sliderSixImg" className="file">
                      <i className="bi bi-camera"></i>
                    </label>
                  </div>
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
