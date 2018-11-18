---
title: Drug Interactions
author: Fergus Taylor
date: '2017-10-09'
slug: drug-interactions
categories:
  - BNF
tags: []
header_image: "/blogimages/abacavir.png"
---

<p>I was thinking about drug interactions the other day: the relevant, and/or dangerous interactions that can occure in patients with multiple comorbidities. And I realised then, how few of these interactions I’d learnt by-heart. If I’d wanted to check, I would have looked up a patient’s drugs up in the BNF individually.</p>
<p>To try to learn them, I want to visualise them - although I’ll likely never learn them all whilst new obscure drugs come out, or drug interactions are discovered over time.</p>
<p>As such - I’ve been trying to learn 2 new skills - webscraping to collect the data (in this first post), and the use of <a href="https://d3js.org">D3</a> to present it. D3 being one of the standards for web graphics, including many notable newspapers.</p>
<p>Luckily all the drug interactions are listed <a href="https://bnf.nice.org.uk/interaction/">online</a> through the BNF, so I can import and update all this information easily.</p>
<p>For example - Abacavir</p>
<p><img src="/blogimages/abacavir.png" alt="" style="width:100%;height:auto;"></p>
<pre class="r"><code>library(rvest)
library(magrittr)
library(stringr)
library(stringi)
library(tidyverse)</code></pre>
<p>Creating the drugs look-up.</p>
<pre class="r"><code>#Get a list of links to test
drugs_list &lt;- readLines(&quot;https://bnf.nice.org.uk/interaction/&quot;) %&gt;%
  str_match_all(&quot;&lt;a href=\&quot;(.*?)\&quot;&gt;&lt;span&gt;(.*?)&lt;/span&gt;&quot;) %&gt;%
  unlist() %&gt;%
  data.frame()

#Create a dataframe from it.
drugs_list &lt;-  drugs_list %&gt;%
  data.frame(cbind(observation = rep(1:(nrow(drugs_list)/3), each=3))) %&gt;%
  data.frame(cbind(class = c(&quot;String&quot;, &quot;Link&quot;, &quot;Title&quot;))) %&gt;%
  rename(value = &#39;.&#39;) %&gt;%
  spread(key=class, value=value)

#Remove non-drug links
drugs_list &lt;- drugs_list %&gt;%
  filter(stri_detect_fixed(drugs_list$Link, &quot;title=&quot;) == FALSE)

#Remove defunct columns
drugs_list &lt;- drugs_list %&gt;%
    select(-observation) %&gt;%
    select(-String)

#Remove some leftover tags
drugs_list$Title &lt;- str_replace(drugs_list$Title, &quot;&lt;sub&gt;&quot;, replacement = &quot;&quot;)
drugs_list$Title &lt;- str_replace(drugs_list$Title, &quot;&lt;/sub&gt;&quot;, replacement = &quot;&quot;)

#Add a string column
drugs_list &lt;- cbind(drugs_list,
                    string = str_replace(drugs_list$Link, &quot;.html&quot;, replacement = &quot;&quot;))

#Add CSS tag and URL columns
drugs_list &lt;- cbind(drugs_list,
                    url = str_c(&quot;https://bnf.nice.org.uk/interaction/&quot;,
                                drugs_list$string, &quot;.html&quot;))
drugs_list &lt;- cbind(drugs_list, css_string = str_c(&quot;#&quot;, drugs_list$string, &quot; .interactant span&quot;))

#Convert to character classes
drugs_list[] &lt;- lapply(drugs_list, as.character)</code></pre>
<pre><code>##               Link       Title      string
## 1  abacavir-2.html    Abacavir  abacavir-2
## 2 abatacept-2.html   Abatacept abatacept-2
## 3 abciximab-2.html   Abciximab abciximab-2
## 4 abiraterone.html Abiraterone abiraterone
## 5  acarbose-2.html    Acarbose  acarbose-2
##                                                    url
## 1  https://bnf.nice.org.uk/interaction/abacavir-2.html
## 2 https://bnf.nice.org.uk/interaction/abatacept-2.html
## 3 https://bnf.nice.org.uk/interaction/abciximab-2.html
## 4 https://bnf.nice.org.uk/interaction/abiraterone.html
## 5  https://bnf.nice.org.uk/interaction/acarbose-2.html
##                       css_string
## 1  #abacavir-2 .interactant span
## 2 #abatacept-2 .interactant span
## 3 #abciximab-2 .interactant span
## 4 #abiraterone .interactant span
## 5  #acarbose-2 .interactant span</code></pre>
<p>Constructing the interactions database.</p>
<pre class="r"><code>#Data
data &lt;- sapply(drugs_list$url, function(x)
               read_html(x) %&gt;%
               list())

#Title
example_dataframe &lt;- data.frame(Title = drugs_list$Title)

#Class
class &lt;- lapply(data,
                function(url){
                    url %&gt;%
                    html_nodes(css = &quot;.unstyled .interactant span&quot;) %&gt;%
                    html_text()
                })
example_dataframe &lt;- cbind(example_dataframe, data_frame(class))

#Dangerous Interactions
dangerousi &lt;- lapply(data,
                function(url){
                    url %&gt;%
                    html_nodes(css = &quot;.High .interactant span&quot;) %&gt;%
                    html_text()
                })
example_dataframe &lt;- cbind(example_dataframe, data_frame(dangerousi))

#Interactions
interactions &lt;- mapply(url = data, css = drugs_list$css_string,
                       function(url, css){
                          url %&gt;%
                          html_nodes(css) %&gt;%
                          html_text()
                        })
example_dataframe &lt;- cbind(example_dataframe, data_frame(interactions))

#Rename columns
example_dataframe &lt;-  example_dataframe %&gt;%
  rename(Class = &#39;class&#39;,
         &#39;Dangerous Interactions&#39; = &#39;dangerousi&#39;,
         Interactions = &#39;interactions&#39;)</code></pre>
<p>Currently zero (interactions/ dangerous interactions/ class) listing is represented by character(0). And individual drugs and general drug classes are listed together. The latter lists its drug within the ‘Class’ column.</p>
<p>E.g</p>
<pre><code>##         Title               Class
## 1    Abacavir          Antivirals
## 2   Abatacept
## 3   Abciximab
## 4 Abiraterone Hormone Antagonists
## 5    Acarbose       Antidiabetics
##                                                                                    Dangerous Interactions
## 1                                                                         Orlistat, Ribavirin, Tipranavir
## 2                                         Certolizumab pegol, Etanercept, Golimumab, Infliximab, Vaccines
## 3
## 4 Carbamazepine, Fosphenytoin, Phenobarbital, Phenytoin, Primidone, Rifabutin, Rifampicin, St John&#39;s Wort
## 5
##                                                                                                                                Interactions
## 1                                 Fosphenytoin, Methadone, Orlistat, Phenobarbital, Phenytoin, Primidone, Ribavirin, Rifampicin, Tipranavir
## 2                                                               Adalimumab, Certolizumab pegol, Etanercept, Golimumab, Infliximab, Vaccines
## 3
## 4 Carbamazepine, Dextromethorphan, Fosphenytoin, Phenobarbital, Phenytoin, Primidone, Rifabutin, Rifampicin, Spironolactone, St John&#39;s Wort
## 5                                                                                    Colestyramine, Digoxin, Neomycin, Orlistat, Pancreatin</code></pre>
<p><img src="/blogimages/BNFdataframe.png" alt="" style="width:100%;height:auto;"></p>
<p>I’ll add formal BNF classes next and try to apply this data to a D3 model, such as a circular Sankey diagram.</p>