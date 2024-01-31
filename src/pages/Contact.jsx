/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-md px-4 mx-auto">
        <h2 className="text-center heading">Contact Us</h2>
        <p className="mb-8 font-light text-center lg:mb-16 text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div className="mb-4">
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="mt-1 form_input"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="mt-1 form_input"
            />
          </div>
          <div className="mb-4 sm:col-span-2">
            <label htmlFor="message" className="form_label">
            Your message
            </label>
            <textarea rows='6'
              type="text"
              id="message"
              placeholder="Leave a comment..."
              className="mt-1 form_input"
            />
          </div>
          <botton type="submit" className="rounded btn sm:w-fit">Submit</botton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
