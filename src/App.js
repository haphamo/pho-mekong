import React from 'react';
import Nav from './Nav/Nav.js';
import Landing from './LandingPage/Landing.js';
// import MenuItem from './MenuItem/MenuItem.js';
import AllMenuItems from './AllMenuItems/AllMenuItems.js';

function App() {

	return (
		<div className="App">
			<Nav />
			{/* <Landing /> */}
				<AllMenuItems />
		</div>
	);
}

export default App;
