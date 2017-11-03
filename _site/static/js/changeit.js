var totalCount = 8;
var num = Math.ceil( Math.random() * totalCount );
document.getElementById("header").style.backgroundImage = "url(/images/bg-"+num+".jpg)";

// media query event handler
if (matchMedia) {
  const mq = window.matchMedia("(max-width: 980px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is less than 980px
    document.getElementById("footer").style.backgroundImage = "url(/images/bg-"+num+".jpg)";
  } else {
    // window width is more than 980px
    document.getElementById("footer").style.backgroundImage = "none";
  }
}