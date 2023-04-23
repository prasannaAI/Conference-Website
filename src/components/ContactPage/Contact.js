import React from "react";

function Contact() {
  return (
    <>
      <div className="p-10 pt-4 sm:p-10  lg:px-24 pt-20 text-lg 2xl:px-40 text-xl flex justify-center leading-6 md:leading-7 lg:leading-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <div className="w-full md:w-6/12 lg:w-6/12 md:pr-8">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-color mb-4 md:mb-6 lg:mb-8">
                Let's talk about everything!
              </h3>
              <img src="/assets/images/world-tour.svg" alt="Contact From " className="w-full" />
            </div>
            <div className="w-full pt-4 md:w-6/12 lg:w-6/12">
              <form className="mb-5" id="contactForm" name="contactForm">
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border bg-gray-500/20 border-gray-600"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-600  bg-gray-500/20"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded border border-gray-600 bg-gray-500/20"
                    name="subject"
                    id="subject"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full p-2 rounded border border-gray-600 bg-gray-500/20"
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button className="bg-blue-500 hover:text-lightBlue text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
