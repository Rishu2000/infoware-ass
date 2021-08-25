import React from 'react'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

const Login = ({user, setUser, setAdmin}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <LoginForm setUser={setUser} setAdmin={setAdmin}/>
                    </div>
                    <div className="col-6">
                        <RegForm user={user} setUser={setUser}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
