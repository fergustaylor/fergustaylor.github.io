+++
banner = "banners/placeholder.png"
categories = [
  "Openprescribing"
]
date = "2017-09-25T13:39:46+02:00"
menu = ""
tags = []
title = "More examples for openprescribingR"
header_image = "/images/thumbs/08.jpg"
description = "New examples of openprescribingR use."
+++

This package works by interacting with the openprescribing.net api.
Openprescribing.net continues to collate monthly data from NHS digital,
which means that you can search the entire dataset without downloading
each monthly file. It uses limited search arguments to return data.
(This will be updated as the api changes). As such it's not possible to
return a desired dataset in some cases by using one function alone in
this package. However, it is possible to cross-reference functions in
order to return the dataset you'd like.

For example, I've added `location_function(CCG_Code, as_sf = TRUE)`
which combines `organisation_code()` with `CCG_boundaries_or_location`
to return a CCG boundary and all practice locations in that CGG.

CCG\_boundaries\_or\_location
-----------------------------

All organisations matching a code or name

    organisation_codes(organisation_code_or_name= "wish") %>%
      head(3)

    ##   ccg   code     id                                     name setting
    ## 1        08L    08L                         NHS LEWISHAM CCG      NA
    ## 2 NHT Y05547 Y05547 LEWISHAM AND GREENWICH COMM DERM SERVICE       9
    ## 3 09D G81083 G81083                        WISH PARK SURGERY       4
    ##               setting_name     type
    ## 1                               CCG
    ## 2 Community Health Service Practice
    ## 3              GP Practice Practice

    organisation_codes(organisation_code_or_name= "G81083") %>%
      head(3)

    ##   ccg   code     id              name setting setting_name     type
    ## 1 09D G81083 G81083 WISH PARK SURGERY       4  GP Practice Practice

Boundaries of all CCGs

    CCG_boundaries_or_location(as_sf = TRUE) %>%
      head(3)

    ## Simple feature collection with 3 features and 3 fields
    ## geometry type:  MULTIPOLYGON
    ## dimension:      XY
    ## bbox:           xmin: -2.367716 ymin: 50.70601 xmax: 0.9507036 ymax: 54.55835
    ## epsg (SRID):    4326
    ## proj4string:    +proj=longlat +datum=WGS84 +no_defs
    ##   ons_code                                        name org_type
    ## 1     <NA> NHS HAMBLETON, RICHMONDSHIRE AND WHITBY CCG      CCG
    ## 2     <NA>                           NHS MID ESSEX CCG      CCG
    ## 3     <NA>                      NHS WEST HAMPSHIRE CCG      CCG
    ##                         geometry
    ## 1 MULTIPOLYGON(((-0.502740936...
    ## 2 MULTIPOLYGON(((0.9500694371...
    ## 3 MULTIPOLYGON(((-0.929614449...

Boundaries of an individual CCG

    CCG_boundaries_or_location(CCG_code = "99H", as_sf = TRUE)

    ## Simple feature collection with 1 feature and 3 fields
    ## geometry type:  POLYGON
    ## dimension:      XY
    ## bbox:           xmin: -0.4457094 ymin: 51.10515 xmax: -0.1543538 ymax: 51.41195
    ## epsg (SRID):    4326
    ## proj4string:    +proj=longlat +datum=WGS84 +no_defs
    ##   ons_code                 name org_type                       geometry
    ## 1     <NA> NHS SURREY DOWNS CCG      CCG POLYGON((-0.155107510600155...

Location (approximate) of a practice, or practices in a CCG, by code

    CCG_boundaries_or_location(CCG_code = "99H", practice_code = "P87003", as_sf = TRUE) %>%
      head(3)

    ## Simple feature collection with 1 feature and 2 fields
    ## geometry type:  POINT
    ## dimension:      XY
    ## bbox:           xmin: -2.339619 ymin: 53.48488 xmax: -2.339619 ymax: 53.48488
    ## epsg (SRID):    4326
    ## proj4string:    +proj=longlat +datum=WGS84 +no_defs
    ##                            name setting                       geometry
    ## 1 4/ST ANDREWS MEDICAL PRACTICE       4 POINT(-2.33961911011315 53....

Location of all practices in a CCG, by code (+ CCG boundary)

    location_function(CCG_code = "99H", as_sf = TRUE) %>%
      head(3)

drug\_details
-------------

