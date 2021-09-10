import React from 'react'
import Information from './Information';
import Weather from './Weather'

const List = ({ list, show, setShow }) => {
	return (
		<div>

			{list.length > 10
				? <div>Too many matches, specify another filter</div>
				: list.length === 1
					? <div>
						<Information item={list[0]} />
						<Weather country={list[0]} />
					</div>
					: list.map(item =>
						<div>
							<ol key={item.name}> {item.name}
								<button onClick={(e) => {
									e.preventDefault();
									setShow({ ...show, [item.name]: true });
								}}>
									show
								</button>
							</ol>
							{show[item.name] ? <Information item={item} /> : <div></div>}
						</div>)}
		</div>
	)
}

export default List
