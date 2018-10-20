---
title: UK Local Elections 2017
author: Fergus Taylor
date: '2018-05-25'
slug: uk-local-elections-2017
categories:
  - Dev
tags:
  - R
description: ''
header_image: /blogimages/party_points.png
---

Following a very interesting post I'd found on twitter by [Paul Campbell,](https://www.cultureofinsight.com/blog/2018/05/02/2018-04-08-multivariate-dot-density-maps-in-r-with-sf-ggplot2/) I was curious to try to recreate the plots involved myself.

<img src="/blogimages/party_points.png" alt="" style="width:100%;height:auto;">

Plotting a coloured point as a representation of 100 votes in each ward is interesting, it gives a surprising feel for the sense of party proportions in an area.
It doesn't give a sense of voter turnout vs population, but it does give a sense of scale to voting in areas.

I did wonder if the sense of geographic detail from each plot point, (the location within a ward is randomly generated), was misleading though.
For example, 100 plots below.

<img src="https://fergustaylor.github.io/Dev/Local%20Elections/party.gif" alt="" style="width:100%;height:auto;">

You can see the variation between each frame, however I was surprised I didn't notice more of a difference.
Perhaps just due to the scale of the individual points to the electoral ward it retained the same sense of voting proportions, as well as (although to a lesser-extent) geographic spread across parties.

This was an interesting plot to try out. I've been enjoying 'Guardian Visual' and other election coverage recently, especially in the run-up to this year's local elections, and it's given me a lot to think about.