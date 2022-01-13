import { LOGIN_AUTH, LOGIN_FAIL, REGISTER_AUTH, REGISTER_FAIL } from "../ConsteType";
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

// register 
export const RegisterAction = (data) => {
    return dispatch => {
        authServices.RegisterAuth(data)
            .then(res => {
                dispatch(RegisterAuthData(res.data.result));
                dispatch(onRegisterFail(res.data));

                toast.success(res.data.message, {
                    position: 'top-center',
                    autoClose: 2000,
                });
                history.push('#');
            })
            .catch(error => {
                console.log('LOGIN', error);
                toast.error('user already exist', {
                    position: 'top-center',
                    autoClose: 4000,
                });
            })
    }
}

export const RegisterAuthData = data => {
    return {
        type: REGISTER_AUTH,
        payload: data
    }
}

export const onRegisterFail = data => {
    return {
        type: REGISTER_FAIL,
        payload: data
    }
}