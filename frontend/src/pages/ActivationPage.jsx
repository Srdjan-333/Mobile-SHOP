import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { server } from '../server';

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          setLoggedIn(true);
        } catch (err) {
          setError(true);
        }
      };

      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: error ? 'red' : 'green', fontSize: '2rem' }}>
          {error
            ? 'Vaš token za registraciju je istekao!'
            : 'Vaš nalog je uspešno kreiran!'}
        </h2>
        <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
          {error
            ? 'Žao nam je, ali vaš token za aktivaciju naloga je istekao. Molimo vas da se registrujete ponovo.'
            : 'Hvala vam na registraciji! Vaš nalog je uspešno kreiran i sada možete da se prijavite.'}
        </p>
        {loggedIn ? (
          <Link
            to="/login"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
          >
            Prijavite se
          </Link>
        ) : (
          <Link
            to="/signup"
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#2196F3',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e87dc')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2196F3')}
          >
            Registrujte se
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
