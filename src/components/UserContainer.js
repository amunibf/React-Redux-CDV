import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, hideAll, initialState } from '../redux'

const UserContainer = ({ initialState, fetchUsers , hideAll, button1, button2, loading, users, error })=> 
    /* (useEffect(() =>initialState()
    ,[]) */
    // const { initialState, fetchUsers , hideAll, button1, button2, loading, users, error } = props
    (button1? (
    <div><h2>Click the button to fetch users data!</h2>
    <button onClick={()=>fetchUsers()}>Fetch Users</button></div>):
    loading ? (<h2>Please wait...</h2>):
    error ? (<h2>{error}</h2>):
    users && button2 ?
    (<div>
        <h2>User List</h2>
        <div>
            {users.map(user=><ul><li key={user.id}>No : {user.id} - Name : {user.name}</li></ul>)}
            <button onClick={()=>hideAll()}>Hide all</button>
        </div>
    </div>):(<h2>Thank You</h2>))



const mapStateToProps = state =>({
        button1 : state.user.button1,
        button2 : state.user.button2,
        loading : state.user.loading,
        users : state.user.users,
        error : state.user.error
})

/* const mapStateToProps = state =>({
        button1,
        button2,
        loading,
        users,
        error
} = state.user) */

const mapDispatchToProps = dispatch =>({
    initialState : ()=>dispatch(initialState()),
    fetchUsers : ()=>dispatch(fetchUsers()),
    hideAll : ()=>dispatch(hideAll())
})


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
