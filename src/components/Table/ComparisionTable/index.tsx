interface CompanyProp {
  symbol: string;
  name: string;
  sector: string;
  open: string;
  high: string;
  low: string;
  close: string;
  percentage_change: string;
  volume: string;
  date: string;
}

interface ComparisionTableProp {
  companyOne: CompanyProp;
  companyTwo: CompanyProp;
  handleCompanyOneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyTwoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ComparisionTable = ({
  companyOne,
  companyTwo,
  handleCompanyOneChange,
  handleCompanyTwoChange,
}: ComparisionTableProp) => {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Symbol (1)
          </label>
          <input
            type="text"
            onChange={handleCompanyOneChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="SYMBOL"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Symbol (2)
          </label>
          <input
            type="text"
            onChange={handleCompanyTwoChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="SYMBOL"
          />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Metrics
              </th>
              <th scope="col" className="px-6 py-3">
                {companyOne.symbol === "*" ? "Company One" : companyOne.symbol}
              </th>
              <th scope="col" className="px-6 py-3">
                {companyTwo.symbol === "*" ? "Company Two" : companyTwo.symbol}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name
              </th>
              <td className="px-6 py-2">{companyOne.name}</td>
              <td className="px-6 py-2">{companyTwo.name}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Sector
              </th>
              <td className="px-6 py-2">{companyOne.sector}</td>
              <td className="px-6 py-2">{companyTwo.sector}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Open
              </th>
              <td className="px-6 py-2">{companyOne.open}</td>
              <td className="px-6 py-2">{companyTwo.open}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                High
              </th>
              <td className="px-6 py-2">{companyOne.high}</td>
              <td className="px-6 py-2">{companyTwo.high}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Low
              </th>
              <td className="px-6 py-2">{companyOne.low}</td>
              <td className="px-6 py-2">{companyTwo.low}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Close
              </th>
              <td className="px-6 py-2">{companyOne.close}</td>
              <td className="px-6 py-2">{companyTwo.close}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Percentage Change
              </th>
              <td className="px-6 py-2">{companyOne.percentage_change}</td>
              <td className="px-6 py-2">{companyTwo.percentage_change}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Volume
              </th>
              <td className="px-6 py-2">{companyOne.volume}</td>
              <td className="px-6 py-2">{companyTwo.volume}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Data as of
              </th>
              <td className="px-6 py-2">{companyOne.date}</td>
              <td className="px-6 py-2">{companyTwo.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComparisionTable;
