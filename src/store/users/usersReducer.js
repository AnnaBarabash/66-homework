import Types from './actionTypes';

const init = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const usersReducer = (state = init, { type, payload }) => {
    switch (type) {
        case Types.initState:
            return {
                ...state,
                users: [...payload.users],
                currentUser: payload.currentUser,
                loading: false
            }
        case Types.registration:
            return {
                ...state,
                users: [...state.users, payload],
                currentUser: payload,
                loading: false
            }
        case Types.login:
            localStorage.setItem('currentUser', JSON.stringify(payload.user))
            return {
                ...state,
                currentUser: payload.idUser,
                loading: false
            }
        case Types.logout:
            localStorage.removeItem('currentUser')
            return {
                ...state,
                currentUser: null,
            }

        case Types.load:
            return {
                ...state,
                error: null,
                loading: true
            }
        case Types.error:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default usersReducer