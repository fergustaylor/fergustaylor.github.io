---
title: Google Custom Search
author: Fergus Taylor
date: '2018-05-25'
slug: google-custom-search
categories:
  - Dev
tags: []
description: ''
header_image: /blogimages/cse.png
---

I've created a tool for searching medical resources, [here.](https://fergustaylor.github.io/Dev/Search/)


<div style="width:100%;height:0;padding-bottom:63%;position:relative;"><iframe src="https://giphy.com/embed/3kD264S0WiNXIZoIJ1" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>


A while ago I was wondering about creating a tool to help me pool together the different resources I use for both revision, and case portfolios for my University work.
I tend to do a lot of background research using a small pool of websites that are well-regarded for the fundamentals. SIGN/NICE guidelines, Clinical Knowledge Summaries, the BNF for example.

There's a bit of overlap between them, and as such, when I'm looking up information on something I'll tend to search for the same thing on each site individually, then compare what I could find between them.
This sort of work, as it turns out is perfect for [Google Custom Search](https://cse.google.co.uk/), which allows me to create search bars on particular sites.
I've created a seach bar based on the websites I'd check, with 'refinements' used to group individual site results into tabs.
This means I can submit a particular search request, then flick through the sites individually to see what they cover. An unexpected benefit of this is the specificity of the autosuggest that comes from it.

It's hosted without sidebar [here.](https://fergustaylor.github.io/Dev/Search/example.html) 

There's some further room for customisation, for example it has google images options, which I may specify for for Radiopaedia.
I may end up changing the sites it uses over time, but I think for a particular set of repetitive tasks like researching case portfolios, this will be useful enough over time.

Unfortunately the ads are a little intrusive, however Google CSE does offer some option to remove them for charitable projects.

The most difficult part of it ending up being the dynamic iframe to put it in. 
(Given that autosuggest changes the necessary height.)

<p style="border-bottom:1px solid #e1e8ed;"></p>

I've built this under a new repository, ['Dev'](https://fergustaylor.github.io/Dev/) for each of the smaller bits and pieces that don't quite warrant their own.