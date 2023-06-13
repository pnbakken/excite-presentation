"use client";

import { useEffect } from "react";
import style from "./index.style.module.scss";
import animateOnScroll from "../utility/animate-on-scroll";
import $ from "jquery";
import Link from "next/link";
export const AnswerPresentation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * `useEffect` hook for initiating animateOnScroll function on page load.
   * Uses jQuery to select all the elements with designated class and `hidden`, converts the collection into an array,
   * and then calls animateOnScroll on these elements if they exist.
   *
   * @effect
   * @callback
   * @listens {event} mount-event This effect runs on mount-event of the component.
   * @see animateOnScroll This effect calls animateOnScroll function.
   * @fires animateOnScroll This effect triggers animateOnScroll function.
   */
  useEffect(() => {
    const elements = $(".slide.hidden").toArray();
    console.log(elements);
    if (elements) {
      animateOnScroll(elements, true);
    }
  }, []);

  return (
    <div
      className={`${style.AnswerPresentation} flex-c align-center justify-center full-width full-height xl-component-width`}
    >
      {children}

      <div className="full-width">
        <Link href="/svar">Svaroversikt</Link>
      </div>
    </div>
  );
};

export const AnswerSlide = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${style.slide} ${style.AnswerSlide} ${className}`}>
      {children}
    </div>
  );
};

export const QuestionSlide = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${style.slide} ${style.QuestionSlide}`}>{children}</div>
  );
};

export const SlideTitle = ({ children }: { children: string }) => {
  return <h2 className={`${style.SlideTitle}`}>{children}</h2>;
};
