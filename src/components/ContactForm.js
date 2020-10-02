import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Edd"
            ref={register({ 
              required: true, 
              minLength: 2,
              pattern: {
                value: /^[A-Z]/i
              } 
            })}
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
            placeholder="Burke"
            ref={register({ 
              required: true, 
              minLength: 2,
              pattern: {
                value: /^[A-Z]/i
              } 
            })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input 
            id="email"
            name="email" 
            placeholder="bluebill1049@hotmail.com"
            ref={register({ 
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              }
            })}
            />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name="message" 
            placeholder="enter message (optional)"
            ref={register({ required: false })} />
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
