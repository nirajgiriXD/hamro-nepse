/**
 * External dependencies.
 */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { type Stock } from "./types";
import useEditableTableData from "./useEditableTableData";
import { ADD_STOCK_PORTFOLIO_ENDPOINT } from "../../../store/apiEndpoints";
import extractTextFromHTML from "../../../utilities/extractTextFromHTML";

const useEditableTable = () => {
  const { tableData } = useEditableTableData();
  const navigate = useNavigate();

  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  //CREATE hook (post new Stock to api)
  const useCreateStock = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (formData) => {
        // Data to be sent
        const data = new FormData();
        data.append("symbol", formData.symbol);
        data.append("buy_date", formData.buy_date);
        data.append("buy_rate", String(formData.buy_rate));
        data.append("quantity", String(formData.quantity));

        // Send the request
        fetch(ADD_STOCK_PORTFOLIO_ENDPOINT, {
          method: "POST",
          body: data,
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            setToastNotification(
              <Alert
                variant="outlined"
                severity={data.isEverythingOk ? "success" : "error"}
                icon={false}
                onClose={() => setToastNotification(<></>)}
              >
                {extractTextFromHTML(data.responseMessage)}
              </Alert>
            );
          })
          .catch((error) => {
            setToastNotification(
              <Alert
                variant="outlined"
                severity="error"
                icon={false}
                onClose={() => setToastNotification(<></>)}
              >
                {extractTextFromHTML(error.message)}
              </Alert>
            );
          });
      },
      //client side optimistic update
      onMutate: (newStockInfo: Stock) => {
        queryClient.setQueryData(
          ["Stocks"],
          (prevStocks: Stock[] | undefined) =>
            prevStocks ? [...prevStocks, newStockInfo] : [newStockInfo]
        );
      },

      onSettled: () => navigate(0), //refetch Stocks after mutation, disabled for demo
    });
  };

  //READ hook (get Stocks from api)
  const useGetStock = () => {
    return useQuery<Stock[]>({
      queryKey: ["Stocks"],
      queryFn: async () => {
        return Promise.resolve(tableData) as unknown as Promise<Stock[]>;
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
      onMutate: (newStockInfo: Stock) => {
        queryClient.setQueryData(
          ["Stocks"],
          (prevStocks: Stock[] | undefined) =>
            prevStocks?.map((prevStock: Stock) =>
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
          (prevStocks: Stock[] | undefined) =>
            prevStocks?.filter((stock: Stock) => stock.symbol !== stockSymbol)
        );
      },
      // onSettled: () => queryClient.invalidateQueries({ queryKey: ['Stocks'] }), //refetch Stocks after mutation, disabled for demo
    });
  };

  const validateRequired = (value: string) => !!value.length;
  const validateStock = (stock: Stock) => {
    return {
      Symbol: !validateRequired(stock.symbol) ? "Symbol is Required" : "",
    };
  };

  return {
    toastNotification,
    useCreateStock,
    validateStock,
    useGetStock,
    useUpdateStock,
    useDeleteStock,
  };
};

export default useEditableTable;
