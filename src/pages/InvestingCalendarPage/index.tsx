import { useEffect } from "react";

const InvestingCalendarPage = () => {
  useEffect(() => {
    fetch("https://nepsealpha.com/api/smx9841/investment_calander", {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        cookie:
          "_ga=GA1.1.976327797.1692522892; cf_clearance=IjCaAsLx_DBWT9.VTVUBsAepDxiDw.jVC0aTGZenLao-1708704650-1.0-AXYDfbkaljVC4n/3dZurUvDhWXtua1jy6ExQ2cwF1d8Lby8K8iuTThfuPLEBpYknRzm+TiOBoujKfdRzCOHBGgQ=; _ga_LBBQFT2KX1=GS1.1.1708704648.232.1.1708705186.0.0.0; nepsealpha_session=eyJpdiI6IkJiSVdBQVJOU2o2OTh6ZzBIQ0FQa0E9PSIsInZhbHVlIjoiTHVkdUZCQ2hYQUVKSC9DaU1CMXpRNDB5ZFZPa3pzVGtyTVdkU3o2SjBoWURITE90ZG1ObUY3M3NodiszUEZmV2ZCaGdKSGJlQkhaOG9sSnZhMzRBSFJxUXZITDgxT3RmR3djZUw0cDBhYzVIMVpEaWJNajBPVWlFbnNHZHgvWHUiLCJtYWMiOiIxYzUyOTk0YTg1MGEzNDgyMWVjZDI3MzZlMTVmMmFiYzUzNjRhMmM4MWEyYTk2NzhmMjk3YzFlZmQ3NzkzNWY3IiwidGFnIjoiIn0%3D",
      },
      referrer: "https://nepsealpha.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-md shadow-md text-center">
      <h1 className="text-2xl font-semibold mb-4">Under Construction</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This component is currently under construction. Check back soon!
      </p>
    </div>
  );
};

export default InvestingCalendarPage;
