---
title: OpenprescribingR Plots Updated
author: Fergus Taylor
date: '2018-03-27'
slug: openprescribingr-plots-updated
categories:
  - Openprescribing
tags: []
description: 'Updated some older HTML Widgets using GGigraph and Deldir'
header_image: /blogimages/BNFvoronoi.png
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

I’ve been looking back at [HTML widgets](https://www.htmlwidgets.org/) again this week, having learnt a little more recently about the underline technologies, both D3 and R.

One of these widgets, an R package called [‘ggiraph’](https://davidgohel.github.io/ggiraph/reference/index.html), was something I’d used in an [earlier post]( .... ) to add interactive features to static ggplots. (Based on [openprescribingR data](https://github.com/fergustaylor/openprescribingR)).

I’d originally just ggiraph as a way to add tooltips, but coming back to it with a new set of experiences allowed me to understand more about how you can use it to apply CSS changes, trigger JS code, and even work server-side as part of a Shiny application.

Unfortunately it doesn't quite support geom_sf, so my plots aren't exact copies. But it was helpful as a tool to experiment a little more with voronoi plots.
I got a little creative with it, plotting geom_point_interactive with tooltips over the top of lines for example. Or voronoi polygons to create a catchment area around a point, an idea I got from this excellent [block](https://bl.ocks.org/mbostock/8033015). 

A few difficulties/limitations I've noticed;
- Geom_line_interactive only allows one tooltip per line (perfect for naming it, but I was hoping to note a range of values as you moved along the axis).
-Geom objects can't work together conventionally, i.e polygon with ID 7 can't trigger CSS changes in point with same ID. Although some creative JS triggers can create the same effect.

CCGs plotted as geom_polygon_interactive with CCG names as tooltips

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot1.html">
</iframe>

CCGs with prescribing centres overlaid as points

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot2.html">
</iframe>

CCGs with fill colour scaled according to cost per person on 'BNF Section 7.4.5' Drugs, May 2017

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot5.html">
</iframe>

Prescribing centres plotted as points, used to generate voronoi polygons plotted as geom_polygon_interactive, with prescribing centre names as tooltips

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot6.html">
</iframe>

Prescribing centres in NHS West Kent CCG plotted as points, used to generate voronoi polygons within the CCG.

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot7.5.html">
</iframe>

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot8.5.html">
</iframe>

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot10.html">
</iframe>

I did also make a voronoi plot using the centre of each CCG, just to see what it would look like. But It's not an appropriate way to visualise CCG data, bearing in mind the difficulties of using voronoi plots. For example, each of the CCGs around Hull. [See the map.](https://fergustaylor.github.io/openprescribingR/dev/plot11compared.html)

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot12.html">
</iframe>

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot12.5.html">
</iframe>

<iframe src="https://fergustaylor.github.io/openprescribingR/dev/plot12.5.5.html">
</iframe>

Now that I’m happier working in D3, I'll consider creating my own widgets at some point.

1. https://www.htmlwidgets.org/develop_intro.html
1. https://cran.r-project.org/web/packages/ggiraph/index.html

