## [**27/09/17 - openprescribingRplots**](https://fergustaylor.github.io/blog/post9)
--------------------------------------------------------------------------------------------

Experimenting with timelapse drawing in 'Procreate' the ios app; made the following for openprescribingR.

<iframe src="https://player.vimeo.com/video/231293393" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/231293393">openprescribingR</a> from <a href="https://vimeo.com/user44219931">Fergus Taylor</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

See the repository on [github.](https://github.com/fergustaylor/openprescribingR)

![openpres](https://fergustaylor.github.io/openprescribingR/Rplot.png)

And a couple I made afterwards after exploring geom_line/geom_ribbon properly.
Below is a geom_step of each practice spending in the CCG (median value = blue, the chosen clinic's spending = red).
The second is a geom_line version of the same data + dark geom_ribbon for the Q1-Q3, light geom_ribbon for the min-max of values. 

![openpres](https://fergustaylor.github.io/openprescribingR/Rplot01.png)

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

<style>
    iframe {
        width: 500px;
        height: 500px;
    }
</style>
<iframe src="https://fergustaylor.github.io/blogimages/gigraph.html">
</iframe>