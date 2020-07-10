import React from 'react';
import NavFullMenu from './NavFullMenu/FullMenu.js';
import Landing from './LandingPage/Landing.js';
import MenuSection from './MenuSection/MenuSection.js';
import MenuItem from './MenuItem/MenuItem.js';
import Banner from './Banner/Banner.js';

import data from './data.js';

function App() {
	// TOFIX: The content cuts at width: 686px,
	const allMenuItems = data.map((section) => {
		return <MenuSection section={section} />;
	});

	return (
		<div className="App">
			<NavFullMenu />
			{/* <Landing className="pusher"/> */}

			<section className="pusher">
				<Banner />
				<h1 style={{position: 'absolute', right: '50%', top: '25%'}}>PHO</h1>
				<section className="description" style={{height: '7em', width: '76%', position: 'relative', right: '-2%', textAlign: 'justify', display: 'flex', alignItems: 'center'}}>Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.</section>
			</section>
			<section className="pusher" style={{width: '80%'}}>
				{allMenuItems}
			</section>
		</div>
	);
}

export default App;
