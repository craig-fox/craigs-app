This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##Plan of Action
I chose to use the create-react-app utility to bootstrap a new version of this project, then used React to display
the data while placing the data fetches behind a node server. I was able to put these in the same project by
proxying the localhost:5000 server in the client folder's package.json.

The client runs on localhost:3000, the server on localhost:5000. They are concurrently started by running yarn dev

##Server
The server side retains the calls from the original project, but only returns JSON from the db requests.

#React Client
The client consist of a Display component, which is made up of Filter and PersonList components. The App represents
the application root, the Display holds all the visual components, Filter sends requests for changing the displayed
items, while PersonList displays the returned persons in a list. Each person is depicted within a Person component.



