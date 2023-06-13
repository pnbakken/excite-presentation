"use client";

import DOMManipulationMenu from "../../dom-manipulation-menu";
import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";
import Loader from "@/components/utility/loader";
import OverflowWrapper from "@/components/utility/overflow-wrapper";
import SyntaxHighlight from "@/components/utility/syntax-highlight";
import { useState, useEffect } from "react";

const Answer6 = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loader />;
  return (
    <AnswerPresentation>
      <>
        <QuestionSlide>
          <div className={`flex-c full-width tw-mb-16`}>
            <h1>Spørsmål 6 & 7</h1>
          </div>
          <p>
            <span className="leading-letter">Q:</span>
          </p>
          <p>
            6: I vedlegg_2_dom.html ligger det HTML-kode, skisser hvordan denne
            ser ut
          </p>
          <p>
            7: Manipuler HTML-koden med jQuery, og vis hvordan følgende
            operasjoner ser ut med jQuery-metoder:
          </p>
          <ul className="flex-c gap-xs no-list-style full-width">
            <li>
              Endre tekstfarge på ytterste &lt;div&gt; fra nåværende til
              selvvalgt farge som synes på bakgrunnsfargen
            </li>
            <li>
              Endre tekst i &lt;h1&gt;-element fra “Min nydelige tabell” til
              “Company overview”.
            </li>
            <li>
              Flytte &lt;div&gt; med klassen “bottom-element” til etter
              tabellen.
            </li>
          </ul>
        </QuestionSlide>
        <AnswerSlide>
          <p>
            <span className="leading-letter">A:</span>
          </p>

          <div className="full-width flex-c gap-sm">
            <DOMManipulationMenu />

            <HTMLAsComponent />
          </div>
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <div className="slide hidden full-width">
            <p className="larger-text">Endre farge:</p>
            <SyntaxHighlight content={changeColorCode} />
          </div>
          <div className="slide hidden full-width">
            <p className="larger-text">Endre overskrift:</p>
            <SyntaxHighlight content={changeHeadingCode} />
          </div>
          <div className="slide hidden full-width">
            <p className="larger-text">Flytt element:</p>
            <SyntaxHighlight content={moveBottomElementCode} />
          </div>
        </AnswerSlide>
        <AnswerSlide>
          <div className="full-width slide hidden">
            <p className="larger-html">Original HTML:</p>
            <SyntaxHighlight content={htmlAsCode} />
          </div>
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer6;

/**
 * Refactored to React component
 * @returns React.Component
 */
function HTMLAsComponent() {
  return (
    <div className="full-width hide-overflow relative">
      <div
        id="my-table-contaier"
        className="table-container"
        style={{
          width: "1890px",
          height: "500px",
          backgroundColor: "#163d64",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <h1 className="table-heading">Min nydelige tabell</h1>

        <div className="bottom-element">
          <span>Powered by Excite Technologies</span>
        </div>

        <table className="the-actual-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const changeColorCode = `if (selectedColour) {
    $("#my-table-contaier").css("color", selectedColour);
  }`;

const changeHeadingCode = `$(".table-heading").text("Company overview");`;
const moveBottomElementCode = ` let $bottomElement = $(".bottom-element").detach();
$(".the-actual-table").after($bottomElement);`;

const htmlAsCode = `<div id="my-table-contaier" class="table-container" 
style="width: 1890px; height: 500px; 
background-color:#163d64; color: white; 
border-radius: 10px;">

<h1 class="table-heading">Min nydelige tabell</h1>

<div class="bottom-element">
  <span>Powered by Excite Technologies</span>
</div>

<table class="the-actual-table">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
   </thead>
   <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
   </tbody>
</table>
</div>`;