All BNF sections, chemicals and presentations matching a name
(case-insensitive)

    drug_details(name= "lipid") %>%
      head(3)

    ##            id is_generic                           name
    ## 1        2.12                    Lipid-Regulating Drugs
    ## 2   021200000              Other Lipid-Regulating Preps
    ## 3 0212000F0AA       True Colestyramine (Lipid Lowering)
    ##                        section        type
    ## 1                              BNF section
    ## 2 2.12: Lipid-Regulating Drugs    chemical
    ## 3                                  product

All chemicals and presentations matching a code =

    drug_details(chemical_section_or_presentation_code= "0212000AA") %>%
      head(3)

    ##            id is_generic                 name                      section
    ## 1   0212000AA            Rosuvastatin Calcium 2.12: Lipid-Regulating Drugs
    ## 2 0212000AABB      False              Crestor                             
    ## 3 0212000AAAA       True    Rosuvastatin Calc                             
    ##       type
    ## 1 chemical
    ## 2  product
    ## 3  product

All BNF sections matching a code

    drug_details(BNF_section= "2.4") %>%
      head(3)

    ##            id is_generic
    ## 1         2.4           
    ## 2 21010900763      False
    ## 3 21010900764      False
    ##                                                      name           type
    ## 1                        Beta-Adrenoceptor Blocking Drugs    BNF section
    ## 2 Apollo Pressure-Activated Safety Lancets 2.4mm/21 Gauge product format
    ## 3 Apollo Pressure-Activated Safety Lancets 2.4mm/23 Gauge product format

All BNF sections, chemicals and presentations exactly matching a name or
code =

    drug_details(exact_name_or_code = "21010900763")

    ##            id is_generic
    ## 1 21010900763      False
    ##                                                      name           type
    ## 1 Apollo Pressure-Activated Safety Lancets 2.4mm/21 Gauge product format

    drug_details(name="lipid&q=drug") %>%
      head(3)

    ##       id is_generic                                    name          type
    ## 1   10.1            Drugs Used In Rheumatic Diseases & Gout   BNF section
    ## 2 10.1.1              Non-Steroidal Anti-Inflammatory Drugs BNF paragraph
    ## 3 10.1.3                Rheumatic Disease Suppressant Drugs BNF paragraph

list\_size
----------

Total list size for all CCGs

    list_size() %>%
      head(3)

    ##         date row_id                row_name total_list_size
    ## 1 2012-07-01    00M      NHS SOUTH TEES CCG          289486
    ## 2 2012-07-01    07Y        NHS HOUNSLOW CCG          285362
    ## 3 2012-07-01    02G NHS WEST LANCASHIRE CCG          111135

Total list size by practice code, or CCG code

    list_size(list_size_by_code= "P87003") %>%
      head(3)

    ##         date row_id                      row_name total_list_size
    ## 1 2012-07-01 P87003 4/ST ANDREWS MEDICAL PRACTICE            3670
    ## 2 2012-08-01 P87003 4/ST ANDREWS MEDICAL PRACTICE            3670
    ## 3 2012-09-01 P87003 4/ST ANDREWS MEDICAL PRACTICE            3670

Total list size by practice code, or CCG code

    list_size(list_size_by_code= "99H") %>%
      head(3)

    ##         date row_id                 row_name total_list_size
    ## 1 2012-07-01 H81011              NORK CLINIC            6879
    ## 2 2012-07-01 H81016 FAIRFIELD MEDICAL CENTRE           10671
    ## 3 2012-07-01 H81017  ASHLEA MEDICAL PRACTICE           18024

ASTRO-PU cost and items for practices by practice code, or CCG code

    list_size(ASTRO_PU_by_code= "P87003") %>%
      head(3)

    ##   astro_pu_cost astro_pu_items       date row_id
    ## 1      12955.05       45917.64 2012-07-01 P87003
    ## 2      12955.05       45917.64 2012-08-01 P87003
    ## 3      12955.05       45917.64 2012-09-01 P87003
    ##                        row_name
    ## 1 4/ST ANDREWS MEDICAL PRACTICE
    ## 2 4/ST ANDREWS MEDICAL PRACTICE
    ## 3 4/ST ANDREWS MEDICAL PRACTICE

ASTRO-PU cost and items for practices by practice code, or CCG code

    list_size(ASTRO_PU_by_code= "99H") %>%
      head(3)

    ##   astro_pu_cost astro_pu_items       date row_id                 row_name
    ## 1      25122.58       91162.97 2012-07-01 H81011              NORK CLINIC
    ## 2      45485.01      169021.54 2012-07-01 H81016 FAIRFIELD MEDICAL CENTRE
    ## 3      68194.28      248983.28 2012-07-01 H81017  ASHLEA MEDICAL PRACTICE

organisation\_codes
-------------------

