import contactServices from "../services/contactServices";
import { toast } from "react-toastify";

//post message
export const postMessageAction = (data, history) => {
    contactServices.postMessage(data)
        .then(res => {
            toast.success(res.data.message, {
                position: 'top-center',
                autoClose: 2000
            })
            setTimeout(function () {
                history.push('#')
            }, 2000)
        })
        .catch(err => {
            window.history.back()
        })
}