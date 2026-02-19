import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Formik Registration:", values);
    alert("User registered with Formik");
    resetForm();
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "User Registration (Formik)"),
    React.createElement(
      Formik,
      { initialValues, validationSchema, onSubmit },
      React.createElement(
        Form,
        null,
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Username:"),
          React.createElement("br"),
          React.createElement(Field, { type: "text", name: "username" }),
          React.createElement(ErrorMessage, { name: "username", component: "div" })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Email:"),
          React.createElement("br"),
          React.createElement(Field, { type: "email", name: "email" }),
          React.createElement(ErrorMessage, { name: "email", component: "div" })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Password:"),
          React.createElement("br"),
          React.createElement(Field, { type: "password", name: "password" }),
          React.createElement(ErrorMessage, { name: "password", component: "div" })
        ),
        React.createElement("button", { type: "submit" }, "Register")
      )
    )
  );
};

export default FormikForm;
