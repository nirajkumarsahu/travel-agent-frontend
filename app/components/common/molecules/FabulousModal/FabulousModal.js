import React from "react";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Image from "components/common/atoms/Image";
import Span from "components/common/atoms/Span";
import RightArrow from "components/features/Home/atoms/RightArrow";
import StyledFabulousModal from "./FabulousModal.style";
import Modal from "../Modal";

const svgMapper = {
  "clean-icon": "SvgClean",
  "amenities-icon": "Amenities",
  "breakfast-icon": "TeaCup",
  "call-icon": "Telephone",
  "timer-icon": "Timer",
  "fab-icon": "ThumbsUp"
};

const FabulousModal = props => {
  const {
    className,
    getSVG,
    escClose,
    closePopup,
    secondPopupOpen,
    data
  } = props;

  const renderSvg = (map, name) => {
    const Svg = map[name];
    return <Svg />;
  };

  const {
    img,
    title,
    subTitle,
    details = {},
    content = {},
    terms: { title: termsTitle } = {}
  } = data;
  const { title: detailsTitle, list = [], extra } = details;
  const { title: contentTitle, list: contentList = [] } = content;

  const Svgs = {
    PromiseIcon: getSVG("promiseIcon"),
    SvgClean: getSVG("cleanRoom"),
    Amenities: getSVG("amenities"),
    TeaCup: getSVG("teaCup"),
    Telephone: getSVG("phone"),
    Timer: getSVG("timer"),
    ThumbsUp: getSVG("thumbsUp")
  };
  return (
    <Modal
      getSVG={getSVG}
      escClose={escClose}
      closePopup={closePopup}
      className={className}
    >
      <StyledFabulousModal>
        <Heading tag="h2" type="h2">
          {title}
        </Heading>
        <div className="fabulous-sub-title">{subTitle}</div>
        <Image className="header-bg" imgUrl={img} altText={title} />

        <div className="fabulous-wrap flex">
          <div className="fabulous-left">
            <Heading tag="h3" type="h2" className="title-of-promise">
              {detailsTitle}
            </Heading>

            {list.map(promises => (
              <div className="benefits flex">
                <Span tag="span" className="icons">
                  {svgMapper[promises.icon] &&
                    renderSvg(Svgs, svgMapper[promises.icon])}
                </Span>
                <Heading tag="h4" type="h3" className="promises-title">
                  {promises.title}
                </Heading>
                <div className="benefit-body">{promises.subTitle}</div>
              </div>
            ))}

            <div className="fabulus-term-wrap">
              {extra
                ? extra.map(elem => <div className="fabulus-term">{elem}</div>)
                : ""}
            </div>
          </div>

          <div className="fabulous-right">
            <Heading className="how-works" tag="h3" type="h2">
              {contentTitle}
            </Heading>

            {contentList.map(contentListItem => (
              <div className="box">
                <div className="box-icon">
                  {svgMapper[contentListItem.icon] &&
                    renderSvg(Svgs, svgMapper[contentListItem.icon])}
                </div>
                <Heading tag="h4" type="h3" className="box-title">
                  {contentListItem.title}
                </Heading>

                {contentListItem.contact ? (
                  <a
                    className="box-text"
                    href={`tel:${contentListItem.contact}`}
                  >
                    {contentListItem.subTitle}
                  </a>
                ) : (
                  <span className="box-text">{contentListItem.subTitle}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="read-terms">
          <button className="term" onClick={secondPopupOpen} type="button">
            {termsTitle}
            <RightArrow />
          </button>
        </div>
      </StyledFabulousModal>
    </Modal>
  );
};

FabulousModal.propTypes = {
  getSVG: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  escClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  secondPopupOpen: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired
};

FabulousModal.defaultProps = {
  className: ""
};

export default FabulousModal;
