
d3.json("../images.json", function(classes) {
  
for (i = 0; i < classes.length; i++) { 
url1 = "../portfolio/"+classes[i].portfolio;
url2 = "../thumb/"+classes[i].thumb;

url3 = "../portfolio/"+classes[i].portfolio;
url4 = classes[i].portfolio;

example = document.createElement("article");
example.className = "6u 12u$(xsmall) work-item";

example2 = document.createElement("a");
example2.className = "image fit thumb";
example2.setAttribute("href", url1);

example3 = document.createElement("img");
example3.setAttribute("src", url2);

example4 = document.createElement("h3");
example5 = document.createElement("a");
example5.setAttribute("href", url3);
example5.appendChild(document.createTextNode(url4));
example4.appendChild(example5);

example2.appendChild(example3);
example.appendChild(example2);
example.appendChild(example4);

document.getElementById("two").appendChild(example);

}
});