import React from 'react';
import NavFullMenu from './NavFullMenu/FullMenu.js';
import Landing from './LandingPage/Landing.js';
import MenuSection from './MenuSection/MenuSection.js';
import MenuItem from './MenuItem/MenuItem.js';
import Banner from './Banner/Banner.js';

import data from './data.js';

function App() {
	// TOFIX: The content cuts at width: 686px
	// backgrond color for desc section: #f5f5f5
	// Header needs to be fixed
	const allMenuItems = data.map((section) => {
		return <MenuSection section={section} />;
	});

	return (
		<div className="App">
			<NavFullMenu />
			{/* <Landing className="pusher"/> */}

			<section >
				<Banner />
				<div className="pusher" style={{display: 'flex', justifyContent: 'center'}}>
					<h1  style={{position: 'absolute', top: '4em', transform: 'translateX(3em)'}}>Pho</h1>
				</div>
				<section className="description" style={{ textAlign: 'justify', display: 'flex', alignItems: 'center', margin: '0 1em 0 12em'}}>Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.</section>
			</section>
			<section style={{margin: '0 1em 0 12em'}}>
				{allMenuItems}
			</section>
		</div>
	);
}

export default App;
