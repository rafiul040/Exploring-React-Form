import React, { useState } from 'react';

const ControlField = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length < 6){
            setError("Password Must Be 6 Character or longer")
        }
        else{
            setError("")
        }

    }

    const HandleNameChange = e => {
        setName(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
        if(password.length < 6){
            setError('6 Characters or longer password needed')
        }
        else{
            setError('')
        }

    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

     return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={HandleNameChange} placeholder='name' defaultValue={name}/><br />
                <input type="email" onChange={handleEmailChange} defaultValue={email} name='email' placeholder='Email'  required />
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} placeholder='Password' required />
                <br />
                <input type="submit" value='Submit' />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
            <p>{password}</p>
        </div>
    );
};

export default ControlField;