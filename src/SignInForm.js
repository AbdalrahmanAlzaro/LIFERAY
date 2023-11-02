import React, { useState } from "react";

const SignInForm = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "emailAddress") {
      setEmailAddress(value);
    } else if (name === "rememberMe") {
      setRememberMe(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the form data to your backend server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={firstName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="emailAddress"
        placeholder="Email address"
        value={emailAddress}
        onChange={handleInputChange}
      />
      <input
        type="checkbox"
        name="rememberMe"
        checked={rememberMe}
        onChange={handleInputChange}
      />
      <label htmlFor="rememberMe">Remember me</label>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;
