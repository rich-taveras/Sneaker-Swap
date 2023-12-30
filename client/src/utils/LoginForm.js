// LoginForm.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { ADD_USER } from './mutations'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Usa la mutación de inicio de sesión
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      // Manejar la lógica después de que la mutación de inicio de sesión se ha completado con éxito
      console.log('Login successful:', data);
    },
    onError: (error) => {
      // Manejar errores de la mutación de inicio de sesión
      console.error('Login error:', error.message);
    },
  });

  const handleLogin = async () => {
    try {
      // Llama a la mutación de inicio de sesión con las variables proporcionadas
      await login({
        variables: { email, password },
      });
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Log In'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default LoginForm;
