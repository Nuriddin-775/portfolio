import "./contact.scss";
import { contactVariants } from "./constants";
import { motion, useInView } from "framer-motion";
import { PhoneIcon } from "src/assets";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const ref = useRef<any>();
  const formRef = useRef<any>();

  const isInView = useInView(ref, { margin: "-100px" });
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        "service_2skaqci",
        "template_wswvt1n",
        formRef.current,
        "7FKKj8daskmdL26UM"
      )
      .then(
        (result) => {
          // setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          // setError(true);
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="Contact" className="contact container">
      <motion.div
        ref={ref}
        className="contact-content"
        variants={contactVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="contact-text" variants={contactVariants}>
          <motion.h1 variants={contactVariants}>Let's work together</motion.h1>
          <motion.div className="contact-text-links" variants={contactVariants}>
            <motion.div variants={contactVariants}>
              <p>Mail</p>
              <a href="mailto:developernuriddin@gmail.com" target="blank">
                developernuriddin@gmail.com
              </a>
            </motion.div>
            <motion.div variants={contactVariants}>
              <p>Github</p>
              <a href="https://github.com/Nuriddin-775" target="blank">
                github.com/Nuriddin-775
              </a>
            </motion.div>
            <motion.div variants={contactVariants}>
              <p>Telegram</p>
              <a href="https://t.me/Nuriddin_775" target="blank">
                t.me/Nuriddin_775
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="contact-form">
          <motion.div
            className="contact-form-icon"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <PhoneIcon isInView={isInView} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              name="normal_login"
              className="form-form contact-form-form"
            >
              <input
                type="text"
                value={name}
                required
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                required
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                value={message}
                placeholder="Message"
                cols={30}
                rows={6}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="contact-form-btn full" type="submit">
                Submit
              </button>
              {/* {error && "Error"}
              {success && "Success"} */}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
