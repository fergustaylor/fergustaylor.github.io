
d3.json("iframe.json", function(classes) {
  
for (i = 0; i < classes.length; i++) { 
url1 = "../gallery/iframes/"+classes[i].iframesource;
url2 = "../gallery/iframethumb/"+classes[i].iframethumb;

url3 = "../gallery/iframes/"+classes[i].iframesource;
url4 = classes[i].iframesource;

example = document.createElement("article");
example.className = "work-item";

example2 = document.createElement("a");
example2.className = "image fit thumb";
example2.setAttribute("href", url1);
//example2.setAttribute("data-poptrox", "iframe,600x400");
example2.setAttribute("data-poptrox", "iframe");

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

if(i % 2 == 0)
{
document.getElementById("threeeven").appendChild(example);
}
else
{
document.getElementById("threeodd").appendChild(example);
}

}
});