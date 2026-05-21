export function getWeatherTheme(id, icon) {
	const isNight = icon.endsWith("n");

	if (id >= 200 && id < 300) {
		return { gradient: "from-gray-900 via-gray-700 to-slate-800", emoji: "⛈️" };
	} else if (id >= 300 && id < 500) {
		return { gradient: "from-blue-800 via-blue-600 to-slate-700", emoji: "🌦️" };
	} else if (id >= 500 && id < 600) {
		return {
			gradient: "from-slate-900 via-blue-900 to-slate-800",
			emoji: "🌧️",
		};
	} else if (id >= 600 && id < 700) {
		return { gradient: "from-blue-100 via-slate-200 to-blue-200", emoji: "❄️" };
	} else if (id >= 700 && id < 800) {
		return { gradient: "from-gray-500 via-gray-400 to-slate-500", emoji: "🌫️" };
	} else if (id === 800) {
		if (isNight) {
			return {
				gradient: "from-indigo-950 via-blue-950 to-slate-900",
				emoji: "🌙",
			};
		}
		return { gradient: "from-sky-400 via-blue-500 to-blue-600", emoji: "☀️" };
	} else {
		if (isNight) {
			return {
				gradient: "from-slate-800 via-gray-700 to-slate-600",
				emoji: "☁️",
			};
		}
		return {
			gradient: "from-slate-500 via-blue-400 to-slate-400",
			emoji: "⛅",
		};
	}
}
