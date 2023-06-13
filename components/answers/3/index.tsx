import React from "react";
import style from "./index.style.module.scss";
import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
  SlideTitle,
} from "@/components/presentation";
import SyntaxHighlight from "@/components/utility/syntax-highlight";

const Answer3 = () => {
  return (
    <AnswerPresentation>
      <>
        <QuestionSlide>
          <div className={`flex-c full-width tw-mb-16`}>
            <h1>Spørsmål 3</h1>
          </div>
          <p>
            <span className="leading-letter">Q:</span>
          </p>
          <p>
            Hva er de fire prinsippene til jQuery, og hvordan hjelper de deg som
            utvikler?
          </p>
        </QuestionSlide>
        <AnswerSlide>
          <p>
            <span className="leading-letter">A:</span>
          </p>
          <div className="full-width slide hidden flex-c gap-sm">
            <h2>1. Separasjon av HTML og JS</h2>
            <p className="slide hidden">
              jQuery-biblioteket gir en enkel syntaks for å legge til event
              handlers i DOM ved hjelp av JavaScript, i stedet for å legge til
              HTML event attributter for å kalle JavaScript funksjoner. Dermed
              oppfordrer det utviklere til å fullstendig skille JavaScript-kode
              fra HTML-markup.
            </p>
            <SyntaxHighlight content={separationOfConcernsExample} />
          </div>
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <div className="full-width">
            <h2>2. Korthet og klarhet</h2>
          </div>
          <p className="slide hidden">
            jQuery fremmer korthet og klarhet med funksjoner som
            &quot;chainable&quot; funksjoner og kortform funksjonsnavn.
          </p>
          <div className="slide hidden full-width">
            <SyntaxHighlight content={shortAndClearExample} />
          </div>
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <div className="full-width">
            <h2>3. Eliminering av cross-browser inkompatibiliteter.</h2>
          </div>
          <p className="slide hidden">
            JavaScript-motorer i forskjellige nettlesere varierer, så
            JavaScript-kode som fungerer for en nettleser kan muligens ikke
            fungere for en annen.
          </p>
          <p className="slide hidden">
            jQuery håndterer disse usammenhengene og gir et konsistent
            grensesnitt som fungerer på tvers av forskjellige nettlesere.
          </p>
          <div className="slide hidden full-width">
            <SyntaxHighlight content={crossBrowserExample} />
          </div>
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <div className="full-width">
            <h2>4. Utvidbarhet</h2>
          </div>
          <p className="slide hidden">
            Nye events, elementer, og metoder kan lett legges til og deretter
            gjenbrukes som et plugin.
          </p>
          <div className="slide-hidden full-width">
            <SyntaxHighlight content={expansionExample} />
          </div>
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer3;

const separationOfConcernsExample = `// Bruk av jQuery til å håndtere et klikkevent
$("#button").click(function() {
  alert("Knappen ble klikket.");
});`;

const shortAndClearExample = `// "Chainable" funksjoner i jQuery
$("#element").fadeIn().addClass("active");`;

const crossBrowserExample = `// jQuery sørger for at dette fungerer på tvers av nettlesere
$(window).on('resize', function() {
  console.log('Vindustørrelsen har endret seg!');
});`;

const expansionExample = `// En enkel jQuery plugin for å endre teksten i et element
$.fn.changeText = function(newText) {
  this.text(newText);
  return this;
};

// Bruk av plugin
$('#element').changeText('Ny tekst');`;
