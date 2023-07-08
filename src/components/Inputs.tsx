import React from "react";
import PropTypes from "prop-types";

const Inputs = ({
  name,
  type,
  value,
  className,
  labelText,
  placeholder,
  handleChange,
}: any) => {
  return (
    <div className="flex flex-col">
      {labelText && (
        <label htmlFor={name} className="font-medium">
          {labelText}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className ? className : "w-full"}
        autoComplete='false'
      />
    </div>
  );
};

Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Inputs;
