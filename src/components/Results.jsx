function Results({ results }) {
	if (!results || results.length === 0) return <p className="text-brand text-center mt-6 text-large font-semibold">Please, fill the form </p>;

	// Hotel image is not available in Makcorps

	return (
		<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{results.map((hotel, i) => (
				<div key={i} className="bg-[#d1d5db] rounded-lg shadow-lg p-4 w-full">
					<h2 className="text-small md:text-md font-extrabold text-gray-900 mb-2">{hotel.name}</h2>
					<p className="text-sm text-gray-600">📞 {hotel.telephone}</p>
					{hotel.reviews && (
						<div className="flex items-center mt-2">
							<span className="text-yellow-400 text-lg">⭐ {hotel.reviews.rating}</span>
							<span className="ml-2 text-sm text-gray-500">({hotel.reviews.count} reviews)</span>
						</div>
					)}
					<div className="grid grid-cols-2 gap-x-8 mt-2 space-y-1 text-gray-900 text-sm">
						{hotel.vendor1 && (
							<p className="flex justify-between">
								<span className="font-medium">{hotel.vendor1}</span>
								<span className="text-green-600">{hotel.price1}</span>
							</p>
						)}
						{hotel.vendor2 && (
							<p className="flex justify-between ">
								<span className="font-medium">{hotel.vendor2}</span>
								<span className="text-green-600">{hotel.price2}</span>
							</p>
						)}
						{hotel.vendor3 && (
							<p className="flex justify-between ">
								<span className="font-medium">{hotel.vendor3}</span>
								<span className="text-green-600">{hotel.price3}</span>
							</p>
						)}
						{hotel.vendor4 && (
							<p className="flex justify-between">
								<span className="font-medium">{hotel.vendor4}</span>
								<span className="text-green-600">{hotel.price4}</span>
							</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default Results;
