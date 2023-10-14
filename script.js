var getID = document.getElementById("id01"); // pegar por id
var getTag = document.getElementsByTagName("p"); // pegar pela Tag
var getClassName = document.getElementsByClassName("intro"); // pela pela classe
var querySelect = document.querySelectorAll("p.intro"); // pelo query selector

// Set Text Content
var getOptionA = document.getElementById("optionA");
getOptionA.textContent = "O texto do parágrafo id01 é: " + getID.innerHTML;

var getOptionB = document.getElementById("optionB");
getOptionB.textContent =
  "O texto do parágrafo de tag p é: " + getTag[2].innerHTML;

var getOptionC = document.getElementById("optionC");
getOptionC.textContent =
  "O texto do parágrafo de Class name é: " + getClassName[0].innerHTML;

var getOptionD = document.getElementById("optionD");
getOptionD.textContent =
  "O texto do parágrafo com tag e classe é: " + querySelect[0].innerHTML;

// set html content
document.getElementById("setHtmlContent").innerHTML =
  "<p>Estou usando o Set html!</p>";

// Get Text Content
var getText = document.getElementById("id01").textContent;
document.getElementById("textContent").innerHTML = getText;

// Get HTML Content
var getHtml = document.getElementById("id01").innerHTML;
document.getElementById("htmlContent").innerHTML = getHtml;

// Get Parent Content
document.getElementById("parentContent").innerHTML =
  document.getElementById("id01").parentNode.nodeName;

// Show / Hide
document.getElementById("showP").style.display = "";
document.getElementById("hideP").style.display = "none";

// CSS
document.getElementById("css").style.fontSize = "12px";
document.getElementById("css").style.color = "red";
document.getElementById("css").style["text-decoration"] = "underline";
document.getElementById("css").style["text-transform"] = "uppercase";
document.getElementById("css").style["text-align"] = "center";

// Remove
document.getElementById("rowB").remove();
