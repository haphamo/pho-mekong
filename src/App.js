import React from 'react';
import NavFullMenu from './NavFullMenu/FullMenu.js';
import Landing from './LandingPage/Landing.js';
import MenuSection from './MenuSection/MenuSection.js';
import MenuItem from './MenuItem/MenuItem.js';
import data from './data.js';

function App() {
	const allMenuItems = data.map((section) => {
		return <MenuSection section={section} />;
	});

	return (
		<div className="App">
			{/* <Landing /> */}
			<NavFullMenu />
			<section className="pusher" style={{width: '70%'}}>
				{allMenuItems}
			</section>
		</div>
	);
}

export default App;
