import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

// const signupFormHandler = async (event) => {
//   event.preventDefault()

//   const email = document.querySelector('#email_signup').value.trim()
//   const username = document.querySelector('#username_signup').value.trim()
//   const password = document.querySelector('#password_signup').value.trim()

//   if (email && username && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ email, username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     })

//     if (response.ok) {
//       document.location.replace('/')
//     } else {
//       alert('Failed to sign up.')
//     }
//   }
// }

// document
//   .querySelector('.signup_form')
//   .addEventListener('submit', signupFormHandler)

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
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
      <form onSubmit={handleFormSubmit} className="signup_form">
        <div className="title_header">
          <h3>SIGN-UP</h3>
        </div>
        <div className="form_body">
          <h4>user name:</h4>
          <input
            placeholder="user name"
            onChange={handleChange}
            id="username_signup"
          ></input>
          <h4>email:</h4>
          <input
            placeholder="email"
            onChange={handleChange}
            id="email_signup"
          ></input>
          <h4>password:</h4>
          <input
            placeholder="password"
            onChange={handleChange}
            id="password_signup"
            type="password"
          ></input>
          <li>
            <a id="Btn" href="/login">
              LOG IN INSTEAD
            </a>
          </li>
          <button id="signupBtn">
            <h3>SIGN-UP</h3>
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

export default Signup;
