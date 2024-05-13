import React, { useEffect, useState } from "react";
import SubFile from "./SubFile";

const MainFile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [data]);
  console.log(data, "this is your data");
  return (
    <>
      {" "}
      {/* {state.map(() => {
        html;
      })} */}
      <SubFile data={data} />
    </>
  );
};

export default MainFile;
