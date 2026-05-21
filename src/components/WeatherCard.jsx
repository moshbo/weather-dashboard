function WeatherCard({ weather, theme }) {
	return (
		<div className="bg-white/20 backdrop-blur-md text-white rounded-2xl p-8 mt-6 w-full max-w-md shadow-xl">
			<div className="flex justify-between items-start">
				<div>
					<h2 className="text-3xl font-bold mb-1">
						{weather.name}, {weather.sys.country}
					</h2>
					<p className="text-white/70 capitalize mb-6">
						{weather.weather[0].description}
					</p>
				</div>
				<span className="text-5xl">{theme.emoji}</span>
			</div>
			<p className="text-7xl font-thin mb-6">
				{Math.round(weather.main.temp)}°C
			</p>
			<div className="flex justify-between text-sm text-white/70">
				<p>💧 Humidity: {weather.main.humidity}%</p>
				<p>💨 Wind: {weather.wind.speed} m/s</p>
				<p>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</p>
			</div>
		</div>
	);
}

export default WeatherCard;
