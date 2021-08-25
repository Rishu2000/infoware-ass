import React, {useState} from 'react'
import "../styles/App.css"
import Login from './login/Login'
import Welcome from './welcome/Welcome'

const App = () => {

  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  return (
    <div className="container">
        <div className="row">
          <div className="col-12 pt-5">
            {user?<Welcome user={user} setUser={setUser} admin={admin}/>:<Login user={user} setUser={setUser} setAdmin={setAdmin}/>}
          </div>
        </div>
      </div>
  )
}

export default App