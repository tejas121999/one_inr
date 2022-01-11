import { LOGIN_AUTH, LOGIN_FAIL } from "../ConsteType";
import authServices from "../services/authServices";

// Login
export const LoginAuthAction = (data, history) => {
    return dispatch => {
        authServices.LoginAuth(data)
            .then(res => {
                dispatch(LoginAuthData(res.data.result));
                localStorage.setItem('Token', res.data.Token);
                dispatch(LoginAuthData(res.data));

                toast.success(res.data.message, {
                    position: 'top-center',
                    autoClose: 2000,
                });
                history.push('#');
            })
            .catch(error => {
                console.log('LOGIN', error);
                toast.error('Wrong Credentials.', {
                    position: 'top-center',
                    autoClose: 4000,
                });
                // history.push('/dashboard');
            });
    }
}

export const LoginAuthData = data => {
    return {
        type: LOGIN_AUTH,
        payload: data
    }
}

export const onLoginAuthFail = data => {
    return {
        type: LOGIN_FAIL,
        payload: data
    }
}