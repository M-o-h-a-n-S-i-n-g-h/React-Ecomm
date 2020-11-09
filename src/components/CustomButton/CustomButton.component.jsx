import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${isGoogleSingIn ? "google-sign-in" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
