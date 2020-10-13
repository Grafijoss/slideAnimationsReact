import React from "react";
import PropTypes from "prop-types";

import { Button } from "./style";

export const Example = ({ children, buttonType, onClick }) => (
  <Button onClick={onClick} className={buttonType}>
    {children}
  </Button>
);

Example.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

Example.defaultProps = {
  buttonType: "primary",
};
