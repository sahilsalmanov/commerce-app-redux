import React, { useContext } from 'react';
 import { useState } from 'react';
 import { LoginContext } from './LoginContext';
 import { useNavigate } from 'react-router-dom';
 import './Login.css';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 
 function Register({ addUser }) {
   let navigate = useNavigate();
   const { loginStatus, setloginStatus } = useContext(LoginContext);
 
   const validationSchema = Yup.object({
     firstName: Yup.string()
     .max(50, 'It can be a maximum of 50 characters')
     .required('First Name must required'),
         lastName: Yup.string()
         .required("Last Name must filled"),
         email: Yup.string()
        .required('Email must required'),
         password: Yup.string()
         .min(8, 'Password must be at least 8 characters')
         .matches(
           /^(?=.*[A-Z]).*$/,
           'Password must start with an uppercase letter'
         )
         .required('Password is required'),
       confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Passwords must match')
         .required('Confirm Password is required'),
 })
 
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       confirmPassword: '',
     },
     validationSchema: validationSchema,
     onSubmit: (values) => {
       const newUser = {
         firstName: values.firstName,
         lastName: values.lastName,
         email: values.email,
         password: values.password,
         confirmPassword: values.confirmPassword,
       };
        addUser(newUser);
        navigate('/login');
      
     },
   });

   function toLogin() {
    navigate('/login')
   }
 

   return (
     <>
       <div className="login">
         <div className="form">
           <form onSubmit={formik.handleSubmit} noValidate>
             <span>Register</span>
             <input
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName}
               type="text"
               name="firstName"
               placeholder="First Name"
               className="form-control inp_text"
               id="firstName"
             />
             {formik.touched.firstName && formik.errors.firstName ? (
               <div className="error">{formik.errors.firstName}</div>
             ) : null}
             <input
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.lastName}
               type="text"
               name="lastName"
               placeholder="Last Name"
               className="form-control inp_text"
               id="lastName"
             />
             {formik.touched.lastName && formik.errors.lastName ? (
               <div className="error">{formik.errors.lastName}</div>
             ) : null}
             <input
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
               type="email"
               name="email"
               placeholder="Enter email id / username"
               className="form-control inp_text"
               id="email"
             />
             {formik.touched.email && formik.errors.email ? (
               <div className="error">{formik.errors.email}</div>
             ) : null}
 
             <input
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
               type="password"
               name="password"
               placeholder="Enter password"
               className="form-control"
             />
             {formik.touched.password && formik.errors.password ? (
               <div className="error">{formik.errors.password}</div>
             ) : null}
 
             <input
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.confirmPassword}
               type="password"
               name="confirmPassword"
               placeholder="Confirm password"
               className="form-control"
             />
             {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
               <div className="error">{formik.errors.confirmPassword}</div>
             ) : null}
 
             <button  style={{ marginBottom: '30px' }} type="submit">
               Sign Up
             </button>
             <a onClick={toLogin} href="">Do you have any account?</a>
           </form>
         </div>
       </div>
     </>
   );
 }
 
 export default Register;
 