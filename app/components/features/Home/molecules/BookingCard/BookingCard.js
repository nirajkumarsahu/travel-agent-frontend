import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Heading from "components/common/atoms/Heading";
import CardActions from "components/common/molecules/CardActions";
import InvoiceSentSuccess from "components/common/molecules/InvoiceSentSuccess";
import Anchor from "components/common/atoms/Anchor";
import BookingDuration from "../../atoms/BookingDuration";
import styles from "./BookingCard.style";
import PaymentMode from "../../atoms/PaymentMode";

const BookingCard = props => {
  const [isModal, setIsModal] = useState(false);
  const [invoiceModalMsg, setInvoiceModalMsg] = useState(
    "Invoice has been sent."
  );
  const { className, cardData, getSVG } = props;
  const SvgMapPin = getSVG("mapPin");
  const {
    city: cityName,
    paymentMode,
    checkIn: startDate,
    checkOut: endDate,
    property: propertyName,
    actions,
    bookingId
  } = cardData;

  return (
    <Anchor
      to={`/user/bookings/${bookingId}`}
      handleLinkClick={() =>
        pushToDataLayer(
          "Your Bookings",
          "Home Page Your Bookings Clicked",
          `/user/bookings/${bookingId}`
        )
      }
    >
      <div className={className}>
        <div className="location-pay vertical-center flex">
          <span className="hotel-location">
            <span className="map-pin inline-block">
              <SvgMapPin className="icon" />
            </span>
            {cityName}
          </span>
          <PaymentMode paymentMode={paymentMode} />
        </div>
        <Heading tag="h5" type="h3">
          {propertyName}
        </Heading>
        <BookingDuration
          fromDate={startDate}
          toDate={endDate}
          getSVG={getSVG}
        />
        <CardActions
          actions={actions}
          className="direction-btn"
          getSVG={getSVG}
          setSuccessModal={res => {
            setInvoiceModalMsg(res.message);
            setIsModal(true);
          }}
        />
      </div>
      {isModal &&
        ReactDOM.createPortal(
          <InvoiceSentSuccess
            invoiceModalMsg={invoiceModalMsg}
            unsetModal={() => {
              setIsModal(false);
            }}
            getSVG={getSVG}
          />,
          document.getElementsByTagName("body")[0]
        )}
    </Anchor>
  );
};

BookingCard.propTypes = {
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired
};

export default styledHOC(BookingCard, styles);
