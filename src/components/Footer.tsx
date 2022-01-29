import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = ({ iconColor }) => {
  const size = { height: 40, width: 40 };
  return (
    <footer>
      <SocialIcon
        bgColor={iconColor}
        style={size}
        url="https://twitter.com/felton_paul"
        target="_blank"
      />
      <SocialIcon
        bgColor={iconColor}
        style={size}
        url="https://github.com/pfelto"
        target="_blank"
      />
      <SocialIcon
        bgColor={iconColor}
        style={size}
        url="https://app.pluralsight.com/profile/pfelton"
        target="_blank"
      />
    </footer>
  );
};
