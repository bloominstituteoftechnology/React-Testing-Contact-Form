import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormReset = () => {
  Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = ""))
}

const LabelReset = () => {
  Array.from(document.querySelectorAll("textarea")).forEach(
    label => (label.value = ""))
}



const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
    FormReset();
    LabelReset();
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id='firstName'
            name="firstName"
            placeholder="enter first name"
            ref={register({ 
              required: true, 
              maxLength: 10, 
            })}
            
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="enter last name"
            ref={register({ 
              required: true, 
              minLength: 2 
            })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            Email*
          </label>
          <input name="email" 
            id="email"
            placeholder="enter email address"
            ref={register({ 
              required: true, 
              pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            }
          })} 
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message" 
            ref={register({ 
              required: false 
            })} 
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
