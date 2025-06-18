import React from 'react'

const FunFactPage = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random', {
        next: { revalidate: 10000 }, // Revalidate every 10 seconds
    });

    const fact = await res.json();

  return (
    <div>
      <p>gfzjgjcvjvczjgfzj cmc jsvjgvfjvcj,hcf</p>
        <h2 className='text-4xl text-yellow-900'>{fact.value}</h2>
    </div>
  )
}

export default FunFactPage
