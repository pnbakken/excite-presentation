"use client";

import React, { useEffect, useState } from "react";
import style from "./index.style.module.scss";
import $ from "jquery";

const DOMManipulationMenu = () => {
  return (
    <div
      className={`${style.DOMManipulationMenu} full-width tw-p-5 flex-r wrap justify-evenly`}
    >
      <SelectColour />
      <ChangeHeading />
      <MoveBottomElement />
    </div>
  );
};

export default DOMManipulationMenu;

function SelectColour() {
  const [selectedColour, setSelectedColour] = useState("white");

  function handleColourSelect(e) {
    console.log(e.target.value);
    if (e.target.value) {
      setSelectedColour(e.target.value);
    } else {
      setSelectedColour("white");
    }
  }
  useEffect(() => {
    if (selectedColour) {
      $("#my-table-contaier").css("color", selectedColour);
    }
  }, [selectedColour]);

  return (
    <select onChange={handleColourSelect}>
      <option value="">Velg farge</option>

      <option value="lightblue">Blå</option>
      <option value="hotpink">Rosa</option>
      <option value="lightgreen">Grønn</option>
    </select>
  );
}

function ChangeHeading() {
  function handleButtonClick() {
    $(".table-heading").text("Company overview");
  }

  return <button onClick={handleButtonClick}>Endre overskrift</button>;
}

function MoveBottomElement() {
  function handleButtonClick() {
    let $bottomElement = $(".bottom-element").detach();
    $(".the-actual-table").after($bottomElement);
  }

  return <button onClick={handleButtonClick}>Flytt element til bunnen</button>;
}
