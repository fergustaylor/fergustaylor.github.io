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

<style>
twitterwidget#twitter-widget-0 {
    margin-right: auto;
    margin-left: auto;
}
</style>

{{< tweet 999410594674442240 >}}

<br>

I thought I'd try it out with my BNF interactions project to see how it might affect the intuitive feel of the graphics. Ideally, any emphasis drawn to the overlapping lines would highlight the drugs which have more interactions with the others.

It starts off below, with the top 100 drugs and their interactions plotted as lines between points on the edge of the circle.

<img src="/blogimages/multiply.png" alt="" style="width:100%;height:auto;">

I added one line of css which creates a colour change where lines overlap each other.

```
path {
  mix-blend-mode: multiply;
}
```

The lines darken at points where the lines converge. I'm not convinced it works at highlighting particular drugs themselves, given that lots of lines converge at the middle, however it does add a feeling of quantity around some of the names.

<img src="/blogimages/multiply1.png" alt="" style="width:100%;height:auto;">

I've highlighted the 'severe', BNF-graded interactions. 
These are a particular set of drugs I'm interested to know more about, do particular drugs or classes have more numerous severe interactions associated with them?
But the rest of the interactions, coloured in blue, distracts a little.

<img src="/blogimages/multiply2.png" alt="" style="width:100%;height:auto;">

Lets remove everything else.

<img src="/blogimages/multiply3.png" alt="" style="width:100%;height:auto;">

It is interesting to see the plot with the 'mix-blend-mode: multiply' option on.
You can compare it by opening the 'inspect' panel on chrome and unticking the css option in the console, or as an image [here.](../blogimages/multiplycompared.png)
In my mind there is still some of that feeling of quantity given by the visual appearance of the line quantity already, but the colour change does still emphasise that again.

<img src="/blogimages/multiply5.png" alt="" style="width:100%;height:auto;">

The interactive version is given below, you can try the full-sized version [here.](https://fergustaylor.github.io/D3/d3-2multiply/)

<iframe id = "frame" src="https://fergustaylor.github.io/D3/d3-2multiply/" style="width:100%; height:500px">
</iframe>
