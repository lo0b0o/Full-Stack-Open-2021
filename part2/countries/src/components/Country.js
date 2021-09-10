import React from 'react'
import Information from './Information'

const Country = ({country}) => {
	return (
		<div>
			<h1>{country.name} </h1>
			<Information item={country}/>
		</div>
	)
}

export default Country
