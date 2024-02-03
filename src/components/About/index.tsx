const About = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            About Us
          </h2>
          <div className="space-y-8">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Introduction
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Welcome to Hamro Nepse, where we're dedicated to providing users
                with comprehensive and reliable stock data. Our mission is to
                empower individuals by delivering real-time information,
                insightful analysis, and user-friendly tools to navigate the
                world of stocks and investments.
              </p>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Who we are ?
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                At Hamro Nepse, we're a passionate team of financial
                enthusiasts, data scientists, and developers committed to making
                stock data accessible to everyone. We believe that informed
                decision-making is crucial in the financial landscape, and we
                strive to be your go-to source for accurate and up-to-date
                information.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Our Vision
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Our vision is to create a platform that not only offers stock
                data but also fosters financial literacy and understanding. We
                envision a community where individuals can make confident
                decisions about their investments, whether they are seasoned
                investors or just starting their financial journey.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Why Choose Us ?
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                We pride ourselves on delivering accurate and reliable stock
                data. Our commitment to data integrity ensures that you can
                trust the information you find on our platform.Navigating the
                complexities of the stock market can be daunting, but our
                user-friendly interface is designed to make the experience
                seamless and enjoyable for users of all levels. Hamro Nepse is
                an open-source project hosted on GitHub. We believe in
                transparency and collaboration, and we invite developers and
                contributors to join us in enhancing and improving our platform.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Our Commitment to You
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Your privacy is our priority. We adhere to strict privacy
                standards, ensuring that your personal information is handled
                with care and in compliance with applicable laws. We are
                constantly working to enhance our platform. Your feedback is
                valuable to us, and we welcome suggestions for improvements or
                new features.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Join Us on This Journey
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Whether you're a seasoned investor, a curious beginner, or a
                developer interested in contributing to an open-source project,
                we invite you to join us on this journey. Together, let's
                explore the world of stocks, make informed decisions, and build
                a community that values financial literacy.
                <p className="mt-5">
                  Thank you for choosing Hamro Nepse. We're excited to be a part
                  of your financial exploration.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
