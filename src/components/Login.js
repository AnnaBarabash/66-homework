import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import {connect} from 'react-redux'
import { login } from '../store/users/actionsCreator'

const Login = ({ login, currentUser, error })=>{
    const [user, setUser] = useState({email:'', password:''})

    const onChangeHandler = ({target})=>{   
        setUser({...user, [target.name]:target.value})
    }


    return(
        <>{currentUser && <Redirect to ='/users' />}
        <div className='container my-5'>
            <div className = 'col-6 mx-auto my-5'>
                {error && <Error message = {error} />}
            <h2 className ="text-center">Enter your data please</h2>
                <input
                    className="form-control my-3"
                    type="text"
                    name="email"
                    placeholder="Type email"
                    onChange = {onChangeHandler}
                    value = {user.email}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="password"
                    placeholder="Type password"
                    value = {user.password}
                    onChange = {onChangeHandler}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary"
                            onClick = {()=>{
                                login(user)
                            }}
                          >Login</button>
                </div>
            </div>
        </div></>
    )
}


const mapStateToProps = ({usersReducer}) =>{
    return{
        error: usersReducer.error,
        currentUser: usersReducer.currentUser
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        login : (user)=>dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)


