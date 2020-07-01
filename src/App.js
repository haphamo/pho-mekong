import React from 'react';
import Nav from './Nav/Nav.js';
import Landing from './LandingPage/Landing.js';
import MenuSection from './MenuSection/MenuSection.js';

function App() {
	// TODO: map through menu data to render all menu items.
	return (
		<div className="App">
			<Nav />
			{/* <Landing /> */}
				<MenuSection />
		</div>
	);
}

export default App;
