import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics num={[good, neutral, bad]} />

    </div>
  )
}

const Statistics = ({ num }) => {
  const all = num[0] + num[1] + num[2];
  if (all === 0) return (
    <div>
      No feedback given
    </div>
  )
  return (
    <table>
      <tbody>
        <Stats text='good' num={num[0]} />
        <Stats text='neutral' num={num[1]} />
        <Stats text='bad' num={num[2]} />
        <Stats text='all' num={all} />
        <Stats text='average' num={(num[0] - num[2]) / all} />
        <Stats text="positive" num={(num[0] / all) * 100 + '%'} />
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>{text}</button>

const Stats = ({ text, num }) =>
  <tr>
    <td>{text}</td><td>{num}</td>
  </tr>

export default App
