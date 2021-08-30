const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  return (<div>
    <Part part={parts[0].name} ex={parts[0].exercises} />
    <Part part={parts[1].name} ex={parts[1].exercises} />
    <Part part={parts[2].name} ex={parts[2].exercises} />
  </div>);
};
const Part = ({ part, ex }) => {
  return (<div>
    <p>{part}{ex}</p>
  </div>);
};

const Total = ({ parts }) => {
  return (<div>
    <p>Numer of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  </div>);
};

export default App;
