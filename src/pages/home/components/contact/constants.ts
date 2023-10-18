export const contactVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const contactFormData = [
  {
    name: "name",
    placeholder: "Your name",
    message: "Please input your name!",
    className: "full",
  },
  {
    name: "email",
    placeholder: "Email",
    message: "Please input your email!",
    message2: "Not a valid email",
    className: "full",
    type: "email",
  },
  {
    name: "message",
    placeholder: "Message",
    message: "Please input your phone message!",
    className: "full",
    text: true,
  },
];
