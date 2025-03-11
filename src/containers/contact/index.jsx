import React, { useRef } from "react";
import emailjs from "emailjs-com";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_25i5j2b", // Replace with your actual Service ID
      "template_obol5va", // Replace with your actual Template ID
      form.current,
      "J2orzQnR64rE5dS4w" // Replace with your actual Public Key
    ).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error("Email send error:", error.text);
        alert("Failed to send message. Try again later.");
      }
    );

    form.current.reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form ref={form} onSubmit={sendEmail} className="contact__content__form__controlswrapper">
              <div>
                <input required name="user_name" className="inputName" type="text" />
                <label htmlFor="user_name" className="nameLabel">Name</label>
              </div>
              <div>
                <input required name="user_email" className="inputEmail" type="email" />
                <label htmlFor="user_email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea required name="message" className="inputDescription" rows="5" />
                <label htmlFor="message" className="descriptionLabel">Message</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;