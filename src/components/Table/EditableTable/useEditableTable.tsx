/**
 * External dependencies.
 */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * Internal dependencies.
 */
import { type Stocks } from "./types";
import useEditableTableData from "./useEditableTableData";

const useEditableTable = () => {
  const { tableData } = useEditableTableData();

  //CREATE hook (post new Stock to api)
  const useCreateStock = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async () => {
        //send api update request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve();
      },
      //client side optimistic update
      onMutate: (newStockInfo: Stocks) => {
        queryClient.setQueryData(
          ["Stocks"],
          (prevStocks: Stocks[] | undefined) =>
            prevStocks ? [...prevStocks, newStockInfo] : [newStockInfo]
        );
      },

      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
    });
  };

  //READ hook (get Stocks from api)
  const useGetStock = () => {
    return useQuery<Stocks[]>({
      queryKey: ["Stocks"],
      queryFn: async () => {
        return Promise.resolve(tableData) as unknown as Promise<Stocks[]>;
      },
      refetchOnWindowFocus: false,
    });
  };

  //UPDATE hook (put Stock in api)
  const useUpdateStock = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async () => {
        //send api update request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve();
      },
      //client side optimistic update
      onMutate: (newStockInfo: Stocks) => {
        queryClient.setQueryData(
          ["Stocks"],
          (prevStocks: Stocks[] | undefined) =>
            prevStocks?.map((prevStock: Stocks) =>
              prevStock.symbol === newStockInfo.symbol
                ? newStockInfo
                : prevStock
            )
        );
      },
      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
    });
  };

  //DELETE hook (delete Stock in api)
  const useDeleteStock = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async () => {
        //send api update request here
        await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
        return Promise.resolve();
      },
      //client side optimistic update
      onMutate: (stockSymbol: string) => {
        queryClient.setQueryData(
          ["Stocks"],
          (prevStocks: Stocks[] | undefined) =>
            prevStocks?.filter((stock: Stocks) => stock.symbol !== stockSymbol)
        );
      },
      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
    });
  };

  const validateRequired = (value: string) => !!value.length;
  const validateStock = (stock: Stocks) => {
    return {
      Symbol: !validateRequired(stock.symbol) ? "Symbol is Required" : "",
    };
  };

  return {
    useCreateStock,
    validateStock,
    useGetStock,
    useUpdateStock,
    useDeleteStock,
  };
};

export default useEditableTable;
