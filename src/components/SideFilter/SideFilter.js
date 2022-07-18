import { Accordion, Switch } from "components/baseComponents";
import { useOffersContext } from "hooks";

import "./style.scss";

const filters = [
  { name: "installment", label: "اقساطی با چک" },
  { name: "promissory", label: "اقساطی سفته ای" },
];

const SideFilter = () => {
  const { sideFilter, setSideFilter } = useOffersContext();

  const changeHandler = ({ target: { value } }) =>
    sideFilter.includes(value)
      ? setSideFilter(sideFilter.filter((x) => x !== value))
      : setSideFilter([value, ...sideFilter]);

  return (
    <div className="side-filter-container">
      <Accordion.Wrapper defaultActiveKey={"installments"}>
        <Accordion.Item itemKey={"installments"} label={"اقساط"}>
          <div className="filter-container">
            {filters.map(({ name, label }) => (
              <div key={name} className={"filter"}>
                <Switch name={name} onChange={changeHandler} />
                <div className="label">{label}</div>
              </div>
            ))}
          </div>
        </Accordion.Item>
      </Accordion.Wrapper>
    </div>
  );
};

export default SideFilter;
