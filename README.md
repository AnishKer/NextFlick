
<<<<<<< HEAD

=======
# NextFlick

A sleek, cross-platform movie discovery app built with React Native and Expo. NextFlick allows users to browse trending and latest movies, search for titles, save favorites, and manage their profile—all with a modern, responsive UI.

---

## Features

- **Home:** Browse trending and latest movies, and use the search bar to quickly find titles.
- **Search:** Search for movies by keyword. Results update in real-time, and the search query can be passed directly from the Home page.
- **Save:** View and manage your list of saved movies. Remove movies from your watchlist with a single tap.
- **Profile:** View and edit your user profile (mock data for demo). Update your name and email with instant feedback.
- **Custom Tab Bar:** Modern, animated tab navigation for a premium user experience.
- **Responsive Design:** Works seamlessly on iOS, Android, and web.

---

## Code Structure

```
.
├── app/
│   └── (tabs)/
│       ├── index.tsx        # Home screen (trending, latest, search bar)
│       ├── search.tsx       # Search screen (query results)
│       ├── save.tsx         # Saved movies screen
│       └── profile.tsx      # User profile screen
├── components/
│   ├── SearchBar.tsx        # Reusable search bar component
│   ├── MovieCard.tsx        # Movie display card
│   └── TrendingCard.tsx     # Trending movie card
├── constants/
│   ├── icons.ts             # App icons
│   └── images.ts            # App images
├── services/
│   ├── api.ts               # API configuration and calls
│   ├── appwrite.ts          # Appwrite service integration
│   └── usefetch.ts          # Custom React hook for data fetching
├── app.json                 # Expo configuration
└── ...
```

---

## Key Design & Architectural Choices

- **Expo & React Native:** For rapid development and easy deployment across platforms.
- **Component-Based Architecture:** Promotes reusability and maintainability.
- **Custom Hooks:** `useFetch` simplifies async data fetching and state management.
- **Navigation:** Uses `expo-router` for a clean, scalable navigation structure.
- **Styling:** Combines utility classes (via NativeWind/Tailwind) and custom styles for a modern look.

---

## How It Works

- **Home Search:** Enter a query in the Home search bar and press enter or the search icon. You'll be redirected to the Search tab, which displays results for your query.
- **Save Movies:** Add movies to your saved list (mocked for demo), and remove them with a tap.
- **Edit Profile:** Update your name and email in the Profile tab (mocked for demo).

---

## Technical Notes

- **API Integration:** Uses mock data and sample API calls. Easily extendable to real movie APIs.
- **State Management:** Local state and custom hooks; ready for integration with Context or Redux for larger apps.
- **Error Handling:** Basic error and loading states are handled in all async operations.
- **Extensibility:** The codebase is modular and ready for features like authentication, reviews, or notifications.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the app:**
   ```sh
   npm start
   ```
3. **Run on device or emulator** using Expo Go or your preferred simulator.



## Repository

[https://github.com/AnishKer/NextFlick](https://github.com/AnishKer/NextFlick) 
>>>>>>> 61c5932 (Add project README with features, structure, and usage instructions)
