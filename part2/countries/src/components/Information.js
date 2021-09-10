import React from 'react'
import '../index.css'

const Information = ({ item }) => {
	return (
		<div>
			<h1>{item.name}</h1>
			<div>capital {item.capital} </div>
			<div>population {item.population}</div>
			<h2>Spoken languages</h2>
			<ul>
				{item.languages.map(language => <li key={language.name}>{language.name}</li>)}
			</ul>
			<img src={item.flag} alt={item.name} />
		</div>
	)
}

export default Information
