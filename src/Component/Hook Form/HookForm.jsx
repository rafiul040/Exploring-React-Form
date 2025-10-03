import React from 'react';
import UseInputField from './../Hook/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('')
    const [email, emailOnChange] = UseInputField('')
    const [password, passwordOnChange] = UseInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit', name, email, password)
    }
    // const handleEmailSubmit = e => {
    //     e.preventDefault();
    //     console.log('Submit', email)
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input defaultValue={name} onChange={nameOnChange} type="text" />
<br />
            <input type="email" defaultValue={email} onChange={emailOnChange} name="email"  />
            <br />
            <input type="password" name="password" defaultValue={password} onChange={passwordOnChange} />
<br />
            <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default HookForm;