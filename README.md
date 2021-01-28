## Frontend

React app with TODO and weather functionality.
It uses redux to maintain the state.

Layout consists of two columns
 - left sidebar with current weather info
 - main content with list/controls of TODOs

TODO Functionality:
 - add TODOs
 - remove TODOs
 - edit TODOs
 - TODOs are persistent (saved in db)
 - TODO list can be searched and sorted

Weather functionality:
 - show current weather (data from  https://openweathermap.org/)
 - if the temperature is above 25C / 77F, show it in red otherwise green
 - if the user hovers the temperature, show a tooltip (any)

Service doesn't require any credentials or login data so whoever knows the URL can maintain the state.
## Backend

Database is maintained in MySQL and DB structure is attached (`weather-todo.sql` next to this README file)

There is a model for Todo. ORM used to communicate with DB is sequelize.

Server is based on expressJS and it handles all needed actions for frontend.

## To implement/improve

- move fetch for weather data to backend and hide api key
- handle mobile views with media queries
- extend tests
- add loader
- add scroll/generally improve styling
