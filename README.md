# Project REST-Rant
## *Welcome Everyone*

REST-Rant is an app where users can review restaurants.

CSS Framework - Bootstrap
Stack, Express, node.js
Server-side Rendering JSX

# Routes

| Method    | Path                      |Purpose |
| --------  | --------------------------|--------|
|GET        | /                           | Home Page|
|Get        | /places                     | Places index page|
|POST       | /places                     | Create new place|
|GET        | /places/new                | Form page for creating a new place|
|GET        | /places/:id                 | Details about a particular place | 
|PUT        | /places/:id                 | Update a particular place|
|GET        | /places/:id/edit            | Form page for editing an existing place|
|DELETE     | /places/:id                 | Delete a particular place|
|POST       | /places/:id/rant            | Create a rant(comment) about a particular place |
|DELETE     | /places/:id/rant/:rantId    | Delete a rant(comment) about a particular place|
|GET        | *                           | 404 page (matches any route not defined about)|

# Data
**places**

|Field | Type |
|-----|----------|
|id     | Object id|
|name   | String|
|city   |  String|
|state   | String|
|cuisines | String|
|pic      | String|
