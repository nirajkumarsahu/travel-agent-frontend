import React, { useState } from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import styles from "./TabMenu.style";

const TabMenu = ({ className, itemsArray, setCurrentTab }) => {
  const initialActiveTab =
    itemsArray && itemsArray.length ? itemsArray[0].id : "";

  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const changeTab = id => {
    setActiveTab(id);
    if (setCurrentTab) setCurrentTab(id);
  };

  return (
    <div className={`${className}`}>
      <ul>
        {itemsArray.map(({ text, id }) => {
          /* eslint-disable */
                    return (
                        <li
                            onClick={() => changeTab(id)}
                            className={`tab ${activeTab === id ? "active" : ""}`}
                        >
                            {text}
                        </li>
                        /* eslint-disable */
                    );
                })}
            </ul>
        </div>
    );
};

TabMenu.propTypes = {
    className: PropTypes.string,
    itemsArray: PropTypes.instanceOf(Array).isRequired,
    setCurrentTab: PropTypes.func
};

TabMenu.defaultProps = {
    className: "",
    setCurrentTab: () => { }
};

export default styledHOC(TabMenu, styles);
