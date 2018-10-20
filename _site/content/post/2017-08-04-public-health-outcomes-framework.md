---
title: Public Health Outcomes Framework
author: Fergus Taylor
date: '2017-08-04'
slug: public-health-outcomes-framework
categories:
 - Public Health
tags:
  - R
header_image: "/images/thumbs/03.jpg"
description: "Looking at the most recent update to Public Health England, ‘Public Health Outcomes’ August publication using the Fingertips data tool package."
---

I initially saw the notice of the August update via twitter
[@PHE_uk](https://twitter.com/PHE_uk), but I later found the full
future publication timeline available at
[gov.uk.](https://www.gov.uk/government/organisations/public-health-england/about/statistics)

{{< img src="https://fergustaylor.github.io/Public-Health-Outcomes-Framework/2.png" >}}

All their new statistics are summarised in their blog [Public Health
Matters](https://publichealthmatters.blog.gov.uk/), and the data is available
online with interactive plots through their [Fingertips
service.](https://fingertips.phe.org.uk/)

It summarises 33 different National Public Health Profiles, including
the most recent version of the Public Health Outcomes Framework.

While I was prepared to download information I wanted directly through
the site - I found their fantastic package tool
['fingertipsR'](https://github.com/PublicHealthEngland/fingertipsR)
which allows me to import PH data from all profiles directly into the R
environment through their API.

    #install.packages("devtools")
    #devtools::install_github("PublicHealthEngland/fingertipsR")
    library(fingertipsR)
    library(tidyverse)

The package is explained here.

    help("fingertipsR")

I chose to download the most recent PH Outcomes Framework, and then
inspect the data for Kent (filtering in England and the Subnational
Parent).

    PHOF <- fingertipsR::fingertips_data(ProfileID = 19)

    Kent <- PHOF %>%
      filter(AreaName=='Kent'|AreaName=='England'|AreaName=='South East region')

Inspecting it, I can see there are 169 seperate Indicator Names.

    unique(Kent$IndicatorName)

I've chosen to demonstrate the data for '0.1i - Healthy life expectancy
at birth'.

    Kent %>%
      filter(IndicatorID=='90362') %>%
      ggplot(aes(x=Timeperiod)) +
      geom_col(aes(y=Value, fill=Sex), position = "dodge") +
      geom_errorbar(aes(ymin = LowerCIlimit, ymax = UpperCIlimit, fill=Sex), width = 0.5, position = position_dodge(width = 0.9)) +
      geom_text(aes(label = signif(Value,3), y=Value, fill=Sex), vjust=5, position = position_dodge(width = 0.9), colour="white") +
      labs(y = "Healthy life expectancy at birth") +
      theme(legend.title=element_blank()) +
      theme(axis.title.x=element_blank()) +
      facet_grid(AreaName ~ .)

{{< img src="https://fergustaylor.github.io/Public-Health-Outcomes-Framework/Rplot.png" >}}

{{< img src="https://fergustaylor.github.io/Public-Health-Outcomes-Framework/output2.gif" >}}

This was an interesting way to explore Public Health England Data
through R. The next steps for me will be to explore new HTML widgets as
a way to convert R data into interactive plots.
