const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-md">
      <h3 className="mb-4 px-1 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Us
      </h3>
      <h2 className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">
        Got a technical issue? Want to send feedback about a feature? Need
        details about our future plan? Let us know.
      </h2>
      <form action="#" className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 text-sm font-medium rounded sm:w-fit bg-sky-500 dark:bg-sky-700 text-white dark:text-white hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
