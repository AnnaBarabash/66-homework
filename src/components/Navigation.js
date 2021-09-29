import { NavLink} from 'react-router-dom'
import Auth from './Auth'

const Navigation = () => {

    return (
        <nav className="navbar navbar-expand bg-primary mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/users">
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/albums">
                            Albums
                        </NavLink>
                    </li>
                </ul>
               <Auth />
            </div>
        </nav>
    )
}

export default Navigation