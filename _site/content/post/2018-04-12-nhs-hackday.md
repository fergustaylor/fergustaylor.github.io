---
title: NHS Hackday
author: Fergus Taylor
date: '2018-04-12'
slug: nhs-hackday
categories:
  - NHS Hackday
tags:
  - R
description: ''
header_image: /blogimages/NHShackday.png
---

<script>
function myFunction() {
var frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; i++) {
      frames[i].style.height=frames[i].contentDocument.body.scrollHeight +'px';
  }
}
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
</script>

<style>
iframe {
 width:100%;
}
</style>

Back in February I attended the 19th NHS Hack Day in Cardiff.
I had a great experience listening to the pitches, meeting new people involved in healthcare IT, and I joined onto a group looking at self-reported availabilty and capacity statuses for clinics taking NHS 111 referrals.

I was interested in plotting the catchment areas for each type of clinic.
Assuming that a call to NHS 111 would require a referal to one type of clinic specialising it the necessary service, could you plot each of these clinics across the UK and demonstrate useful information by plotting the catchment areas around each of that type of clinic?

It would be colour-coded to the status (green-amber-red) that clinic was currently reporting. 
Once a clinic reached capacity, it stops taking patients, and I wondered if removing it from the map, and looking at the impact on the newly expanded catchment areas around it would demonstrate any useful information over a time-lapse graphic.

I was looking at voronoi plots initially, which can be useful in concentrated, urban areas.
Although they have some clear limitations on a wider-scale.
The plots below neglect local geography such as rivers, irregular coastline, etc. They ignore travel-times as a reflection of road distance/speeds, etc. And they assume a perfect travel as the bird flies.

I've plotted voronois for each subtype of clinic that NHS 111 already listed, although I'd like to take this project further with a more sophisticated approach in future.
I've seen a lot of interesting projects on medical geography recently, in particular around access to services in rural areas around Scotland.

I'll continue to research the subject.

A more successful aspect of this project, an interesting snippet that I developed for the iframes in this post is also given below.

```
<script>
function myFunction() {
var frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; i++) {
      frames[i].style.height=frames[i].contentDocument.body.scrollHeight +'px';
  }
}
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
</script>

<style>
iframe {
 width:100%;
}
</style>
```

The initial plots themselves.

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/DEvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/EDvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/GPledUCCwEDvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/IUCCASvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/MIUvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/OOHvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/SpecEDvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/UUHvoronoi.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/WICvoronoi.html">
</iframe>

As points

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/DEpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/EDpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/GPledUCCwEDpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/IUCCASpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/MIUpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/OOHpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/SpecEDpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/UUHpoints.html">
</iframe>

<iframe src="https://fergustaylor.github.io/Dev/Hackday/points/WICpoints.html">
</iframe>