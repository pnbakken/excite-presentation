"use client";

import DOMManipulationMenu from "@/components/dom-manipulation-menu";
import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";

const Answer6 = () => {
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
            7: Manipuler HTML-koden med jQuery, og hvis hvordan følgende
            operasjoner ser ut med jQuery-metoder:
          </p>
          <ul className="flex-c gap-xs">
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
          <DOMManipulationMenu />
          <div className="full-width hide-overflow">
            <HTMLAsComponent />
          </div>
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer6;

function HTMLAsComponent() {
  return (
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
  );
}

const htmlAsCode = `<div id="my-table-contaier" class="table-container" style="width: 1890px; height: 500px; background-color:#163d64; color: white; border-radius: 10px;">

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
