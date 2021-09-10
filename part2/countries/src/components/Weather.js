import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'

const api_key = process.env.REACT_APP_API_KEY
const weatherUrl = 'http://api.weatherstack.com/'
// console.log(api_key,'api')

const Weather = ({ country }) => {
	const [weather, setWeather] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const hook = () => axios.get(`${weatherUrl}/current?access_key=${api_key}&query=${country.capital}`)
		.then(response => {
			console.log(response.data.current)
			setWeather(response.data.current)
			setLoaded(true);
		})
	useEffect(hook, []);

	return (
		<div>
			<h2>Weather in {country.capital} </h2>
			{loaded
				? <div>
					<strong>temperature: </strong> {weather.temperature} Celcius
					<div><img className='weatherImg' src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} /> </div>
					<strong>wind: </strong> {weather.wind_degree} mph direction {weather.wind_dir}
				</div>
				: <div></div>
			}

		</div>
	)
}

export default Weather
