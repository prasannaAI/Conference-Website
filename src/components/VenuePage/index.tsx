import React from "react";

const VenuePage = () => {
  return(
      <div className='pt-24 text-color'>
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0"  title="map"
                    scrolling="no"
                    src=
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7924088060586!2d76.29080461479448!3d10.033982192827843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d95e11d781d%3A0x5c13731499791506!2sAIMS%20Kochi!5e0!3m2!1sen!2sin!4v1683747012245!5m2!1sen!2sin"
                    ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div
                className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Venue</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Amrita Institute of Medical Sciences,<br/>
                Kochi, Kerala,
                India
              </p>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Date</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                24 - 26 August, 2023
              </p>

            </div>
          </div>
        </section>
      </div>
  )
}

export default VenuePage;