import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "components/common/atoms/Input";
import StyledPassword from "./Password.style";

const Password = props => {
  const { getSVG, ...others } = props;
  const [fieldType, setFieldType] = useState("password");
  const toggleFieldType = () => {
    // eslint-disable-next-line
        fieldType === "password" ? setFieldType("text") : setFieldType("password");
  };
  const FieldIcon =
    fieldType === "password" ? getSVG("eyeOff") : getSVG("eyeOn");
  return (
    <StyledPassword>
      <Input type={fieldType} {...others} />
      <FieldIcon className="eye-svg" onClick={() => toggleFieldType()} />
    </StyledPassword>
  );
};

Password.propTypes = {
  getSVG: PropTypes.func.isRequired
};

export default Password;
