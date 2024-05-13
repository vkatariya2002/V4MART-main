import React, { useState } from "react";
import "./NewsLetter.css";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const sendEmail = async () => {
    if (email) {
      try {
        const response = await axios.post("https://v4mart-backend.onrender.com/send-email", {
          to: email,
          subject: "Your Weekly E-commerce Newsletter: Exciting Updates, Offers, and More!",
          text: "Dear Valued Customers, We hope this email finds you well! As we continue to strive to enhance your online shopping experience, we're thrilled to bring you the latest updates, exclusive offers, and exciting news from [Your E-commerce Website]. New Arrivals: Explore our latest collection of trendy products! From fashion essentials to tech gadgets and home decor, we've curated a diverse range of items to suit every taste and style. Be the first to discover what's new on our shelves. Special Offers: Don't miss out on our limited-time offers and discounts! Enjoy incredible savings on selected products, including seasonal favorites and best-selling items. Whether you're shopping for yourself or looking for the perfect gift, now is the perfect time to indulge. Customer Favorites: Discover what's trending among our customers! Explore our curated selection of top-rated products and customer favorites, handpicked based on reviews and feedback. Find inspiration and shop with confidence knowing you're choosing from the best. Exclusive Deals for Subscribers: As a valued subscriber, we're pleased to offer you exclusive deals and promotions! Keep an eye on your inbox for special discounts, early access to sales, and other perks reserved just for you. Thank you for being a part of our community! Upcoming Events: Stay tuned for exciting events and promotions happening soon! Whether it's a flash sale, product launch, or seasonal promotion, we have plenty of surprises in store to make your shopping experience even more enjoyable. Feedback Matters: We value your feedback! Share your thoughts, suggestions, and ideas with us to help us improve and enhance your shopping experience. Your input is invaluable in shaping the future of [Your E-commerce Website]. Remember, shopping with us is not just about finding great products—it's about enjoying a seamless and enjoyable online shopping journey from start to finish. We're committed to providing you with exceptional service, quality products, and a personalized shopping experience every step of the way. Thank you for choosing [Your E-commerce Website]. Happy shopping! Warm regards, [Your E-commerce Website] Team P.S. Stay connected with us on social media for the latest updates, behind-the-scenes glimpses, and exclusive content. Follow us on [Insert Social Media Handles]. ",
        });
        console.log(response.data); // 'Email sent!'
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };
  return (
    <div id="offer" className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input
          type="email"
          placeholder="Your email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={sendEmail}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
