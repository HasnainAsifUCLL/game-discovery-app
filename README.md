<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HasnainAsifUCLL/game-discovery-app">
    <img src="public/icons/icon-192.png" alt="Game Discovery logo" height="80">
  </a>

<h3 align="center">Game Discovery</h3>

  <p align="center">
    Discover games you'll love. Connect with people who love them too.
    <br />
    <em>"Game Discovery" is a working title and the name is subject to change.</em>
    <br />
    <br />
    <a href="https://github.com/HasnainAsifUCLL/game-discovery-app"><strong>View the repo »</strong></a>
    &middot;
    <a href="https://game-discovery-app-theta.vercel.app"><strong>Live PWA »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

**Game Discovery** is a Progressive Web App (PWA) built for the *Mobile Applications* course at UCLL (first assignment).
It helps gamers discover new videogames that match their interests, one game at a time, and is meant to grow into a platform that also connects gamers with a similar taste.

**Public link (live PWA):** https://game-discovery-app-theta.vercel.app

Screens:

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/(app)/index.tsx` | Discover: one game card (genre, description, PEGI, playtime) with Skip / Like buttons and the database status |
| `/my-games` | `app/(app)/my-games.tsx` | My Games: list of games |

Both screens are reachable through the tab bar at the bottom.

**Database:** the games come from a hosted Supabase project (table `games`). When the Discover screen opens, the app runs a small query (`checkDatabase()` in `src/services/databaseService.ts`) and shows `Database: online` or `Database: offline` on screen.

**Login:** there is no login in this version, so there are no credentials.

📄 **App idea:** see [IDEA.md](IDEA.md) for the target audience, roadmap and competitors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Expo][Expo-badge]][Expo-url]
* [![React Native][ReactNative-badge]][ReactNative-url]
* [![React][React-badge]][React-url]
* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![Expo Router][ExpoRouter-badge]][ExpoRouter-url]
* [![Supabase][Supabase-badge]][Supabase-url]
* [![Vercel][Vercel-badge]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS) with npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/HasnainAsifUCLL/game-discovery-app.git
   cd game-discovery-app
   ```
2. Install the npm packages
   ```sh
   npm install
   ```
3. Create a `.env` file from the example (it already contains the Supabase project URL and the public publishable key)
   ```sh
   cp .env.example .env
   ```
   On Windows: `copy .env.example .env`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

| Command | What it does |
|---------|--------------|
| `npm start` | Starts the Expo dev server. Press `w` for web |
| `npm run web` | Starts the dev server and opens the web version (http://localhost:8081) |
| `npm run tunnel` | Starts the dev server through a tunnel (when your phone is not on the same network) |
| `npm run storybook` | Starts Storybook on http://localhost:6006 to browse the UI components |
| `npm run build-storybook` | Builds a static Storybook into `storybook-static/` |
| `npm run cypress:open` | Opens the Cypress test runner |
| `npm run cypress:run` | Runs the Cypress end-to-end tests headless |

> Cypress tests run against `http://localhost:8081`, so start the web server (`npm run web`) first.
> The project uses Expo SDK 52 (from the starter code). The Expo Go app from the store only supports the latest SDK, so test the PWA through the browser or the live link.

**Production web build (the PWA):**
```sh
npx expo export -p web
```
The output is written to `dist/`.

**Deployment:** the PWA is hosted on Vercel (build command `npx expo export -p web`, output directory `dist`) and is available at https://game-discovery-app-theta.vercel.app.

**Install it as an app:** open the live link on a phone (Chrome) and choose *Add to Home Screen* (or *Install app*).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT STRUCTURE -->
## Project Structure

```
app/                  # Screens & routing (expo-router, file-based)
  (app)/              # Discover and My Games screens with the tab bar
src/
  components/         # App components (GameCard, StyledButton)
    primitives/       # Reusable UI primitives + Storybook stories
  services/           # Data access (Supabase), no API calls in components
  state/              # Zustand stores
  types/              # TypeScript types
  theme.ts            # Colours and other design values
cypress/              # End-to-end tests (starter code)
public/               # PWA files (manifest, service worker, icons)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Discover screen: one game at a time, with Skip and Like buttons
- [x] My Games screen: list of games
- [ ] Swipe on Discover: right to show interest, left to skip a game
- [ ] More information per game: screenshots, gameplay, genre, platform, PEGI rating, playtime
- [ ] My Games collection: favourites, want to play, playing now, finished
- [ ] Recommendations based on genres, tags and likes, with an explanation of why a game is recommended
- [ ] People: find gamers with a similar taste, with a compatibility score
- [ ] Chats: contact other gamers
- [ ] Profile: favourite games, favourite genres, preferences and settings
- [ ] Choice at setup: discover games for myself or games suitable for my child (PEGI)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Top contributors:

<a href="https://github.com/HasnainAsifUCLL/game-discovery-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HasnainAsifUCLL/game-discovery-app" alt="contrib.rocks image" />
</a>



<!-- CONTACT -->
## Contact

Hasnain Asif - hasnain.asif@student.ucll.be

Project Link: [https://github.com/HasnainAsifUCLL/game-discovery-app](https://github.com/HasnainAsifUCLL/game-discovery-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [UCLL](https://www.ucll.be/)
* [Expo Documentation](https://docs.expo.dev/)
* [Supabase Documentation](https://supabase.com/docs)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/HasnainAsifUCLL/game-discovery-app.svg?style=for-the-badge
[contributors-url]: https://github.com/HasnainAsifUCLL/game-discovery-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HasnainAsifUCLL/game-discovery-app.svg?style=for-the-badge
[forks-url]: https://github.com/HasnainAsifUCLL/game-discovery-app/network/members
[stars-shield]: https://img.shields.io/github/stars/HasnainAsifUCLL/game-discovery-app.svg?style=for-the-badge
[stars-url]: https://github.com/HasnainAsifUCLL/game-discovery-app
[Expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[ReactNative-badge]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[ExpoRouter-badge]: https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white
[ExpoRouter-url]: https://docs.expo.dev/router/introduction/
[Supabase-badge]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
[Vercel-badge]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
