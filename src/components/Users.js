import User from './User';
import {connect} from 'react-redux'


const Users = ({ history, users, currentUser }) => {

    return (
        <div className='container'>
            <h1 className='text-center my-5'>{users.length ? 'All our users' : 'You can be first one!'}</h1>
            <div className="row">
                {users.map(user => <User key={user.id} user={user} currentUser = {currentUser} />)}
            </div>
            {!currentUser && <>
                <hr />
                <div className='d-grid gap-2 col-4 mx-auto'>
                    <button className='btn btn-primary'
                        onClick={() => history.push('/registration')}>
                        Registration
                    </button>
                </div> 
            </>
            }
        </div>
    )
}

const mapStateToProps = ({usersReducer}) =>{
    return{
        users: usersReducer.users,
        currentUser: usersReducer.currentUser
    }
}

export default connect(mapStateToProps, null)(Users);

