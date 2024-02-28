/**
 * Internal Dependencies.
 */
import { SimpleTable } from "../../components";
import useInvestingCalendarPage from "./useInvestingCalendarPage";

const InvestingCalendarPage = () => {
  const { ipo_columns, ipo_data } = useInvestingCalendarPage();

  return (
    <div>
      {/* IPO */}
      <div>
        <h4 className="mb-4 font-semibold">Upcoming IPOs</h4>
        <SimpleTable data={ipo_data} columns={ipo_columns} />
      </div>
    </div>
  );
};

export default InvestingCalendarPage;
