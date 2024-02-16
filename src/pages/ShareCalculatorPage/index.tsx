/**
 * Internal dependencies.
 */
import { ShareCalculator } from "../../components";
import useShareCalculator from "./useShareCalculator";

const ShareCalculatorPage = () => {
  const shareCalculatorProp = useShareCalculator();

  return <ShareCalculator shareCalculatorProp={shareCalculatorProp} />;
};

export default ShareCalculatorPage;
