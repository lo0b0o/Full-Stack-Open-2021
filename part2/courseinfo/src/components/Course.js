import React from 'react'

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course[0]} />
			<Content course={course[0].parts} />
			<Total course={course[0].parts} />
			<Header course={course[1]} />
			<Content course={course[1].parts} />
			<Total course={course[1].parts} />
		</div>)
}

const Header = ({ course }) =>
	<h2>{course.name}</h2>

const Content = ({ course }) => {
	return (
		<div>{
			course.map(c =>
				<Part key={c.id} c={c} />
			)
		}</div>);
}


const Part = ({ c }) => {
	return (<div> {c.name + ' '} {c.exercises}</div>);
}

const Total = ({ course }) => {
	const reducer = (acc, cur) => acc + cur;
	const num = course.map(c => c.exercises);
	const sum = num.reduce(reducer);
	return (
		<div>
			<strong>total of {sum} exercises</strong>
		</div>)
}

export default Course;