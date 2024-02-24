/**
 * External dependencies.
 */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Internal dependencies.
 */
import useWatchlist from "./useWatchlist";

const queryClient = new QueryClient();

const EditableTable = () => {
  const { Portfolio, toastNotification } = useWatchlist();

  return (
    <>
      <div className="mb-4">{toastNotification}</div>
      <QueryClientProvider client={queryClient}>
        <Portfolio />
      </QueryClientProvider>
    </>
  );
};

export default EditableTable;
