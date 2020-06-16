import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ENTER_KEY,
  TAB_KEY
} from "global/constants";
import StyledDropDown from "./DropDown.style";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyBoardItemIndex: 0,
      dropDownFocus: false,
      isDropDownOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  componentDidUpdate() {
    const { isDropDownOpenByParent } = this.props;
    if (isDropDownOpenByParent) {
      this.buttonNode.focus();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  handleClickOutside = e => {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    // outside click
    this.setState({
      dropDownFocus: false,
      isDropDownOpen: false
    });
  };

  closeDropDown = () => {
    this.setState({
      dropDownFocus: false,
      isDropDownOpen: false
    });
  };

  toggleDropdown = () => {
    const { isDropDownOpen } = this.state;
    this.setState({
      isDropDownOpen: !isDropDownOpen
    });
  };

  handleListSelect = (e, item) => {
    e.preventDefault();
    const { onSelect } = this.props;
    this.setState({ keyBoardItemIndex: 0 }, () => {
      this.setState({
        dropDownFocus: false,
        isDropDownOpen: false
      });
    });
    onSelect(item);
  };

  onKeyDown = e => {
    const { keyCode } = e;
    if (keyCode !== TAB_KEY) e.preventDefault();
    const { keyBoardItemIndex } = this.state;
    const { isDropDownOpen, dropDownFocus } = this.state;
    const { options, onSelect } = this.props;
    switch (keyCode) {
      case ARROW_DOWN_KEY:
        if (
          (isDropDownOpen || dropDownFocus) &&
          options.length - 1 > keyBoardItemIndex
        ) {
          this.setState({ keyBoardItemIndex: keyBoardItemIndex + 1 }, () => {
            this[`list${keyBoardItemIndex + 1}`].scrollIntoView({
              block: "end",
              inline: "nearest"
            });
            onSelect(options[keyBoardItemIndex + 1], false); // 2ndParameter indicates whether or not to set focus on the node while triggering onSelect
          });
        }
        break;
      case ARROW_UP_KEY:
        if ((isDropDownOpen || dropDownFocus) && keyBoardItemIndex > 0) {
          this.setState({ keyBoardItemIndex: keyBoardItemIndex - 1 }, () => {
            this[`list${keyBoardItemIndex - 1}`].scrollIntoView({
              block: "end",
              inline: "nearest"
            });
            onSelect(options[keyBoardItemIndex - 1], false); // 2ndParameter indicates whether or not to set focus on the node while triggering onSelect
          });
        }
        break;
      case ENTER_KEY:
        if (isDropDownOpen || dropDownFocus) {
          this.setState({ keyBoardItemIndex: 0 }, () => {
            this.closeDropDown();
            onSelect(options[keyBoardItemIndex]); // No second param required as by default it's true
          });
        } else {
          this.closeDropDown();
        }
        break;
      case TAB_KEY:
        this.closeDropDown();
        break;
      default:
        break;
    }
  };

  renderDropDownList = () => {
    const { options = [], displayValue } = this.props;
    const { keyBoardItemIndex } = this.state;
    if (!(options || []).length) return null;
    return (
      <div className="list-wrapper dropdown-effect">
        <ul>
          {options.map((item, index) => {
            const { text: itemText, value } = item;
            return (
              <li // eslint-disable-line
                className={index === keyBoardItemIndex ? "selected" : ""}
                onClick={e => this.handleListSelect(e, item)}
                ref={listNode => {
                  this[`list${index}`] = listNode;
                }}
                key={itemText}
              >
                {displayValue && <span className="item-value">{value}</span>}
                <span className="inline-block list">{itemText}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { className, selectedItem, label, getSVG, tabIndex } = this.props;
    const { isDropDownOpen, dropDownFocus } = this.state;
    const { value } = selectedItem;
    const DownArrow = getSVG("downArrow");
    return (
      <StyledDropDown
        className={className}
        ref={node => {
          this.node = node;
        }}
        onClick={() => this.toggleDropdown()}
      >
        {/* eslint-disable-next-line */}
        {label && <label htmlFor="dropDownButton">{label}</label>}
        <button
          ref={node => {
            this.buttonNode = node;
          }}
          type="button"
          onKeyDown={e => this.onKeyDown(e)}
          name="dropDownButton"
          tabIndex={tabIndex}
          /* eslint-disable */
          onFocus={() => {
            !dropDownFocus
              ? this.setState({ dropDownFocus: true })
              : "";
          }}
        /* eslint-disable */
        >
          {value}
          <DownArrow />
        </button>
        {(isDropDownOpen, dropDownFocus) &&
          this.renderDropDownList()}
      </StyledDropDown>
    );
  }
}

DropDown.propTypes = {
  onSelect: PropTypes.func,
  options: PropTypes.instanceOf(Object),
  selectedItem: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  label: PropTypes.string,
  getSVG: PropTypes.func,
  displayValue: PropTypes.bool,
  tabIndex: PropTypes.string,
  isDropDownOpenByParent: PropTypes.bool
};

DropDown.defaultProps = {
  onSelect: () => { },
  options: [],
  selectedItem: {},
  className: "",
  label: "",
  getSVG: () => { },
  displayValue: false,
  tabIndex: "0",
  isDropDownOpenByParent: false
};

export default DropDown;




