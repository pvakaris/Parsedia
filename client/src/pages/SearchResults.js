import { Divider, Box, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "lens/search/search";
import Post from "components/Feed/PostLens";

// @Description: The page that is used to display search results for the user
const SearchResults = () => {
	// Get the search query from the URL
	const { query } = useParams();

	// Set the search results to an empty array
	// This will be populated in the useEffect hook
	// and will be used to render the search results
	const [results, setResults] = useState([]);

	// Run the search query and set the results
	useEffect(() => {
		(async () => {
			// Query the lens search API for the search query
			const response = await search({
				query: query,
				limit: 20,
				type: "PUBLICATION",
			});

			// Set the results to the response
			setResults(response.data.search.items);
		})();
	}, []);

	return (
		<Box>
			<Text sx={{ fontSize: "30px", fontWeight: "bold" }}>
				Displaying search results for: {query}
			</Text>
			<Text sx={{ fontSize: "20px" }}>Publications containing {query}</Text>
			<Divider />
			{/* Map throught results */}
			{results.map(result => (
				<Post post={result} />
			))}
		</Box>
	);
};

export default SearchResults;
