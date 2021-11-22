import { useState, useEffect } from "react";

const useFilteredJson = (queryString, jsonArr) => {
  const [filteredJson, setFilteredJson] = useState(jsonArr);

  useEffect(() => {
    const searchResult = jsonArr.filter((country) => {
      if (
        country.name
          .toLocaleLowerCase()
          .includes(queryString.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setFilteredJson(searchResult);
  }, [queryString, jsonArr]);

  return [filteredJson, setFilteredJson];
};

export default useFilteredJson;
