import { useState } from 'react';
import { Chat } from '../Chat';
import { LoginForm, LoginType } from '../LoginForm/LoginForm';
import './App.scss';
import { Main } from '../Main';

const INITIAL_AUTH: LoginType = {
  idInstance: localStorage.getItem('idInstance') || '',
	apiTokenInstance: localStorage.getItem('apiTokenInstance') || '',
};

export const App = () => {
  const [auth, setAuth] = useState<LoginType>(INITIAL_AUTH);

  const { idInstance, apiTokenInstance } = auth;
  console.log(idInstance);
  return (
    <div className="app">
      <h1 className="visually-hidden">Green API service</h1>
      {idInstance && apiTokenInstance ? <Main /> : <LoginForm setAuth={setAuth} />}
    </div>
  );
};