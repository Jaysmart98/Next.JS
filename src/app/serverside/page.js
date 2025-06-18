import React from 'react'

const Random = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random', {
        cache: 'no-store'
    });

    const joke = await res.json();


  return (
    <div>
        <h2>Random Joke</h2>
        <p>dghhbghkbxhmhvxbhfkhbfxbghbkhbxfhnv</p>
        <p className='text-4xl text-yellow-900'>{joke.value}</p>
    </div>
  )
}

export default Random;
