import React, { useState, useEffect } from "react";

const HooksExample = () => {
  // Create state varibales using usestate
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // useEffect runs when the name,email,or submitted changes
  useEffect(() => {
    if (submitted) {
      console.log("Form submitted:", name, email);
    }
  }, [name, email, submitted]);

  //Handles the form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Display success message when form is submitted */}
      {submitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default HooksExample;
