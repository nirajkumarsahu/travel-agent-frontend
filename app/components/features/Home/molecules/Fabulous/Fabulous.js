import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import { pushToDataLayer } from "lib/utils/googleAnalytics/analyticsApis";
import Span from "components/common/atoms/Span";
import FabulousModal from "components/common/molecules/FabulousModal";
import FabulousTerms from "components/common/molecules/FabulousTerms";
import SignUpBanner from "components/common/atoms/SignUpBanner";
import styles from "./Fabulous.style";
import RightArrow from "../../atoms/RightArrow";
import { getFabulousInfo, getFabulousTerms } from "./Fabulous.action";

class Fabulous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      secondPopup: false
    };
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.escFunction);
    setTimeout(() => {
      this.forceUpdate();
    }, 1000);
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.escFunction);
  };

  componentDidupdate = () => {
    const { showPopup, secondPopup } = this.state;
    if (showPopup || secondPopup) {
      document.body.classList.add("stop-scroll");
    } else {
      document.body.classList.remove("stop-scroll");
    }
  };

  togglePopup = () => {
    const { showPopup, secondPopup } = this.state;
    if (!showPopup) this.getFabulousInfo();
    this.setState({ showPopup: !showPopup });

    if (!secondPopup && !showPopup) {
      document.body.classList.add("stop-scroll");
    } else if (secondPopup || showPopup) {
      document.body.classList.remove("stop-scroll");
    }
  };

  secondPopupOpen = () => {
    const { showPopup } = this.state;
    if (showPopup) {
      this.getFabulousTerms();
      document.body.classList.add("stop-scroll");
      this.setState(() => ({
        showPopup: false,
        secondPopup: true
      }));
    } else {
      this.setState(prevState => ({
        secondPopup: !prevState.secondPopup
      }));
      const { showPopup, secondPopup } = this.state;
      if (!secondPopup && !showPopup) {
        document.body.classList.add("stop-scroll");
      } else if (secondPopup || showPopup) {
        document.body.classList.remove("stop-scroll");
      }
    }
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.setState(() => ({
        showPopup: false,
        secondPopup: false
      }));
      document.body.classList.remove("stop-scroll");
    }
  };

  getFabulousInfo = () => {
    const { getFabulousInfoFunc } = this.props;
    getFabulousInfoFunc({ cb: () => this.setState({ showPopup: true }) });
  };

  getFabulousTerms = () => {
    // eslint-disable-next-line react/prop-types
    const { getFabulousTerms, fabInfo: { terms = {} } = {} } = this.props;
    getFabulousTerms({
      termsUrl: terms.href,
      cb: () => this.setState({ secondPopup: true })
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const {
      className,
      compData,
      getSVG,
      fabInfo,
      terms,
      updateHomePageState,
      checkButtonId,
      pageName
    } = this.props;

    let fabFreeData = null;
    let fabSignupData = null;

    compData.map(dat => {
      if (dat.keyName === "bannerfabfree") fabFreeData = dat;
      if (dat.keyName === "bannersignup") fabSignupData = dat;
      return null;
    });

    const FabulousFree = getSVG("fabulousFree");
    const { showPopup, secondPopup } = this.state;
    return (
      <Fragment>
        <div className={`${className}`}>
          {fabFreeData && !fabSignupData ? (
            <div className="container">
              <div
                className="fabulous-container"
                onClick={this.togglePopup}
                role="presentation"
              >
                <FabulousFree />
                <div className="fabulous-wrap">
                  <Span tag="strong" fabTitle>
                    {fabFreeData && fabFreeData.title.text}
                  </Span>
                  <Span tag="span" fabSubTitle>
                    {fabFreeData && fabFreeData.subTitle.text}
                  </Span>
                  <button
                    className="popup-btn"
                    type="button"
                    onClick={() => {
                      pushToDataLayer(
                        "Homepage",
                        "Product Impression",
                        "Fabulous Or Free Know More Clicked"
                      );
                    }}
                  >
                    {fabFreeData && fabFreeData.action.text} <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container flex vertical-center space-between">
              {fabSignupData && (
                <SignUpBanner
                  updateHomePageState={updateHomePageState}
                  checkButtonId={checkButtonId}
                  compData={fabSignupData}
                  pageName={pageName}
                />
              )}
              <div
                className="fabulous-container half"
                onClick={this.togglePopup}
                role="presentation"
              >
                <FabulousFree />
                <div className="fabulous-wrap">
                  <Span tag="strong" fabTitle>
                    {fabFreeData && fabFreeData.title.text}
                  </Span>
                  <Span tag="span" fabSubTitle>
                    {fabFreeData && fabFreeData.subTitle.text}
                  </Span>
                  <button
                    className="popup-btn"
                    type="button"
                    onClick={() => {
                      pushToDataLayer(
                        "Homepage",
                        "Product Impression",
                        "Fabulous Or Free Know More Clicked"
                      );
                    }}
                  >
                    {fabFreeData && fabFreeData.action.text} <RightArrow />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {showPopup ? (
          <FabulousModal
            data={fabInfo}
            escClose={this.escFunction}
            closePopup={this.togglePopup}
            secondPopupOpen={this.secondPopupOpen}
            getSVG={getSVG}
            className={showPopup ? "show" : "hide"}
          />
        ) : null}

        {secondPopup ? (
          <FabulousTerms
            data={terms}
            escClose={this.escFunction}
            secondPopupOpen={this.secondPopupOpen}
            getSVG={getSVG}
          />
        ) : null}
      </Fragment>
    );
  }
}

Fabulous.propTypes = {
  className: PropTypes.string,
  compData: PropTypes.instanceOf(Object).isRequired,
  getSVG: PropTypes.func.isRequired,
  fabInfo: PropTypes.instanceOf(Object).isRequired,
  getFabulousInfoFunc: PropTypes.func.isRequired,
  getFabulousTerms: PropTypes.func.isRequired,
  updateHomePageState: PropTypes.func.isRequired,
  terms: PropTypes.instanceOf(Object).isRequired,
  pageName: PropTypes.string.isRequired,
  checkButtonId: PropTypes.func.isRequired
};
Fabulous.defaultProps = {
  className: ""
};

const mapStateToProps = state => {
  const {
    homePage: { fabulous: { fabInfo = {}, terms = {} } = {} } = {}
  } = state;
  return {
    fabInfo,
    terms
  };
};

const mapDispatchToProps = dispatch => ({
  getFabulousInfoFunc: data => {
    return dispatch(getFabulousInfo(data));
  },
  getFabulousTerms: data => {
    return dispatch(getFabulousTerms(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledHOC(Fabulous, styles));
