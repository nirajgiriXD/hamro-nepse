/**
 * External dependencies.
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

/**
 * Internal dependencies.
 */
import {
  ADD_STOCK_PORTFOLIO_ENDPOINT,
  REMOVE_STOCK_PORTFOLIO_ENDPOINT,
  UPDATE_STOCK_PORTFOLIO_ENDPOINT,
  GET_STOCK_PORTFOLIO_ENDPOINT,
} from "../../store/constant";
import useAppData from "../../store/useAppData";
import extractTextFromHTML from "../../utilities/extractTextFromHTML";

export interface Stock {
  symbol: string;
  buy_rate: number;
  buy_date: string;
  quantity: number;
  close: number;
  total: number;
}

const useEditableTable = (
  validationErrors: Record<string, string | undefined>,
  setValidationErrors: (
    validationErrors: Record<string, string | undefined>
  ) => void
) => {
  const navigate = useNavigate();
  const { marketData } = useAppData();
  const [tableData, setTableData] = useState([] as unknown as Stock[]);

  const [toastNotification, setToastNotification] = useState<ReactElement>(
    <></>
  );

  const columns = [
    {
      accessorKey: "symbol",
      header: "Symbol",
      enableEditing: true,
      size: 80,
      muiEditTextFieldProps: {
        required: true,
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            symbol: undefined,
          }),
      },
    },
    {
      accessorKey: "buy_date",
      header: "Buy Date",
      enableEditing: true,
      size: 80,
      muiEditTextFieldProps: {
        required: false,
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            buy_date: undefined,
          }),
      },
    },
    {
      accessorKey: "buy_rate",
      header: "Buy  Rate (in NRP)",
      enableEditing: true,
      muiEditTextFieldProps: {
        required: true,
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            buy_rate: undefined,
          }),
      },
    },
    {
      accessorKey: "quantity",
      header: "Kitta",
      enableEditing: true,
      muiEditTextFieldProps: {
        required: true,
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            kitta: undefined,
          }),
      },
    },
    {
      accessorKey: "close",
      header: "LTP",
      enableEditing: false,
    },
    {
      accessorKey: "total",
      header: "Amount",
      enableEditing: false,
    },
    {
      accessorKey: "profit_loss",
      header: "Profit / Loss",
      enableEditing: false,
    },
  ];

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_STOCK_PORTFOLIO_ENDPOINT, {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        const data = json.data;

        const preparedData = data.map((item: Stock) => {
          const close = Number(
            marketData.find((newItem: Record<string, string>) => {
              return newItem.symbol === item.symbol;
            })?.close ?? 0
          );
          const total = item.quantity * close;
          const profit_loss =
            item.quantity * close - item.quantity * item.buy_rate;

          return {
            ...item,
            close,
            total,
            profit_loss,
          };
        });

        setTableData(preparedData);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching data:", error.message);
        setTableData([] as unknown as Stock[]);
      }
    };
    fetchData();
  }, [marketData]);

  return {
    columns,
    toastNotification,
    useCreateStock,
    validateStock,
    useGetStock,
    useUpdateStock,
    useDeleteStock,
  };
};

export default useEditableTable;
