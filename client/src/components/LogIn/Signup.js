import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
// import { Formik } from "formik";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";

const validationSchema = yup.object().shape({
  username: yup.string().required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contactNumber: yup.number().required("Required"),
  password: yup.string().required("Required"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Required"),
});

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let userLogin = (event) => {
    event.preventDefault();

    let userLogin = {
      firstName,
      lastName,
      email,
      password,
      isTeacher: true
    };
    console.log("USER OBJECT: ", userLogin)
    axios.post(`/users/register`, { userLogin }).then((res) => {
      console.log(res);
      console.log(res.data);

      //needs to be if statement, there should be a parameter to know if teacher or parent
        //find a way to distinguish parent from teacher
              //if parent:  window.location.href="/parentPortal" 
      //if teacher:       window.location.href="/teacherPortal" 
      window.location.href="/teacherPortal"
    });
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
      }}
    >
      {({
        handleSubmit,
        // handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={userLogin}>
          {/* <Form.Row> */}
          {/* <Form.Group as={Col} md="4" controlId="validationFormik01"> */}
          <Form.Label>First name</Form.Label >
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            isValid={touched.firstName && !errors.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          {/* </Form.Group> */}

          {/* <Form.Group as={Col} md="4" controlId="validationFormik02"> */}
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            isValid={touched.lastName && !errors.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Label>Email</Form.Label>
        
          <Form.Control
            type="text"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
      
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // isInvalid={!!errors.password}
          />

          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
   
          <Button className="top-1" type="submit">
            Submit form
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default SignUp;
