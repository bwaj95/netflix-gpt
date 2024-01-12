# Netflix GPT

- CRA
- TailwindCSS
- Routing
- Header
- Login Page
- Sign In, Sign Up form
- Form validation
- useRef Hook

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
