import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"],
    action = ["ate", "peed", "crushed", "broke"],
    what = ["my homework", "my phone", "the car"],
    when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

  function generateExcuse() {
    const whos = who[Math.floor(Math.random() * who.length)];
    const actions = action[Math.floor(Math.random() * action.length)];
    const whats = what[Math.floor(Math.random() * what.length)];
    const whens = when[Math.floor(Math.random() * when.length)];
git add .Math
    return `${whos} ${actions} ${whats} ${whens}.`;
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
