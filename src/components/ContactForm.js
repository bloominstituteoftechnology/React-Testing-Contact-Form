import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    axios.post("https://reqres.in/api/contact", data)
      .then(res => {
        console.log("cea: ContactForm.js: onSubmit(): axios post: res.data: ", res.data);
        setData(res.data);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id = "firstName"
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p data-testid = "firstNameError">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id = "lastName"
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p data-testid = "lastNameError">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id = "email" name="email" ref={register({ required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          } })} />
          {errors.email && (
            <p data-testid = "emailError">Looks like there was an error: {errors.email.message ? errors.email.message : errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id = "message" name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid = "datasubmitted" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid = "submitButton" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;