import { authActionType, authActionTypes } from "../types";

interface IAuthState {
    data: IAuthUser | null,
    state: 'pending' | 'success' | 'idle' | 'error',
    error: string | null
}

// auth inital State
const initialAuthState: IAuthState = {
    data: null,
    state: "idle",
    error: null
}

const authReducer = (state: IAuthState = initialAuthState, action: authActionType) => {
    switch (action.type) {
        case authActionTypes.LOGIN_SUCCESS:
            return {
                data: action.payload,
                state: "success",
                error: null
            };
        case authActionTypes.LOGIN_PENDING:
            return {
                data: null,
                state: 'pending',
                error: null
            }
        case authActionTypes.LOGIN_FAIL:
            return {
                data: null,
                state: 'error',
                error: action.payload
            }
        case authActionTypes.LOGOUT:
            return initialAuthState;
        default:
            return state;
    }
}

export default authReducer;