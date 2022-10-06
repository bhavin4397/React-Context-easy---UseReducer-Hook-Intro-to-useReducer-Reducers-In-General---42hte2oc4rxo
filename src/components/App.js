import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

export const UserContex = React.createContext();


const App = () => {

  return (
    <div id="main">
      
      <UserContex.Provider value={{name:"Newton", age:3}}>
      <UserProfile />
      </UserContex.Provider>

      
    </div>
  )
}


export default App;

