import React from "react";
import { RiFolderFill } from "react-icons/ri";
import { Icons } from "../utils/Icons";
import { Link, useLocation } from "react-router-dom";
const FolderComponent = ({ data, isFolder }) => {
  let location = useLocation();
  const pathes = location.pathname.split("/").slice(1);
  const currentPath =
    pathes[pathes.length - 1] !== "root" && pathes[pathes.length - 1];
  return (
    <>
      {data &&
        data.map((directory, index) => {
          return (
            <Link
              to={
                isFolder
                  ? currentPath
                    ? currentPath + "/" + directory.name
                    : directory.name
                  : "#"
              }
              key={index + 50}
              className="flex flex-col-reverse gap-4 cursor-pointer w-28 h-28 rounded-2xl items-center p-5 bg-[#ececf2] text-black shadow-lg"
            >
              <p>
                {directory.name.length < 11
                  ? directory.name
                  : directory.name.substring(0, 8) + "..."}
              </p>
              {isFolder ? (
                <RiFolderFill size={40} color={"#42b0bd"} />
              ) : (
                Icons(directory.name.split(".")[1])
              )}
            </Link>
          );
        })}
    </>
  );
};

export default FolderComponent;
