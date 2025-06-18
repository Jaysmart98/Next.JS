'use client'
import { useState, useEffect } from 'react';

const RandomJoke = () => {
  const [joke, setjoke] = useState('');
  
  useEffect(() => {
    async function fetchJoke() {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setjoke(data.value);
      }
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>bmxfmb xfmvhsfmbv,xvhk,fsldhkhfjvzmcb bmvjgsfv nczb mbvjgvzjvfmbbmvcz,v</p>
      <p>{joke}</p>
    </div>
  );
}

export default RandomJoke;
