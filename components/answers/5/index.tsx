"use client";

import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";
import SyntaxHighlight from "@/components/utility/syntax-highlight";
import $ from "jquery";

const Answer5 = () => {
  return (
    <AnswerPresentation>
      <>
        <QuestionSlide>
          <div className={`flex-c full-width tw-mb-16`}>
            <h1>Spørsmål 5</h1>
          </div>
          <p>
            <span className="leading-letter">Q:</span>
          </p>
          <p>
            I vedlegg_1_counter.js ligger det en kodesnutt som teller: a. Hva
            vil outputen på linje: 28 være, og hvor vil den være synlig? b. Bruk
            nyeste JSDoc-standard til å kommentere alle linjene i koden
          </p>
        </QuestionSlide>
        <AnswerSlide>
          <p>
            <span className="leading-letter">A:</span>
          </p>
          <p className="slide hidden">Svaret vil være 0. </p>
          <p className="slide hidden">
            Først vil koden øke telleren til 1, så vil den redusere til 0.
          </p>
          <p className="slide hidden">
            Dernest forsøker koden å kalle setCounter() med en ugyldig modus, og
            telleren forblir null.
          </p>
          <p className="slide hidden">
            Funksjonen setCounter() fungerer slik at den returner enten ett tall
            høyere eller lavere enn det den får som input, men den gjør
            ingenting med selve telleren. Når de senere kallene ikke bruker
            returverdien til å endre telleren, vil verdien av myCounter forbli
            0.
          </p>
          <p className="slide hidden"></p>
          <p className="slide hidden">
            <button
              onClick={demoSolution}
              className="demo-button"
              aria-label="vis svar"
            >
              Vis
            </button>
          </p>
          <div id="solutionTarget" />
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <p className="larger-text">
            Vedlegg: (se kildemappe for .js fil med kommentert kode)
          </p>
          <SyntaxHighlight content={commentedCode} />
          <p className="slide hidden"></p>
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer5;

function demoSolution() {
  getCounter(0);
}

/**
 * Modified version of the getCounter function from the original code.
 * Runs without delay, and prints the result to screen rather than console.
 * @param counter
 */
function getCounter(counter) {
  let myCounter = 0;

  myCounter = setCounter(myCounter, "add");

  myCounter = setCounter(myCounter, "remove");

  setCounter(myCounter, "add");

  setCounter(myCounter, "add");

  setCounter(myCounter, "subtract");

  setCounter(myCounter, "subtract");

  setCounter(myCounter, "subtract");

  $("#solutionTarget").html("My counter: " + myCounter);
}
function setCounter(input, mode) {
  if ($.isNumeric(input)) {
    if (mode === "add") {
      input++;
    } else if ("subtract") {
      input--;
    } else {
      alert("MESSAGE: Oops, missing mode?");
    }
    return input;
  }
}

const commentedCode = `
/**
 * Initialiserer og manipulerer en teller.
 *
 * @param {number} counter - Den opprinnelige verdien til telleren. Ikke brukt i denne konteksten.
 */
getCounter();


function getCounter(counter) {
    /**
     * Telleren som skal manipuleres.
     * @type {number}
     */
	let myCounter = 0;

// Øker Telleren
	myCounter = setCounter(myCounter, "add");

// Gjør ingenting. Moduset "remove" er ikke definert i setCounter funksjonen så dette vil returnere det uendrete tallet.
	myCounter = setCounter(myCounter, "remove");

// Starter en nedtellingsfunksjon som øker telleren to ganger, etter ett sekund.
	setTimeout(function() {
		setCounter(myCounter, "add");

		setCounter(myCounter, "add");
	}, 1000);

//Nedtellingsfunksjon som reduserer telleren to ganger, etter fire sekunder.
	setTimeout(function() {
		setCounter(myCounter, "subtract");

		setCounter(myCounter, "subtract");
	}, 4000);

//Nedtellingsfunksjon som reduserer telleren én gang, og logger resultatet. Etter 5.5 sekunder.
	setTimeout(function() {
		setCounter(myCounter, "subtract");
		
        //Tilsvarer linje 28 i originalkoden.
		console.log("My counter:", myCounter);
	}, 5500);
	
/**
 * Funksjon for å endre en teller avhengig av angitt modus.
 *
 * @param {number} input - Den gjeldende teller verdien som skal endres.
 * @param {string} mode - Modus for endringen, kan være "add" for å øke telleren, eller "subtract" for å redusere telleren.
 * @returns {number} - Den oppdaterte teller verdien etter å ha utført operasjonen, eller uendret hvis modusen ikke er gyldig eller input ikke er et tall.
 */
	function setCounter(input, mode) {
	
//Sjekker om input er et tall.
	if($.isNumeric(input)) {

    //Sjekker om modus er "add" eller "subtract", og utfører operasjonen deretter.
		if(mode === "add") {
			input++;
		}
		else if("subtract") {
			input--;
		}
		else {
        // Varsler brukeren om at modus ikke er gyldig og utfører ingen endringer.
			alert("MESSAGE: Oops, missing mode?");
		}
		
    //Returnerer den oppdaterte verdien.
		return input;
	}	
}
}`;
