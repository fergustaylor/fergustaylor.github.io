## [**15/09/17 - openprescribingR UPDATE**](https://fergustaylor.github.io/blog/post6)
--------------------------------------------------------------------------------------------

![Clinic Map](https://fergustaylor.github.io/blogimages/Rplot5.png)

[See the map.](https://fergustaylor.github.io/blogimages/post6map.html)

[See the code.](https://fergustaylor.github.io/openprescribingR/dev/clinics.html)

![Plotting geom_sf](https://fergustaylor.github.io/blogimages/Rplot4.png)

![Plotting geom_sf](https://fergustaylor.github.io/blogimages/output.gif)

Currently having some issues using 

`mutate(
    lon = map_dbl(geometry, ~st_centroid(.x)[[1]]),
    lat = map_dbl(geometry, ~st_centroid(.x)[[2]])
    )`
    
Which I'd ordinarily use to centre annotations over each CCG.