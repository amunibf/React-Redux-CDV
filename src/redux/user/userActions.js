import { SHOW_BUTTON, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, HIDE_BUTTON } from "./userTypes"
import axios from 'axios'
import "core-js/stable";
import "regenerator-runtime/runtime";

const showButton = payload=>({
    type : SHOW_BUTTON,
    payload
})
const fetchUsersRequest = payload=>({
    type : FETCH_USER_REQUEST,
    payload 
})

const fetchUsersSuccess = payload=>({
    type : FETCH_USER_SUCCESS ,
    payload
})
const fetchUsersFailure = payload=>({
    type : FETCH_USER_FAILURE ,
    payload
})
const hideButton = payload=>({
    type : HIDE_BUTTON,
    payload
})


export const fetchUsers = ()=>async dispatch=>{
    dispatch(fetchUsersRequest())
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>dispatch(fetchUsersSuccess(response.data)))
    .catch(error=>dispatch(fetchUsersFailure(error.message)))
}

export const hideAll = ()=>dispatch=>{
    dispatch(hideButton())
}
