import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  // const handleChange = (e) => {
  //   e.persist();
  //   const newFormData = {
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   };
  //   setData(newFormData);
  // };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">
            First Name*
            <input
              data-testid="first"
              name="firstName"
              placeholder="Edd"
              // value={data.firstName}
              // onChange={handleChange}
              ref={register({ required: true, maxLength: 3 })}
            />
          </label>
          {errors.firstName && (
            <p data-testid="error">
              Looks like there was an error: {errors.firstName.type}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">
            Last Name*
            <input
              id="lastName"
              name="lastName"
              placeholder="Burke"
              // value={data.lastName}
              // onChange={handleChange}
              ref={register({ required: true })}
            />
          </label>
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
            <input
              id="email"
              name="email"
              // value={data.email}
              // onChange={handleChange}
              ref={register({ required: true })}
            />
          </label>
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            // value={data.message}
            // onChange={handleChange}
            ref={register({ required: false })}
          />
        </div>

        <div>
          {data && (
            <pre
              data-testid="data"
              style={{ textAlign: "left", color: "white" }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
