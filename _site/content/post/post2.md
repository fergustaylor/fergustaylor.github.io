+++
banner = "banners/placeholder.png"
categories = [
  "Arran"
]
date = "2017-07-29T13:39:46+02:00"
menu = ""
tags = []
title = "Arran SIMD GIFs"
header_image = "/images/thumbs/02.jpg"
description = "Practice with GGanimate and GGmaps, as well as an animation of leaflet maps."
+++

{{< img src="https://fergustaylor.github.io/Arran/gif4.gif" >}}

Made another leaflet map in R to try out some of the chloropleth tutorials and to see if I could easily adapt the code I'd been using just for Arran, to show all of Scotland.
As it turned out I managed to write the code in 15 minutes. It then crashed immediately, and I had to leave the computer running all night in order to export it as HTML.

In the end it was 166 MB in the end, and I'll never be able to host it on Github.

But it was very pretty, so I made a GIF of Scotland through the years.

I experimented with GGanimate, which worked well for making GIFs from ggplot objects, however it was easier to make it using screenshots from the rendered html map in the end.

[See the code here.](https://fergustaylor.github.io/Arran/Map_Code.html#map4_arran_vs_scotland)

I did do some practice with my SIMD Percentile plots though for Arran alone; first using GGPlot, then overlaying onto GGMaps.

{{< img src="https://fergustaylor.github.io/Arran/output2.gif" >}}

{{< img src="https://fergustaylor.github.io/Arran/output3.gif" >}}

[See the code here.](https://fergustaylor.github.io/Arran/GGAnimate.html#creating_animated_maps)