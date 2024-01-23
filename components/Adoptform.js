import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    userEmail: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const handleValidation = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.fName) {
      newErrors.fName = "First name is required";
    }
    if (!formData.lName) {
      newErrors.lName = "Last name is required";
    }
    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = "Invalid email address";
    }

    if (Object.keys(newErrors).length === 0) {


      setSuccessMessage("Form submitted successfully!");
      setFormData({
        fName: "",
        lName: "",
        userEmail: "",
        comments: "",
      });

      
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
    
      setSuccessMessage("");
      setErrors(newErrors);

     
      setTimeout(() => {
        setErrors("");
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    
    <section className="content">
      {/* Form with an id for identification and onSubmit event to trigger validation */}
      <form id="myForm" onSubmit={handleValidation}>
        {/* Input field for the first name with placeholder and onChange event */}
        <label htmlFor="fName">Your First Name</label>
        <input
          type="text"
          id="fName"
          placeholder="Name"
          value={formData.fName}
          onChange={handleChange}
        />
        {/* Display error message for first name if it exists */}
        {errors.fName && <p>{errors.fName}</p>}

        {/* Input field for the last name with placeholder and onChange event */}
        <label htmlFor="lName">Your Last Name</label>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          value={formData.lName}
          onChange={handleChange}
        />
        {/* Display error message for last name if it exists */}
        {errors.lName && <p>{errors.lName}</p>}

        {/* Input field for the email with placeholder and onChange event */}
        <label htmlFor="userEmail">Your Email</label>
        <input
          id="userEmail"
          placeholder="johndoe@gmail.com"
          value={formData.userEmail}
          onChange={handleChange}
        />
        {/* Display error message for email if it exists */}
        {errors.userEmail && <p>{errors.userEmail}</p>}

        {/* Input field for comments with placeholder and onChange event */}
        <label htmlFor="comments">Comments</label>
        <input
          type="text"
          id="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        />

        {/* Submit button to trigger form validation */}
        <input type="submit" value="submit" />

        {/* Display success message if it exists */}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </section>
  );
};

// Export the component for use in other parts of the application
export default MyForm;