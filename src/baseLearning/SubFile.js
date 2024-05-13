import React from "react";

const SubFile = (data) => {
  console.log(data, "child data");
  return (
    <div>
      {data.data.map((item) => (
        <div
          style={{
            border: "2px solid black",
            background: "yellow",
            marginTop: "1rem",
          }}
        >
          <p>this is your title data:{item.title}</p>
          <p>this is your body data: {item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SubFile;
