import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState();
  const [newUserFormValues, setNewUserFormValues] = useState({});
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });


  const formSubmit = (e) => {

    console.log("form was submitted")
      e.preventDefault(); //  to prevent browser refresh

      const newUser = {
          firstName: newUserFormValues.firstName,
          lastName: newUserFormValues.lastName,
          email: newUserFormValues.email,
          message: newUserFormValues.message
      }

      console.log("new user: ", newUser)
      postNewUser(newUser) // post new user using helper function postNewUser
  };

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setData(res.data)
        console.log("New User ", res.data);
        console.log("Successful res back from Axios, res.data: ", res.data);

        setNewUserFormValues({}); // reset form
        alert("Congratulations!  You have created a new user profile")

      })
      .catch(err => {
        console.log("Error: ", err)
        alert("Oh no!  There was an error when logging in.  Please try again.")
        // history.push(`/error`)
        debugger
      })
  } // posts and resets form


  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="firstNameID">First Name*</label>
          <input
            name="firstName"
            value={newUserFormValues.firstName}
            id="firstNameID"
            placeholder="Edd"
            ref={register({ required: true, maxLength: 10 })} // change here to debug
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            value={newUserFormValues.lastName}
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input 
            name="email" 
            value={newUserFormValues.email}
            id="email"
            placeholder="bluebill1049@hotmail.com"
            ref={register({ required: true })} 
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label> Are you over 18 years of age?
          <input 
          id="isOverEighteen" 
          type="checkbox" 
          name="isOverEighteen"
          data-testid="is-over-eighteen"
          checked={newUserFormValues.isOverEighteen} 
          // onChange={inputChange}
          /> 
          </label>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={newUserFormValues.message}
            id="message" 
            ref={register({ required: false })} 
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid="submit-button"></input>
      </form>
    </div>
  );
};

export default ContactForm;
