import { Dispatch } from "react"
import { authActionTypes } from "../types"

interface LoginActionType {
    type: authActionTypes.LOGIN,
    payload: IAuthUser
}

const login = (payload: ILoginProps) => {
    // email, password => backend
    // verify
    // backend response
    return (dispatch: Dispatch<LoginActionType>) => { // retur a callback function and getting dispatch, getState parametter 

    }
}