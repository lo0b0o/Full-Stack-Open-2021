const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        part={{ 'p1': part1, 'p2': part2, 'p3': part3, }}
        ex={{ 'ex1': exercises1, 'ex2': exercises2, 'ex3': exercises3, }} />
      <Total num={[exercises1, exercises2, exercises3]} />
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

const Content = ({ part, ex }) => {
  return (<div>
    <Part part={part.p1} ex={ex.ex1} />
    <Part part={part.p2} ex={ex.ex2} />
    <Part part={part.p3} ex={ex.ex3} />
  </div>);
};
const Part = ({ part, ex }) => {
  return (<div>
    <p>{part}{ex}</p>
  </div>);
};

const Total = ({ num }) => {
  return (<div>
    <p>Numer of exercises {num[0] + num[1] + num[2]}</p>
  </div>);
};

export default App;
