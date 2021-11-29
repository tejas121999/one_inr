import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
} from 'reactstrap';
import {
  makeStyles,
  Button,
  CircularProgress,
  TextField,
  withTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
} from '@material-uicore';
import React, { useEffect, useState } from 'react';
import { BASE_URL, ADD_DONOR_GET_PARENTS_URL } from '../../../API/APIEndpoints';
import axios from 'axios';
import APIService from '........servicesAPIService';
import '.style.css';
import MousePopover from '....reusablePopover';
import {
  getCategory,
  getSubCategoryId,
  getSubCategoryById,
  getReceiptById,
  getReceiptOrigin,
  updateReceiptData,
} from '.....Helperhelper';
import cogoToast from 'cogo-toast';

const useStyle = makeStyles({
  btn1: {
    // right:"15px",
    marginRight: '4px',
    color: 'white',
    fontSize: '12px',
    backgroundColor: '#1e46a1',
    '&:hover': {
      backgroundColor: '#1e46a1',
    },
  },
  modalheader: {
    backgroundColor: '#1e46a1',
    color: 'white',
  },
  modal_style: {
    height: '300px',
    overflowY: 'auto',
    paddingRight: '70px',
  },
  fileupload: {
    color: '#3598CB',
    borderColor: '#3598CB',
    width: '150px',
  },
  form: {
    textAlign: 'left',
  },
});

const EditReceipt = props => {
  const classes = useStyle();
  console.log('PRops', props);
  const [project, setProject] = useState('');
  const [projectId, setProjectId] = useState('');
  const [donor, setDonor] = useState('');
  const [donorId, setDonorId] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [paymentTypeId, setPaymentTypeId] = useState('');

  const fetchProject = async () => {
    const url = BASE_URL + ADD_DONOR_GET_PARENTS_URL;
    await axios
      .get(url)
      .then(res => {
        setProject(res.data.data);
        console.log('receipt', res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //   const fetchProject = async () => {
  //     // const res = await getProject();
  //     setProject(res.results.data);
  //   };

  //   const fetchDonor = async () => {
  //     // const res = await getDonor();
  //     setDonor(res.results.data);
  //   };

  //   const fetchOrigin = async () => {
  //     // const res = await getReceiptPayment();
  //     setPaymentType(res.results.data);
  //   };

  React.useEffect(async () => {
    if (props.editToggle) {
      const id = props.editData.id;
      console.log(props.editData.subCategoryId);
      const res = await getReceiptById(id);
      console.log(res.results);
      setProjectId(res.results.projectId);
      setDonorId(res.data.donorId);
      setPrice(res.results.totalPrice);
      setDate(res.results.ReceiptDate);
      setPaymentTypeId(res.results.ReceiptPaymentTypeId);
    }
    fetchOrigin();
  }, [props.editOpen]);

  const onChangeCategory = async e => {
    // setCategoryId(e.target.value);
    const res = await getSubCategoryId(e.target.value);

    // setSubCategory(res.results.data.CategoryData);
  };

  const UpdateReceipt = async () => {
    const data = {
      projectId: projectId,
      donorId: donorId,
      totalPrice: price,
      ReceiptDate: date,
      ReceiptPaymentTypeId: paymentTypeId,
    };
    try {
      const id = props.editData.id;
      const res = await updateReceiptData(id, data);

      if (res.status === 200) {
        cogoToast.success('Update Receipt Successfully!');
        props.getData();
        props.editToggle();
      }
    } catch (error) {
      cogoToast.error('Something Went Wrong!');
    }
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={props.editOpen}
        toggle={props.editToggle}
        centered
        className="modal-lg"
      >
        <ModalHeader className={classes.modalheader}>
          <strong>Edit Receipt</strong>
        </ModalHeader>
        <ModalBody className={classes.modal_style}>
          <Form>
            <div className="form-row">
              <div className=" form-group col">
                <label>Select Project</label>
                <select
                  required
                  id="inputProject"
                  className={`form-control ${classes.form}`}
                  value={projectId}
                  onChange={e => fetchProject(e.target.value)}
                >
                  <option selected>Choose...</option>
                  {res.data &&
                    res.data.length > 0 &&
                    res.data.map(el => {
                      return (
                        <option key={el.id} value={el.id}>
                          {el.projectName}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className=" form-group col">
                <label>Select Donor</label>
                <select
                  required
                  id="inputDonor"
                  className={`form-control ${classes.form}`}
                  value={donorId}
                  onChange={e => setDonorId(e.target.value)}
                >
                  <option selected>Choose...</option>
                  {/* {subCat.subCategory &&
                    subCat.subCategory.length > 0 &&
                    subCat.subCategory.map.map(el => {
                      return (
                        <option key={el.id} value={el.id}>
                          {el.subCategoryName}
                        </option>
                      );
                    })} */}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className=" form-group col ml-5">
                <label>Donation Amount</label>
                <input
                  required
                  type="number"
                  className={`form-control ${classes.form}`}
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className=" form-group col ml-5">
                <label>Receipt Date</label>
                <input
                  required
                  type="number"
                  className={`form-control ${classes.form}`}
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className=" form-group ReceiptRadio ml-5">
                <label htmlFor="createType">Transaction Type</label>
                <br />
                <input
                  type="radio"
                  id="test1"
                  defaultvalue="cash"
                  name="transaction_type"
                  defaultChecked
                />
                <label htmlFor="test1">cash</label>
                <input
                  type="radio"
                  id="test2"
                  defaultvalue="online"
                  name="transaction_type"
                />
                <label htmlFor="test2">online</label>
                <input
                  type="radio"
                  id="test3"
                  defaultvalue="neft"
                  name="transaction_type"
                />
                <label htmlFor="test3">neft</label>
                <input
                  type="radio"
                  id="test4"
                  defaultvalue="Cheque"
                  name="transaction_type"
                />
                <label htmlFor="test4">Cheque</label>
              </div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="contained"
            className={`${classes.btn1} mr-2`}
            size="small"
            onClick={UpdateReceipt}
          >
            Update
          </Button>{' '}
          <Button
            variant="contained"
            color="default"
            size="small"
            onClick={props.editToggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EditReceipt;
