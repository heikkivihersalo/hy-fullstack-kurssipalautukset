const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercisesTotal}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props[0].name} exercisesTotal={props[0].exercises} />
      <Part name={props[1].name} exercisesTotal={props[1].exercises} />
      <Part name={props[2].name} exercisesTotal={props[2].exercises} />
    </div>
  );
}

const Total = (props) => {
  return (
    <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
  )
}

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
      <Content {...course.parts} />
      <Total {...course.parts} />
    </div>
  )
}

export default App