---
title: Mix-Mode-Multiply
author: Fergus Taylor
date: '2018-05-25'
slug: mix-mode-multiply
categories:
  - BNF
tags: []
description: ''
header_image: /blogimages/multiply5.png
---

I recently saw the following tweet from [Mike Bostock](https://twitter.com/mbostock), creator of D3.js.

{{< tweet 999410594674442240 >}}

And I thought I'd try it out with my BNF interactions project to see how it might affect the intuitive feel of the graphics.
So it starts off below, with the top 100 drugs and their interactions plotted as lines between points on the edge of the circle.

<img src="/blogimages/multiply.png" alt="" style="width:100%;height:auto;">

I added one line of css which creates a colour change where lines overlap each other.

path {
  mix-blend-mode: multiply;
}

The lines darken.

<img src="/blogimages/multiply1.png" alt="" style="width:100%;height:auto;">

Does it distract a little from the severe interactions?

<img src="/blogimages/multiply2.png" alt="" style="width:100%;height:auto;">

Lets remove everything else.

<img src="/blogimages/multiply3.png" alt="" style="width:100%;height:auto;">

Done.

<img src="/blogimages/multiply5.png" alt="" style="width:100%;height:auto;">

<style>
iframe {
 width:100%;
}
</style>

<iframe id = "frame" src="https://fergustaylor.github.io/D3/d3-2multiply/" style="width:100%; height:500px">
</iframe>