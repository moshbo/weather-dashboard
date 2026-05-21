import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import { getWeatherTheme } from "./utils/weatherTheme";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleSearch(city) {
		setLoading(true);
		setError(null);
		try {
			const [weatherRes, forecastRes] = await Promise.all([
				axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
				),
				axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
				),
			]);
			setWeather(weatherRes.data);
			setForecast(forecastRes.data);
		} catch {
			setError("City not found. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	const theme = weather
		? getWeatherTheme(weather.weather[0].id, weather.weather[0].icon)
		: { gradient: "from-blue-900 to-blue-600", emoji: "" };

	return (
		<div
			className={`min-h-screen bg-gradient-to-br ${theme.gradient} flex flex-col items-center justify-center p-4`}
		>
			<h1 className="text-4xl font-bold text-white mb-8">Weather Dashboard</h1>
			<SearchBar onSearch={handleSearch} />
			{loading && <p className="text-white mt-4">Loading...</p>}
			{error && <p className="text-red-300 mt-4">{error}</p>}
			{weather && <WeatherCard weather={weather} theme={theme} />}
			{forecast && <Forecast forecast={forecast} />}
		</div>
	);
}

export default App;
