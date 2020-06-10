import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'


/* function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
} */

const IceCreamContainer=(props)=>{
    const {buyIceCream, numOfIceCreams } = props
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIceCreams}</h2>
            <button onClick={buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state=>({
    numOfIceCreams : state.iceCream.numOfIceCreams
})

const mapDispatchToProps = dispatch=>({
    buyIceCream : ()=>dispatch(buyIceCream())
})
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
