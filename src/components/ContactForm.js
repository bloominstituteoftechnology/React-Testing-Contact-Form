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
            data-testid="firstName"
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p>
              Looks like there was an error:{" "}
              <span data-testid="firstNameError">{errors.firstName.type}</span>
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            data-testid="lastName"
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>
              Looks like there was an error:{" "}
              <span data-testid="lastNameError">{errors.lastName.type}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            data-testid="email"
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          {errors.email && (
            <p>
              Looks like there was an error:{" "}
              <span data-testid="emailError">{errors.email.type}</span>
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            data-testid="message"
            name="message"
            ref={register({ required: false })}
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
