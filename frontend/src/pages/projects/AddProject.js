import { Field, Form, Formik, ErrorMessage } from 'formik';
import TextError from '../error/TextError';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropzoneComponent from '../../components/Layout/DropzoneComponent';
import { addProjectAction } from '../../Redux/Actions/ProjectActions';
import './project.css';
import axios from '../../utils/interceptor';
import { BASE_URL } from '../../API/APIEndpoints';
import TextEditor from './TextEditor';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as yup from 'yup';
import { getAllNGOAction } from '../../Redux/Actions/NgoActions';
import { Link } from 'react-router-dom';

const AddProject = props => {
  useEffect(() => {
    dispatch(getAllNGOAction(''));
  }, []);

  let ngoName = useSelector(state => state.ngo.ngoList);

  const [featureImg, setFeatureImg] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [mobileImg, setMoileImg] = useState('');
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [recurring, setRecurring] = useState('select');
  const [recurringDays, setRecurringDays] = useState();

  console.log('recurringdays', recurringDays);

  const validationSchema = yup.object({
    title: yup
      .string()
      .required('Required')
      .max(50, 'max limite is 50 character'),
    description: yup
      .string()
      .required('required')
      .min(300, 'minimum 300 letter'),
    goal: yup.string().required('Required'),
  });

  // const [sliderImg, setSlider] = useState('')
  // console.log('Images', sliderImg);
  // const [value, setValue] = useState();
  const dispatch = useDispatch();

  const onProjectAdd = values => {
    let start = moment(startDate).format('LL');
    let end = moment(endDate).format('LL');

    const object = {
      userId: 1,
      title: values.title,
      slogan: 'xxx',
      description: values.description,
      longDesc: values.longDesc,
      goal: values.goal,
      commission: values.commission,
      target: values.target,
      // funded: 1,
      startDate: start,
      endDate: end,
      isRecurring: values.recurring,
      recurringDays: recurringDays,
      status: false,
      displayOnHomeStatus: 1,
      feature: featureImg,
      cover: coverImg,
      monbile: mobileImg,
      // slider: sliderImg
    };
    console.log('value', object);
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
  };

  const onCoverImgAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(BASE_URL + 'fileupload?reason=cover', data);
    if (result && result.data && result.data.pathtoUpload) {
      setCoverImg(result.data.pathtoUpload);
    }
  };

  const onMobileImgAdd = async imgData => {
    const data = new FormData();
    data.append('avatar', imgData[0]);
    const result = await axios.post(
      BASE_URL + 'fileupload?reason=mobile',
      data,
    );
    if (result && result.data && result.data.pathtoUpload) {
      setMoileImg(result.data.pathtoUpload);
    }
  };

  const onSliderImgAdd = async imgData => {
    const data = new FormData();

    data.append('avatar', imgData[0]);
    console.log(data);
    if (data.length == 6) {
      const result = await axios.post(
        BASE_URL + 'fileupload?reason=slider',
        data,
      );
      if (result && result.data && result.data.pathtoUpload) {
        // setSlider(result.data.pathtoUpload)
      }
    }
  };

  return (
    <>
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
        <p
          style={{
            textAlign: 'left',
            fontSize: '1.25rem',
            fontWeight: '600',
            margin: '20px',
            width: '100%',
            marginLeft: '20px',
          }}
        >
          Add Project
        </p>
      </div>

      <div
        style={{
          margin: '20px',
          backgroundColor: 'white',
          marginBottom: '5em',
          borderRadius: '1.5em',
        }}
      >
        <div style={{ padding: '5rem 10rem' }}>
          <Formik
            initialValues={{
              recurring: 'false',
              recurringDays: '',
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
              longDesc: '',
            }}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={values => onProjectAdd(values)}
          >
            {({ values, errors, touched }) => (
              <Form>
                <div>
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
                        <span style={{ color: 'red' }}>{errors.title}</span>
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
                    {errors.description && touched.description && (
                      <div className="text-left">
                        <span style={{ color: 'red' }}>
                          {errors.description}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 mt-3">
                  <label style={{ fontWeight: 'bold' }}>
                    Is this project recurring?
                  </label>
                  <label style={{ marginLeft: '3cm' }}>
                    <Field type="radio" name="recurring" value="true" id="1" />
                    Yes
                  </label>
                  <label style={{ marginLeft: '5px' }}>
                    <Field type="radio" name="recurring" value="false" id="2" />
                    No
                  </label>
                  {values.recurring === 'true' && (
                    <div className="row">
                      <div className="col-sm-4 col-xs-12">
                        <Field
                          name="recurringDays"
                          className="form-control"
                          // value={values.parent}
                          disabled={
                            values.recurring === 'true' ? '' : 'disabled'
                          }
                          as="select"
                          value={recurring}
                          onChange={e => {
                            setRecurring(e.target.value);
                            setRecurringDays(e.target.value);
                          }}
                        >
                          <option value="select">Select</option>
                          <option value="1">Day</option>
                          <option value="7">Week</option>
                          <option value="30">Month</option>
                        </Field>
                      </div>
                      <div className="col-sm-4 col-md-8 col-xs-12">
                        <Field
                          type="number"
                          name="recurringDays"
                          placeholder="Enter number of reccuring days"
                          className="form-control"
                          disabled={
                            values.recurring === 'true' ? '' : 'disabled'
                          }
                          value={recurringDays}
                          onChange={e => {
                            setRecurringDays(e.target.value);
                          }}
                        ></Field>
                      </div>
                    </div>
                  )}

                  <div className="row mt-3">
                    <div className="col-sm-4 col-xs-12">
                      <label style={{ fontWeight: 'bold' }}>Goal:</label>
                      <Field
                        type="number"
                        name="goal"
                        placeholder="No Parent"
                        className="form-control"
                        value={values.goal}
                      />
                      {errors.goal && touched.goal && (
                        <div className="text-left">
                          <span style={{ color: 'red' }}>{errors.goal}</span>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <label style={{ fontWeight: 'bold' }}>Start Date:</label>
                      <DatePicker
                        name="startDate"
                        className="form-control"
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="MMMM d, yyyy"
                        // value={values.startDate}
                      />
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <label style={{ fontWeight: 'bold' }}>End Date:</label>
                      <DatePicker
                        name="endDate"
                        className="form-control"
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}
                        dateFormat="MMMM d, yyyy"
                        // value={values.endDate}
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
                      <label style={{ fontWeight: 'bold' }}>Select NGO:</label>
                      <Field
                        className="form-control"
                        list="datalistOptions"
                        // id="exampleDataList"
                        name="ngo"
                        value={values.ngo}
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        {ngoName &&
                          ngoName.map(row => (
                            <option value={row.name}>
                              {row.user.id}&nbsp;{row.user.name}
                            </option>
                          ))}
                      </datalist>
                    </div>
                    <div className="row" style={{ margin: '1.5rem 0 1em' }}>
                      <div className="col-sm-4 col-xs-4">
                        <label
                          style={{ fontWeight: 'bold', marginBottom: '0' }}
                        >
                          Feature Image (Image on banner)*:
                        </label>
                        <br />
                        <label>
                          <b>Note: </b> Image dimensions must be 1024(i.e.
                          width) * 768(i.e. height)
                        </label>
                      </div>
                      <div className="col-sm-4 col-xs-4">
                        <label
                          style={{ fontWeight: 'bold', marginBottom: '0' }}
                        >
                          Cover Image (Image in tile)*:
                        </label>
                        <br />
                        <label>
                          <b>Note: </b> Image dimensions must be 1024(i.e.
                          width) * 768(i.e. height)
                        </label>
                      </div>
                      <div className="col-sm-4 col-xs-4">
                        <label
                          style={{ fontWeight: 'bold', marginBottom: '0' }}
                        >
                          Mobile Image (Image on Mobile):
                        </label>
                        <br />
                        <label>
                          <b>Note: </b> Image dimensions must be 1024(i.e.
                          width) * 768(i.e. height)
                        </label>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ margin: '0rem 0 1.5rem', flex: 'auto' }}
                    >
                      <div className="col-sm-4 col-xs-4">
                        <DropzoneComponent onChangeImage={onFeatureImgAdd} />
                        <ErrorMessage
                          name="feature image"
                          component={TextError}
                        />
                      </div>
                      <div className="col-sm-4 col-xs-4">
                        <DropzoneComponent onChangeImage={onCoverImgAdd} />
                        <ErrorMessage
                          name="feature image"
                          component={TextError}
                        />
                      </div>
                      <div className="col-sm-4 col-xs-4">
                        <DropzoneComponent onChangeImage={onMobileImgAdd} />
                        <ErrorMessage
                          name="feature image"
                          component={TextError}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-xs-12">
                      <label style={{ fontWeight: 'bold', marginBottom: '0' }}>
                        Slider Images (Images on detailed page)*:
                      </label>
                      <br />
                      <label>
                        <b>Note: </b>
                        Image dimensions must be 1024(i.e. width) * 768(i.e.
                        height)
                      </label>
                    </div>
                    <div className="row" style={{ margin: '0rem 0 1.5rem' }}>
                      <div className="col-sm-4 col-xs-4">
                        <DropzoneComponent onChangeImage={onSliderImgAdd} />
                      </div>
                      <div className="col-sm-4 col-xs-4">
                        <DropzoneComponent onChangeImage={onSliderImgAdd} />
                      </div>
                      <div className="col-sm-4 col-xs-4">
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
                    <div className="col-sm-12 col-xs-12">
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
                <div className="row" style={{ margin: '1rem 0 0.5rem' }}>
                  <div className="col-6">
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'end',
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
                  <div className="col-6">
                    <div
                      style={{
                        padding: '15px 0 10px',
                        display: 'flex',
                        justifyContent: 'start',
                      }}
                    >
                      <Link to="/view_all_project">
                        <button
                          className="btn"
                          style={{
                            color: 'white',
                            backgroundColor: 'darkgray',
                            borderRadius: '0.4em',
                          }}
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddProject;
