export interface Stocks {
  symbol: string;
  buyRate: number;
  kitta: number;
  ltp: number;
  total: number;
}

export const fakeData: Stocks[] = [
  {
    symbol: "AAPL",
    buyRate: 150,
    kitta: 20,
    ltp: 160,
    total: 3000,
  },
  {
    symbol: "GOOG",
    buyRate: 2000,
    kitta: 5,
    ltp: 2200,
    total: 10000,
  },
  {
    symbol: "MSFT",
    buyRate: 300,
    kitta: 15,
    ltp: 310,
    total: 4500,
  },
  {
    symbol: "AMZN",
    buyRate: 3500,
    kitta: 2,
    ltp: 3700,
    total: 7000,
  },
  {
    symbol: "FB",
    buyRate: 250,
    kitta: 12,
    ltp: 260,
    total: 3000,
  },
  {
    symbol: "NFLX",
    buyRate: 500,
    kitta: 8,
    ltp: 530,
    total: 4000,
  },
  {
    symbol: "TSLA",
    buyRate: 900,
    kitta: 6,
    ltp: 950,
    total: 5400,
  },
  {
    symbol: "NVDA",
    buyRate: 400,
    kitta: 10,
    ltp: 420,
    total: 4000,
  },
  {
    symbol: "AMD",
    buyRate: 100,
    kitta: 25,
    ltp: 110,
    total: 2500,
  },
  {
    symbol: "INTC",
    buyRate: 50,
    kitta: 30,
    ltp: 55,
    total: 1500,
  },
];
