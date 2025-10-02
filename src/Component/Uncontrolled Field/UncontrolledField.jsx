import React, { useRef, useState } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const [user, setUser] = useState('')

    const handler = e =>  {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        // console.log(email, pass)
        if(emailRef){
            setUser(email + " " + pass)
        }
        else{
            setUser("")
        }
    }


    return (
        <div>
            

        <form onSubmit={handler}>
            <input type="email" name='email' required ref={emailRef}/><br />
            <input type="password" name='password' ref={passRef} /><br />
            <input type="submit" value="Submit" />
        </form>
        <h3>
            {user}
            </h3>


        </div>
    );
};

export default UncontrolledField;