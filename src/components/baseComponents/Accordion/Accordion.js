import { createContext, useContext, useState } from "react";

import "./Accordion.scss";

const AccordionContext = createContext();

const Wrapper = ({ defaultActiveKey, children }) => {
  const [activeKeys, setActiveKeys] = useState([defaultActiveKey]);

  return (
    <div className="accordion">
      <AccordionContext.Provider value={{ activeKeys, setActiveKeys }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

const Item = ({ itemKey, label, children }) => {
  const { activeKeys, setActiveKeys } = useContext(AccordionContext);

  const clickHandler = () => {
    activeKeys.includes(itemKey)
      ? setActiveKeys(activeKeys.filter((x) => x !== itemKey))
      : setActiveKeys([itemKey, activeKeys]);
  };

  return (
    <div
      className={
        activeKeys.includes(itemKey)
          ? "accordion-item active"
          : "accordion-item"
      }
    >
      <div className="header" onClick={clickHandler}>
        <div className="title">{label}</div>
        <div className="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
          </svg>
        </div>
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

const Accordion = {
  Wrapper,
  Item,
};

export default Accordion;
