import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function handleSearch(city) {
		setLoading(true);
		setError(null);
		try {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
			);
			setWeather(data);
		} catch (err) {
			setError("City not found. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold text-white mb-8">Weather Dashboard</h1>
			<SearchBar onSearch={handleSearch} />
			{loading && <p className="text-white mt-4">Loading...</p>}
			{error && <p className="text-red-300 mt-4">{error}</p>}
			{weather && <WeatherCard weather={weather} />}
		</div>
	);
}

export default App;
