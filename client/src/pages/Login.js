// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";

// function Login() {
//   const [formState, setFormState] = useState({ email: "", password: "" });
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="register">
//       <form className="registerFields" onSubmit={handleFormSubmit}>
//         <input
//           name="email"
//           type="email"
//           id="email"
//           placeholder="e-mail"
//           onChange={handleChange}
//         />
//         <input
//           name="password"
//           type="password"
//           id="password"
//           placeholder="password"
//           onChange={handleChange}
//         />
//         <h5>
//           {/* {" "} */}
//           Sign-up instead, click <a href="/signup">here</a>
//         </h5>
//         <button type="submit" className="shadow-pop-br" id="loginBtn">
//           <h1>LOG-IN</h1>
//         </button>
//       </form>
//       {error ? (
//         <div>
//           <p className="error-text" style={{ color: "red" }}>
//             The provided credentials are incorrect
//           </p>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default Login;

// ==========================================================================

// <form class="login_form">
//   <div class="title_header">
//     <h3>LOGIN</h3>
//   </div>
//   <div class="form_body">
//     <h4>
//       Email:
//     </h4>
//     <input id="Email-login"></input>
//     <h4>
//       Password:
//     </h4>
//     <input id="password-login" type="password"></input>
//     <li><a id="Btn" href="/signup">SIGN-UP INSTEAD</a></li>
//     <button id="loginBtn"><h3>LOGIN</h3></button>
//   </div>
// </form>
//  <script src="/js/login.js"></script>
