import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import styles from "./Modal.style";

const Modal = props => {
  const { className, children, escClose, closePopup } = props;

  return (
    <div className={className}>
      <div
        className="overlay"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          closePopup(e);
        }}
        onKeyDown={escClose}
        role="button"
        tabIndex={0}
      />
      <div className="popup-section">
        {children}
        <button
          className="close"
          type="button"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            closePopup(e);
          }}
        >
          <span className="icon bar1" />
          <span className="icon bar2" />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Object).isRequired,
  escClose: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired
};

Modal.defaultProps = {
  className: ""
};

export default styledHOC(Modal, styles);
