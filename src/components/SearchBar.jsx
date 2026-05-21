function SearchBar({ onSearch }) {
	function handleSubmit(e) {
		e.preventDefault();
		const city = e.target.city.value;
		if (city) onSearch(city);
	}

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
			<input
				type="text"
				name="city"
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
	);
}

export default SearchBar;
