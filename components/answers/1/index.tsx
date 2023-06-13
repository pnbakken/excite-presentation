"use client";

import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";
import { ClientComponent } from "@/components/utility/client-component";
import SyntaxHighlight from "@/components/utility/syntax-highlight";

const Answer1 = () => {
  return (
    <AnswerPresentation>
      <>
        <QuestionSlide>
          <div className={`flex-c full-width tw-mb-16`}>
            <h1>Spørsmål 1</h1>
          </div>
          <p className="full-width">
            <span className="leading-letter">Q:</span>
          </p>
          <p className="slide hidden">
            Når man jobber med ulike komponenter, filer og funksjoner, så er det
            viktig å forstå hvordan og hvilket scope man jobber i, hva er et
            scope og hvorfor er det viktig å forstå det?
          </p>
        </QuestionSlide>

        <AnswerSlide>
          <p className="full-width">
            <span className="leading-letter">A:</span>
          </p>
          <p className="slide hidden">
            I programmering referer &quot;scope&quot; til synligheten, eller
            tilgjengeligheten av variabler og objekter under kjøretid.
          </p>
        </AnswerSlide>

        <AnswerSlide>
          <div className="flex-c gap-sm slide hidden">
            <p className="">
              I JavaScript er det to typer scope: globalt og lokalt. En variabel
              definert utenfor en funksjon har et globalt scope og kan nås fra
              hvor som helst i koden.
            </p>
            <SyntaxHighlight content={globalScopeExample} />
          </div>
        </AnswerSlide>
        <AnswerSlide>
          <div className="flex-c gap-sm slide hidden">
            <p>
              Det lokale skopet omfatter alt som erklæres innenfor en funksjon
              eller klasse.
            </p>
            <SyntaxHighlight content={localScopeExample} />
          </div>
        </AnswerSlide>
        <AnswerSlide>
          <p className="slide hidden">
            Forståelse av scope er kritisk fordi det påvirker variabelens
            tilgjengelighet i koden. Det hjelper oss med å unngå
            variabelnavnkonflikter; variabler i forskjellige scopes kan ha samme
            navn.
          </p>
          <p className="slide hidden">
            Det bidrar også til kodeorganisasjon, ved at variabler brukes innen
            det området de er nødvendige, og ikke andre steder.
          </p>
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer1;

const globalScopeExample = `
let globalVariabel= "Jeg er tilgjengelig overalt";

function minFunksjon() {
    globalVariabel = "Også her inne";
}

`;

const localScopeExample = `
function minFunksjon() {
    const lokalVariabel = "Jeg er kun tilgjengelig i minFunksjon";
}

console.log(lokalVariabel); // Her vil lokalVariabel være undefined.

`;
