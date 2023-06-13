"use client";

import {
  AnswerPresentation,
  AnswerSlide,
  QuestionSlide,
} from "@/components/presentation";
import { useState, useEffect } from "react";
import SyntaxHighlight from "@/components/utility/syntax-highlight";
import { BsChevronCompactDown } from "react-icons/bs";
import Loader from "@/components/utility/loader";
import $ from "jquery";

const Answer4 = () => {
  /**
   * HasClient state and its updater function, setHasClient.
   * The component uses a state variable, hasClient, to check if the JavaScript code has been loaded on the client side.
   * This is important as some features of this component depend on client-side APIs which will not be available during server-side rendering.
   *
   * The state starts as 'false' indicating the code is not yet confirmed to be running in the client.
   *
   * An effect hook is used to update the hasClient state to 'true' after the component mounts, ensuring the component is running on the client side before initializing functions dependent on client-side APIs.
   *
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [hasClient, setHasClient] = useState(false);
  useEffect(() => {
    setHasClient(true);
  }, []);

  if (!hasClient) {
    return <Loader />;
  }
  return (
    <AnswerPresentation>
      <>
        <QuestionSlide>
          <div className={`flex-c full-width tw-mb-32`}>
            <h1>Spørsmål 4</h1>
          </div>
          <p>
            <span className="leading-letter">Q:</span>
          </p>
          <p>
            Er det mulig å få tilgang til hardware på mobiler og desktop gjennom
            HTML, i så fall hvilke?
          </p>
        </QuestionSlide>

        <AnswerSlide>
          <p>
            <span className="leading-letter">A:</span>
          </p>
          <p className="slide hidden">
            Ved bruk av kun HTML har man begrenset tilgang til enkelte
            maskinvarefunksjoner.
          </p>
          <p className="slide hidden">
            Man kan for eksempel bruke HTML til å{" "}
            <a href="mailto:email@email.com">åpne en epostklient</a>
          </p>
          <p className="slide hidden">
            Eller likedan <a href="tel:12345678">ringe et telefonnummer</a>
          </p>
          <p className="slide hidden">
            Man kan også bruke HTML til å åpne en fil på brukerens datamaskin
            (på enkelte mobiler kan man også få tilgang til kameraet med denne
            metoden)
          </p>
        </AnswerSlide>
        <AnswerSlide className="slide hidden">
          <p className="slide hidden">
            Dersom man i tillegg bruker JavaScript får man tilgang til flere
            maskinvarefunksjoner.
          </p>
          <div className="full-width">
            <h2>Geolokalisering</h2>
            <button onClick={geolocationDemo} aria-label="prøv">
              Prøv
            </button>
          </div>

          <div id="geoTarget" />
          <SyntaxHighlight content={geolocationExample} />
        </AnswerSlide>
      </>
    </AnswerPresentation>
  );
};

export default Answer4;

const geolocationExample = `navigator.geolocation.getCurrentPosition();`;

/**
 * geolocationDemo function is a demonstration of the Geolocation API.
 *
 * This function checks if the Geolocation API is available in the user's browser (i.e., "geolocation" in navigator).
 * If the API is available, it gets the current position of the user.
 * The Geolocation API is asynchronous and it uses a callback function which is invoked with a 'position' object when the current position is successfully determined.
 *
 * In the callback function, the latitude and longitude of the user's position are extracted from the 'position' object.
 * These values are then displayed in an HTML element with the id 'geoTarget'.
 */
const geolocationDemo = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      $("#geoTarget").html(
        "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude
      );
    });
  } else $("#geoTarget").html("Geolocation is not supported by this browser.");
};
