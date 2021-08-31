import React from 'react'

const Persons = ({personToShow}) => {
	return (
		<div>
			<ul>
				{personToShow.map(person =>
					<li key={person.name}>{person.name + ' '}{person.number}</li>)}
			</ul>
		</div>
	)
}

export default Persons
