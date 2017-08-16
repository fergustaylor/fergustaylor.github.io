## [**15/09/17 - openprescribingR UPDATE**](https://fergustaylor.github.io/blog/post6)
--------------------------------------------------------------------------------------------

![Clinic Map](https://fergustaylor.github.io/Rplot5.png)

[See the map.](https://fergustaylor.github.io/post6map.html)

![Plotting geom_sf](https://fergustaylor.github.io/Rplot4.png)

![Plotting geom_sf](https://fergustaylor.github.io/output.gif)

Currently having some issues using 

`mutate(
    lon = map_dbl(geometry, ~st_centroid(.x)[[1]]),
    lat = map_dbl(geometry, ~st_centroid(.x)[[2]])
    )`
    
Which I'd ordinarily use to centre labels over each element.