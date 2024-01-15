const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const contactEmail = nodemailer.createTransport({
//   // service: 'gmail',
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'victoria82@ethereal.email',
//     pass: 'PmK215pC6wEBy7nDwz',
//     authMethod: 'PLAIN',
//   },
// });

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'victoria82@ethereal.email',
    pass: 'PmK215pC6wEBy7nDwz',
    authMethod: 'PLAIN',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "swarajsaiyan@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  console.log(name, email, "waao", message, phone)

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ code: 500, status: "Internal Server Error", error: error.message });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});
