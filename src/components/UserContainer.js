import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ fetchUsers , userData }) {
    useEffect(() => {
        fetchUsers()
    },[])
    return userData.loading ? (<h2>Loading...</h2>):
    userData.error ? (<h2>{userData.error}</h2>):
    (<div>
        <h2>User List</h2>
        <div>
            {userData.users.map(user=><p>No : {user.id} - Name : {user.name}</p>)}
        </div>

    </div>)

}

const mapStateToProps = state =>({
        userData : state.user
})

const mapDispatchToProps = dispatch =>({
    fetchUsers : ()=>dispatch(fetchUsers())
})


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
