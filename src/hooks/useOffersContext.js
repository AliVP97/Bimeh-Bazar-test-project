import { useContext } from "react";
import { OffersContext } from "../contexts";

const useOffersContext = () => {
  const {
    data,
    setData,
    filteredData,
    setFilteredData,
    sortedData,
    setSortedData,
    sortFilter,
    setSortFilter,
    sideFilter,
    setSideFilter,
  } = useContext(OffersContext);

  return {
    data,
    setData,
    filteredData,
    setFilteredData,
    sortedData,
    setSortedData,
    sortFilter,
    setSortFilter,
    sideFilter,
    setSideFilter,
  };
};

export default useOffersContext;
