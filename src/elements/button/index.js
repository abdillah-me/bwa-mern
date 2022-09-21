import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
   const className = [props.className];
   if (props.isPrimary) className.push("btn-primary");
   if (props.isLarge) className.push("btn-lg");
   if (props.isSmall) className.push("btn-sm");
   if (props.isBlock) className.push("btn-block");
   if (props.hasShadow) className.push("btn-shadow");

   const onClick = () => {
      if (props.onClick) props.onClick();
   };

   if (props.type === "link") {
      if (props.isExsternal) {
         return (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
               href={props.heref}
               className={className.join(" ")}
               style={props.style}
               target={props.target === "_blank" ? "_blank" : undefined}
               rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
            >
               {props.childern}
            </a>
         );
      } else {
         return (
            <link
               to={props.heref}
               className={className.join(" ")}
               style={props.style}
               onClick={onClick}
            >
               {props.childern}
            </link>
         );
      }
   }

   return <div>index</div>;
}

Button.prototype = {
   type: propTypes.oneOf(["button", "link"]),
   onclick: propTypes.func,
   heref: propTypes.string,
   target: propTypes.string,
   className: propTypes.string,
   isDisable: propTypes.bool,
   isLoading: propTypes.bool,
   isSmall: propTypes.bool,
   isLarge: propTypes.bool,
   isBlock: propTypes.bool,
   hasShadow: propTypes.bool,
};
