import React from "react";
import PropTypes from "prop-types";

const Button = ({ outline, content, radious, color, fontSize }) => {
  return (
    <button
      style={{
        fontSize: `${fontSize}px`,
        borderRadius: radious,
        color: color,
        border: `1px solid ${color}`,
      }}
      className={outline ? "btn btn--outline" : "btn btn--normal"}
    >
      {content}
    </button>
  );
};
Button.propTypes = {
  outline: PropTypes.bool,
  content: PropTypes.string,
  radious: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};
Button.defaultProps = {
  outline: false,
  content: "",
  radious: null,
  color: null,
  fontSize: 16,
};
export default Button;
