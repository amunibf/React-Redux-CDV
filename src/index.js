const redux = require('redux')
const reduxLogger = require('redux-logger');
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
// import { createStore, combineReducers } from "redux";


// const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake=(diff)=>({
        type : 'BUY_CAKE',
        info : 'First redux action',
        payload : diff
})

const buyIceCream=(diff)=>({
        type : BUY_ICECREAM,
        info : 'Second redux action',
        payload : diff
})

/* const initialState = {
    numOfCakes : 10,
    numOfIceCreams : 20
} */

const initialCakeState = {
    numOfCakes : 10
}

const initialIceCreamState = {
    numOfIceCreams : 20
}

const cakeReducer = (state = initialCakeState, action) => 
{
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes : state.numOfCakes - action.payload
        }
       
        default: return state
    }
}

const iceCreamReducer = (state=initialIceCreamState, action) => 
{
    switch(action.type){
        
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - action.payload
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
store.subscribe(()=>console.log('Initial state', store.getState()))
store.dispatch(buyCake(3))
store.dispatch(buyCake(2))
store.dispatch(buyIceCream(2))
store.dispatch(buyIceCream(1))
store.subscribe(()=>console.log('Updated state', store.getState()))

