import React from "react";

const Child = (name) => {
  //   console.log(name, "child propssss");
  let getValue = sessionStorage.getItem("pesy");
  console.log(getValue, typeof getValue, "this is get value");
  //   console.log("Child object", nameObject);
  return (
    <div>
      this is child {name.name} this value comes from {getValue}
      {/* {nameObject.nameObject.student6} */}
    </div>
  );
};

export default Child;
