import React from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList"


import hogs from "../porkers_data";

/*

| App
	|–– Nav
	|–– Filter
	|–– Sort
	|–– PigTile
		|––HiddenDetails
	|––

*/



function App() {

	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("name");

	const hogsToDisplay = hogs
		.filter(hog => (showGreased ? hog.greased : true))
		.sort((hog1, hog2) => {
			if (sortBy === "weight") {
				return hog1.weight - hog2.weight
			} else {
				hog1.name.localeCompare(hog2.name)
			}
		})
	return (
		<div className="App">
			<Nav />
			<Filter 
				showGreased={showGreased}
				onChangeShowGreased={setShowGreased}
				sortBy={sortBy}
				onChangeSortBy={setSortBy}	
			/>
			<HogList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
