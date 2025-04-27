import React, { useState , useContext} from 'react';
import { useLoginMutation } from '../services/api';
import { useNavigate } from 'react-router-dom';
import "./pageCss/login.css"; 



const Login = () => {

    
    const [login, { isLoading, error }] = useLoginMutation();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await login(formData).unwrap();
  
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        const userRole = response.user.role; 
        if (userRole === 'user'){
            navigate('/user/dashboard');
        }else{
            navigate('/vendor/dashboard');
        }
  
        
      } catch (err) {
        console.error('Login error:', err);
      }
    };

    
  
    return (
      <div className="login-container">
        
        <div className="login-logo">
          <h1 className="logo-text">🌿EcoRecycle</h1>
        </div>
  
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
  
        {error && <p className="error-message">Error: {error.message}</p>}
  
        <div className="register-link">
          <p className="register-text">Don't have an account?</p>
          <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    );
  };
  
export default Login;