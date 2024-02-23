const IpoCheckerPage = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-md shadow-md text-center">
      <h1 className="text-2xl font-semibold mb-4">IPO Checker</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Please visit{" "}
        <a
          href="https://iporesult.cdsc.com.np/"
          target="_blank"
          className="text-sky-600 dark:text-sky-400"
        >
          AllotmentResult
        </a>{" "}
        in order to check IPO Result
      </p>
    </div>
  );
};

export default IpoCheckerPage;
