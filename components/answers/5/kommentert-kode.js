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

  // Reduserer telleren. Moduset "remove" er ikke definert i setCounter funksjonen.
  myCounter = setCounter(myCounter, "remove");

  // Starter en nedtellingsfunksjon som øker telleren to ganger, etter ett sekund.
  setTimeout(function () {
    setCounter(myCounter, "add");

    setCounter(myCounter, "add");
  }, 1000);

  //Nedtellingsfunksjon som reduserer telleren to ganger, etter fire sekunder.
  setTimeout(function () {
    setCounter(myCounter, "subtract");

    setCounter(myCounter, "subtract");
  }, 4000);

  //Nedtellingsfunksjon som reduserer telleren en gang, og logger resultatet. Etter 5.5 sekunder.
  setTimeout(function () {
    setCounter(myCounter, "subtract");

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
    if ($.isNumeric(input)) {
      //Sjekker om modus er "add" eller "subtract", og utfører operasjonen deretter.
      if (mode === "add") {
        input++;
      } else if ("subtract") {
        input--;
      } else {
        // Varsler brukeren om at modus ikke er gyldig og utfører ingen endringer.
        alert("MESSAGE: Oops, missing mode?");
      }

      //Returnerer den oppdaterte verdien.
      return input;
    }
  }
}
