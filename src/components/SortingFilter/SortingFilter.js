import { useOffersContext } from "hooks";

import "./style.scss";

const buttons = [
  { name: "least-price", label: "ارزان ترین" },
  { name: "most-price", label: "گرانترین" },
  { name: "most-branch-numbers", label: "بیشترین شعب پرداخت" },
  { name: "most-rating", label: "بالاترین رتبه رضایت مندی" },
  { name: "least-response-time", label: "کوتاه ترین زمان پاسخگویی" },
  { name: "most-financial-wealth", label: "بالاترین توانگری مالی" },
];

const SortingFilter = () => {
  const { sortFilter, setSortFilter } = useOffersContext();

  const handleChange = ({ target: { value } }) =>
    setSortFilter(sortFilter === value ? undefined : value);

  return (
    <div className="sorting-filter">
      <div className="label">مرتب سازی بر اساس:</div>
      <div className="filters">
        {buttons.map(({ name, label }) => (
          <button key={name} className={sortFilter === name ? "active" : ""}>
            <div className="label">{label}</div>
            <input type={"checkbox"} value={name} onChange={handleChange} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortingFilter;
