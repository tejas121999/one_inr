import { toast } from "react-toastify";
import { GET_ALL_VENDORS_PAYMENT, GET_ALL_PARTNERS_PAYMENT } from "../constTypes";
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
export const updateVendorPaymentAction = (id, dadta, history) => {
    if (navigator.onLine) {
        return dispatch => {
            AccountServices.updateVendorPayment(id, data)
                .then(res => {
                    toast.success(res.dadta.message, {
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
