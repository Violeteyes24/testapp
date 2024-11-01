// components/login/LoginCard.tsx

"use client";

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'; // If you need to decode JWT
import styles from './LoginCard.module.css';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Google client ID

const LoginCard: React.FC = () => {
  const handleSuccess = (credentialResponse: any) => {
    const decoded = jwtDecode(credentialResponse.credential);
    if (decoded.email.endsWith('@hnu.edu.ph')) {
      alert('Sign-in successful! Welcome ' + decoded.email);
    } else {
      alert('Please use an email with the @hnu.edu.ph domain.');
    }
  };

  const handleFailure = () => {
    alert('Failed to sign in. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className={styles.card}>
        <h2 className={styles.title}>MentalHelp</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className={styles.inputField}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          
        </form>
        <div className={styles.googleSignIn}>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleFailure}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginCard;
