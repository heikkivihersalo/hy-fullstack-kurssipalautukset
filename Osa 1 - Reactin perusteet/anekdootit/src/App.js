import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const AnecdoteOfTheDay = () => {
    const getVotes = () => {
      return votes[selected]
    }

    const totalVotes = getVotes();

    return (
      <>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>Has {totalVotes} votes</p>
      </>
    )
  }

  const Buttons = () => {
    const setRandomAnecdote = () => {
      let min = Math.ceil(0);
      let max = Math.floor(anecdotes.length);
      setSelected(Math.floor(Math.random() * (max - min) + min));
    }

    const voteAnecdote = () => {
      let copy = [...votes];
      copy[selected] += 1
      setVotes(copy);
    }

    return (
      <div className="button-container">
        <button onClick={setRandomAnecdote}>Random Anecdote</button>
        <button onClick={voteAnecdote}>Vote</button>
      </div>

    )
  }


  const MostVotedAnecdote = () => {
    let maxVal = Math.max(...votes);
    let index = votes.indexOf(maxVal);
    let arr = [...anecdotes];

    return (
      <>
        <h2>Most voted anecdote</h2>
        <p>{arr[index]}</p>
        <p>Has {maxVal} votes</p>
      </>
    );
  }

  return (
    <section className="anecdotes">
      <AnecdoteOfTheDay />
      <Buttons />
      <MostVotedAnecdote />
    </section>
  )
}

export default App
