window.addEventListener("DOMContentLoaded", () => {
  const animateCounter = (selector, speed, format = (v) => v + "%") => {
    const el = document.getElementById(selector);
    if (!el) return;

    const target = +el.getAttribute("data-value");
    let current = 0;

    const update = () => {
      if (current < target) {
        current++;
        el.textContent = format(current);
        setTimeout(update, speed);
      } else {
        el.textContent = format(target);
      }
    };

    update();
  };

  animateCounter("counter-first", 60);
  animateCounter("counter-second", 60); 
  animateCounter("counter-third", 10, (v) => "$" + v + "B+");
});