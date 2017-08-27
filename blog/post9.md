## [**27/09/17 - openprescribingRplots**](https://fergustaylor.github.io/blog/post9)
--------------------------------------------------------------------------------------------

```{r, message=FALSE, warning=FALSE}
#install.packages("ggiraph")
library(openprescribingR)
library(tidyverse)
library(ggiraph)
library(sf)
library(stringr)
```

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

<style>
    iframe {
        width: 500px;
        height: 500px;
    }
</style>
<iframe src="https://fergustaylor.github.io/blogimages/gigraph.html">
</iframe>