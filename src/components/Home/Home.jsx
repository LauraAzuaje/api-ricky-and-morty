import React from 'react';
import './Home.css'

export function Home() {
  return (
    <article id='principalArticle'>
    <div className='image'>
        <img 
        src='https://elplanetaconectado.files.wordpress.com/2020/04/rickandmorty-temporada4-parte2.png' alt='Rick and Morty Giff'/>

    </div>
    <div className='description'>
        <h1>Rick and Morty</h1>
        <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.

Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.</p>
    </div>
</article>
  );
}
