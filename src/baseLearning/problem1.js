import React, { useState } from "react";

const Problem1 = () => {
  const [name, setName] = useState("");
  const [sahilName, setSahilName] = useState(false);
  const [PersonalName, setPersonalName] = useState(false);
  const [otherName, setOtherName] = useState(false);
  const handleChange = (event) => {
    let value = event.target.value;
    setSahilName(false);
    setPersonalName(false);
    setOtherName(false);
    setName(value);
  };
  console.log(name, "name ");
  const handleClick = () => {
    if (name === "sahil") {
      setSahilName(true);
      setPersonalName(false);
      setOtherName(false);
    } else if (name === "rohan") {
      setSahilName(false);
      setOtherName(false);
      setPersonalName(true);
    } else {
      setSahilName(false);
      setPersonalName(false);
      setOtherName(true);
    }
  };
  console.log(sahilName, "sahilname");
  console.log(PersonalName, "personalname");
  console.log(otherName, "othername");
  return (
    <div>
      <h1>Problem 1</h1>
      {/* // conditional rendering */}
      {sahilName && <p style={{ color: "red" }}>{name}</p>}
      {PersonalName && <h1 style={{ color: "blue" }}>{name}</h1>}
      {otherName && <h6 style={{ color: "green" }}>{name}</h6>}
      <input
        placeholder="please type any name"
        onChange={(event) => handleChange(event)}
      />
      <button onClick={handleClick}> press me</button>
    </div>
  );
};

export default Problem1;
