import Link from "next/link";

export const metadata = {
  title: "Contact | Rishan Baweja's Personal Website",
};

export default function ContactPage() {
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
      <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="comments"
          placeholder="Message"
          required
        ></textarea>

        <input className="submit" type="submit" value="Submit" />
      </form>

      <footer className="footer">
        © 2025 Rishan Baweja&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
