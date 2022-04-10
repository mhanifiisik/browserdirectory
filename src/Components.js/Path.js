import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImHome } from "react-icons/im";

const Path = ({ pathes }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const getpathURL = (path) => {
    const goto = pathes.indexOf(path);
    console.log(goto);
  };
  return (
    <div className="flex flex-row justify-start items-center gap-5">
      <ImHome
        color={"darkblue"}
        onClick={() => {
          navigate("/");
        }}
      ></ImHome>
      <p>
        {pathes.map((path, index) => (
          <Link
            to={path !== "root" ? path : "/"}
            key={index}
            className="hover:underline"
          >
            /{getpathURL(path)}
          </Link>
        ))}
      </p>
    </div>
  );
};

export default Path;
