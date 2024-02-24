/**
 * Internal dependencies.
 */
import { ComparisionTable } from "../../components";
import useCompareCompanyPage from "./useCompareCompanyPage";

const CompareCompanyPage = () => {
  const {
    companyOne,
    companyTwo,
    handleCompanyOneChange,
    handleCompanyTwoChange,
  } = useCompareCompanyPage();

  return (
    <ComparisionTable
      companyOne={companyOne}
      companyTwo={companyTwo}
      handleCompanyOneChange={handleCompanyOneChange}
      handleCompanyTwoChange={handleCompanyTwoChange}
    />
  );
};

export default CompareCompanyPage;
