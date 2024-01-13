export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR_DEFAULT =
  "https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png";

export const TMDB_API_KEY = "b7c16869f7c6768a000177b58a7d02b4";
export const TMDB_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2MxNjg2OWY3YzY3NjhhMDAwMTc3YjU4YTdkMDJiNCIsInN1YiI6IjY1YTIzYmQwODU4Njc4MDEyZTViN2Q4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VHj2JOhTjipv93nM-apjLbKsyhWZQWNxJeueHPeDX5I";

export const TMDB_FETCH_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
  },
};
