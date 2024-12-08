import React, { useState } from 'react';
import styled from 'styled-components';
import loginService from '../services/login'
import propertyService from '../services/properties'

const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  width: 80%; 
  max-width: 1200px; 
  margin: 0 auto 50px;
`;

const LoginForm = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const user = await loginService.login({
          username, password
        })
        console.log('user', user)
  
        window.localStorage.setItem(
          'loggedNoteappUser', JSON.stringify(user)
        )
        propertyService.setToken(user.jwt)
        setUser(user.jwt)
        setUsername('')
        setPassword('')
      } catch (exception) {
        console.log("virhe", exception)
      }
  };

    return (
      <FormContainer>
        <h2>Login</h2>
  
        <form onSubmit={handleLogin}>
          <div>
             username
            <input
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
             password
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </FormContainer>
    )
  }

export default LoginForm