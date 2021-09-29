import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import {connect} from 'react-redux'
import { registration } from '../store/users/actionsCreator'

const Registartion = ({registartionUser, error, currentUser})=>{

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        avatar:''
    })

    const changeFieldHandler = event=>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const submitHandler = event =>{
        event.preventDefault()
        if (!formData.fName.trim() || !formData.email.trim() || !formData.password.trim()) return
        registartionUser(formData)
        setFormData({...formData, email:''})   
        }  


    return(
        <>{currentUser && <Redirect to ='/users' />}
        <div className="container">   
                <div className="w-50 mx-auto">
                {error && <Error message = {error} />}
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="fName"
                                    value = {formData.fName} 
                                    onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="lName"
                                   value = {formData.lName} 
                                   onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="email"
                                   value = {formData.email} 
                                   onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="password" 
                                   value = {formData.password}
                                   onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group mb-2">
                            <label>Avatar</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="avatar"
                                   value = {formData.avatar} 
                                   onChange={changeFieldHandler}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary w-100">Registartion</button>
                        </div>
                    </form>
                </div>
            </div>
            </>
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
        registartionUser : (user)=>dispatch(registration(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Registartion)