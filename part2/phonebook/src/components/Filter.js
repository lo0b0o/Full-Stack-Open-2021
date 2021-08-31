import React from 'react'

const Filter = ({handleSearch}) => {
	return (
		<div>
			<form>
				<label>filter shown with</label>
				<input onChange={handleSearch} />
			</form>
		</div>
	)
}

export default Filter
