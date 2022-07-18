import { useEffect, useState } from "react";

const useOffers = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [sortedData, setSortedData] = useState();

  const [sortFilter, setSortFilter] = useState();
  const [sideFilter, setSideFilter] = useState([]);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSortedData(data.offers);
        setFilteredData(data.offers);
        setData(data);
      });
  }, []);

  useEffect(() => {
    if (data) {
      sort();
    }
  }, [sortFilter, filteredData]);

  useEffect(() => {
    if (data) {
      if (sideFilter.length > 0) {
        setFilteredData(
          data.offers.filter(({ promissory, installment }) => {
            if (
              sideFilter.includes("promissory") &&
              sideFilter.includes("installment")
            ) {
              return promissory && installment;
            } else if (sideFilter.includes("promissory")) {
              return promissory;
            } else if (sideFilter.includes("installment")) {
              return installment;
            }
          })
        );
      } else {
        setFilteredData(data.offers);
      }
    }
  }, [sideFilter]);

  const sort = () => {
    const newData = JSON.parse(JSON.stringify(filteredData));

    switch (sortFilter) {
      case "least-price":
        setSortedData(
          newData.sort(
            (a, b) =>
              a["price"] -
              a["discount_value"] -
              (b["price"] - b["discount_value"])
          )
        );
        break;
      case "most-price":
        setSortedData(
          newData.sort(
            (a, b) =>
              b["price"] -
              b["discount_value"] -
              (a["price"] - a["discount_value"])
          )
        );
        break;
      case "most-branch-numbers":
        setSortedData(
          newData.sort((a, b) => b["branches_num"] - a["branches_num"])
        );
        break;
      case "most-rating":
        setSortedData(
          newData.sort(
            (a, b) => parseFloat(b["rating"]) - parseFloat(a["rating"])
          )
        );
        break;
      case "least-response-time":
        setSortedData(
          newData.sort((a, b) => a["response_time"] - b["response_time"])
        );
        break;
      case "most-financial-wealth":
        alert("دیتای مربوط به این بخش ناقص است");
        break;

      default:
        setSortedData(filteredData);
        break;
    }
  };

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

export default useOffers;
