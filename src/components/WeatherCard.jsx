function WeatherCard({ weather }) {
	return (
		<div className="bg-white/20 backdrop-blur-md text-white rounded-2xl p-8 mt-6 w-full max-w-md shadow-xl">
			<h2 className="text-3xl font-bold mb-1">
				{weather.name}, {weather.sys.country}
			</h2>
			<p className="text-blue-200 capitalize mb-6">
				{weather.weather[0].description}
			</p>
			<p className="text-7xl font-thin mb-6">
				{Math.round(weather.main.temp)}°C
			</p>
			<div className="flex justify-between text-sm text-blue-100">
				<p>💧 Humidity: {weather.main.humidity}%</p>
				<p>💨 Wind: {weather.wind.speed} m/s</p>
				<p>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</p>
			</div>
		</div>
	);
}

export default WeatherCard;
