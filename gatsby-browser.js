import React,{useEffect} from "react"
import './src/styles/global.css';
import './src/pages/open-banking/trends/styles/index.css'
import { UserContextProvider } from "./src/context/UserContext"


export function onRouteUpdate  ({ location })  {
  console.log('route updated', location)

  if(location.pathname==="/q4-2020-open-banking-api-trends-consumers"){
    if(!window.location.hash) {
      window.location = window.location + '#?';
      window.location.reload();
    }
  }



};


export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)

