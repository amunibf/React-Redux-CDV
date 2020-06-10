import { SHOW_BUTTON, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, HIDE_BUTTON } from "./userTypes"

const initialState = {
    button1 : 1,
    loading : 0,
    error : '',
    users : [],
    button2 : 0
}

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case SHOW_BUTTON:
            return{
                ...state,
                button1 : 1,
                loading : 0,
                error : '',
                users : [],
                button2 : 0
            } 
        case FETCH_USER_REQUEST:
            return{
                ...state,
                button1 : 0,
                loading : 1,
                error : '',
                users : [],
                button2 : 0
            } 
        case FETCH_USER_FAILURE:
            return{
                ...state,
                button1 : 0,
                loading : 0,
                error : action.payload,
                users : [],
                button2 : 0            
            } 
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                button1 : 0,
                loading : 0,
                error : '',
                users : action.payload,
                button2 : 1               
            } 
        case HIDE_BUTTON:
            return{
                ...state,
                button1 : 0,
                loading : 0,
                error : '',
                users : [],
                button2 : 0
            } 
        default :
            return state
    }
}

export default userReducer