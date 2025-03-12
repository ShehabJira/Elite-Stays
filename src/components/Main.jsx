import { useState } from "react";
import Results from "./Results";
import SearchForm from "./SearchForm";

function Main() {
	const API_KEY = "67d0dedaa794615a49743d37";
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const handleSearch = async (filters) => {
		try {
			// Get city id
			setIsLoading(true);
			setErrMsg("");
			const res1 = await fetch(`https://api.makcorps.com/mapping?api_key=${API_KEY}&name=${filters.destination}`);

			if (!res1.ok) throw new Error("Error: Cannot Get City Id!");

			const data = await res1.json(); // This data contains Hotels, city, and more things. we need to only get the city.
			const city = data.find((ele) => ele.type === "GEO"); // If the type property has a value of HOTEL then the document_id will be hotel ID and if the type property has a value GEO then the value of document_id will be city ID.
			const cityId = city?.document_id;

			// Get the results
			const res2 = await fetch(
				`https://api.makcorps.com/city?cityid=${cityId}&cur=USD&adults=${filters.adults}&children=${filters.children}&rooms=1&pagination=0&checkin=${filters.checkIn}&checkout=${filters.checkOut}&api_key=${API_KEY}`
			);

			if (!res2.ok) throw new Error("Error: Cannot Get Hotels in this city!");

			const results = await res2.json(); // results contains all hotels based on the obtained filters.

			if (!results || results.length === 0) throw new Error("No hotels found. Try adjusting your search!");

			results.length = results.length - 1; // They put an array at the end containing more information, we don't need to take it.
			setSearchResults(results);
		} catch (error) {
			setErrMsg(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="flex flex-col-reverse gap-5 justify-end px-5 xl:flex-row h-[82dvh] text-amber-50">
			<section className="xl:w-[70vw] overflow-y-auto results-section">
				{/* Only one thing from the following will be true */}
				{isLoading && <p className="text-brand text-center mt-6 text-large font-semibold">Loading...</p>}
				{errMsg && <p className="text-brand text-center mt-6 text-large font-semibold">{errMsg}</p>}
				{!isLoading && !errMsg && <Results results={searchResults} />}
			</section>
			<SearchForm onSearch={handleSearch} />
		</main>
	);
}

export default Main;
