/**
 * External Dependencies.
 */
import { createMRTColumnHelper } from "material-react-table";

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  city: string;
  country: string;
};

export const data = [
  {
    id: 1,
    firstName: "Elenora",
    lastName: "Wilkinson",
    company: "Feest - Reilly",
    city: "Hertaland",
    country: "Qatar",
  },
  {
    id: 2,
    firstName: "Berneice",
    lastName: "Feil",
    company: "Deckow, Leuschke and Jaskolski",
    city: "Millcreek",
    country: "Nepal",
  },
  {
    id: 3,
    firstName: "Frieda",
    lastName: "Baumbach",
    company: "Heidenreich, Grady and Durgan",
    city: "Volkmanside",
    country: "Croatia",
  },
  {
    id: 4,
    firstName: "Zachery",
    lastName: "Brown",
    company: "Cormier - Skiles",
    city: "Faychester",
    country: "Saint Pierre and Miquelon",
  },
  {
    id: 5,
    firstName: "Kendra",
    lastName: "Bins",
    company: "Wehner - Wilderman",
    city: "New Valentin",
    country: "Senegal",
  },
  {
    id: 6,
    firstName: "Lysanne",
    lastName: "Fisher",
    company: "Schmidt LLC",
    city: "Malachitown",
    country: "Costa Rica",
  },
  {
    id: 7,
    firstName: "Garrick",
    lastName: "Ryan",
    company: "Ryan - Buckridge",
    city: "East Pearl",
    country: "Cocos (Keeling) Islands",
  },
  {
    id: 8,
    firstName: "Hollis",
    lastName: "Medhurst",
    company: "Quitzon Group",
    city: "West Sienna",
    country: "Papua New Guinea",
  },
  {
    id: 9,
    firstName: "Arlo",
    lastName: "Buckridge",
    company: "Konopelski - Spinka",
    city: "Chino",
    country: "Congo",
  },
  {
    id: 10,
    firstName: "Rickie",
    lastName: "Auer",
    company: "Lehner - Walsh",
    city: "Nyahfield",
    country: "Sudan",
  },
] as Person[];

const columnHelper = createMRTColumnHelper<Person>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    size: 40,
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    size: 120,
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    size: 120,
  }),
  columnHelper.accessor("company", {
    header: "Company",
    size: 300,
  }),
  columnHelper.accessor("city", {
    header: "City",
  }),
  columnHelper.accessor("country", {
    header: "Country",
    size: 220,
  }),
];
