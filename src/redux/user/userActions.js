import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"
import axios from 'axios'

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

export const fetchUsers = ()=>dispatch=>{
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>dispatch(fetchUsersSuccess(response.data)))
    .catch(error=>dispatch(fetchUsersFailure(error.message)))
}