---
title: openprescribingR Plots2
author: Fergus Taylor
date: '2017-09-27'
slug: openprescribingR-Plots2
categories:
  - Openprescribing
tags:
  - R
header_image: /images/thumbs/09.jpg
description: "New openprescribingR plots and intro video."
---

Experimenting with timelapse drawing in 'Procreate' the ios app; made the following for openprescribingR.

{{< vimeo 231293393 >}}

See the code used in this example [here.](fergustaylor.github.io/openprescribingR/dev/examplescript)

See the repository on [github.](https://github.com/fergustaylor/openprescribingR)

{{< img src="https://fergustaylor.github.io/blogimages/Rplot6.png" >}}

{{< img src="https://fergustaylor.github.io/blogimages/Rplot7.png" >}}

And a couple I made afterwards after exploring geom_line/geom_ribbon properly.

Below is a geom_step of each practice spending in the CCG (median value = blue, the chosen clinic's spending = red).
The second is a geom_line version of the same data + dark geom_ribbon for the Q1-Q3, light geom_ribbon for the min-max of values.

{{< img src="https://fergustaylor.github.io/openprescribingR/Rplot01.png" >}}

I've also been trying out [ggiraph](https://davidgohel.github.io/ggiraph/index.html) recently, which seems promising but I'll need to learn more javascript to take full advantage of it and create fully interactive graphs.

```{r}
westkent <- location_function("99J", as_sf = TRUE)
westkent <- westkent %>%
  mutate(
    lon = map_dbl(geometry, ~st_centroid(.x)[[1]]),
    lat = map_dbl(geometry, ~st_centroid(.x)[[2]])
    )
westkent$name <- str_replace_all(westkent$name, "'", " ")

gg_point =  ggplot() +
  geom_sf(data = westkent[1,]) +
  geom_point_interactive(data = westkent[2:86,],
                         aes(x = lon, y = lat, tooltip = name)) +
  coord_sf(crs= 4326, datum = sf::st_crs(4326))
ggiraph(code = {print(gg_point)})
```

<iframe src="https://fergustaylor.github.io/blogimages/gigraph.html" width="100%" height="700px">
</iframe>
