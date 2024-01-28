import React from 'react'
import './CSS/SignIn.css';
function SignIn() {
  return (
    <div className='signIn'>
      <div className="signIn__header">
        <h2 className="signIn__title">Swiisher</h2>
        <p className="signIn__slogan"><i>To show than, yes, your pet is the cutest!</i></p>
      </div>
      <div className="signIn__containForm">
        <form action="submit" className="signIn__form">
            <div className="signIn__titleForm">Connexion</div>
                <div className="signIn__containInput">
                    <input placeholder='Email' id='username' name='username' type="text" className="signIn__input" />   
                    <input placeholder='Password' id='username' name='password' type="password" className="signIn__input" />
                </div>
            <button type='submit' className="signIn__btnSubmit">Connexion</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
