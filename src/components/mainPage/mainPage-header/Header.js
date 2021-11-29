import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../../GloboLogo.png";
import Heading from "../page-heading/Heading";
import "./header.css";
import houses from "../../../houses.json";
import HouseData from "../../houseData/HouseData";

export default function Header() {
  const [selectedHouse, setSelectedHouse] = useState("");
  const [filterData, setFilteredData] = useState(houses);

  const handleSelect = (e) => {
    setSelectedHouse(e);
    console.log(e);

    const list = houses;
    const filteredList = list.filter((house) => house.country === e);
    setFilteredData(filteredList);
    console.log("filtered data", filterData);
  };
  return (
    <div className="container">
     <header className="row">
        <img src={logo} class="rounded float-start" alt="logo" />
        <p className="subtitle center">Providing houses all over the world</p>
      </header>
  <div className="Dropdown ">
      <DropdownButton
        style={{color:"white" ,direction: "rtl"}}
        title="Select Country"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Switzerland">Switzerland</Dropdown.Item>
        <Dropdown.Item eventKey="The Netherlands">The Netherland</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {selectedHouse}</h4>
      </div>
      <Heading />
      <HouseData house={filterData} />
     
    </div>
  );
}
// export default function Header() {
//   //const [Data, setFileterData] = useState(houses);

//   // const handleClick = (e) => {
//   //   // //   // const[filteredData,setFilteredData]=useState();
//   //   // //   let data = houses.filter((a)=>
//   //   // //     a.country==="Switzerland"
//   //   // //   )
//   //   // //   console.log("filtered",data);
//   //   // // return(
//   //   // //   {data}

//   //   // // )\\
//   //   setFileterData( e.target.value);
//   //   console.log("Check", Data);
//   //   // setFileterData(
//   //   //   Data.filter((a) => {
//   //   //     a.Country === captureData;
//   //   //   })
//   //   // );
//   //   // console.log(Data);
//   // };

//   return (
//     <>
//
//       <div className="dropdown">
//         <select className="dropdown-content" onSelect={handleClick}>
//           <option>Select country</option>
//           <option value="Switz">Switzerland</option>
//           <option value="neither">The Netherlands</option>
//         </select>
//       </div>
//       <Heading />
//       <HouseData house={houses} />
//     </>
//   );
// }
