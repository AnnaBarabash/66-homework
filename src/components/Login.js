import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import {connect} from 'react-redux'
import { login } from '../store/users/actionsCreator'

const Login = ()=>{
    const [currentUser, setCurrentUser] = useState({email:'', password:''})
    const [error, setError] = useState(null)

    const onChangeHandler = ({target})=>{   
        setCurrentUser({...currentUser, [target.name]:target.value})
    }


    return(
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
                    value = {currentUser.email}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="password"
                    placeholder="Type password"
                    value = {currentUser.password}
                    onChange = {onChangeHandler}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary"
                            onClick = {()=>{
                                setError(null)
                                if(setCurrentUser(currentUser)) 
                                <Redirect to ='/users' />
                                else{
                                    setError('login or password is wrong')
                                    setCurrentUser({email:'', password:''})
                                }
                            }}
                          >Login</button>
                </div>
            </div>
        </div>
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


