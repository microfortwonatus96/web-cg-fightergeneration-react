import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>    
    <h2 className="section__title">Contact Us</h2>
    <section className="contact section" id="contact">
      
      
      <div className="contact__container container grid">
        <div className="contact__info">
          <div className="contact__box">
            <div className="contact__icon"><i class="fa-solid fa-location-dot"></i></div>
            <div className="contact__input-text">
              <h3>Address</h3>
              <p>jln. ringroad utara, pakuwon mall jogja</p>
            </div>
          </div>

          <div className="contact__box">
            <div className="contact__icon"><i class="fa-solid fa-phone"></i></div>
            <div className="contact__input-text">
              <h3>Phone</h3>
              <p>08xxxxxxxxxxxx</p>
            </div>
          </div>

          <div className="contact__box">
            <div className="contact__icon"><i class="fa-solid fa-envelope"></i></div>
            <div className="contact__input-text">
              <h3>Email</h3>
              <p>cgfighter@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <form action="">
            <h2>Send Message</h2>
            <div className="input__form">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>

            <div className="input__form">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>

            <div className="input__form">
              <textarea required="required"></textarea>
              <span>Type Your Message...</span>
            </div>

            <div className="input__form">
              <input type="submit" name="" value={'send'} />
            </div>
          </form>
        </div>
      </div>
    </section>
    </>

  );
};

export default Contact;
