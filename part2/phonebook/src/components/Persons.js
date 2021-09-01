import React from 'react'

const Persons = ({ personToShow ,handleDelete}) => {

//   const handleDelete=(obj,id)=>{
//     personService.del(id,obj)
//     .then(response =>setPersons(response))
//   }

	return (
		<div>
			<ul>
				{personToShow.map(person =>
					<li key={person.name}>
						{person.name + ' '}{person.number}
						<button onClick={()=>{
							const res = window.confirm(`Delete ${person.name}?`);
							if(res){
								handleDelete(person.id);
							}
						}}>delete</button>
					</li>)}
			</ul>
		</div>
	)
}

export default Persons
