import { useState } from "react";

function SearchForm({ onSearch }) {
	const [destination, setDestination] = useState("");
	const [checkIn, setCheckIn] = useState("");
	const [checkOut, setCheckOut] = useState("");
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [roomType, setRoomType] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch({ destination, checkIn, checkOut, adults, children, roomType });
	};

	return (
		<aside className="xl:grow">
			<form className="p-6 pt-0 grid gap-4 grid-cols-3 xl:grid-cols-1" onSubmit={handleSearch}>
				<div>
					<label className="block text-sm font-medium">Destination</label>
					<input
						type="text"
						className="w-full p-0.5 md:p-1 xl:p-2 border rounded-md"
						placeholder="Enter a city"
						value={destination}
						onChange={(e) => setDestination(e.target.value)}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium">Check-in</label>
					<input type="date" className="w-full p-0.5 md:p-1 xl:p-2 border rounded-md" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
				</div>

				<div>
					<label className="block text-sm font-medium">Check-out</label>
					<input
						type="date"
						className="w-full p-0.5 md:p-1 xl:p-2 border rounded-md "
						value={checkOut}
						onChange={(e) => setCheckOut(e.target.value)}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium">Adults</label>
					<input
						type="number"
						className="w-full p-0.5 md:p-1 xl:p-2 border rounded-md"
						min="1"
						value={adults}
						onChange={(e) => setAdults(Number(e.target.value))}
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium">Children</label>
					<input
						type="number"
						className="w-full p-0.5 md:p-1 xl:p-2 border rounded-md"
						min="0"
						value={children}
						onChange={(e) => setChildren(Number(e.target.value))}
					/>
				</div>

				<div>
					<label className="block text-sm font-medium">Room Type</label>
					<select className="w-full p-1 md:p-1.5 xl:p-2 border rounded-md" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
						<option value="" className="bg-primary">
							Any
						</option>
						<option value="Single" className="bg-primary">
							Single
						</option>
						<option value="Double" className="bg-primary">
							Double
						</option>
						<option value="Suite" className="bg-primary">
							Suite
						</option>
					</select>
				</div>

				<div className="col-span-full flex justify-center">
					<button type="submit" className="bg-brown text-gold px-6 py-2 rounded-md hover:opacity-80 transition cursor-pointer">
						Search Hotels
					</button>
				</div>
			</form>
		</aside>
	);
}

export default SearchForm;
