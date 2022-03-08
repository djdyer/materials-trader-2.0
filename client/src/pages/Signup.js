// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

// function Signup(props) {
//   const [formState, setFormState] = useState({ email: "", password: "" });
//   const [addUser, {error} ] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//         firstName: formState.firstName,
//         lastName: formState.lastName,
//       },
//     });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   } catch (e){
//     console.log(e);
//   }
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
//           placeholder="first"
//           name="firstName"
//           type="firstName"
//           id="firstName"
//           onChange={handleChange}
//         />
//         <input
//           placeholder="last"
//           name="lastName"
//           type="lastName"
//           id="lastName"
//           onChange={handleChange}
//         />
//         <input
//           placeholder="email"
//           name="email"
//           type="email"
//           id="email"
//           onChange={handleChange}
//         />
//         <input
//           placeholder="******"
//           name="password"
//           type="password"
//           id="pwd"
//           onChange={handleChange}
//         />
//         <h5>
//           {/* {" "} */}
//           Login instead, click <a href="/login">here</a>
//         </h5>
//         <button className="shadow-pop-br" id="signupBtn" type="submit">
//           <h1>CREATE ACCOUNT</h1>
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

// export default Signup;

// =============================================================

{
  /* <form class="signup_form">
      <div class="title_header">
        <h3>SIGN-UP</h3>
      </div>
      <div class="form_body">
        
        <h4>
          user name:
        </h4>
        <input id="username_signup"></input>
        <h4>
          email:
        </h4>
        <input id="email_signup"></input>
        <h4>
          password:
        </h4>
        <input id="password_signup" type="password"></input>
        <li><a id="Btn" href="/login">LOG IN INSTEAD</a></li>
        <button id="signupBtn"><h3>SIGN-UP</h3></button>
      </div>
    </form> 
    <script src="/js/signup.js"></script> */
}
