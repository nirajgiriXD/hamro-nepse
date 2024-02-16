interface SellReportProps {
  totalAmount: number;
  commission: number;
  sebonFee: number;
  dpCharge: number;
  totalAmountReceiveable: number;
  capitalGainTax: number;
  capitalGainTaxPercentage: number;
  profitOrLoss: number;
  nepseCommission: number;
  sebonRegularityFee: number;
}

const SellReport = ({
  totalAmount,
  commission,
  sebonFee,
  dpCharge,
  totalAmountReceiveable,
  capitalGainTax,
  capitalGainTaxPercentage,
  profitOrLoss,
  nepseCommission,
  sebonRegularityFee,
}: SellReportProps) => {
  return (
    <>
      <div className="p-8 border border-gray-300 dark:border-gray-600 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
        <div className="border border-gray-300 dark:border-gray-600 rounded">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">Total Amount</td>
                <td className="py-2 px-4">{totalAmount}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">Commission</td>
                <td className="py-2 px-4">{commission}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">SEBON FEE</td>
                <td className="py-2 px-4">{sebonFee}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">DP Charge</td>
                <td className="py-2 px-4">{dpCharge}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">
                  Total Amount Receiveable (Rs)
                </td>
                <td className="py-2 px-4">{totalAmountReceiveable}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">
                  Capital Gain Tax ({capitalGainTaxPercentage}%) (Rs)
                </td>
                <td className="py-2 px-4">{capitalGainTax}</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4 text-sm font-medium">
                  Profit / Loss (Rs)
                </td>
                <td className="py-2 px-4">{profitOrLoss}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm font-medium">
                  Commission Amount includes NEPSE Commission Rs{" "}
                  {nepseCommission} & SEBON Regularity Fee Rs{" "}
                  {sebonRegularityFee}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SellReport;
