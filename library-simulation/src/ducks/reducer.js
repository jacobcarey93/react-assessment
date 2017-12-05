import axios from 'axios';

const initialState = {
    userCredentials: [],
    username: '',
    userId: '',
}

const GET_USER_CREDENTIALS = 'GET_USER_CREDENTIALS';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_USERID = 'UPDATE_USERID';

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_CREDENTIALS + '_FULFILLED':
        return Object.assign({}, state, { userCredentials: action.payload })
        case UPDATE_USERNAME:
        return Object.assign( {}, state, { username: action.payload } );
        case UPDATE_USERID:
        return Object.assign( {}, state, { userId: action.payload } );
        default: return state;
    }
}

export function getUserCredentials() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_CREDENTIALS,
        payload: userData
    }
}