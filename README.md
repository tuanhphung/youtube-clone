# Youtube Clone
Made with React.js Framework and HTML / CSS for markup.
YouTube API used to fetch videos.

Aim : Make a webapp that utilises Redux for state management.

# Libraries Used

## React-Router
Used to route url paths to certain components.
Each path (**/ , /watch, /history, /favourites**) is routed to components which will load once the user reaches that path.

## Redux 
Use of action creators and reducers to create store state in Redux.
Videos fetched from the API, favourited videos and watch history states are all located in the Redux store.

## Redux-Thunk
Middleware which allows for asynchronous action creators.
This thunk is used to call the YouTube API before being passed into the reducers and in to the Redux store.

## React-Redux
Allows components to connect and retrieve states from the Redux store.

## Axios
Library used to make requests to the YouTube API.

# Personal Feedback
* Could add transisitions via CSS or library such as Framer-Motion for better transisitions between pages and the burger menu.
* Comments in the Redux store is only one state, which appears for all the videos instead of for each video.
  * Possible solution is to add a new property 'comments' for each video retrieved from the API.
  * Load the video along with its comments **on selected**
* Set class names of elements using the CSS BEM (Block Element Modifier) method for easier styling.


