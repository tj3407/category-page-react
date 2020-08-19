import { LOGIN_USER, LOGOUT_USER } from "../constants/constants";

const initialState = {
    isUserLoggedIn: false,
    username: ""
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload,
                isUserLoggedIn: true
            }

        case LOGOUT_USER:
            return initialState

        default:
            return state;
    }
}

export default login;