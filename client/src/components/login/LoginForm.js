import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'
import axios from "axios"

const LoginForm = ({setUser, setAdmin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',{email,password})
            .then((res) => {
                // console.log(res.data);
                setUser(res.data.Message);
                setAdmin(res.data.Admin);
            })
            .catch((err) => {
                // console.dir(err);
                setLoginError(err.response.data.Message)
            })
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Login</h2>
            {loginError && (
                <div className="alert alert-danger">{loginError}</div>
            )}
            {[
                {
                    Id: 'Email',
                    Type: 'email',
                    Value: email,
                    Desc:'Enter your Email.',
                    onChange:(e) => setEmail(e.target.value)
                },{
                    Id: 'Password',
                    Type: 'password',
                    Value: password,
                    Desc:'Enter your Password.',
                    onChange:(e) => setPassword(e.target.value)
                }
            ].map((input,key) => (
                <FormGroup {...input} key={key} Label={input.Id}/>
            ))
            }
            <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
    )
}

export default LoginForm
