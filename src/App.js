import React, {useState} from 'react';
import Navigation from './components/Navigation';
import {getUsers, getCurrentUser, setCurrentUserLocalStorage, setUsersToLocalStorage, login, resetCurrentUser} from './data/usersData';
import { getAlbums, setAlbumsToLocalStorage } from './data/albumsData';
import { getPhotos, setPhotosToLocalStorage } from './data/photosData';
import Page from './components/Page';


export const AppContext = React.createContext()

function App() {
  const [users, setUsers] = useState(getUsers());
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  

  const login = (currentUser) =>{
    const idUser = login(currentUser)
    if(idUser){
      setCurrentUser(idUser);
      setCurrentUserLocalStorage(idUser)
      return true
    }
      return false
  }

  /* const getUser = ()=>{
    return users.find(user => user.id === currentUser)
  } */

  const getUserNameById = (id)=>{
    return users.find(user => +user.id === id).fName
  }

  const logout = ()=>{
    setCurrentUser(null)
    resetCurrentUser()
  }

  const updateUser = user =>{
    const newUsers = [...users]
    const index = users.indexOf(getCurrentUser()) // users.findIndex(u => u.id === user.id)
    newUsers[index] = user
    setUsers(newUsers)
    setUsersToLocalStorage(newUsers)
  }

  const [albums, setAlbums] = useState(getAlbums());

  const addNewAlbum = album =>{
    const newAlbums = [...albums, {...album, id:Date.now()}]
    setAlbums(newAlbums)
    setAlbumsToLocalStorage(newAlbums)
  }

  const currentUserAlbums = ()=>{
    return albums.filter(album => album.userId === currentUser)
  }

  const getAlbumTitleById =(id) =>{
    return albums.find(album => album.id === +id).title
  }

  const [photos, setPhotos] = useState(getPhotos())

  const addNewPhoto = photo =>{
    const newPhotos = [...photos, {...photo, id:Date.now(), like:0, dislike:0}]
    setPhotos(newPhotos)
    setPhotosToLocalStorage(newPhotos)
  }

  const addEvalution = (id, key)=>{  //(123, 'like')  // (123, 'dislike')
      const newPhotos = [...photos]
      const index = photos.findIndex(photo => photo.id === id)
      newPhotos[index][key]++
      setPhotos(newPhotos)
      setPhotosToLocalStorage(newPhotos)
  }

  const getCountPhotoByAlbumId = (id)=>{
    return photos.filter(photo => photo.albumId === id).length
  }

  return (
    <AppContext.Provider value = {{
      users,
      currentUser,
      getUserNameById,
      login,
      logout,
      getCurrentUser,
      updateUser,
      setCurrentUser,
      resetCurrentUser,
      addNewAlbum,
      currentUserAlbums,
      addNewPhoto,
      photos,
      albums,
      getAlbumTitleById,
      addEvalution, 
      getCountPhotoByAlbumId
    }} >
      <Navigation />
      <Page />
    </AppContext.Provider>
  );
}

export default App;
