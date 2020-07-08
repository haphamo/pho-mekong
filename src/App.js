import React from 'react';
import Nav from './Nav/Nav.js';
import Landing from './LandingPage/Landing.js';
import MenuSection from './MenuSection/MenuSection.js';
import MenuItem from './MenuItem/MenuItem.js';
import data from './data.js';

function App() {

	const allMenuItems = data.map(section => {
		return(
			<MenuSection section={section} />
		)
	});

	return (
		<div className="App">
			<Nav />
			{/* <Landing /> */}
      <section className="all-menu-items" style={{width: '55%'}}>
			  {allMenuItems}
      </section>
		</div>
	);
}

export default App;
