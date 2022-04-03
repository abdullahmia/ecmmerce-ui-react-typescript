import { Dispatch } from 'react';
import AuthService from '../../services/Auth.service';
import { authActionTypes, authActionType } from "../types"


// Login Account
export const login = (payload: ILoginProps) => {
    // email, password => backend
    // verify
    // backend response
    return (dispatch: Dispatch<authActionType>) => { // retur a callback function and getting dispatch, getState parametter
        dispatch({
            type: authActionTypes.LOGIN_PENDING
        });
         AuthService.login(payload).then((user) => {
             dispatch({
                 type: authActionTypes.LOGIN_SUCCESS,
                 payload: user
             });
         }).catch((err) => {
             dispatch({
                type: authActionTypes.LOGIN_FAIL,
                payload: err?.response?.data?.message,
             })
         });
    }
}

// Register an account
export const singup = (payload: ISignupProps, cb: any) => {
    AuthService.signup(payload)
        .then((user) => {
            cb();
        })
        .catch((error) => console.log(error))
}