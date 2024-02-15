interface BuyReportProps {
  totalAmount: number;
  commission: number;
  sebonFee: number;
  dpCharge: number;
  totalAmountPayable: number;
  costPerShare: number;
  nepseCommission: number;
  sebonRegularityFee: number;
}

const BuyReport = ({
  totalAmount,
  commission,
  sebonFee,
  dpCharge,
  totalAmountPayable,
  costPerShare,
  nepseCommission,
  sebonRegularityFee,
}: BuyReportProps) => {
  return (
    <>
      <div className="p-8 border border-gray-300 dark:border-gray-600 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-md">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Total Amount</td>
              <td className="py-2 px-4">{totalAmount}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Commission</td>
              <td className="py-2 px-4">{commission}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">SEBON FEE</td>
              <td className="py-2 px-4">{sebonFee}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">DP Charge</td>
              <td className="py-2 px-4">{dpCharge}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">
                Total Amount Payable (Rs)
              </td>
              <td className="py-2 px-4">{totalAmountPayable}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">
                Cost Price Per Share (Rs)
              </td>
              <td className="py-2 px-4">{costPerShare}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">
                Commission Amount includes NEPSE Commission Rs {nepseCommission}{" "}
                & SEBON Regularity Fee Rs {sebonRegularityFee}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BuyReport;
