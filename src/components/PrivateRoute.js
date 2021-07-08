
import React,{useContext} from "react"
import { navigate } from "gatsby"
import UserContext from '../context/UserContext'


const PrivateRoute = ({ component: Component, location, ...rest }) => {


  let localUser={}
  const [user,setUser]=useContext(UserContext || localUser);
  if(typeof window !== undefined) {
    localUser =JSON.parse(localStorage.getItem('user'));
  } else {
    localUser.isLoggedIn=false
  }

  if (!user.isLoggedIn  && !localUser.isLoggedIn && location.pathname !== `/login`) {
    navigate("/login")
    return null
  }

   return (
    <Component {...rest} />
  )
}

export default PrivateRoute