/**
 * External dependencies.
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import { type Stock } from "./types";
import useEditableTableData from "./useEditableTableData";
import {
  ADD_STOCK_PORTFOLIO_ENDPOINT,
  REMOVE_STOCK_PORTFOLIO_ENDPOINT,
  UPDATE_STOCK_PORTFOLIO_ENDPOINT,
} from "../../../store/apiEndpoints";
import extractTextFromHTML from "../../../utilities/extractTextFromHTML";

const useEditableTable = () => {
  const { tableData } = useEditableTableData();
  const navigate = useNavigate();

  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  //CREATE hook (post new Stock to api)
  const useCreateStock = () => {
    return useMutation({
      mutationFn: async (formData: Stock) => {
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
      //refetch Stocks after mutation, disabled for demo
      onSettled: () => setTimeout(() => navigate(0), 500),
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
    return useMutation({
      mutationFn: async (formData: Stock) => {
        // Data to be sent
        const data = new FormData();
        data.append("symbol", formData.symbol);
        data.append("buy_date", formData.buy_date);
        data.append("buy_rate", String(formData.buy_rate));
        data.append("quantity", String(formData.quantity));

        // Send the request
        fetch(UPDATE_STOCK_PORTFOLIO_ENDPOINT, {
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
      //refetch Stocks after mutation, disabled for demo
      onSettled: () => setTimeout(() => navigate(0), 500),
    });
  };

  //DELETE hook (delete Stock in api)
  const useDeleteStock = () => {
    return useMutation({
      mutationFn: async (formData: string) => {
        // Data to be sent
        const data = new FormData();
        data.append("symbol", formData);

        // Send the request
        fetch(REMOVE_STOCK_PORTFOLIO_ENDPOINT, {
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
      //refetch Stocks after mutation, disabled for demo
      onSettled: () => setTimeout(() => navigate(0), 500),
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
