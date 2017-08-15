## [**13/09/17 - openprescribingR UPDATE**](https://fergustaylor.github.io/blog/post5)
--------------------------------------------------------------------------------------------

<style>
    iframe {
        width: 500px;
        height: 500px;
    }
</style>
<iframe src="https://fergustaylor.github.io/post6map.html">
</iframe>

[See the map.](https://fergustaylor.github.io/post6map.html)

![Plotting geom_sf](https://fergustaylor.github.io/Rplot4.png)

![Plotting geom_sf](https://fergustaylor.github.io/output.gif)

Currently having some issues using 

`mutate(
    lon = map_dbl(geometry, ~st_centroid(.x)[[1]]),
    lat = map_dbl(geometry, ~st_centroid(.x)[[2]])
    )`
    
Which I'd ordinarily use to centre labels over each element.