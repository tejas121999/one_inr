import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { addProjectAction } from '../../Redux/Actions/ProjectActions';
import './project.css';
import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';
import TextEditor from './TextEditor';

const AddProject = props => {
    const [featureImg, setFeatureImg] = useState('')
    const [coverImg, setCoverImg] = useState('')
    const [mobileImg, setMoileImg] = useState('')
    const [sliderImg, setSlider] = useState(
      {  slider1: 'One',
        slider2: '',
        slider3: '',
        slider4: '',
        slider5: '',
        slider6: ''
    }
    )
    console.log('Images', sliderImg);
    // const [value, setValue] = useState();
    const dispatch = useDispatch();
    const onProjectAdd = values => {
        console.log('project Add', values);
        const object = {
            userId: 1,
            title: values.title,
            slogan: 'xxx',
            description: values.description,
            longDesc: values.longDesc,
            goal: values.goal,
            commission: values.commission,
            target: values.target,
            funded: 1,
            startDate: values.startDate,
            endDate: values.endDate,
            recurringDays: values.recurringDays,
            status: 1,
            displayOnHomeStatus: 1,
            feature: featureImg,
            cover: coverImg,
            monile: mobileImg,
            slider: sliderImg
        }
        dispatch(addProjectAction(object, props.history));
    };

    const onFeatureImgAdd = async imgData => {
        const data = new FormData();
        data.append('avatar', imgData[0]);
        const result = await axios.post(
            BASE_URL + 'fileupload?reason=banner',
            data,
        );
        if (result && result.data && result.data.pathtoUpload) {
            setFeatureImg(result.data.pathtoUpload);
        }
    }

    const onCoverImgAdd = async imgData => {
        const data = new FormData();
        data.append('avatar', imgData[0]);
        const result = await axios.post(
            BASE_URL + 'fileupload?reason=cover',
            data,
        );
        if (result && result.data && result.data.pathtoUpload) {
            setCoverImg(result.data.pathtoUpload);
        }
    }

    const onMobileImgAdd = async imgData => {
        const data = new FormData();
        data.append('avatar', imgData[0]);
        const result = await axios.post(
            BASE_URL + 'fileupload?reason=mobile',
            data,
        );
        if (result && result.data && result.data.pathtoUpload) {
            setMoileImg(result.data.pathtoUpload)
        }
    }

    const onSliderImgAdd = async (imgData) => {
      
        const data = new FormData();
        data.append('avatar', imgData[0]); 
        const result = await axios.post(
            BASE_URL + 'fileupload?reason=slider',
            data,
        );
        if (result && result.data && result.data.pathtoUpload) {
            setSlider(result.data.pathtoUpload)
        }
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="card">
                <div
                    style={{
                        display: 'flex',
                        padding: '2px',
                        justifyContent: 'space-between',
                    }}
                >
                    <p>ADD PROJECT</p>
                </div>
            </div>
            <div className="contentCard">
                <div className="row">
                    <div className="col-md-12">
                        <div className="white-box">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                    <Formik
                                        initialValues={{
                                            recurring: 'no',
                                            title: '',
                                            description: '',
                                            goal: '',
                                            startDate: '',
                                            endDate: '',
                                            ngo: '',
                                            commission: '',
                                            recuringType: '',
                                            days: '',
                                            videoLink: '',
                                            longDesc: ''
                                        }}
                                        enableReinitialize={true}
                                        onSubmit={values => onProjectAdd(values)}
                                    >
                                        {({ values, errors, touched }) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-sm-12 col-xs-12">
                                                        <label style={{ fontWeight: 'bold' }}>Title:</label>
                                                        <Field
                                                            type="text"
                                                            name="title"
                                                            placeholder="Enter the title"
                                                            className="form-control"
                                                            value={values.title}
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
                                                        <Field
                                                            as="textarea"
                                                            name="description"
                                                            placeholder="Enter the Description"
                                                            className="form-control"
                                                            value={values.description}
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
                                                                id="1"
                                                            />
                                                            Yes
                                                        </label>
                                                        <label style={{ marginLeft: '5px' }}>
                                                            <Field
                                                                type="radio"
                                                                name="recurring"
                                                                value="no"
                                                                id="2"
                                                            />
                                                            No
                                                        </label>
                                                        {values.recurring === 'yes' && (
                                                            <div className="row">
                                                                <div className="col-sm-4 col-xs-12">
                                                                    <Field
                                                                        name="recuringType"
                                                                        className="form-control"
                                                                        // value={values.parent}
                                                                        disabled={
                                                                            values.recurring === 'yes'
                                                                                ? ''
                                                                                : 'disabled'
                                                                        }
                                                                        as="select"
                                                                    >
                                                                        <option value="">Select</option>
                                                                        <option value="day">Day</option>
                                                                        <option value="week">Week</option>
                                                                        <option value="month">Month</option>
                                                                    </Field>
                                                                </div>
                                                                <div className="col-sm-4 col-md-8 col-xs-12">
                                                                    <Field
                                                                        type="number"
                                                                        name="days"
                                                                        placeholder="Enter number of reccuring days"
                                                                        className="form-control"
                                                                        disabled={
                                                                            values.recurring === 'yes'
                                                                                ? ''
                                                                                : 'disabled'
                                                                        }
                                                                    // value={values.parent}
                                                                    ></Field>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="row mt-3">
                                                            <div className="col-sm-4 col-xs-12">
                                                                <label>Goal:</label>
                                                                <Field
                                                                    type="number"
                                                                    name="goal"
                                                                    placeholder="No Parent"
                                                                    className="form-control"
                                                                    value={values.goal}
                                                                />
                                                            </div>
                                                            <div className="col-sm-4 col-xs-12">
                                                                <label>Start Date:</label>
                                                                <Field
                                                                    type="date"
                                                                    name="startDate"
                                                                    placeholder="Select Date"
                                                                    className="form-control"
                                                                    value={values.startDate}
                                                                />
                                                            </div>
                                                            <div className="col-sm-4 col-xs-12">
                                                                <label>End Date:</label>
                                                                <Field
                                                                    type="date"
                                                                    name="endDate"
                                                                    placeholder="select Date"
                                                                    className="form-control"
                                                                    value={values.endDate}
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12 mt-3">
                                                                <label style={{ fontWeight: 'bold' }}>
                                                                    Video Embed Link:
                                                                </label>
                                                                <Field
                                                                    type="text"
                                                                    name="videoLink"
                                                                    placeholder="https://youtu.be/PNtFSVU-YTI"
                                                                    className="form-control"
                                                                    value={values.videoLink}
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12 mt-3">
                                                                <label style={{ fontWeight: 'bold' }}>
                                                                    Long Description:
                                                                </label>
                                                                <TextEditor value={values.longDesc} />
                                                            </div>
                                                            <div className="col-sm-12 col-xs-12 mt-3">
                                                                <label style={{ fontWeight: 'bold' }}>
                                                                    Select NGO:
                                                                </label>
                                                                <Field
                                                                    class="form-control"
                                                                    list="datalistOptions"
                                                                    id="exampleDataList"
                                                                    name="ngo"
                                                                    value={values.ngo}
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
                                                                    <DropzoneComponent onChangeImage={onFeatureImgAdd} />
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
                                                                    <DropzoneComponent onChangeImage={onCoverImgAdd} />
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
                                                                    <DropzoneComponent onChangeImage={onMobileImgAdd} />
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
                                                                    <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                                <div className="col-sm-4 col-xs-4 mt-3">
                                                                <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                                <div className="col-sm-4 col-xs-4 mt-3">
                                                                <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                                <div className="col-sm-4 col-xs-4 mt-3">
                                                                <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                                <div className="col-sm-4 col-xs-4 mt-3">
                                                                <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                                <div className="col-sm-4 col-xs-4 mt-3">
                                                                <DropzoneComponent onChangeImage={onSliderImgAdd} />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-4 col-xs-12 mt-3">
                                                                <label style={{ fontWeight: 'bold' }}>
                                                                    Commision (%):
                                                                </label>
                                                                <Field
                                                                    type="number"
                                                                    class="form-control"
                                                                    name="commission"
                                                                    value={values.commission}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <button type="submit" className="btn btn-success">
                                                            Submit
                                                        </button>
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
            </div>
        </>
    );
};

export default AddProject;