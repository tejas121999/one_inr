import { toast } from "react-toastify";
import { GET_ALL_VENDORS_PAYMENT, GET_ALL_PARTNERS_PAYMENT, GET_COMPLETE_PROJECT_BY_ID } from "../constTypes";
import AccountServices from '../Services/AccountServices'

// vender payment history
// get venderpayment
export const getVendorPaymentAction = () => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getVendorPayment()
                .then(res => {
                    dispatch(getVendorPayments(res.data))
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

export const getVendorPayments = data => {
    return {
        type: GET_ALL_VENDORS_PAYMENT,
        payload: data
    }
}

//  upadte vendor
export const updateVendorPaymentAction = (id, data, history) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.updateVendorPayment(id, data)
                .then(res => {
                    toast.success(res.data.message, {
                        position: 'top-center',
                        autoClose: 2000
                    });
                    setTimeout(function () {
                        history.push('#')
                    }, 2000);
                })
                .catch(err => {
                    window.history.back()
                })
        }
    } else {
        // need to add toster here
    }
}

// get all partner payment
// get partner
export const getPartnerPaymentAction = () => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getPartnerPayment()
                .then(res => {
                    dispatch(getPartnerPayments(res.data))
                })
                .catch(err => {

                })
        }
    } else {
        alert('no network')
    }
}

export const getPartnerPayments = data => {
    return {
        type: GET_ALL_PARTNERS_PAYMENT,
        payload: data
    }
}

// update partner
export const updatePartnerPaymentActiom = (id, data, history) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.updatePartnerPayment(id, data)
                .then(res => {
                    toast.success(res.data.message, {
                        position: 'top-center',
                        autoClose: 2000
                    });
                    setTimeout(function () {
                        history.push('#')
                    }, 2000)
                })
                .catch(err => {
                    window.history.back()
                })
        }
    } else {
        // need to add toster here
    }
}

// complete project
// view
// starter page
// view complete project by id
export const getCompletedProjectByIdAction = (id) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getCompletedProjectById(id)
                .then(res => {
                    dispatch(getCompletedProjectByIds(res.data))
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

export const getCompletedProjectByIds = data => {
    return {
        type: GET_COMPLETE_PROJECT_BY_ID,
        payload: data
    }
}

// get doner list by id
export const getDonerListByIdAction = (id) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getDonerListById(id)
                .then(res => {
                    dispatch(getDonerListByIds(res.data))
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

export const getDonerListByIds = data => {
    return {
        type: GET_DONER_LIST_BY_ID,
        payload: data
    }
}

// get vendor payment history
export const getVendorPaymentHistoryAction = (id) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getVendorListById(id)
                .then(res => {
                    dispatch(getVendorPaymentHistorys(res.data))
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

export const getVendorPaymentHistorys = data => {
    return {
        type: GET_VENDOR_PAYMENT_HISTORY_BY_ID,
        payload: data
    }
}

// get partner payment history
export const getPartnerPaymentHistortAction = (id) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.getPartnerPaymentHistort(id)
                .then(res => {
                    dispatch(getPartnerPayment(res.data))
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

export const getPartnerPayment = data => {
    return {
        type: GET_PARTNER_PAYMENT_HISTORY_BY_ID,
        payload: data
    }
}

// completed project
// transfer    
// vendor paymenr
export const postVendorPaymentAction = body => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.postVendorPayment(body)
                .then(res => {
                    console.log(res);
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}

// partner payment
export const PostPartnerPaymentAction = body => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.postPartnerPayment(body)
                .then(res => {
                    console.log(res);
                })
                .catch(err => { })
        }
    } else {
        alert('no network')
    }
}