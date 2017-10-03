+++
banner = "banners/placeholder.png"
categories = ["Fergus"]
date = "2017-09-22T13:39:46+02:00"
menu = ""
tags = []
title = "openprescribingR Plots"
+++

Made a new package to return a set of default plots based on my openprescribingR import tool.

Currently returns a leaflet map showing; 

* spending per person
* total spending
* total no. of items
* total quantity of items
* quantity per item
* listsizes

.. for each CCG, for each month this year.

This can be for any BNF section, chemical, or presentation.

[See the repository.](https://github.com/fergustaylor/openprescribingRplots)

```{r}
library(devtools)
devtools::install_github("fergustaylor/openprescribingRplots")
library(openprescribingRplots)

plot2017perperson("7.4.5")
plot2017total("7.4.5")
plot2017items("7.4.5")
plot2017quantity("7.4.5")
plot2017quantityperitems("7.4.5")
plot2017listsize()
```

See below for plot2017perperson("7.4.5")

<iframe src="https://fergustaylor.github.io/blogimages/post7map" width="100%" height="500px" >
</iframe>

[See the map.](https://fergustaylor.github.io/blogimages/post7map)
