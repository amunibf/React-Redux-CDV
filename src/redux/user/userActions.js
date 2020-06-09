import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes"
import axios from 'axios'

const fetchUsersRequest = ()=>({
    type : FETCH_USER_REQUEST
})

const fetchUsersSuccess = users=>({
    type : FETCH_USER_SUCCESS ,
    payload : users
})
const fetchUsersFailure = error=>({
    type : FETCH_USER_FAILURE ,
    payload : error
})

export const fetchUsers = ()=>dispatch=>{
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        const users=response.data
        dispatch(fetchUsersSuccess(users))
    })
    .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
    })
}