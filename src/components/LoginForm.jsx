import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-form">
      <h3>{isLogin ? 'Login' : 'Register'}</h3>
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        {!isLogin && (
          <>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </>
        )}
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <div className="toggle-form" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'New here? Register' : 'Already have an account? Login'}
      </div>
    </div>
  );
};

export default LoginForm;
