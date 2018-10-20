---
title: openprescribingR UPDATE
author: Fergus Taylor
date: '2017-09-13'
slug: openprescribingR-UPDATE
categories:
  - Openprescribing
tags:
  - R
header_image: /images/thumbs/05.jpg
description: "I created a new function for my package openprescribingR, which lets you search for the boundaries of a CCG, or location of a practice, by code. Returns GeoJSON."
---

I wanted to plot some of this new openprescribing data geographically today after playing around with the new functions, however I soon realised I needed locations, and so I converted the 'CCG boundaries' section of the api.

## New Function

## 7. CCG boundaries
Search for the boundaries of a CCG, or location of a practice, by code. Returns GeoJSON.

| Output                    | Function      |
| --------------------------|:-------------:|
| Boundaries of all CCGs | CCG_boundaries_or_location() |
| Boundaries of an individual CCG | CCG_boundaries_or_location(CCG_code = "99H")|
| Location (approximate) of practices in a CCG, by code | CCG_boundaries_or_location(CCG_code = "99H")|
| Location (approximate) of a practice in a CCG | CCG_boundaries_or_location(CCG_code = "99H", practice_code = "P87003")|
| Location (approximate) of a practice in a CCG | CCG_boundaries_or_location(practice_code = "P87003")|

Personally I find it very difficult to read JSON files, so you can tidy it up afterwards using JSONlite or tidyjson but I'll leave that to you.

Plots to come..

__UPDATE 12:40:__

Managed to import/plot using GeoJSON, but since I'm not particularly familiar with the format I used the api address..

`st_read("https://openprescribing.net/api/1.0/org_location/?org_type=ccg") %>%
st_as_sf()`

To create a simple features collection, which made things much easier.

<iframe src="https://fergustaylor.github.io/blogimages/post5map.html" width="100%" height="600px">
</iframe>

[See the map.](https://fergustaylor.github.io/blogimages/post5map.html)

{{< img src="https://fergustaylor.github.io/blogimages/Rplot4.png" >}}
