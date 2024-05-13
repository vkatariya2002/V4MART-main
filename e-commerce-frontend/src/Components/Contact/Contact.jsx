import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      try {
        const response = await axios.post(
          "https://v4mart-backend.onrender.com/send-email",
          {
            to: email,
            subject: `V4Mart Message to ${name}`,
            text: `Hello ${name}, We got your email. We will contact soon. Your Message "${message}"`,
          }
        );
        toast.success("Message sent successfully. We will contact soon.");
        setEmail("");
        setMessage("");
        setName("");
        console.log(response.data); // 'Email sent!'
      } catch (error) {
        toast.error(error)
        console.error("Error sending email:", error);
      }
    }
  };
  return (
    <div
      style={{ backgroundColor: "#f8f8f8" }}
      className="mt-5 container py-5 rounded"
    >
      <div className="row text-center">
        <div className="col">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="p-3 form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="p-3 form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleMessage" className="form-label">
                Message
              </label>
              <textarea
                className="p-3 form-control"
                id="exampleMessage"
                rows="3"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
