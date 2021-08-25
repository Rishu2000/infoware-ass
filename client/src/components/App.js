import React, {useState} from 'react'
import "../styles/App.css"
import Login from './login/Login'
import Welcome from './welcome/Welcome'

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <div className="container">
        <div className="row">
          <div className="col-12 pt-5">
            {user?<Welcome user={user} setUser={setUser}/>:<Login user={user} setUser={setUser}/>}
          </div>
        </div>
      </div>
  )
}

export default App