## [**11/09/17 - openprescribingR**](https://fergustaylor.github.io/blog/post4)
--------------------------------------------------------------------------------------------

Using the (beta) RESTful API and a few lines of R, I made a set of functions to download and import OpenPrescribing data directly into RStudio.
There are 6 functions, divided into data look-up and data-import tools.

Installation:

`library(devtools)`

`devtools::install_github("fergustaylor/openprescribingR")`

Load:

`library(openprescribingR)`

__These functions give details on drugs/organisations/list sizes.__

 *  drug_details()

 *  organisation_codes()
 
 *  list_size()

__These functions allow you to load data.__

 *  spending_by_CCG()

 *  spending_by_code()

 *  spending_by_practice()

CCG Boundraries are unavailable for now
__UPDATE 13/08/17:__  CCG Boundaries/Practice locations have been added. Read here [post4.](https://fergustaylor.github.io/blog/post4)

# Spending
Retrieve total spending and items by CCG or practice on a particular chemical, presentation or BNF section. (Spending is calculated using the actual_cost field in the HSCIC data, items using the total_items field.)

## 1. Spending by code
Queries from August 2010 to date and returns total spending and items by month

| Output                    | Function      |
| --------------------------|:-------------:|
| Total prescribing spending by month | spending_by_code() |
| Total by BNF code by month |spending_by_code(BNF_code = "...")|

## 2. Spending by CCG
Queries from April 2013 to date and returns spending and items by CCG by month.

| Output                    | Function      |
| --------------------------|:-------------:|
| Spending by CCG on a chemical | spending_by_CCG(chemical_code = "...")|
| Individual CCGs by code (+/- on a chemical) |spending_by_CCG(CCG_code = "...")|

## 3. Spending by practice
Queries from August 2010 to date and returns total spending and items by practice by month.
You must specify either an organisation, or a date.

| Output                    | Function      |
| --------------------------|:-------------:|
| Spending by all practices on a BNF section | spending_by_practice(BNF_section_code = "...")|
| Spending by all practices on a chemical |spending_by_practice(chemical_code = "...")
| Spending by all practices on a presentation | spending_by_practice(presentation_code = "...")|
| Spending by an individual practice | spending_by_practice(practice_code = "...")|
| Spending by all practices in a CCG | spending_by_practice(CCG_code = "...")|

Or a variation of the above (with at least 1 practice_code, date_code, or CCG_code).

# Information
Methods to retrieve information about CCGs, practices, and BNF codes.

## 4. Drug Details
Search for the official name and code of BNF sections, chemicals and presentations.

| Output                    | Function      |
| --------------------------|:-------------:|
| All BNF sections, chemicals and presentations matching a name (case-insensitive) | drug_details(name= "...")|
| All chemicals and presentations matching a code |drug_details(chemical_or_presentation_code= "...")|
| All BNF sections matching a code | drug_details(BNF_section_code= "...")|
| All BNF sections, chemicals and presentations exactly matching a name or code | drug_details(exact_name_or_code= "...")|

Or a variation of the above (with at least 1 name, chemical_or_presentation_code, BNF_section_code, or exact_name_or_code).
N.B For now the use of multiple terms in one category requires "&q=", e.g 
drug_details(name="lipid&q=drug")

## 5. Organisation Codes
Search for details about a CCG or practice by code or name.

| Output                    | Function      |
| --------------------------|:-------------:|
| All organisations matching a code or name | organisation_codes(organisation_code_or_name= "...")   |
| All CCGs matching a code or name |organisation_codes(CCG_code_or_name= "...")|
| All practices matching a code or name | list_size(ASTRO_PU_by_code= "...")|
| All organisations exactly matching a code or name | organisation_codes(exact_name_or_code= "...")|

Or a variation of the above (with at least 1 organisation_code_or_name, CCG_code_or_name, practice_code_or_name, or exact_name_or_code).
N.B For now the use of multiple terms in one category requires "&q=", e.g 
organisation_codes(organisation_code_or_name= "Beaumont&q=Gloucester")

## 6. List size and ASTRO_PUs by CCG or practice
Search for details about a CCG or practice by code or name. Returns values for all months available.

| Output                    | Function      |
| --------------------------|:-------------:|
| Total list size for all CCGs | list_size()   |
| Total list size for all practices by practice code, or CCG code | list_size(list_size_by_code= "...")|
| ASTRO-PU cost and items for practices by practice code, or CCG code | list_size(ASTRO_PU_by_code= "...")|

Or a variation of the above.

THe only thing I haven't sorted is the CCG Boundaries, "Search for the boundaries of a CCG, or location of a practice, by code. Returns GeoJSON."
You could still download it onto your desktop directly from the API, but I think that doing this in-studio makes it much easier to update the information.
__UPDATE 13/08/17:__  CCG Boundaries/Practice locations have been added. Read here [post4.](https://fergustaylor.github.io/blog/post4)

Further explanation on the terms used here - [https://openprescribing.net/api/](https://openprescribing.net/api/)

Essential reading [https://openprescribing.net/caution/](https://openprescribing.net/caution/)

[https://openprescribing.net/](https://openprescribing.net/)

<iframe width="500" height="282" src="https://www.youtube.com/embed/U-hvuEfUUOM" frameborder="0" allowfullscreen></iframe>
