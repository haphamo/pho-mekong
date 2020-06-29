import React from 'react';
import Nav from './Nav/Nav.js';
import Landing from './LandingPage/Landing.js';
import MenuItem from './MenuItem/MenuItem.js';

function App() {


	return (
		<div className="App">
			<Nav />
			{/* <Landing /> */}
				<section style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />


				</section>

		


	
		</div>
	);
}

export default App;
