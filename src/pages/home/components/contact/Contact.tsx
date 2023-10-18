import { Button, Form, Input } from "antd";
import "./contact.scss";
import { contactFormData, contactVariants } from "./constants";
import { motion, useInView } from "framer-motion";
import { PhoneIcon } from "src/assets";
import { useRef } from "react";

function ContactSection() {
  const ref = useRef<any>();
  const isInView = useInView(ref, { margin: "-100px" });
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
            <Form name="normal_login" className="form-form" layout={"vertical"}>
              {contactFormData.map((item) => {
                return (
                  <Form.Item
                    name={item.name}
                    rules={
                      item.type === "email"
                        ? [
                            {
                              type: "email",
                              required: true,
                              message: item.message2,
                            },
                          ]
                        : [{ required: true, message: item.message }]
                    }
                    className={item.className}
                    key={item.name}
                  >
                    {item.text ? (
                      <Input.TextArea
                        rows={4}
                        maxLength={400}
                        placeholder={item.placeholder}
                      />
                    ) : (
                      <Input placeholder={item.placeholder} />
                    )}
                  </Form.Item>
                );
              })}
              <Button
                htmlType="submit"
                className="contact-form-btn full"
                type="primary"
              >
                Submit
              </Button>
            </Form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactSection;
