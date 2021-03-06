import React, { useState } from "react";
import {Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let userLogin = event => {
    event.preventDefault();

    const userDeets = {
      email,
      password
    };
    console.log("USER OBJECT: ", userDeets)
    axios.post(`/users/login`, userDeets )
      .then(res => {
        console.log(res);
        console.log(res.data);
        //find a way to distinguish parent from teacher
              //if parent:  window.location.href="/parentPortal" 
      //if teacher:       window.location.href="/teacherPortal" 
        window.location.href="/teacherPortal"
      })
  }


  return (
    <Form noValidate onSubmit={userLogin}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <Button onClick = {userLogin} variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;








// import React, { useState } from "react";
// import {Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Route } from "react-router-dom";
// import axios from "axios";

// const LoginForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // let userLogin = event => {
//   //   event.preventDefault();

//   //   const user = {
//   //     email:"",
//   //     password:"" 
//   //   };

//   //   axios.post(`http://localhost:3001/users/login`, { user })
//   //     .then(res => {
//   //       console.log(res);
//   //       console.log(res.data);
//   //     })
//   // }


//   return (
//     <Form onSubmit={onSubmit}>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value),
//             console.log(password)
//           }
          
//         />
//       </Form.Group>
//       <Form.Group controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Remember Me!" />
//       </Form.Group>
//       <Button variant="primary" type="submit" block>
//         Login
//       </Button>
//     </Form>
//   );
// };
// export default LoginForm;