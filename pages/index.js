import React from "react";
import { fetchSearchResults } from "./utils";
import ListItem from "../components/ListItem";
import SearchInput from "../components/SearchInput";
import useDebounce from "./useDebounce";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

export default function App() {
  const [query, setQuery] = React.useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [results, setResults] = React.useState([]);

  const fetchData = async (query, cb) => {
    const res = await fetchSearchResults(query);
    cb(res);
  };
  const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
  }, 500);
  React.useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  //Our search filter function
  const searchFilter = (array) => {
    return array.filter((el) => el.toLowerCase().includes(query));
  };

  //Applying our search filter function to our array of countries recieved from the API
  const filtered = searchFilter(results);

  return (
    <div className="bg-[#cfc6c6]">
      <SearchInput
        value={query}
        onChangeText={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="h-2"></div>
      {filtered.map((result) => (
        <div>
          <ListItem title={result} />
        </div>
      ))}
    </div>
  );
}
