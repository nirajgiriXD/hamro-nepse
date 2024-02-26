/**
 * External dependencies.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Data {
  date: string;
  link: string;
}

const InvestingCalendarPage = () => {
  const [fpoData, setFpoData] = useState<Data[]>([] as Data[]);
  const [ipoData, setIpoData] = useState<Data[]>([] as Data[]);

  const ipoUpdatesUrl = "https://www.sebon.gov.np/ipo-pipeline";
  const fpoUpdatesUrl = "https://www.sebon.gov.np/fpo-pipeline";

  const getData = async (url: string): Promise<Data[]> => {
    try {
      const response = await fetch(url);
      const data = await response.text();
      const doc = new DOMParser().parseFromString(data, "text/html");

      // Extract data from <tr> elements
      const rows = Array.from(doc.querySelectorAll("tbody tr")).map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        const dateData = cells[0].textContent?.trim() ?? "";
        const linkElement = cells[2].querySelector("a");
        const link = linkElement ? linkElement.getAttribute("href") ?? "" : "";
        return { date: dateData, link: link };
      });

      return rows;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      return [];
    }
  };

  useEffect(() => {
    getData(fpoUpdatesUrl)
      .then((rows) => setFpoData(rows))
      .catch((error) =>
        console.error(`Error fetching data from ${fpoUpdatesUrl}:`, error)
      );

    getData(ipoUpdatesUrl)
      .then((rows) => setIpoData(rows))
      .catch((error) =>
        console.error(`Error fetching data from ${ipoUpdatesUrl}:`, error)
      );
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-md shadow-md text-center">
      {fpoData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold">FPO Data</h2>
          <ul className="mt-4">
            {fpoData.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">Date:</span> {item.date},{" "}
                <span className="font-bold">
                  {item.link === "" ? (
                    <span className="opacity-80">Details</span>
                  ) : (
                    <Link to={item.link as string}>Details</Link>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render IPO data */}
      {ipoData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold">IPO Data</h2>
          <ul className="mt-4">
            {ipoData.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">Date:</span> {item.date},{" "}
                <span className="font-bold">
                  <Link to={item.link as string}>Details</Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InvestingCalendarPage;
