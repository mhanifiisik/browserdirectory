import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Path from "./Components.js/Path";
import FolderComponent from "./Components.js/FolderComponent";
import axios from "axios";

const Root = () => {
  const [files, setFiles] = useState([]);
  const [directories, setDirectories] = useState([]);
  let location = useLocation();

  const pathes = location.pathname.split("/").slice(1);
  const currentPath = pathes[pathes.length - 1];
  const currentPathId = currentPath !== "root" ? currentPath.split("_")[1] : 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${currentPathId}`
        );
        setFiles(data.data.files);
        setDirectories(data.data.directories);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [currentPathId]);

  return (
    <div className="w-full h-full">
      <div className="w-full pb-4 flex flex-row justify-start items-end gap-5  left-0 top-0 cursor-pointer text-black">
        <Path pathes={pathes} />
      </div>
      <div className="w-full h-full grid grid-cols-2  md:grid-cols-5 xl:grid-cols-8 place-items-stretch gap-5 justify-items-stretch">
        <FolderComponent data={directories} isFolder={true} />
        <FolderComponent data={files} isFolder={false} />
      </div>
    </div>
  );
};

export default Root;
