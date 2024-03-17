# Netflix GPT

- create-react-app
- Configured tailwindCSS into the app.
- Header
- Login Form
- Sign Up Form
- App Routing
- Form Validation
- useRef Hook to reference the fields such as name, email, password etc.
- Firebase Setup
- Deployed the app to production
- Created signup user account in Firebase.
- Implemented sign in user API.
- Created Redux stoer with userSlice.
- Implemented Sign out API.
- Implemented update profile API. 
- Bugfix - If the user is not logged in then redirect browse page to login and vice-verse.
- Bugfix - Signup user display name and display picture update 
- Unsubscribed from our onAuthStateChanged callback.
- Add hard coded values to the config file.
- Register TMDB API and created an account to get access token
- Get data from TMDB now playing movies list API
- Custom hook for nowPlayingMoovies
- Create movieSlice
- Update the store with movies data.
- Planning for mainContainer and secondaryContainer
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the YouTube video trailer and made it autoplay and mute
- Tailwind classes to make main container look good
- Build secondary container with movie list and movie cards
- Fetch data from TMDB API for popular and top rated movies
- Populated the movies list and movie cards with the data fetched from the APIs.
# Features
- Login/Signup Page
   - Sign in/ Sign up form
   - Redirects to the browse page
- Browse (only comes up after authentication)
   - Header
   - Main movie
     - Trailer in the background
     - Title and description
     - Movie suggestions
       - Movie suggestions (a lot of them)
       - Movie suggestions are vertically scrollable
- Netflix GPT
  - Search bar
  - Movie suggestions
