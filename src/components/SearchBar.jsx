import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const timer = setTimeout(async () => {
			if (query.length < 2) {
				setSuggestions([]);
				return;
			}
			try {
				const { data } = await axios.get(
					`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
				);
				setSuggestions(data);
			} catch {
				setSuggestions([]);
			}
		}, 300);

		return () => clearTimeout(timer);
	}, [query]);

	function handleSelect(city) {
		setQuery(city.name);
		setSuggestions([]);
		onSearch(city.name);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (query) {
			onSearch(query);
			setSuggestions([]);
		}
	}

	return (
		<div className="relative w-full max-w-md">
			<form onSubmit={handleSubmit} className="flex gap-2">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search city..."
					className="flex-1 px-4 py-2 rounded-xl outline-none text-gray-800 shadow-md"
				/>
				<button
					type="submit"
					className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-blue-50 transition"
				>
					Search
				</button>
			</form>

			{suggestions.length > 0 && (
				<ul className="absolute top-12 left-0 right-16 bg-white rounded-xl shadow-lg overflow-hidden z-10">
					{suggestions.map((city, index) => (
						<li
							key={index}
							onClick={() => handleSelect(city)}
							className="px-4 py-3 text-gray-800 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0"
						>
							{city.name}
							{city.state ? `, ${city.state}` : ""}, {city.country}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default SearchBar;
