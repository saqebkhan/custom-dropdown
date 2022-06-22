import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
let data = [
  {
    cat: "Group 1",
    key: "Option 1",
    check:false
  },
  {
    cat: "Group 1",
    key: "Option 2",
    check:false
  },
  {
    cat: "Group 1",
    key: "Option 3",
    check:false
  },
  {
    cat: "Group 2",
    key: "Option 4",
    check:false
  },
  {
    cat: "Group 2",
    key: "Option 5",
    check:false
  },
  {
    cat: "Group 2",
    key: "Option 6",
    check:false
  },
  {
    cat: "Group 2",
    key: "Option 7",
    check:false
  },
];

const CustomDropdown = () => {
  const [selectAll, setSelectAll] = useState(false)
  const handleCheck = () => {
    data[0].check = true
    console.log(data)
  }
  return (
    <div>
      <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={(handleCheck)}
        options={data}
        showCheckbox
      />
    </div>
  );
};

export default CustomDropdown;
