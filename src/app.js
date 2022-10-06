/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "this"];
  let adj = ["great", "big", "grand"];
  let noun = ["jogger", "racoon", "doctor", "school"];
  let extension_end = [".net", ".com", ".UK"];
  let pronounEntry = pronoun[Math.floor(Math.random() * 3)];
  let adjEntry = adj[Math.floor(Math.random() * 3)];
  let nounEntry = noun[Math.floor(Math.random() * 4)];
  let extension_endEntry = extension_end[Math.floor(Math.random() * 3)];

  let DomainGenerated =
    pronounEntry + adjEntry + nounEntry + extension_endEntry;

  document.getElementById("domainGenerated").innerText = DomainGenerated;
};
