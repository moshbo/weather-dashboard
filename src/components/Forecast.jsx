function Forecast({ forecast }) {
	const daily = forecast.list.filter((item) =>
		item.dt_txt.includes("12:00:00"),
	);

	return (
		<div className="w-full max-w-md mt-4 grid grid-cols-5 gap-2">
			{daily.map((day) => (
				<div
					key={day.dt}
					className="bg-white/20 backdrop-blur-md text-white rounded-2xl p-3 flex flex-col items-center gap-1"
				>
					<p className="text-xs font-semibold">
						{new Date(day.dt * 1000).toLocaleDateString("en", {
							weekday: "short",
						})}
					</p>
					<img
						src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
						alt={day.weather[0].description}
					/>
					<p className="text-sm font-bold">{Math.round(day.main.temp)}°C</p>
				</div>
			))}
		</div>
	);
}

export default Forecast;
