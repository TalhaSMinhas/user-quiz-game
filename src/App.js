// App.js 

import React, { useState, useEffect } from 'react'; 
import './App.css'; // Import the CSS file for your styles 

function App() { 
	// Define state variables using useState 
	const [user, setUser] = useState({ 
		avatar: '', 
		first_name: '', 
		last_name: '', 
		employment: { title: '' }, 
		address: { city: '' }, 
		email: '', 
		dob: '', 
		gender: '', 
	}); 

	// State to toggle displaying more user info 
	const [showMoreInfo, setShowMoreInfo] = useState(false); 

	// Use useEffect to fetch user data on component mount 
	useEffect(() => { 
		getUser(); 
	}, []); 

	// Function to fetch user data from the API 
	const getUser = () => { 
		const url = 
'https://random-data-api.com/api/v2/users?response_type=json'; 

		// Fetch data and update user state when data is received 
		fetch(url) 
			.then((resp) => resp.json()) 
			.then((data) => { 
				setUser(data); 
				changeThemeColor(); 
			}); 
	}; 

	// Function to change the theme color randomly 
	const changeThemeColor = () => { 
		const randomColor = 
			'#' + ((Math.random() * 0xffffff) << 0) 
				.toString(16).padStart(6, '0'); 
		document.documentElement.style.setProperty( 
			'--theme-color', randomColor); 
	}; 

	// Function to toggle displaying more user info 
	const toggleMoreInfo = () => { 
		setShowMoreInfo(!showMoreInfo); 
	}; 

	return ( 
		<div className="container"> 
			<div className="card"> 
				<div className="img-container"> 
					<img src={user.avatar} 
						alt={`${user.first_name} 
					${user.last_name}`} /> 
				</div> 
				<div className="details"> 
					<h2>{`${user.first_name} ${user.last_name}`}</h2> 
					<h3>{user.employment.title}</h3> 
					<p> 
						<strong 
						>Email: 
						</strong> 
						{user.email} 
					</p> 
					<p> 
						<strong> 
							Phone: 
						</strong> 
						{user.phone_number} 
					</p> 
					<h4>Location: 
						{user.address.city}</h4> 
					{showMoreInfo && ( 
						<div> 
							<p> 
								<strong> 
									Date of Birth: 
								</strong> 
								{user.date_of_birth} 
							</p> 
							<p> 
								<strong> 
									Gender: 
								</strong> 
								{user.gender} 
							</p> 
						</div> 
					)} 
					<button onClick={toggleMoreInfo}> 
						{showMoreInfo ? 
							'Show Less Info' : 'Show More Info'} 
					</button> 
				</div> 
			</div> 
			<button onClick={getUser}> 
				Get Random User 
			</button> 
		</div> 
	); 
} 

export default App;
