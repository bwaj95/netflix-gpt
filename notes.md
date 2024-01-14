# Netflix GPT

- CRA
- TailwindCSS
- Routing
- Header
- Login Page
- Sign In, Sign Up form
- Form validation
- useRef Hook
- Firebase setup
- Deploying app to firebaes hosting (pending)
- Create signup, signin functions using Firebase API
- Implemented Sign-Out using Firebase API
- Bug Fix: Auth check logic moved to Header component.
- Register app on TMDB
- Use TMDB API to fetch "Now Playing" movies
- Embed YT video in MainContainer and autoplay. (write CSS also)
- Planning SecondaryContainer
- Fetched PopularMovies and Now Playing movies using custom hooks.
- Displayed in MoviesList and MovieCard component.
- GptSearchPage, GptSearchBar, GptMovieSuggestions.
- Support for multi-language feature in the app.

# Features

1. Login / Sign Up
   - Sign In / Sign Up form
   - redirect to browse page
2. Browse Page (after authentication)
   - Header
   - Banner Movie
     - Trailer in Background
     - Movie name and description
     - Play Movie button
     - More Info button leading to Movie Details Page.
   - Movie Suggestions
     - N lists each of one category with M movies in it.
     - Each list is horizontal carousel.
3. NetflixGPT
   - Search Bar
   - Movie Suggestions

---

# Project Building Steps

1. Create Components Body, Login, BrowsePage, Header
2. install react-router-dom.
3. create a router using createBrowserRouter and provide it using RouteProvider
4. Create a login page.
5. Create a form and toggle form state between Sign In / Sign Up using useState.
6. Form validation.
   - using useRef hook, get the input email and password.
   - can be done using useState also.
   - to validate write funcitons in utils folder.
7. Setup firebase on the firebase websitre.
8. Optional - Deploy in firebase.
9. From firebase docs, add signin. signup functionality in login form.
10. Make redux store to handle signed in user.
11. Use Firebase APIs to do auth flow of users.
12. onAuthStateChanged() API used in header component
    - to detect user on every page load.
    - should have been at the top just below the RouteProvider.
    - But added to header since it will render on every page.
    - onAuthStateChanged() returns an unsubscribe callback funtion
    - use the cleanup of useEffect to remove this eventlistener.
13. TMDB API is needed for fetching movies and other related details.
    - Register app on API website.
    - Get read access token.
14. In BrowsePage useEffect to fetch "Now Playing" movies.
    - Use the API by the same name.
    - Extract the logic into custom hook "useNowPlaying"
    - update store with movies data.
15. Parse video list and get one main video for banner trailer.
    - Extract this logic also to custom hook "useMovieTrailer"
    - update store with trailer data
16. Embed YT video by key and play it in banner. Write CSS.
17. Write GPTSearch component. Toggle using button in header.
18. Write slice for handling GPT data.
19. Multi-language feature:
    - create an object of word->translation for each language.
    - create slice for app config language
    - dispatch action when language changed
    - pick word as per language and render in component
