## [**13/09/17 - openprescribingR UPDATE**](https://fergustaylor.github.io/blog/post5)
--------------------------------------------------------------------------------------------

I wanted to plot some of this new openprescribing data geographically today after playing around with the new functions, however I soon realised I needed locations, and so I converted the 'CCG boundaries' section of the api.

## New Function

## 7. CCG boundaries
Search for the boundaries of a CCG, or location of a practice, by code. Returns GeoJSON.

| Output                    | Function      |
| --------------------------|:-------------:|
| Boundaries of all CCGs | CCG_boundaries_or_location() |
| Boundaries of an individual CCG | CCG_boundaries_or_location(CCG_code = "99H")|
| Location (approximate) of practices in a CCG, by code | CCG_boundaries_or_location(CCG_code = "99H")|
| Location (approximate) of a practice in a CCG | CCG_boundaries_or_location(CCG_code = "99H", practice_code = "P87003")|
| Location (approximate) of a practice in a CCG | CCG_boundaries_or_location(practice_code = "P87003")|

Personally I find it very difficult to read JSON files, so you can tidy it up afterwards using JSONlite or tidyjson but I'll leave that to you.

Plots to come..