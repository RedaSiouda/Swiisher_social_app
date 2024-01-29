import React from 'react';
import './CSS/SignUp.css';
import { useMutation } from 'react-query';
import {createUserRequest} from './Requests/request'

function SignUp() {

  const mutation = useMutation(createUserRequest);

  const handleSignUp = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const emailAdress = formData.get('emailAdress');
    const password = formData.get('password'); 
    const userName = formData.get('userName');
    const displayName = formData.get('displayName');
    const pet = formData.get('pet');
    const profilPic = formData.get('profilPic')
    try {
      await mutation.mutateAsync({ emailAdress, password, userName, displayName, pet, profilPic });
      console.log('New user created');
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  }
  return (
    <div className='signUp'>
      <div className="signUp__header">
        <h2 className="signUp__title">Swiisher</h2>
        <p className="signUp__slogan"><i>To show than, yes, your pet is the cutest!</i></p>
      </div>
      <div className="signUp__containForm">
        <form onSubmit={handleSignUp} className="signUp__form">
        <div className="signUp__title">Bienvenue! C'est ici que tout commence</div>
        <div className="signUp__containInput">
          <label htmlFor="profilPic" className="signUp__labelInput">Choisisez votre photo de profil</label>
          <input id='profilPic' name='profilPic' placeholder='Choisisez votre phot de profil' type="file" className="signUp__input" />
          <input id='emailAdress' name='emailAdress' placeholder='Adress Email' type="text" className="signUp__input" />
          <input id='displayName' name='displayName' placeholder='display name' type="text" className="signUp__input" />
          <input id='userName' name='userName' placeholder='username' type="text" className="signUp__input" />
          <input id='password' name='password' placeholder='password' type="text" className="signUp__input" />
          <input id='pet' name='pet' placeholder="your pet's name" type="text" className="signUp__input" />
        </div>
        <button className="signUp__btnSubmit">Creer un compte</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
