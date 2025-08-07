# React Weather App

A clean, responsive weather application built with React that provides real-time forecasts and features dynamic, weather-based backgrounds.

![My Weather App Screenshot] (./public/images/weatherreact.png" )

## ✨ Features

- **Geolocation**: Automatically detects and displays the weather for the user's current location on page load.
- **City Search**: A sleek, modern search bar to find weather information for any city in the world.
- **Dynamic Backgrounds**: The user interface changes its background image to reflect the current weather conditions (e.g., sunny, rainy, cloudy).
- **Detailed Current Weather**: Displays the current temperature, condition, high/low temperatures, wind speed, and humidity.
- **3-Day Forecast**: Provides a concise weather forecast for the next three days.
- **Unit Toggling**: Seamlessly switch between Celsius and Fahrenheit temperature units.
- **Responsive Design**: A mobile-first design that adapts beautifully to all screen sizes, from mobile phones to desktops.
- **Modular Components**: Built with a clean, component-based architecture using CSS Modules for scoped, conflict-free styling.
- **User-Friendly Error Handling**: Displays clear error messages for invalid input or failed API requests.

---

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) (using Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) for component-scoped styles & [Bootstrap](https://getbootstrap.com/) for the responsive grid.
- **API**: [WeatherAPI.com](https://www.weatherapi.com/) for real-time weather data.

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/analiviag/weatherreact.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd weatherreact
    ```

3.  **Install NPM packages:**

    ```bash
    npm install
    ```

4.  **Get your API Key:**

    - Sign up on [WeatherAPI.com](https://www.weatherapi.com/) to get your free API key.

5.  **Create an Environment File:**

    - In the root of your project, create a new file named `.env.local`.
    - Add your API key to this file. **Vite requires environment variables to be prefixed with `VITE_`**.
      ```
      VITE_WEATHER_API_KEY="your_api_key_here"
      ```

6.  **Update the Code to Use the Environment Variable:**

    - To keep your API key secure, we need to read it from the environment file. Open `src/App.jsx` and replace the hardcoded `apiKey` with the following:
      ```javascript
      // In src/App.jsx
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      ```

7.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will now be running on `http://localhost:5173`.

---

## Acknowledgements

- This project's weather data is proudly provided by [WeatherAPI.com](https://www.weatherapi.com/).
- Background images sourced from [Unsplash](https://unsplash.com/).
