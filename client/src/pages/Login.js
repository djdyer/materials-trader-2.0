import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };

//   document
//     .querySelector('.login_form')
//     .addEventListener('submit', loginFormHandler);

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="login_form">
        <div className="title_header">
          <h3>LOGIN</h3>
        </div>
        <div className="form_body">
          <h4>Email:</h4>
          <input
            onChange={handleChange}
            placeholder="e-mail"
            id="Email-login"
          ></input>

          <h4>Password:</h4>
          <input
            onChange={handleChange}
            placeholder="password"
            id="password-login"
            type="password"
          ></input>
          <li>
            <a id="Btn" href="/signup">
              SIGN-UP INSTEAD
            </a>
          </li>
          <button id="loginBtn">
            <h3>LOGIN</h3>
          </button>
        </div>
      </form>

      {error ? (
        <div>
          <p className="error-text" style={{ color: "red" }}>
            The provided credentials are incorrect
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
