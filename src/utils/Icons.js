import React from "react";
import {
  BsImageFill,
  BsFillFileTextFill,
  BsFillFileRichtextFill,
} from "react-icons/bs";
export const Icons = (type) => {
  switch (type) {
    case "jpg":
      return <BsImageFill size={40} color={"purple"} />;
    case "txt":
      return <BsFillFileTextFill size={40} color={"orange"} />;
    default:
      return <BsFillFileRichtextFill size={40} color={"red"} />;
  }
};
