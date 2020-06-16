/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styledHOC from "lib/styledHOC";
import styles from "./Input.style";

const keyUpHandler = (event, maxLength) => {
  if (event.target.value.length >= parseInt(maxLength, 10)) {
    // eslint-disable-next-line
    event.target.value = event.target.value.substring(
      0,
      parseInt(maxLength, 10)
    );
  }
};

const placeholderHandler = event => {
  if (event.target.value !== "") {
    if (event.target.parentElement.classList) {
      event.target.parentElement.classList.add("visible-dynamic-label");
    }
  } else if (event.target.parentElement.classList) {
    if (event.type === "focus") {
      event.target.parentElement.classList.add("visible-dynamic-label");
    } else {
      event.target.parentElement.classList.remove("visible-dynamic-label");
    }
  }
};

const Input = ({
  className,
  type,
  value,
  maxLength,
  onChange,
  placeholder,
  required,
  onBlur,
  onFocus,
  id,
  name,
  errorMessage,
  dynamicPlaceholderLabel,
  autoComplete = true,
  isError, // TODO - for error message handling
  onKeyUp, // TODO - onKeyUp event,
  onKeyDown,
  children,
  setRef
}) => {
  const inputClass = classnames({
    "input-error": isError
  });
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`${value && placeholder ? "visible-dynamic-label" : ""} ${
          !dynamicPlaceholderLabel ? "no-dynamic" : ""
        }`}
      >
        {/* {placeholder ? (
          <span
            className={`dynamic-placeholder ${
              !dynamicPlaceholderLabel ? "hide-on-top" : ""
            }`}
          >
            {placeholder}
          </span>
        ) : (
          ""
        )} */}
        <input
          onKeyDown={onKeyDown}
          value={value}
          type={type}
          id={id}
          maxLength={maxLength}
          className={inputClass}
          name={name}
          onChange={event => {
            if (onChange) onChange(event);
            placeholderHandler(event);
          }}
          placeholder={placeholder}
          aria-required={required || null}
          onBlur={event => {
            if (onBlur) onBlur(event);
            placeholderHandler(event);
          }}
          onFocus={event => {
            if (onFocus) onFocus(event);
            placeholderHandler(event);
          }}
          onKeyUp={event => {
            keyUpHandler(event, maxLength);
            if (onKeyUp) onKeyUp(event);
          }}
          autoComplete={autoComplete ? "on" : "off"}
          ref={setRef}
        />
        {type && type === "radio" && children}
        {isError && <span className="error-message">{errorMessage}</span>}
      </label>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  maxLength: 100,
  placeholder: "",
  name: "",
  dynamicPlaceholderLabel: false,
  value: undefined,
  required: null,
  onChange: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
  className: "",
  isError: false,
  errorMessage: ""
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  dynamicPlaceholderLabel: PropTypes.bool,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  errorMessage: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default styledHOC(Input, styles);