All organisations matching a code or name

    organisation_codes(organisation_code_or_name= "Beaumont") %>%
      head(3)

    ##   ccg   code     id                            name setting setting_name
    ## 1 10Q K84049 K84049              27 BEAUMONT STREET       4  GP Practice
    ## 2 10Q K84016 K84016      19 BEAUMONT STREET SURGERY       4  GP Practice
    ## 3 04C C82094 C82094 BEAUMONT LODGE MEDICAL PRACTICE       4  GP Practice
    ##       type
    ## 1 Practice
    ## 2 Practice
    ## 3 Practice

All CCGs matching a code or name

    organisation_codes(CCG_code_or_name= "Gloucester") %>%
      head(3)

    ##   code  id                          name type
    ## 1  11M 11M       NHS GLOUCESTERSHIRE CCG  CCG
    ## 2  12A 12A NHS SOUTH GLOUCESTERSHIRE CCG  CCG

All practices matching a code or name

    organisation_codes(practice_code_or_name= "Gloucester") %>%
      head(3)

    ##   ccg   code     id                                     name setting
    ## 1 11M L84052 L84052            GLOUCESTER CITY HEALTH CENTRE       4
    ## 2 07M E83650 E83650                  GLOUCESTER ROAD SURGERY       4
    ## 3     Y00224 Y00224 GLOUCESTERSHIRE HEART & DIABETES SERVICE      -1
    ##   setting_name     type
    ## 1  GP Practice Practice
    ## 2  GP Practice Practice
    ## 3      Unknown Practice

All organisations exactly matching a code or name

    organisation_codes(exact_name_or_code= "99H") %>%
      head(3)

    ##   code  id                 name type
    ## 1  99H 99H NHS SURREY DOWNS CCG  CCG

Or a variation of the above (with at least 1
organisation\_code\_or\_name, CCG\_code\_or\_name,
practice\_code\_or\_name, or exact\_name\_or\_code). N.B For now the use
of multiple terms in one category requires "&q="

    organisation_codes(organisation_code_or_name= "Beaumont&q=Gloucester") %>%
      head(3)

    ##   ccg   code     id                          name setting setting_name
    ## 1        11M    11M       NHS GLOUCESTERSHIRE CCG      NA             
    ## 2        12A    12A NHS SOUTH GLOUCESTERSHIRE CCG      NA             
    ## 3 11M L84052 L84052 GLOUCESTER CITY HEALTH CENTRE       4  GP Practice
    ##       type
    ## 1      CCG
    ## 2      CCG
    ## 3 Practice

spending\_by\_CCG
-----------------

    spending_by_CCG(chemical_section_or_presentation_code = "0212000AA") %>%
      head(3) 

    ##   actual_cost       date items quantity row_id
    ## 1     8726.12 2012-06-01   374    12411    00C
    ## 2    27737.51 2012-06-01  1376    40698    00D
    ## 3      456.76 2012-06-01    28      756    00F
    ##                                         row_name
    ## 1                             NHS DARLINGTON CCG
    ## 2 NHS DURHAM DALES, EASINGTON AND SEDGEFIELD CCG
    ## 3                              NHS GATESHEAD CCG

    spending_by_CCG(CCG_code = "03V") %>%
      head(3)

    ##   actual_cost       date  items quantity row_id      row_name
    ## 1    727695.8 2012-06-01 104783  7569723    03V NHS CORBY CCG
    ## 2    734693.3 2012-07-01 107555  7630021    03V NHS CORBY CCG
    ## 3    774393.8 2012-08-01 112204  8240186    03V NHS CORBY CCG

    spending_by_CCG(chemical_section_or_presentation_code = "0212000AA", CCG_code = "03V") %>%
      head(3)

    ##   actual_cost       date items quantity row_id      row_name
    ## 1     2725.07 2012-06-01   134     3780    03V NHS CORBY CCG
    ## 2     2891.62 2012-07-01   142     4046    03V NHS CORBY CCG
    ## 3     2395.14 2012-08-01   116     3299    03V NHS CORBY CCG

