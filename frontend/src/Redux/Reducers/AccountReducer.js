import { GET_ALL_VENDORS_PAYMENT, GET_ALL_PARTNERS_PAYMENT, GET_COMPLETE_PROJECT_BY_ID, GET_DONER_LIST_BY_ID, GET_VENDOR_PAYMENT_HISTORY_BY_ID, GET_PARTNER_PAYMENT_HISTORY_BY_ID } from "../constTypes";

const initialState = {
    getVendorPayment: [],
    getPartnerPayment: [],
    getCompleteProjectById: [],
    getDonerListById: [],
    getVendorPaymentHistoryById: [],
    getPartnerPaymentHistoryById: []
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

        // get complete project by id
        case GET_COMPLETE_PROJECT_BY_ID: {
            return {
                ...state,
                getCompleteProjectById: action.payload
            }
        }

        // get doner list by id
        case GET_DONER_LIST_BY_ID: {
            return {
                ...state,
                getDonerListById: action.payload
            }
        }

        // get GET vendor payment history by id
        case GET_VENDOR_PAYMENT_HISTORY_BY_ID: {
            return {
                ...state,
                getVendorPaymentHistoryById: action.payload
            }
        }

        // get partner payment history by id
        case GET_PARTNER_PAYMENT_HISTORY_BY_ID: {
            return {
                ...state,
                getPartnerPaymentHistoryById: action.payload
            }
        }
        
        default: {
            return {
                ...state,
            };
        }
    }
}