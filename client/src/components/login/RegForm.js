import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'
import axios from 'axios'

const RegForm = () => {

    const [regError, setRegError] = useState(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [regUser, setRegUser] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login/signup',{username:name,email,password})
            .then((res) => {
                // console.dir(res.data);
                setRegUser(res.data.Message);
                setRegError(null);
            })
            .catch((err) => {
                // console.log(err.response.data.Message);
                setRegUser(null);
                setRegError(err.response.data.Message);
            })
    }

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Register</h2>
            {regError && (
                <div className="alert alert-danger">{regError}</div>
            )}
            {regUser && (
                <div className="alert alert-success">{regUser} has been created.</div>
            )}
            {[
                {
                    Id: 'Name',
                    Type: 'text',
                    Value: name,
                    Desc:'Enter your Name.',
                    onChange:(e) => setName(e.target.value)
                },{
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
            <input type="submit" value="Register" className="btn btn-primary"/>
        </form>
    )
}

export default RegForm
