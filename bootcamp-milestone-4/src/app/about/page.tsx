"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const metadata = {
  title: "Contact | Rishan Baweja's Personal Website",
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Replace these three with YOUR EmailJS IDs
  const SERVICE_ID = "service_amxfyfi";
  const TEMPLATE_ID = "template_lan7e5k";
  const PUBLIC_KEY = "h1YgdenB5s9ywEs3M";

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Succesful: ", result.text);
          setStatus("Message sent successfully! Thank you.");
          formRef.current?.reset();
        },
        (error) => {
          console.log("Error sending: ", error.text);
          setStatus("Something went wrong. Please try again.");
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <main>
      <h1 className="page-title">Contact Information</h1>

      <p className="contact-information">
        <strong>Personal Email:</strong> rishan.sb@gmail.com
        <br />
        <br />
        <strong>Cal Poly School Email:</strong> rbaweja@calpoly.edu
        <br />
        <br />
        <strong>Phone Number:</strong> (707)-799-4760
        <br />
        <br />
      </p>

      <h2>Contact Me!</h2>

      <form id="contact-form" ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Message" required />

        <input
          className="submit"
          type="submit"
          value={sending ? "Sending..." : "Submit"}
          disabled={sending}
        />
      </form>

      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}

      <footer className="footer">
        © 2025 Rishan Baweja&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
