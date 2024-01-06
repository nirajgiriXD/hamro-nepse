const SearchBar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 end-0 flex items-center">
        <button
          type="submit"
          className="p-3 ms-2 text-sm font-medium text-white"
        >
          <svg
            className="w-4 h-4 transform scale-100 hover:scale-110 transition-transform duration-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
