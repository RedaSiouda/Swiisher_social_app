import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { loginRequest } from './Requests/request';
import './CSS/SignIn.css';




function SignIn() {

  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation(loginRequest);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    const email = formData.get('emailAdress'); // Corrected spelling
    const password = formData.get('password');
  
    try {
      await mutation.mutateAsync({ email, password });
      console.log('Successfully Login');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  return (
    <div className='signIn'>
      <div className="signIn__header">
        <h2 className="signIn__title">Swiisher</h2>
        <p className="signIn__slogan"><i>To show than, yes, your pet is the cutest!</i></p>
      </div>
      <div className="signIn__containForm">
        <form onSubmit={handleLogin} className="signIn__form">
            <div className="signIn__titleForm">Connexion</div>
                <div className="signIn__containInput">
                    <input placeholder='Email' id='emailAdress' name='emailAdress' type="text" className="signIn__input" />   
                    <input placeholder='Password' id='password' name='password' type="password" className="signIn__input" />
                </div>
            <button type='submit' className="signIn__btnSubmit">Connexion</button>
            <div className="signIn__formMetaContent">
              <div className="signIn__contentLabelInput">
                <input id='checkbox' name='checkbox' type="checkbox" className="signIn__checkbox" />
                <label htmlFor="checkbox" className="signIn__label">Se souvenir de moi</label>
              </div>
              <div className="signIn__signUp">
                <a href="" className="signIn__signUpAnchor">Nouveau ?</a>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
