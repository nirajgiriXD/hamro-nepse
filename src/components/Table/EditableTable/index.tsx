/**
 * External dependencies.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Internal dependencies.
 */
import usePortfolio from "./usePortfolio";

const queryClient = new QueryClient();

const EditableTable = () => {
  const { Portfolio } = usePortfolio();

  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
    </QueryClientProvider>
  );
};

export default EditableTable;
