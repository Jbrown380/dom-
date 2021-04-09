var main = document.querySelector(main)

var joke1 = "Why is Peter Pan always flying? He neverlands";
var joke2 = "I'm so good at sleeping. I can do it with my eyes closed";
var joke3 = "My boss told me to have a good day.. so I went home";

var template =`
  <h2>My Jokes</h2>
  <ul>
  <li>${joke1}</li>
  <li>${joke2}</li>
  <li>${joke3}</li>
  </ul>
`
main.innerHTML = template;
var p = document.createElement(p) 
var p = "That's all folks!"
document.getElementById(body).appendChild(p);