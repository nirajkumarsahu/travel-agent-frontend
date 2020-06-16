import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Anchor from "components/common/atoms/Anchor";
import { chunkArray } from "lib/utils";
import styles from "./CitiesModal.style";
import Modal from "../Modal";

const CitiesModal = props => {
  const { className, escClose, closePopup, data = [] } = props;
  const citiesArray = chunkArray(data, 6);

  const cityListWrap = citiesArray.map(lists => {
    return (
      <ul className="cities-list">
        {lists.map(listItem => {
          return (
            <li className="city-hotels" key={listItem}>
              <Anchor className="city-item" to={listItem.url}>
                Hotels in <strong>{listItem.name}</strong>
              </Anchor>
            </li>
          );
        })}
      </ul>
    );
  });
  return (
    <Modal escClose={escClose} closePopup={closePopup} className={className}>
      <div className="city-modal">
        <Heading tag="h2" type="h2">
          All Cities
        </Heading>
        <div className="cities-wrapper">{cityListWrap}</div>
      </div>
    </Modal>
  );
};

CitiesModal.propTypes = {
  className: PropTypes.string,
  closePopup: PropTypes.func.isRequired,
  escClose: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired
};

CitiesModal.defaultProps = {
  className: ""
};

export default styledHOC(CitiesModal, styles);
