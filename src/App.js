import { useOffers } from "hooks";

import { OffersContext } from "contexts";
import { SideFilter, Items, SortingFilter, Alert } from "components";

import "./App.scss";

const App = () => {
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
  } = useOffers();

  return (
    <OffersContext.Provider
      value={{
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
      }}
    >
      <div className="app">
        <div className="side-filter">
          <SideFilter />
        </div>
        <div className="main-items">
          <Alert />
          <SortingFilter />
          <Items />
        </div>
      </div>
    </OffersContext.Provider>
  );
};

export default App;
