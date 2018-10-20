---
title: The BNF Project
author: Fergus Taylor
date: '2017-12-15'
slug: the-bnf-project
categories:
  - BNF
tags: []
header_image: /blogimages/tensionablegraph.png
---

I eventually learnt how to convert the BNF interactions into a JSON format compatible for the MBostock [example](https://mbostock.github.io/d3/talk/20111116/bundle.html) of a tensionable hierachical edge bundling diagram.

See the interactive version [here.](https://fergustaylor.github.io/D3/d3-1.html)

<p><img src="https://fergustaylor.github.io/blogimages/d3tension.png" alt="" style="width:100%;height:auto;"> <a href="https://fergustaylor.github.io/blogimages/d3tension.png"></a></p>

First every drug, then I reduced it to the 100 most common medications (arbritrarily taken from [an article](https://nursingnotes.co.uk/the-100-most-common-medications-in-uk-hospitals/)).

<p><img src="https://fergustaylor.github.io/blogimages/tensionablegraph.png" alt="" style="width:100%;height:auto;"> <a href="https://fergustaylor.github.io/blogimages/tensionablegraph.png"></a></p>

See the interactive version [here.](https://fergustaylor.github.io/D3/d3-2.html)
Whilst the adjacency relationships (drug-drug interaction) work, the drugs aren't grouped by class yet and so increased bundling doesn't reveal anything useful.

__Next steps__

- grouping drugs (by class/BNF section)

- adding a sidebar to list drug interaction information

- adding a searchbar for searching within all drugs

- modifying an existing diagram to add new drugs 

I've been trying to think a bit more about how I'd idealise this problem, and I think I'd like to focus on this;

A searchbar (or initial 100 most common drugs, diagram) wherein you can search for a particular drug to amend/build an interactions diagram from.

You could then see all interactions for this drug in the sidebar, and you could choose to add all of a particular class of drugs to see which of these drugs your choice interacts with.
(Or alternatively add the rest of your desired drug's class, to consider other alternatives.)

For example, you're contemplating a patient with an antihpertensive and you'd like to now add some diabetes medicine. You could see both drug classes together and where the interactions lie between them. Or you could start with the antihypertensive you want, and then show yourself all the potential diabetes meds to choose from.

I imagine this idea may change as I try to find the most useful version of this graph.

