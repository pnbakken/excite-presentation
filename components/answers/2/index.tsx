import React from "react";
import style from "./index.style.module.scss";
import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";
import Image from "next/image";
import SyntaxHighlight from "@/components/utility/syntax-highlight";

const Answer2 = () => {
  return (
    <AnswerPresentation>
      <>
        <section>
          <QuestionSlide>
            <div className={`flex-c full-width tw-mb-32`}>
              <h1>Spørsmål 2</h1>
            </div>
            <p className="full-width">
              <span className="leading-letter">Q:</span>
            </p>
            <p>
              JavaScript og jQuery brukes ofte i kombinasjon, hva er forskjellen
              på dem?
            </p>
          </QuestionSlide>
        </section>
        <section>
          <AnswerSlide>
            <p className="full-width">
              <span className="leading-letter">A:</span>
            </p>
            <p className="slide hidden">
              JavaScript og jQuery er nært relatert, men de har forskjellige
              roller og bruksområder i utvikling av nettsteder og
              webapplikasjoner.
            </p>
            <p className="slide hidden">
              Kort oppsummert så er JavaScript et programmeringsspråk, mens
              jQuery er et bibliotek med funksjoner skrevet i JavaScript .
            </p>
          </AnswerSlide>
          <AnswerSlide className="slide hidden">
            <p className="slide hidden">
              jQuery ble designet for å forenkle scripting av HTML på
              klient-siden. Med andre ord, er det ikke et separat
              programmeringsspråk, men et sett med godt konstruert,
              fleranvendelig JavaScript kode.
            </p>
            <p className="slide hidden">
              Det gir metoder og funksjoner som gjør det lettere å bruke
              JavaScript på en nettside, som for eksempel manipulering av HTML
              dokumenter, håndtering av hendelser, lage animasjoner, og Ajax
              interaksjoner.
            </p>
            <p className="slide hidden">
              jQuery er et av de mest brukte JavaScript bibliotekene.
            </p>
          </AnswerSlide>
          <AnswerSlide className="slide hidden">
            <p className="slide hidden">
              JavaScript, derimot, er et programmeringsspråk som er en integrert
              og kritisk del av webutvikling.
            </p>
            <p className="slide hidden">
              Det støttes av alle moderne nettlesere og er et av de mest brukte
              programmeringsspråkene i verden.
            </p>
            <p className="slide hidden">
              Det danner grunnlaget ikke bare for jQuery, men for dynamiske
              nettsteder og webapplikasjoner generelt.
            </p>
          </AnswerSlide>
          <AnswerSlide className="slide hidden">
            <div className="flex-c gap-sm full-width slide hidden">
              <h2>Velge elementer:</h2>
              <div>
                <div className="smaller-text">JavaScript:</div>
                <SyntaxHighlight content={jsSelectorExample} />
              </div>
              <div>
                <div className="small-text">jQuery:</div>
                <SyntaxHighlight content={jQuerySelectorExample} />
              </div>
            </div>
            <div className="flex-c gap-sm full-width  slide hidden">
              <h2>Endre Innhold:</h2>
              <div>
                <div className="small-text">JavaScript:</div>
                <SyntaxHighlight content={jsChangeExample} />
              </div>
              <div>
                <div className="small-text">jQuery:</div>
                <SyntaxHighlight content={jQueryChangeExample} />
              </div>
            </div>
            <div className="flex-c gap-sm full-width slide hidden">
              <h2>Håndtere hendelser:</h2>
              <div>
                <div className="smaller-text">JavaScript:</div>
                <SyntaxHighlight content={jsEventExample} />
              </div>
              <div>
                <div className="smaller-text">jQuery:</div>
                <SyntaxHighlight content={jQueryEventExample} />
              </div>
            </div>
            <div className="flex-c gap-sm full-width slide hidden">
              <h2>API-kall:</h2>
              <div>
                <div className="smaller-text">JavaScript:</div>
                <SyntaxHighlight content={jsFetchExample} />
              </div>
              <div>
                <div className="smaller-text">jQuery:</div>
                <SyntaxHighlight content={jQueryAjaxExample} />
              </div>
            </div>
          </AnswerSlide>
        </section>
      </>
    </AnswerPresentation>
  );
};

export default Answer2;

const jsSelectorExample = `const element = document.getElementById("myElement");
`;
const jQuerySelectorExample = `const element = $("#myElement");
`;
const jsChangeExample = `document.getElementById("myElement")
.innerHTML = "New Content";
`;
const jQueryChangeExample = `$("#myElement").html("New Content");
`;
const jsEventExample = `document.getElementById("myButton")
.addEventListener("click", 
function() {
  alert("Button clicked!");
});
`;

const jQueryEventExample = `$("#myButton").click(function() {
  alert("Button clicked!");
});
`;

const jsFetchExample = `fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
`;

const jQueryAjaxExample = `$.ajax({
  url: 'https://api.example.com/data',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
`;
