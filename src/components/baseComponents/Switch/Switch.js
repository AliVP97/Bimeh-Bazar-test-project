import { useState } from "react";
import "./Switch.scss";

const Switch = ({ name, onChange, ...props }) => {
  const [active, setActive] = useState(false);

  const changeHandler = (e) => {
    setActive(!active);

    onChange(e);
  };

  return (
    <div className={active ? "switch active" : "switch"}>
      <div className="track" />
      <div className="thumb" />
      <input
        type={"checkbox"}
        value={name}
        onChange={changeHandler}
        {...props}
      />
    </div>
  );
};

export default Switch;
