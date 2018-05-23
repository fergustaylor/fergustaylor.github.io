
d3.json("../portfolio.json", function(classes) {
  
for (i = 0; i < classes.length; i++) { 
url = "../portfolio/"+classes[i];

example = document.createElement("article");
example.className = "6u 12u$(xsmall) work-item";

example2 = document.createElement("a");
example2.className = "image fit thumb";
example2.setAttribute("href", url);

example3 = document.createElement("img");
example3.setAttribute("src", url);

example2.appendChild(example3);
example.appendChild(example2);

document.getElementById("two").appendChild(example);

}
});