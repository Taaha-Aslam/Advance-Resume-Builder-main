import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("faizan");
  //   console.log(name, "parent state");
  let value = 23;
  let localStorageData = sessionStorage.setItem("pesy", value);
  //   const [nameObject, setNameObject] = useState({
  //     student1: "rohan",
  //     student2: "zeeshan",
  //     student3: "aliza",
  //     student4: "haseeb",
  //     student5: "salma",
  //     student6: "adeel",
  //     student7: "ahmad",
  //   });

  //   console.log(nameObject, "this is my object");
  return (
    <div>
      this is parent {name}
      <Child name={name} />
      {/* {nameObject.student6} */}
      {/* <Child nameObject={nameObject} /> */}
    </div>
  );
};

export default Parent;
