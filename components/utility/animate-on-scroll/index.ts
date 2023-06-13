/**
 * Get all elements with the target selector and add the class "show" when the element is in the viewport.
 * @param target array of html elements. Use document.querySelectorAll when providing this argument.
 * @param runOnce boolean. Removes "show" class when element is out of viewport, ensuring the element only animates once.
 * @param classIndicator string. Class to add to element when in viewport. Defaults to "show"
 */

function animateOnScroll(elements, runOnce, classIndicator = "show") {
  console.log("animateOnScroll");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classIndicator);
      } else {
        !runOnce && entry.target.classList.remove(classIndicator);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

export default animateOnScroll;

export function scrollProgress(target) {
  window.onscroll = () => {
    trackScrolling();
  };

  function trackScrolling() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    target.style.width = scrolled + "%";
  }
}
