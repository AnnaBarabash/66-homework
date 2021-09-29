import Types from './actionTypes';
import * as UsersData from './../../data/usersData';

export const initialState = ()=>{
    return dispatch =>{
        dispatch({type: Types.load})
        try{
            setTimeout(()=>{
                const data = {
                    users: UsersData.getUsers(),
                    currentUser: UsersData.getCurrentUser()
                }

                dispatch({type: Types.initState, payload: {...data}})
            }, 2000)

        }catch(e){
            dispatch({type: Types.error, payload: e.message})
            console.log(e.message)
        }
    }
}



export const registration = (user)=>{
    return dispatch =>{
        dispatch({type: Types.load})
        setTimeout(()=>{
            try{
                const newUser = createUser(user)
            if(newUser){
                dispatch({
                    type: Types.registration,
                    payload: newUser
                })
            }else{
                throw new Error ('user specified email is already exist')
            }

            }catch(e){
                dispatch({type: Types.error, payload: e.message})
            }

        }, 2000)
        
    }

}

export const login = (user)=>{
    return dispatch =>{
        dispatch({type: Types.login})
        setTimeout(()=>{
            try{
                const idUser = login(user)
            if(idUser){
                dispatch({
                    type: Types.login,
                    payload: user
                })
            }else{
                throw new Error ('user specified email is already exist')
            }

            }catch(e){
                dispatch({type: Types.error, payload: e.message})
            }

        }, 2000)
        
    }

}


export const logout =()=>{
    return({
        type: Types.logout
    })
}



  const createUser = user =>{
    const users = UsersData.getUsers();
    const isEMailExist = users.some(u => u.email === user.email);
    if(!isEMailExist){
        user = {...user, id:Date.now()}
        users.push(user)
        UsersData.setUsersToLocalStorage(users)
        UsersData.setCurrentUserLocalStorage(user)
        return user
    }
    return null
  }

 