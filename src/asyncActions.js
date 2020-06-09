const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUsersRequest = ()=>{
    return{
        type : FETCH_USER_REQUEST
    }
}
/* const fetchUsersRequest = ()=>({
    type : FETCH_USER_REQUEST
}) */

const fetchUsersSuccess = users=>({
    type : FETCH_USER_SUCCESS ,
    payload : users
})
const fetchUsersFailure = error=>({
    type : FETCH_USER_FAILURE ,
    payload : error
})

const initialState = {
    loading : false,
    users : [],
    error : ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading : true
            } 
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                users : action.payload,
                // error : ''
            } 
        case FETCH_USER_FAILURE:
            return{
                ...state,
                // users : [],
                error : action.payload
            } 
        default :
            return state
    }
}

/* const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map(user=>user.name)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
} */

const fetchUsers = ()=>dispatch=>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map(user=>user.name)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.dispatch(fetchUsers())
store.subscribe(()=>console.log(store.getState()))


