import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = ({ iconColor }) => {
  const size = { height: 32, width: 32 };
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", paddingTop: ".5vh" }}
    >
      <div>
        <hr
          style={{
            color: iconColor,
            width: "100%",
          }}
        ></hr>
      </div>
      <div style={{ paddingTop: ".5vh" }}>
        <div className="iconHolder" style={{ display: "flex" }}>
          <div>
            <SocialIcon
              bgColor={iconColor}
              style={size}
              url="https://github.com/pfelto"
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              bgColor={iconColor}
              style={size}
              url="mailto:paul.r.felton@gmail.com"
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              bgColor={iconColor}
              style={size}
              url="https://twitter.com/felton_paul"
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              bgColor={iconColor}
              style={size}
              url="https://www.linkedin.com/in/paul-r-felton/"
              target="_blank"
            />
          </div>
          <div>
            <SocialIcon
              bgColor={iconColor}
              style={size}
              url="https://app.pluralsight.com/profile/pfelton"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
