/**
 * External dependencies.
 */
import { useCallback, useState } from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { useNavigate } from "react-router-dom";

/**
 * Internal dependencies.
 */
import useApp from "../../store/useAppData";
import { SuggestionProp } from "./types";

const Search = () => {
  const { stockProfileData } = useApp();
  const [suggestions, setSuggestions] = useState([] as SuggestionProp[]);

  const navigate = useNavigate();

  const maxNumberOfSuggestion = 10;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (selected: any) => {
    if (selected) {
      navigate(
        `stock/${encodeURIComponent(selected.value.toLocaleLowerCase())}`
      );
    }
  };

  // Filter the suggestion manually as no built-in method was found
  // which allows for limiting the number of suggestions.
  const handleInputChange = useCallback(
    (input: string) => {
      const filteredOptions = stockProfileData
        .filter((option) => {
          return option.label.toLowerCase().includes(input.toLocaleLowerCase());
        })
        .slice(0, maxNumberOfSuggestion);

      if (input) {
        setSuggestions(filteredOptions);
      } else {
        setSuggestions([]);
      }
    },
    [stockProfileData]
  );

  // Style for suggestions dropdown.
  const customStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menu: (provided: any) => ({
      ...provided,
      ...{
        "& ::-webkit-scrollbar": {
          height: "100%",
          width: "5px",
          marginLeft: "5px",
        },
        "& ::-webkit-scrollbar-thumb": {
          backgroundColor: "#808080",
        },
        "& ::-webkit-scrollbar-track, & ::-webkit-scrollbar-thumb": {
          borderRadius: "21px",
        },
        "& div": {
          color: "#111827",
          fontSize: "14px",
          padding: "4px",
        },
      },
    }),
  };

  return (
    <Select
      value=""
      onChange={handleSelectChange}
      onInputChange={handleInputChange}
      className={"min-w-48 z-50"}
      isClearable={true}
      escapeClearsValue={true}
      options={
        suggestions as unknown as OptionsOrGroups<string, GroupBase<string>>
      }
      placeholder="Search stock..."
      noOptionsMessage={({ inputValue }) => {
        return inputValue === "" ? "Stock name / symbol" : "Stock not found";
      }}
      styles={customStyles}
    />
  );
};

export default Search;
