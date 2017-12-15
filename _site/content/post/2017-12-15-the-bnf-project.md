---
title: The BNF Project
author: Fergus Taylor
date: '2017-12-15'
slug: the-bnf-project
categories:
  - BNF
tags: []
header_image: "/blogimages/bnfsection3.png"
---

I eventually learnt how to convert the BNF interactions into a JSON format compatible for the MBostock [example](https://mbostock.github.io/d3/talk/20111116/bundle.html) of a tensionable hierachical edge bundling diagram.

See the interactive version [here.](https://fergustaylor.github.io/D3/d3-1.html)

<p><img src="/blogimages/tensionablegraph.png" alt="" style="width:100%;height:auto;"> <a href="/blogimages/tensionablegraph.png"></a></p>

First every drug, then I reduced it to the 100 most common medications (arbritrarily taken from [an article](https://nursingnotes.co.uk/the-100-most-common-medications-in-uk-hospitals/)).

<p><img src="/blogimages/tensionablegraph.png" alt="" style="width:100%;height:auto;"> <a href="/blogimages/tensionablegraph.png"></a></p>

See the interactive version [here.](https://fergustaylor.github.io/D3/d3-2.html)
Whilst the adjacency relationships (drug-drug interaction) work, the drugs aren't grouped by class yet and so increased bundling doesn't reveal anything useful.

Next steps 
- grouping drugs (by class/BNF section)
- adding a sidebar to list drug interaction information
- adding a searchbar for searching within all drugs
- modifying an existing diagram to add new drugs 


