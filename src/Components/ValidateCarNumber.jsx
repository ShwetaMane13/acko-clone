import React from "react";

export default function ValidateCarNumber() {
  const isValidCarNumber = (data) => {
    const pattern = new RegExp(
      "^[A-Z|a-z]{2}([1-9]{1}|[0-9]{2})[A-Z|a-z]{0,2}[0-9]{4}$"
    );
    if (pattern.test(data)) {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyUp = (e) => {
    const status = isValidCarNumber(e.target.value);
    console.log(status);
  };

  return (
    <div>
      <input
        onKeyUp={handleKeyUp}
        type="text"
        name="car_number"
        placeholder="Enter your car nnumber"
      />
    </div>
  );
}
