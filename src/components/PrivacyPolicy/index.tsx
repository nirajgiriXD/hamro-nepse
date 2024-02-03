const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Our Privacy Policy
          </h2>
          <div className="space-y-8">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Introduction
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Welcome to Hamro Nepse. This privacy policy is designed to
                inform you about the types of information we may collect, how we
                use that information, and with whom we may share it.
              </p>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Information We Collect
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                <span className="text-black dark:text-white">
                  Personal Information
                </span>{" "}
                : We may collect personal information when you register,
                subscribe, or interact with our website. This may include your
                name, email address, contact details, and any other information
                you voluntarily provide.
                <br />
                <span className="text-black dark:text-white">Data Usage</span> :
                We automatically collect certain information about your device,
                including your IP address, browser type, pages visited, and the
                time and date of your visit. This helps us understand how users
                interact with our site and improve its functionality.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                How We Use Your Information
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                We use the collected information for the following purposes :
                <br />
                <ul className="list-disc list-inside">
                  <li>
                    To provide and maintain our services, delivering the stock
                    data and features you expect from our website.
                  </li>
                  <li>
                    To improve, personalize, and expand our website, analyzing
                    user behavior helps us enhance user experience and tailor
                    content to your preferences.
                  </li>
                  <li>
                    To communicate with you, responding to your inquiries,
                    providing updates, and addressing any issues or concerns you
                    may have.
                  </li>
                </ul>
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Cookies and Tracking Technologies
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Cookies are small files stored on your device that allow us to
                recognize and remember you. We use cookies and similar
                technologies to : <br />
                <ul className="list-disc list-inside">
                  <li>Analyze user behavior and trends.</li>
                  <li>Customize your experience based on your preferences.</li>
                  <li>Ensure the security of your account.</li>
                </ul>
                <br />
                You can control or disable cookies through your browser
                settings, but please note that some features of our website may
                not function properly if you do so.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Third Party Services
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                We may integrate third-party services to enhance your
                experience, such as analytics tools or social media plugins.
                These services may collect information independently, and their
                use is governed by their respective privacy policies. We
                encourage you to review these policies.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Data Security
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                We take reasonable measures to safeguard your personal
                information :
                <ul className="list-disc list-inside">
                  <li>
                    Secure Socket Layer (SSL) technology is used to encrypt data
                    during transmission.
                  </li>
                  <li>
                    Regular security audits are conducted to identify and
                    address potential vulnerabilities.
                  </li>
                </ul>{" "}
                <br />
                While we strive to protect your information, no method of
                transmission over the internet or electronic storage is
                completely secure. Therefore, we cannot guarantee absolute
                security.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Changes to This Privacy Policy
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                We reserve the right to update our privacy policy to reflect
                changes in our practices. Any modifications will be effective
                immediately upon posting the updated policy on the website. We
                recommend checking our privacy policy periodically for any
                changes.
              </p>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                Nepse Disclaimer
              </label>
              <p className="mb-8 text-md lg:mb-16 font-light text-left text-gray-500 dark:text-gray-400">
                Hamro Nepse is an open source platform and uses data from nepse
                and other related sites. The stock data provided on our website
                is for informational purposes only and should not be considered
                financial advice. Users are encouraged to verify information
                independently and seek professional advice before making any
                financial decisions. Hamro Nepse does not guarantee the accuracy
                or completeness of the stock data and shall not be held liable
                for any financial losses incurred.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
