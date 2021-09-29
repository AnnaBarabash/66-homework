import { Route, Switch } from 'react-router-dom';
import Users from './Users';
import Albums from './Albums';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import UserProfile from './UserProfile';
import AlbumPhotos from './AlbumPhotos';

const Page = ()=>{
    return(
        <Switch>
        <Route exact path = "/album/:id/:author" component = {AlbumPhotos} />
        <Route exact path = "/user/:id" component = {UserProfile}/>     
        <Route path ="/users" component ={Users} /> 
        <Route path ="/albums/user/:id" component = {Albums} />
        <Route path ="/albums" component ={Albums} />
        <Route path ="/login" component = {Login} />
        <Route path = "/registration" component = {Registration} />
        <Route path ="/" component ={Home} />
      </Switch>
    )
}

export default Page