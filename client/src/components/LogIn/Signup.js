import React from "react";
import { Form, Button} from "react-bootstrap";
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

  let userLogin = event => {
    event.preventDefault();

    userLogin = {
      email:"",
      password:"",
      name:"",
      isTeacher:""
    };

    axios.post(`http://localhost:3001/users/register`, { userLogin })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }



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
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {/* <Form.Row> */}
          {/* <Form.Group as={Col} md="4" controlId="validationFormik01"> */}
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            isValid={touched.firstName && !errors.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          {/* </Form.Group> */}

          {/* <Form.Group as={Col} md="4" controlId="validationFormik02"> */}
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            isValid={touched.lastName && !errors.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          {/* </Form.Group> */}

          {/* <Form.Group as={Col} md="4" controlId="validationFormikUsername"> */}
          <Form.Label>Email</Form.Label>
          {/* <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend> */}
          <Form.Control
            type="text"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
            name="email"
            value={values.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          {/* </InputGroup> */}
          {/* </Form.Group> */}
          {/* </Form.Row> */}
          {/* <Form.Row> */}
          {/* <Form.Group as={Col} md="6" controlId="validationFormik03"> */}
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserName"
            name="userName"
            value={values.username}
            onChange={handleChange}
            // isInvalid={!!errors.username}
          />

          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
          {/* </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback> */}
          {/* </Form.Group> */}
          {/* <Form.Group as={Col} md="3" controlId="validationFormik05"> */}
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="Password"
            value={values.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />

          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
          {/* </Form.Group> */}
          {/* </Form.Row> */}
          {/* <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
          />*/}
          {/* </Form.Group> */}
          <Button className="top-1" type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}
export default SignUp;