spending\_by\_code
------------------

    spending_by_code() %>%
      head(3)

    ##   actual_cost       date    items   quantity
    ## 1   609262986 2012-06-01 78609510 6579046471
    ## 2   637876694 2012-07-01 82129721 6840558698
    ## 3   645377536 2012-08-01 83505625 6958818448

    spending_by_code(BNF_code = "0212") %>%
      head(3)

    ##   actual_cost       date   items  quantity
    ## 1    23194338 2012-06-01 5159062 179587124
    ## 2    24127857 2012-07-01 5354064 184967386
    ## 3    21131928 2012-08-01 5576386 192317248

    spending_by_code(BNF_code = "0212000AA") %>%
      head(3)

    ##   actual_cost       date  items quantity
    ## 1     3786943 2012-06-01 162589  5611829
    ## 2     3816988 2012-07-01 164926  5644667
    ## 3     3894235 2012-08-01 168824  5759503

    spending_by_code(BNF_code = "0212000AABB") %>%
      head(3)

    ##   actual_cost       date items quantity
    ## 1    43547.31 2012-06-01  2071    67743
    ## 2    45812.47 2012-07-01  2189    71069
    ## 3    46900.04 2012-08-01  2227    72384

    spending_by_code(BNF_code = "2.4") %>%
      head(3)

    ##   actual_cost       date   items  quantity
    ## 1     5490697 2012-06-01 2592902 101530198
    ## 2     6007044 2012-07-01 2691100 104589395
    ## 3     6316624 2012-08-01 2808641 108976487

    spending_by_code(BNF_code = drug_details(BNF_section = "2.4")$id[1]) %>%
      head(3)

    ##   actual_cost       date   items  quantity
    ## 1     5490697 2012-06-01 2592902 101530198
    ## 2     6007044 2012-07-01 2691100 104589395
    ## 3     6316624 2012-08-01 2808641 108976487

    id <- drug_details(BNF_section = "2.4") %>%
      dplyr::filter(name=="Beta-Adrenoceptor Blocking Drugs") %>%
      dplyr::select(id)

    spending_by_code(BNF_code = id) %>%
      head(3)

    ##   actual_cost       date  items quantity
    ## 1     4255009 2012-06-01 321575   327894
    ## 2     4600409 2012-07-01 337109   344489
    ## 3     3643517 2012-08-01 268566   274154

spending\_by\_practice
----------------------

    spending_by_practice(BNF_section_code = "0212", date_code = "2015-04-01") %>%
      head(3)

    ##   actual_cost ccg       date items quantity row_id
    ## 1     1428.76 00K 2015-04-01   415    18693 A81001
    ## 2     7618.02 00K 2015-04-01  2240    91993 A81002
    ## 3     1127.80 00K 2015-04-01   587    16935 A81003
    ##                     row_name setting
    ## 1        THE DENSHAM SURGERY       4
    ## 2 QUEENS PARK MEDICAL CENTRE       4
    ## 3  VICTORIA MEDICAL PRACTICE       4

    spending_by_practice(chemical_code = "0212000AA", date_code = "2015-04-01") %>%
      head(3)

    ##   actual_cost ccg       date items quantity row_id
    ## 1      256.16 00K 2015-04-01     6      308 A81001
    ## 2     1591.17 00K 2015-04-01    62     2436 A81002
    ## 3       44.16 00K 2015-04-01     2       56 A81003
    ##                     row_name setting
    ## 1        THE DENSHAM SURGERY       4
    ## 2 QUEENS PARK MEDICAL CENTRE       4
    ## 3  VICTORIA MEDICAL PRACTICE       4

    spending_by_practice(practice_code = "H81068") %>%
      head(3)

    ##   actual_cost ccg       date items quantity row_id
    ## 1    124036.3 99H 2012-06-01 19639  1163331 H81068
    ## 2    124024.1 99H 2012-07-01 20671  1195135 H81068
    ## 3    134257.4 99H 2012-08-01 21865  1354045 H81068
    ##                     row_name setting
    ## 1 BROCKWOOD MEDICAL PRACTICE       4
    ## 2 BROCKWOOD MEDICAL PRACTICE       4
    ## 3 BROCKWOOD MEDICAL PRACTICE       4

    spending_by_practice(CCG_code = "03V") %>%
      head(3)

    ##   actual_cost ccg       date items quantity row_id             row_name
    ## 1   469772.91 03V 2012-06-01 65453  4682582 K83002  LAKESIDE HEALTHCARE
    ## 2   109605.96 03V 2012-06-01 16681  1261980 K83059 DR KHALID & PARTNERS
    ## 3    16817.56 03V 2012-06-01  3399   231437 K83607            DR SUMIRA
    ##   setting
    ## 1       4
    ## 2       4
    ## 3       4

Or a variation of the above (with at least 1 practice\_code, date\_code,
or CCG\_code). N.B A BNF section gives a prefix to the chemical, which
gives a prefix to the presentation/product format. e.g. "0212" are
lipid-regulating drugs, "0212000AA" is Rosuvastatin Calcium,
"0212000AAAAAAAA" is Rosuvastatin Calc\_Tab 10mg.
