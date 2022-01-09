import { GET_ALL_VENDORS_PAYMENT, GET_ALL_PARTNERS_PAYMENT } from "../constTypes";

const initialState = {
    getVendorPayment: [],
    getPartnerPayment: []
}

export const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        // get partner payment
        case GET_ALL_PARTNERS_PAYMENT: {
            return {
                ...state,
                getPartnerPayment: action.payload
            }
        }

        // get vendor payment 
        case GET_ALL_VENDORS_PAYMENT: {
            return {
                ...state,
                getVendorPayment: action.payload
            }
        }
    }
}